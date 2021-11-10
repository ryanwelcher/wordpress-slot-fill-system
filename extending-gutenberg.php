<?php
/**
 * Plugin Name: The Gutenberg SlotFill System
 * Description: Plugin of examples for my JavaScript for WordPress conference presentation.
 * Version: 1.0.0
 * Author: Ryan Welcher
 * Author URI: www.ryanwelcher.com
 * Plugin URI: https://github.com/ryanwelcher/the-gutenberg-slotfill-system
 */

namespace GutenbergSlotFillSystem;

/**
 * Enqueue the JS for our demos
 */
function enqueue_block_editor_assets() {
	wp_enqueue_script(
		'extending-guteberg', // Handle.
		plugin_dir_url( __FILE__ ) . '/build/index.js',
		array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor', 'wp-edit-post', 'word-count' ),
		time()
	);
}
add_action( 'enqueue_block_editor_assets', __NAMESPACE__ . '\enqueue_block_editor_assets' );




/**
 * Create a new Dashboard Widget.
 */
add_action( 'wp_dashboard_setup', __NAMESPACE__ . '\add_dashboard_widgets' );
function add_dashboard_widgets() {
	wp_add_dashboard_widget(
		'extending_gutenberg_dashboard_widget',
		'Custom SlotFill System',
		function() {
			echo '<div id="extending-gutenberg-dashboard"></div>';
		}
	);
}


/**
 * Enqueue our JS on the dashboard page.
 */
add_action( 'admin_enqueue_scripts', __NAMESPACE__ . '\enqueue_dashboard_js' );
function enqueue_dashboard_js( $hook ) {
	if ( 'index.php' === $hook ) {
		wp_enqueue_script(
			'eg-dashboard-widget',
			plugin_dir_url( __FILE__ ) . '/build/dashboard.js',
			[ 'wp-blocks', 'wp-i18n',  'wp-editor', 'wp-edit-post', 'wp-element', 'wp-components', 'wp-plugins' ],
			time(),
			true
		);
	}
	$user = wp_get_current_user();
	wp_localize_script( 'eg-dashboard-widget', 'EB_DASH', [ 'user' => [ 'display_name' => $user->display_name ] ] );
}
