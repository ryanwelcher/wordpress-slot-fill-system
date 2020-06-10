<?php
/**
 * Plugin Name: Extending Gutenburg
 * Description: A plugin to demonstrate extension points in Gutenberg.
 * Version: 2.0.0
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
require_once EG_INC . 'admin-page.php';
require_once EG_INC . 'dashboard-widget.php';
require_once EG_INC . 'blocks.php';
require_once EG_INC . 'slotfill.php';

AdminPage\setup();
Blocks\setup();
SlotFill\setup();
DashboardWidget\setup();
