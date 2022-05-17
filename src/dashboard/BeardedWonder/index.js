/**
 * Don't look at me! I'm a hideous hack..
 */
const BeardedWonder = () => {
	const { pluginAssetPath } = window.EB_DASH;
	return (
		<div style={ { width: '100%' } }>
			<img
				src={ `${ pluginAssetPath }/img/beardy.gif` }
				style={ { display: 'block', margin: 'auto' } }
				alt="Man blowing kisses at the camera"
				width="100%"
			/>
		</div>
	);
};

export default BeardedWonder;
