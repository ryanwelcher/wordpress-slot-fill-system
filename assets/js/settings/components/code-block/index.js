import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow as css } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeBlock = ( { language = 'jsx', value } ) => {
	return (
		<SyntaxHighlighter language={ language } style={ css } codeTagProps={ { style: { padding: '0' } } }>
			{ value }
		</SyntaxHighlighter>
	);
};

export default CodeBlock;
