<?php
/*
Plugin Name: Text Tags Shortcode
Plugin URI: https://wordpress.org/plugins/text-tags-shortcode/
Description: Use shortcode to add tags to the text.
Version: 1.0
Author: dsxxx
Author URI: http://dehtiarov-serhii.pp.ua/
License: GPL
*/
function tts_span_shortcode_func( $atts, $content = null ) {
	return '<span>' . $content . '</span>';
}
add_shortcode( 'span', 'tts_span_shortcode_func' );

function tts_cite_shortcode_func( $atts, $content = null ) {
	return '<cite>' . $content . '</cite>';
}
add_shortcode( 'cite', 'tts_cite_shortcode_func' );

function tts_em_shortcode_func( $atts, $content = null ) {
	return '<em>' . $content . '</em>';
}
add_shortcode( 'em', 'tts_em_shortcode_func' );

function tts_empty_shortcode_func( $atts, $content = null ) {
	return '';
}
add_shortcode( 'empty', 'tts_empty_shortcode_func' );

function tts_button_shortcode_func( $atts, $content = null ) {
	return '<button>' . $content . '</button>';
}
add_shortcode( 'button', 'tts_button_shortcode_func' );

//Span
// init process for registering our button
add_action('init', 'tts_span_shortcode_button_init');
function tts_span_shortcode_button_init() {

      //Abort early if the user will never see TinyMCE
	if ( ! current_user_can('edit_posts') && ! current_user_can('edit_pages') && get_user_option('rich_editing') == 'true')
		return;

      //Add a callback to regiser our tinymce plugin
	add_filter("mce_external_plugins", "tts_span_register_tinymce_plugin");

      // Add a callback to add our button to the TinyMCE toolbar
	add_filter('mce_buttons', 'tts_span_add_tinymce_button');
}


//This callback registers our plug-in
function tts_span_register_tinymce_plugin($plugin_array) {
	$plugin_array['tts_span_button'] = plugin_dir_url( __FILE__ ). 'text-tags-shortcode.js';
	return $plugin_array;
}

//This callback adds our button to the toolbar
function tts_span_add_tinymce_button($buttons) {
            //Add the button ID to the $button array
	$buttons[] = "tts_span_button";
	return $buttons;
}

//Cite
// init process for registering our button
add_action('init', 'tts_cite_shortcode_button_init');
function tts_cite_shortcode_button_init() {

      //Abort early if the user will never see TinyMCE
	if ( ! current_user_can('edit_posts') && ! current_user_can('edit_pages') && get_user_option('rich_editing') == 'true')
		return;

      //Add a callback to regiser our tinymce plugin
	add_filter("mce_external_plugins", "tts_cite_register_tinymce_plugin");

      // Add a callback to add our button to the TinyMCE toolbar
	add_filter('mce_buttons', 'tts_cite_add_tinymce_button');
}


//This callback registers our plug-in
function tts_cite_register_tinymce_plugin($plugin_array) {
	$plugin_array['tts_cite_button'] = plugin_dir_url( __FILE__ ). 'text-tags-shortcode.js';
	return $plugin_array;
}

//This callback adds our button to the toolbar
function tts_cite_add_tinymce_button($buttons) {
            //Add the button ID to the $button array
	$buttons[] = "tts_cite_button";
	return $buttons;
}

//Em
// init process for registering our button
add_action('init', 'tts_em_shortcode_button_init');
function tts_em_shortcode_button_init() {

      //Abort early if the user will never see TinyMCE
	if ( ! current_user_can('edit_posts') && ! current_user_can('edit_pages') && get_user_option('rich_editing') == 'true')
		return;

      //Add a callback to regiser our tinymce plugin
	add_filter("mce_external_plugins", "tts_em_register_tinymce_plugin");

      // Add a callback to add our button to the TinyMCE toolbar
	add_filter('mce_buttons', 'tts_em_add_tinymce_button');
}


//This callback registers our plug-in
function tts_em_register_tinymce_plugin($plugin_array) {
	$plugin_array['tts_em_button'] = plugin_dir_url( __FILE__ ). 'text-tags-shortcode.js';
	return $plugin_array;
}

//This callback adds our button to the toolbar
function tts_em_add_tinymce_button($buttons) {
            //Add the button ID to the $button array
	$buttons[] = "tts_em_button";
	return $buttons;
}
?>