const { registerPlugin } = wp.plugins;
const { PluginPostStatusInfo } = wp.editPost;

import WordCounter from '../../../utils/wordCounter';


const PluginPostStatusInfoTest = () => {
	return(
		<>
			<PluginPostStatusInfo>
				<WordCounter />
			</PluginPostStatusInfo>
			<PluginPostStatusInfo>
				<WordCounter
					label="Characters without Spaces"
					countType="characters_excluding_spaces"
				/>
			</PluginPostStatusInfo>
			<PluginPostStatusInfo>
				<WordCounter
					label="Characters with Spaces"
					countType="characters_including_spaces"
				/>
			</PluginPostStatusInfo>
		</>
	)
};

registerPlugin( 'post-status-info-test-real-world', { render: PluginPostStatusInfoTest } );
