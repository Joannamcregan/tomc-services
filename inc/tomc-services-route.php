<?php

add_action('rest_api_init', 'tomcServicesRegisterRoute');

function tomcServicesRegisterRoute(){
    register_rest_route('tomcServices/v1', 'search', array(
        'methods' => 'GET',
        'callback' => 'serviceSearchResults'
    ));
}

function serviceSearchResults(){
    echo 'results here';
}