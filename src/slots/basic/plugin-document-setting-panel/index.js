const { PluginDocumentSettingPanel } = wp.editPost;

const MyDocumentSettingDemo = () => (
	<PluginDocumentSettingPanel
		name="custom-panel"
		title="Custom Panel"
		className="custom-panel"
	>
		Custom Panel Contents
	</PluginDocumentSettingPanel>
);

export default MyDocumentSettingDemo;
