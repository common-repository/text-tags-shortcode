<?php
/*
Plugin Name: Text Tags Shortcode
Plugin URI: https://wordpress.org/plugins/text-tags-shortcode/
Description: Use shortcode to add tags to the text.
Version: 1.2
Author: Serhii D
Author URI: http://dehtiarov-serhii.pp.ua/
License: GPL
*/
add_action('wp_enqueue_scripts', 'callback_for_setting_up_tts_styles');
function callback_for_setting_up_tts_styles() {
	wp_register_style( 'text-tags-shortcode-styles', plugin_dir_url( __FILE__ ). 'text-tags-shortcode.css' );
	wp_enqueue_style( 'text-tags-shortcode-styles' );
}

function tts_span_shortcode_func( $atts, $content = null ) {
	return '<span>' . do_shortcode($content) . '</span>';
}
add_shortcode( 'span', 'tts_span_shortcode_func' );

function tts_cite_shortcode_func( $atts, $content = null ) {
	return '<cite>' . do_shortcode($content). '</cite>';
}
add_shortcode( 'cite', 'tts_cite_shortcode_func' );

function tts_em_shortcode_func( $atts, $content = null ) {
	return '<em>' . do_shortcode($content) . '</em>';
}
add_shortcode( 'em', 'tts_em_shortcode_func' );

function tts_accent_shortcode_func( $atts, $content = null ) {
	return '<accent>' . do_shortcode($content) . '</accent>';
}
add_shortcode( 'accent', 'tts_em_shortcode_func' );

function tts_textarea_shortcode_func( $atts, $content = null ) {
	return '<textarea>' . do_shortcode($content) . '</textarea>';
}
add_shortcode( 'textarea', 'tts_em_shortcode_func' );

function tts_empty_shortcode_func( $atts, $content = null ) {
	return '';
}
add_shortcode( 'empty', 'tts_empty_shortcode_func' );

function tts_button_shortcode_func( $atts, $content = null ) {
	return '<button class="tts_button">' .  do_shortcode($content) . '</button>';
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

//Accent
// init process for registering our button
add_action('init', 'tts_accent_shortcode_button_init');
function tts_accent_shortcode_button_init() {

      //Abort early if the user will never see TinyMCE
	if ( ! current_user_can('edit_posts') && ! current_user_can('edit_pages') && get_user_option('rich_editing') == 'true')
		return;

      //Add a callback to regiser our tinymce plugin
	add_filter("mce_external_plugins", "tts_accent_register_tinymce_plugin");

      // Add a callback to add our button to the TinyMCE toolbar
	add_filter('mce_buttons', 'tts_accent_add_tinymce_button');
}


//This callback registers our plug-in
function tts_accent_register_tinymce_plugin($plugin_array) {
	$plugin_array['tts_accent_button'] = plugin_dir_url( __FILE__ ). 'text-tags-shortcode.js';
	return $plugin_array;
}

//This callback adds our button to the toolbar
function tts_accent_add_tinymce_button($buttons) {
            //Add the button ID to the $button array
	$buttons[] = "tts_accent_button";
	return $buttons;
}

//Textarea
// init process for registering our button
add_action('init', 'tts_textarea_shortcode_button_init');
function tts_textarea_shortcode_button_init() {

      //Abort early if the user will never see TinyMCE
	if ( ! current_user_can('edit_posts') && ! current_user_can('edit_pages') && get_user_option('rich_editing') == 'true')
		return;

      //Add a callback to regiser our tinymce plugin
	add_filter("mce_external_plugins", "tts_textarea_register_tinymce_plugin");

      // Add a callback to add our button to the TinyMCE toolbar
	add_filter('mce_buttons', 'tts_textarea_add_tinymce_button');
}


//This callback registers our plug-in
function tts_textarea_register_tinymce_plugin($plugin_array) {
	$plugin_array['tts_textarea_button'] = plugin_dir_url( __FILE__ ). 'text-tags-shortcode.js';
	return $plugin_array;
}

//This callback adds our button to the toolbar
function tts_textarea_add_tinymce_button($buttons) {
            //Add the button ID to the $button array
	$buttons[] = "tts_textarea_button";
	return $buttons;
}

//Button
// init process for registering our button
add_action('init', 'tts_button_shortcode_button_init');
function tts_button_shortcode_button_init() {

      //Abort early if the user will never see TinyMCE
	if ( ! current_user_can('edit_posts') && ! current_user_can('edit_pages') && get_user_option('rich_editing') == 'true')
		return;

      //Add a callback to regiser our tinymce plugin
	add_filter("mce_external_plugins", "tts_button_register_tinymce_plugin");

      // Add a callback to add our button to the TinyMCE toolbar
	add_filter('mce_buttons', 'tts_button_add_tinymce_button');
}


//This callback registers our plug-in
function tts_button_register_tinymce_plugin($plugin_array) {
	$plugin_array['tts_button_button'] = plugin_dir_url( __FILE__ ). 'text-tags-shortcode.js';
	return $plugin_array;
}

//This callback adds our button to the toolbar
function tts_button_add_tinymce_button($buttons) {
            //Add the button ID to the $button array
	$buttons[] = "tts_button_button";
	return $buttons;
}

?>