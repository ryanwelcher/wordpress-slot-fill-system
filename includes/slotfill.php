<?php
/**
 * Setup for registering the SlotFill examples
 */

namespace ExtendingGutenberg\SlotFill;

function setup() {
	$options = json_decode( get_option( 'extending_gutenberg' ), true );
	if ( ! isset( $options['slotFillEnabled'] ) || false === $options['slotFillEnabled'] ) {
		return;
	}
	add_action( 'enqueue_block_editor_assets', __NAMESPACE__ . '\enqueue_block_editor_assets' );
}

/**
 * Enqueue the JS for our demos
 */
function enqueue_block_editor_assets() {

	// Check for the build assets file.
	$build_assets = EG_DIR_PATH . '/dist/slotfill.asset.php';
	// If it exists, enqueue our JavaScript file. 
	if ( file_exists( $build_assets ) ) {
		$assets = include $build_assets;
		wp_enqueue_script(
			'extending-guteberg-slotfill', // Handle.
			EG_DIR_URL . '/dist/slotfill.js',
			$assets['dependencies'],
			$assets['version'],
			true
		);
	}
}