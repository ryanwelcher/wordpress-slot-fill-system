const { registerPlugin } = wp.plugins;
const { PluginPrePublishPanel }= wp.editPost;

import Icon from '../../../svg/icons';

const PluginPrePublishPanelTest = () => {
	return (
		<PluginPrePublishPanel icon={"twitter"} title={'Title'}>
			<p> Pre Publish Panel </p>
		</PluginPrePublishPanel>
	)
}

registerPlugin( 'pre-publish-panel-test', { render: PluginPrePublishPanelTest } );
