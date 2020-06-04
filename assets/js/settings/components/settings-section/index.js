const SettingsSection = ( { children, title = false } ) => {
	return (
		<>
			{ title && ( <h2>{ title }</h2> ) }
			<div className="form-table" role="presentation">
				<tbody>
					{ children }
				</tbody>
			</div>
		</>
	);
};

export default SettingsSection;
