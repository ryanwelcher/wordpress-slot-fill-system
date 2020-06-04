<?php
/**
 * Setup for the custom Dashboard widget
 */

namespace ExtendingGutenberg\DashboardWidget;


function setup() {
	$options = json_decode( get_option( 'extending_gutenberg' ), true );
	if ( ! isset( $options['dashboardWidget'] ) || false === $options['dashboardWidget'] ) {
		return;
	}
	add_action( 'wp_dashboard_setup', __NAMESPACE__ . '\add_dashboard_widgets' );
	add_action( 'admin_enqueue_scripts', __NAMESPACE__ . '\enqueue_dashboard_js' );
}

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


/**
 * Enqueue our JS on the dashboard page.
 */
function enqueue_dashboard_js( $hook ) {
	if ( 'index.php' === $hook ) {
		// Check for the build assets file.
		$build_assets = EG_DIR_PATH . '/dist/dashboard.asset.php';

		// If it exists, enqueue our JavaScript file.
		if ( file_exists( $build_assets ) ) {
			$assets = include $build_assets;
			wp_enqueue_script(
				'eg-dashboard-widget',
				EG_DIR_URL . '/dist/dashboard.js',
				$assets['dependencies'],
				$assets['version'],
				true
			);
			$user = wp_get_current_user();
			wp_localize_script( 'eg-dashboard-widget', 'EB_DASH', [ 'user' => [ 'display_name' => $user->display_name ] ] );
		}
	}
}
