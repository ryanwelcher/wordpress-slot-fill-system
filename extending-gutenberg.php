<?php
/**
 * Plugin Name: Extending Gutenburg
 * Description: Plugin of examples for my JavaScript for WordPress conference presentation.
 * Version: 1.0.0
 * Author: Ryan Welcher
 * Author URI: www.ryanwelcher.com
 * Plugin URI: https://github.com/ryanwelcher/the-gutenberg-slotfill-system
 */

namespace ExtendingGutenberg;
use ExtendingGutenberg\SettingsPage;

/**
 * Define some helpful constants
 */
define( 'EG_DIR_PATH', plugin_dir_path( __FILE__ ) );
define( 'EG_DIR_URL', plugin_dir_url( __FILE__ ) );
define( 'EG_INC', plugin_dir_path( __FILE__ ) . 'includes/' );

// Include the files
require_once EG_INC . 'settings-page.php';
require_once EG_INC . 'dashboard-widget.php';

SettingsPage\setup();
DashboardWidget\setup();


/**
 * Enqueue the JS for our demos
 */
function enqueue_block_editor_assets() {
	wp_enqueue_script(
		'extending-guteberg', // Handle.
		plugin_dir_url( __FILE__ ) . '/dist/index.js',
		array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor', 'wp-edit-post', 'word-count' ),
		time()
	);
}
add_action( 'enqueue_block_editor_assets', __NAMESPACE__ . '\enqueue_block_editor_assets' );