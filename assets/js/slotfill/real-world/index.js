const { registerPlugin } = wp.plugins;

import PrePublishCheckList from './pre-publish-checklist';
import WordCountDisplay from './wordcount-display'


const RealWorldExample = () => (
	<>
		<PrePublishCheckList />
		<WordCountDisplay />
	</>
)

registerPlugin( 'extending-gutenberg-real-world-example', { render: RealWorldExample, icon: 'clipboard' } );
