import PostInfoOpen from "../../slots/post-info-open";

const RenderOpenItems = () => (
	<PostInfoOpen>
		<PanelBody title={ __( 'Information' ) }>
			<p>{ __( 'Information you need to know' ) }</p>
		</PanelBody>
	</PostInfoOpen>
);

registerPlugin( 'extending-gutenberg-open-items', { render: RenderOpenItems } );
