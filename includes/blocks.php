<?php
/**
 * Setup for registering the blocks
 */

namespace ExtendingGutenberg\Blocks;

function setup() {
	$options = json_decode( get_option( 'extending_gutenberg' ), true );
	if ( ! isset( $options['dashboardWidget'] ) || false === $options['blocksEnabled'] ) {
		return;
	}
	add_action( 'enqueue_block_editor_assets', __NAMESPACE__ . '\enqueue_block_editor_assets' );
	add_action( 'init', __NAMESPACE__ . '\register_blocks' );
}

/**
 * Enqueue the JS for our demos
 */
function enqueue_block_editor_assets() {

	// Check for the build assets file.
	$build_assets = EG_DIR_PATH . '/dist/blocks.asset.php';
	// If it exists, enqueue our JavaScript file. 
	if ( file_exists( $build_assets ) ) {
		$assets = include $build_assets;
		wp_enqueue_script(
			'extending-guteberg-blocks', // Handle.
			EG_DIR_URL . '/dist/blocks.js',
			$assets['dependencies'],
			$assets['version'],
			true
		);
	}
}

function register_blocks() {
	register_block_type(
		'myguten/meta-block',
		[
			'attributes' => [
				'blockValue' => [
					'type' => 'string',
					'source' => 'meta',
					'meta' => 'myguten_meta_block_field',
				]
			],
			'render_callback' => __NAMESPACE__ . '\block_render',
		]
	);

	register_post_meta(
		'post',
		'myguten_meta_block_field',
		[
			'show_in_rest' => true,
			'single'       => true,
			'type'         => 'string',
		]
	);
}

function block_render( $attributes ) {

	ob_start();
	var_dump( $attributes );
	return ob_get_clean();
}
