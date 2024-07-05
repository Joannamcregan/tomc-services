<?php
/* 
    Plugin Name: TOMC Services
    Version: 1.0
    Author: Joanna
    Description: Allow our creator-members to offer services
*/

if( ! defined('ABSPATH') ) exit;
require_once plugin_dir_path(__FILE__) . 'inc/tomc-services-route.php';

class TOMCServicesPlugin {
    function __construct() {
        wp_localize_script('tomc-services-js', 'tomcBookorgData', array(
            'root_url' => get_site_url()
        ));

        add_action('activate_tomc-services/tomc-services.php', array($this, 'onActivate'));
        //add_action('init', array($this, 'onActivate'));
        add_action('wp_enqueue_scripts', array($this, 'pluginFiles'));
        add_filter('template_include', array($this, 'loadTemplate'), 99);
    }	

    function pluginFiles(){
        wp_enqueue_style('tomc_services_styles');
        wp_enqueue_script('tomc-services-js', plugin_dir_url(__FILE__) . '/build/index.js', array('jquery'), '1.0', true);
        wp_localize_script('tomc-services-js', 'tomcServicesData', array(
            'root_url' => get_site_url()
        ));
    }

    function addServicesPage() {
        $services_page = array(
            'post_title' => 'Services',
            'post_content' => '',
            'post_status' => 'publish',
            'post_author' => 0,
            'post_type' => 'page'
        );
        wp_insert_post($services_page);
    }

    function onActivate() {
        require_once(ABSPATH . 'wp-admin/includes/upgrade.php');

        if (post_exists('Services', '', '', 'page', 'publish') == ''){
            $this->addServicesPage();
        }
    }

    function loadTemplate($template){
        if (is_page('services')){
            return plugin_dir_path(__FILE__) . 'inc/template-services.php';
        } else
        return $template;
    }
}

$tomcServicesPlugin = new TOMCServicesPlugin();