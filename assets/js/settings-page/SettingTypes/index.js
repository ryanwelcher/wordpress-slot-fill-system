/**
 * InputFieldSettings
 *
 * @param {*} param0
 */
export const InputFieldSetting = ( {
	label = 'Setting Name',
	id = 'setting-name',
	value = '',
	onChange = ( e ) => {
		console.log( e.target.value );
	},
	classes = '',
	type = 'text',
} ) => {
	return (
		<tr>
			<th>
				<label htmlFor={ id }>{ label }</label>
			</th>
			<td>
				<input
					id={ id }
					className={ `regular-text ${ classes }` }
					type={ type }
					value={ value }
					onChange={ onChange }
				/>
			</td>
		</tr>
	);
};

/**
 * Checkbox
 */
export const CheckBoxSetting = ( {
	value,
	label = 'Setting Name',
	id = 'setting-name',
	onChange = ( e ) => console.log( e.target.checked ),
} ) => {
	return (
		<tr>
			<th scope="row">{ label }</th>
			<td>
				<fieldset>
					<legend className="screen-reader-text"><span>{ label }</span></legend>
					<label htmlFor={ id }>
						<input
							name={ id }
							type="checkbox"
							id={ id }
							value="true"
							checked={ value }
							onChange={ onChange }
						/>
					</label>
				</fieldset>
			</td>
		</tr>
	);
};

export const SelectSetting = () => {};
export const RadioSetting = () => {};

