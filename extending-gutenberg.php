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

add_action( 'wp_dashboard_setup', __NAMESPACE__ . '\add_dashboard_widgets' );
function add_dashboard_widgets() {
	wp_add_dashboard_widget(
		'extending_gutenberg_dashboard_widget',
		'Extending Gutenberg',
		__NAMESPACE__ . '\dashboard_widget_function'
	);
}

function dashboard_widget_function() {
	?>
	<div id="extending-gutenberg-dashboard"></div>
	<?php
}

add_action( 'admin_enqueue_scripts', __NAMESPACE__ . '\enqueue_dashboard_js' );

function enqueue_dashboard_js( $hook ) {
	if ( 'index.php' === $hook ) {
		wp_enqueue_script( 'wp-element' );
		wp_enqueue_script(
			'eg-dashboard-widget',
			plugin_dir_url( __FILE__ ) . '/build/dashboard.js',
			[ 'wp-element', 'wp-components', 'wp-plugins' ],
			time(),
			true
		);
	}
}
