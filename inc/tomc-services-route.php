<?php

add_action('rest_api_init', 'tomcServicesRegisterRoute');

function tomcServicesRegisterRoute(){
    register_rest_route('tomcServices/v1', 'search', array(
        'methods' => 'GET',
        'callback' => 'serviceSearchResults'
    ));
}

function serviceSearchResults($data){
    $resultsArr = [];
    $searchTerm = sanitize_text_field($data['searchterm']);
    global $wpdb;
    $posts_table = $wpdb->prefix . "posts";
    $term_relationships_table = $wpdb->prefix . "term_relationships";
    $term_taxonomy_table = $wpdb->prefix . "term_taxonomy";
    $terms_table = $wpdb->prefix . "terms";
    $postmeta_table = $wpdb->prefix . "postmeta";

    $query = 'select posts.id as product_url, posts.post_title, posts.post_content, posts.post_date, price.meta_value as price
    from %i posts
    join %i tr on posts.id = tr.object_id
    and posts.post_type = "product"
    and posts.post_status = "publish"
    join %i tt on tr.term_taxonomy_id = tt.term_taxonomy_id
    and tt.taxonomy = "product_cat"
    join %i terms on tt.term_id = terms.term_id
    and terms.name = "Services"
    join %i price on posts.id = price.post_id
    and price.meta_key = "_price"
    join %i rating on posts.id = rating.post_id
    and rating.meta_key = "_wc_average_rating"
    where posts.post_title like %s
    or posts.post_content like %s
    order by rating.meta_value desc, posts.post_date desc;';
    $results = $wpdb->get_results($wpdb->prepare($query, $posts_table, $term_relationships_table, $term_taxonomy_table, $terms_table, $postmeta_table, $postmeta_table, '%' . $wpdb->esc_like($searchTerm) . '%', '%' . $wpdb->esc_like($searchTerm) . '%'), ARRAY_A);

    for ($i = 0; $i < count($results); $i++){
        $results[$i]['product_url'] = get_permalink($results[$i]['product_url']);
    }

    array_push($resultsArr, ...$results);

    return $resultsArr;
}