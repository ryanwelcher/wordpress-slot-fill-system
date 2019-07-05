const { createHigherOrderComponent } = wp.compose;
const { addFilter } = wp.hooks;
const { Fragment } = wp.element;
const { InspectorControls } = wp.editor;
const { PanelBody } = wp.components;
const { createSlotFill } = wp.components;
const { Fill, Slot } = createSlotFill( 'Toolbar' );

const MyTestSlot = ( { children, classname } ) => (
	<Fill>{ children }</Fill>
);

MyTestSlot.Slot = Slot;

/**
 * Filter the InspectorControls for all blocks
 */
const withInspectorControls =  createHigherOrderComponent( ( BlockEdit ) => {
	return ( props ) => {
		return (
			<Fragment>
				<BlockEdit { ...props } />
				<InspectorControls>
					<PanelBody title='Basic Example: editor.BlockEdit'>
						<p>Every Block Gets This</p>
						<MyTestSlot.Slot fillProps={ { props, thing: 'hi' } } />
					</PanelBody>
				</InspectorControls>
			</Fragment>
		);
	};
}, "withInspectorControl" );

addFilter( 'editor.BlockEdit', 'ryanwelcher/filters/blockedit/basic', withInspectorControls );


