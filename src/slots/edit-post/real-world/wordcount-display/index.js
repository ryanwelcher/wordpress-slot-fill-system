const { PluginPostStatusInfo } = wp.editPost;

import WordCounter from '../../../utils/wordCounter';


const WordCountDisplay = () => (
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
);
export default WordCountDisplay;
