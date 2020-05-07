const { PluginDocumentSettingPanel } = wp.editPost;

const MyDocumentSettingDemo = () => (
	<>
		<PluginDocumentSettingPanel
			name={ 'my-custom-panel' }
			title={ 'Custom Panel Title' }
			className={ 'my-awesome-class' }
		>
			{ ( props ) => {
		  console.log( props );
				return (
					<>
						<p>{ `Post Type: ${ props.currentPostType }` }</p>
					</>
				);
			} }
		</PluginDocumentSettingPanel>
	</>
);

export default MyDocumentSettingDemo;
