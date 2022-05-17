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

		$current_page = get_current_screen();
		// Enqueue the slots for the edit post screen.
		$edit_post_examples_asset_path = plugin_dir_path( __FILE__ ) . 'build/edit-post.asset.php';
		if (
			file_exists( $edit_post_examples_asset_path )
			&& 'post' === $current_page->base
		) {
			$edit_post_examples_assets = require_once $edit_post_examples_asset_path;
			\wp_enqueue_script(
				'gutenberg-slot-fill-system-edit-post-examples', // Handle.
				plugin_dir_url( __FILE__ ) . '/build/edit-post.js',
				$edit_post_examples_assets['dependencies'],
				$edit_post_examples_assets['version'],
				true
			);
		}

		// Enqueue the slots for the edit site screen.
		$edit_site_examples_asset_path = plugin_dir_path( __FILE__ ) . 'build/edit-site.asset.php';
		if (
			file_exists( $edit_site_examples_asset_path )
			&& 'site-editor' === $current_page->base
		) {
			$edit_site_examples_assets = require_once $edit_site_examples_asset_path;
			\wp_enqueue_script(
				'gutenberg-slot-fill-system-edit-site-examples', // Handle.
				plugin_dir_url( __FILE__ ) . '/build/edit-site.js',
				$edit_site_examples_assets['dependencies'],
				$edit_site_examples_assets['version'],
				true
			);
		}
	}
);




/**
 * Create a new Dashboard Widget.
 */
\add_action(
	'wp_dashboard_setup',
	function() {
		\wp_add_dashboard_widget(
			'extending_gutenberg_dashboard_widget',
			'Custom SlotFill System',
			function() {
				echo '<div id="extending-gutenberg-dashboard"></div>';
			}
		);
	}
);


/**
 * Enqueue our JS on the dashboard page.
 *
 * @param string $hook The hook associated with the screen.
 */
\add_action(
	'admin_enqueue_scripts',
	function( $hook ) {
		if ( 'index.php' === $hook ) {
			$dashboard_asset_path = plugin_dir_path( __FILE__ ) . 'build/dashboard-widget.asset.php';
			if ( file_exists( $dashboard_asset_path ) ) {
				$dashboard_assets = require_once $dashboard_asset_path;
				wp_enqueue_script(
					'eg-dashboard-widget',
					plugin_dir_url( __FILE__ ) . '/build/dashboard-widget.js',
					$dashboard_assets['dependencies'],
					$dashboard_assets['version'],
					true
				);
			}
		}

		// Localize some data we need for the script.
		$user = \wp_get_current_user();
		\wp_localize_script(
			'eg-dashboard-widget',
			'EB_DASH',
			array(
				'user'            => array( 'display_name' => $user->display_name ),
				'pluginAssetPath' => plugin_dir_url( __FILE__ ),
			)
		);
	}
);
