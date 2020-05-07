const { PluginPostStatusInfo } = wp.editPost;

import MyCheckboxControl from './custom-checkbox';

const SaveToggle = () => (
	<PluginPostStatusInfo>
		<MyCheckboxControl />
	</PluginPostStatusInfo>
);

export default SaveToggle;
