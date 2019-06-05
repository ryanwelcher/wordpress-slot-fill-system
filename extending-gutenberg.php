<?php
/**
 * Plugin Name: Extending Gutenberg
 * Description:
 * Version: 1.0.0
 * Author: Ryan Welcher
 * Author URI: www.ryanwelcher.com
 * Plugin URI: https://github.com/ryanwelcher/extending-gutenberg
 */

namespace ExtendingGutenberg;

/**
 * Enqueue the JS for our demos
 */
function enqueue_block_editor_assets() {
	wp_enqueue_script(
		'extending-guteberg', // Handle.
		plugin_dir_url( __FILE__ ) . '/build/index.js',
		array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor', 'wp-edit-post', 'word-count' ) // Dependencies, defined above.
	);
}
add_action( 'enqueue_block_editor_assets', __NAMESPACE__ . '\enqueue_block_editor_assets' );
