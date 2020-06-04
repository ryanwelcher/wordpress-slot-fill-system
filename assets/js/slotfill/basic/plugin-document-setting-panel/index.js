const { PluginDocumentSettingPanel } = wp.editPost;

const MyDocumentSettingDemo = () => (
	<>
		<PluginDocumentSettingPanel
			name={ 'my-custom-panel' }
			title={ 'Custom Panel Title' }
			className={ 'my-awesome-class' }
		>
			<p>{ `Post Type: hi` }</p>
		</PluginDocumentSettingPanel>
	</>
);

export default MyDocumentSettingDemo;
