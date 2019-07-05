const { createHigherOrderComponent } = wp.compose;
const { addFilter } = wp.hooks;
const { Fragment } = wp.element;
const { InspectorControls } = wp.editor;
const { Fill, PanelBody } = wp.components;

/**
 * Filter the InspectorControls for a single block type.
 */
const withInspectorControls =  createHigherOrderComponent( ( BlockEdit ) => {
	return ( props ) => {
		return (
			<Fragment>
				<BlockEdit { ...props } />
				{ ( props.name === 'core/paragraph' ) &&
					<InspectorControls>
						<PanelBody title='Per Block Example: editor.BlockEdit'>
						</PanelBody>
					</InspectorControls>
				}
			</Fragment>
		);
	};
}, "withInspectorControl" );

addFilter( 'editor.BlockEdit', 'ryanwelcher/filters/blockedit/perblock', withInspectorControls );
