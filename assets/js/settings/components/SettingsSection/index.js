const SettingsSection = ( { children, title = false } ) => {
	return (
		<>
			{ title && ( <h2>{ title }</h2> ) }
			<table className="form-table" role="presentation">
				<tbody>
					{ children }
				</tbody>
			</table>
		</>
	);
};

export default SettingsSection;
