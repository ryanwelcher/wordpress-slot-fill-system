const { registerPlugin } = wp.plugins;
const { PluginDocumentSettingPanel } = wp.editPost;
import { TenUp } from '../../../svg/icons';

const MyDocumentSettingDemo = () => (
	<>
		<PluginDocumentSettingPanel
			name="custom-panel"
			title="Custom Panel"
			className="custom-panel"
		>
			Custom Panel Contents
		</PluginDocumentSettingPanel>
	</>
);

export default MyDocumentSettingDemo;
//registerPlugin( 'document-setting-demo', { render: MyDocumentSettingDemo, icon: TenUp  } );
