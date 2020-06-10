<?php
/**
 * Setup our enqueues for JavaScript
 */

namespace ExtendingGutenberg\AdminPage;

/**
 * Admin page setup
 */
function setup() {

	add_action( 'admin_menu', __NAMESPACE__ . '\add_settings_page' );
	add_action( 'admin_enqueue_scripts', __NAMESPACE__ . '\enqueue_settings_page_javascript' );
	add_action( 'admin_init', __NAMESPACE__ . '\register_custom_settings' );
	add_action( 'rest_api_init', __NAMESPACE__ . '\register_custom_settings' );
}

/**
 * Register our custom settings
 *
 * @return void
 */
function register_custom_settings() {
	register_setting(
		'extending_gutenberg',
		'extending_gutenberg',
		array(
			'show_in_rest' => true,
			'type'         => 'string',
			'default'      => wp_json_encode(
				[
				]
			),
		)
	);
}

/**
 * Add the settings page under Settings.
 *
 * @return void
 */
function add_settings_page() {
	add_options_page(
		'Extending Gutenberg',
		'Extending Gutenberg',
		'manage_options',
		'extending-gutenberg',
		__NAMESPACE__ . '\render_settings_page'
	);
}

/**
 * The callback to render our div where we will render the settings application.
 *
 * @return void
 */
function render_settings_page() {
	?>
	<style>
		.notice-fader{
			webkit-transition: all 1s ease-in-out;
			-webkit-transition: all 1s ease-in-out;
			transition: all 1s ease-in-out;
		}
		.notice-fader.fade{
			opacity: 0;
		}
	</style>
		<div id="extending-gutenberg-settings">
		This page requires JavaScript
		</div>
	<?php
}


/**
 * Enqueue our Settings Page JavaScript
 *
 * @param string $hook The hook suffix name for the page.
 *
 */
function enqueue_settings_page_javascript( $hook ) {

	if ( 'settings_page_extending-gutenberg' !== $hook ) {
		return;
	}
	$store_build_assets = EG_DIR_PATH . '/dist/datastore.asset.php';

	if ( file_exists( $store_build_assets ) ) {
		$assets = include $store_build_assets;
		wp_enqueue_script(
			'extending-gutenberg-datastore', // Handle.
			EG_DIR_URL . 'dist/datastore.js',
			$assets['dependencies'],
			$assets['version'],
			true
		);
	}


	// Check for the build assets file.
	$build_assets = EG_DIR_PATH . '/dist/admin.asset.php';

	// If it exists, enqueue our JavaScript file.
	if ( file_exists( $build_assets ) ) {
		$assets = include $build_assets;
		wp_enqueue_script(
			'extending-gutenberg-admin', // Handle.
			EG_DIR_URL . 'dist/admin.js',
			array_merge( $assets['dependencies'], array( 'extending-gutenberg-datastore' ) ),
			$assets['version'],
			true
		);

		// We'll hydrate the app with this.
		wp_localize_script(
			'extending-gutenberg-admin',
			'_extendingGutenbergAdmin',
			[
				'nonce'      => wp_create_nonce( 'wp_rest' ),
				'restBase'   => rest_url(),
				'state'      => json_decode( get_option( 'extending_gutenberg' ) ),
				'pluginPath' => EG_DIR_URL
			]
		);

		wp_enqueue_style(
			'extending-gutenberg-admin-styles',
			EG_DIR_URL . 'dist/admin.css',
			[],
			$assets['version']
		);
	};
	
}
