<?php global $wpdb;
$posts_table = $wpdb->prefix . "posts";
$term_relationships_table = $wpdb->prefix . "term_relationships";
$term_taxonomy_table = $wpdb->prefix . "term_taxonomy";
$terms_table = $wpdb->prefix . "terms";
$postmeta_table = $wpdb->prefix . "postmeta";

get_header();

?><main>
    <div class="banner"><h1 class="centered-text">Services</h1><h2 class="centered-text">by creators, for creators</h2></div>
    <br>
    <div class="generic-content">
        <div class="left-accent-wrapper-orange">
            <div class="left-accent-wrapper-yellow">
                <p><em>Proudly offered by TOMC:</em></p>
                <h3><a class="gray-link" href="<?php echo esc_url(site_url('/product/isbn-registration'));?>">ISBN Registration</a></h3>
                <p><strong>$5 for members and $15 for non-members</strong></p>
            </div>
        </div>
    </div>
    <div class="service-search-term-div">
        <input type="text" id = "service-search-term" placeholder="What do you need help with?">
        <button id="service-search-button">search</button>
        <p class="hidden red-text centered-text" id="service-search-no-term-message">Please enter a search term.</p>
    </div>
    <div id="tomc-service-results" class="generic-content">
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
            ?><h2 class="centered-text">Our Members' Newest Services</h2>
            <?php for ($i = 0; $i < count($results); $i++){
                ?><div class="tomc-service-result">
                    <h3><a class="gray-link" href="<?php echo get_permalink($results[$i]['product_url']) ?>"><?php echo $results[$i]['post_title']; ?></a><?php echo ' $' . $results[$i]['price']; ?></h3>
                    <?php echo nl2br($results[$i]['post_content']); ?>
                </div>
                <br>
                <div class="orange-yellow-line-break"></div>
                <br>
            <?php }    
        }        
        ?></div>
        <p class="centered-text"><em>Want to offer your creative services? <a href="<?php echo esc_url(site_url('/own'));?>">Join our cooperative</a> as a creator-member!</em></p>
</main>

<?php get_footer(); ?>