<?php
/**
 * Plugin Name: The Gutenberg SlotFill System
 * Description: Plugin of examples for my JavaScript for WordPress conference presentation.
 * Version: 1.0.0
 * Author: Ryan Welcher
 * Author URI: www.ryanwelcher.com
 * Plugin URI: https://github.com/ryanwelcher/the-gutenberg-slotfill-system
 * Textdomain: gutenberg-slot-fill-system
 *
 * @package GutenbergSlotFillSystem
 */

namespace GutenbergSlotFillSystem;

/**
 * Enqueue the SlotFill Examples.
 */
\add_action(
	'enqueue_block_editor_assets',
	function() {
		$index_assets = plugin_dir_path( __FILE__ ) . 'build/index.asset.php';
		if ( file_exists( $index_assets) ) {
			$assets = require_once $index_assets;
			\wp_enqueue_script(
				'gutenberg-slot-fill-system', // Handle.
				plugin_dir_url( __FILE__ ) . '/build/index.js',
				$assets['dependencies'],
				$assets['version'],
				true
			);
		}
	}
);




/**
 * Create a new Dashboard Widget.
 */
function add_dashboard_widgets() {
	wp_add_dashboard_widget(
		'extending_gutenberg_dashboard_widget',
		'Custom SlotFill System',
		function() {
			echo '<div id="extending-gutenberg-dashboard"></div>';
		}
	);
}
\add_action( 'wp_dashboard_setup', __NAMESPACE__ . '\add_dashboard_widgets' );


/**
 * Enqueue our JS on the dashboard page.
 *
 * @param string $hook The hook associated with the screen.
 */
function enqueue_dashboard_js( $hook ) {
	if ( 'index.php' === $hook ) {
		$dashboard_assets = plugin_dir_path( __FILE__ ) . 'build/dashboard/index.asset.php';
		if ( file_exists( $dashboard_assets ) ) {
			$assets = require_once $dashboard_assets;
			wp_enqueue_script(
				'eg-dashboard-widget',
				plugin_dir_url( __FILE__ ) . '/build/dashboard/index.js',
				$assets['dependencies'],
				$assets['version'],
				true
			);
		}
	}
	
	$user = \wp_get_current_user();
	\wp_localize_script(
		'eg-dashboard-widget',
		'EB_DASH',
		array(
			'user' => array( 'display_name' => $user->display_name ),
		)
	);
}
\add_action( 'admin_enqueue_scripts', __NAMESPACE__ . '\enqueue_dashboard_js' );


// \add_filter( 'block_editor_settings_all', __NAMESPACE__ . '\test_context', 10, 2 );

// function test_context( $editor_settings, $block_editor_context ) {
// 	die( var_dump( $block_editor_context ) );
// }