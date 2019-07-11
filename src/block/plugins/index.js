const { registerPlugin } = wp.plugins;
const { __ } = wp.i18n;
const { ToggleControl, PanelBody } = wp.components;
import PostInfoOpen from '../slots/post-info-open';
import PostInfoAuthor  from '../slots/post-info-author';

const InspectorControlsCustomSlotFill = () => (
	<>
		<PostInfoAuthor>
			{ ( props ) => (
				<>
					<ToggleControl
						label={ __( 'Show Post Author' ) }
						onChange={ ( val ) => props.setAttributes( { showAuthor: val } ) }
						checked={ props.attributes.showAuthor }
					/>
					<ToggleControl
						label={ __( 'Show Post Bio' ) }
						onChange={ ( val ) => props.setAttributes( { showBio: val } ) }
						checked={ props.attributes.showBio }
					/>
				</>
			) }
		</PostInfoAuthor>
		<PostInfoOpen>
			<PanelBody title={ __( 'Information' ) }>
				<p>{ __( 'Information you need to know' ) }</p>
			</PanelBody>
		</PostInfoOpen>
	</>
);
registerPlugin( 'extending-gutenberg-inspector-controls-slotfill', { render: InspectorControlsCustomSlotFill } );

