<?php global $wpdb;
$posts_table = $wpdb->prefix . "posts";
$term_relationships_table = $wpdb->prefix . "term_relationships";
$term_taxonomy_table = $wpdb->prefix . "term_taxonomy";
$terms_table = $wpdb->prefix . "terms";
$postmeta_table = $wpdb->prefix . "postmeta";

get_header();

?><main>
    <div class="banner"><h1 class="centered-text">Services</h1><h2 class="centered-text">by Creators, for Creators</h2></div>
    <br>
    <?php $query = 'select posts.id as product_url, posts.post_title, posts.post_content, posts.post_date, price.meta_value as price
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
        order by posts.post_date desc
        limit 10;';
        $results = $wpdb->get_results($wpdb->prepare($query, $posts_table, $term_relationships_table, $term_taxonomy_table, $terms_table, $postmeta_table), ARRAY_A);
        if (($results) && count($results) > 0){
            ?><h2 class="centered-text">Newly Added Services</h2>
            <div class="tomc-service-results">
            <?php for ($i = 0; $i < count($results); $i++){
                ?><div class="tomc-service-result">
                    <a class="gray-link" href="<?php echo get_permalink($results[$i]['product_url']) ?>"><h3 class="centered-text"><?php echo $results[$i]['post_title']; ?></h3></a>
                    <p class="centered-text"><strong><?php echo '$' . $results[$i]['price']; ?></strong></p>
                    <p><?php echo nl2br($results[$i]['post_content']); ?></p>
                </div>
            <?php }            
            ?></div>
        <?php } else {
            echo $wpdb->prepare($query, $posts_table, $term_relationships_table, $term_taxonomy_table, $terms_table, $postmeta_table);
        }
?></main>

<?php get_footer(); ?>