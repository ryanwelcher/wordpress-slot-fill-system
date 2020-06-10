
const BeardyMcBeardFace = () => {
	const { pluginPath } = global.EB_DASH;
	const imageUrl = `${ pluginPath }/img/beardy.gif`;
	return (
		<div style={ { width: '100%' } } >
			<img src={ imageUrl } width="300" style={ { display: 'block', margin: 'auto' } } alt="Unexpected beard." />
		</div>
	);
};

export default BeardyMcBeardFace;
