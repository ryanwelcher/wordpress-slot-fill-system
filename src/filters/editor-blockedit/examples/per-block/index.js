const { createHigherOrderComponent } = wp.compose;
const { addFilter } = wp.hooks;
const { Fragment } = wp.element;
const { InspectorControls } = wp.editor;
const { Fill, PanelBody } = wp.components;

import ToolbarFills from '../../../../slots/custom/basic-fills';

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
							<Fill name="Toolbar">
								Panel body 2
							</Fill>
							<Fill name="Toolbar">
								Panel body 3
							</Fill>
							<Fill name="Toolbar">
								Panel body 4
							</Fill>
						</PanelBody>
					</InspectorControls>
				}
			</Fragment>
		);
	};
}, "withInspectorControl" );

addFilter( 'editor.BlockEdit', 'ryanwelcher/filters/blockedit/perblock', withInspectorControls );
