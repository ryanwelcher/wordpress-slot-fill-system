/**
 * Don't look at me! I'm a hideous hack..
 */
const BeardedWonder = () => {
	const { pluginAssetPath } = window.EB_DASH;
	return (
		<div style={ { width: '100%' } }>
			<img
				src={ `${ pluginAssetPath }/img/beardy.gif` }
				style={ {
					border: '1px solid #c3c4c7',
				} }
				alt="Man blowing kisses at the camera"
				width="100%"
			/>
		</div>
	);
};

export default BeardedWonder;
