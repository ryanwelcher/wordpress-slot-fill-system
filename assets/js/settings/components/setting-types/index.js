
import { useState, useEffect } from '@wordpress/element';

/**
 * InputFieldSettings
 *
 * @param {*} param0
 */
export const InputFieldSetting = ( {
	label = 'Setting Name',
	id = 'setting-name',
	value = '',
	onChange = () => {},
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
export const CheckBoxSetting = ( { isChecked, label = 'Setting Name', id = 'setting-name', dispatch, ...props } ) => {
	const [ checked, setChecked ] = useState( isChecked );

	useEffect( () => {
		dispatch( id, checked );
	}, [ checked ] );

	return (
		<tr>
			<th scope="row">{ label }</th>
			<td>
				<fieldset>
					<legend className="screen-reader-text"><span>{ label }</span></legend>
					<label htmlFor={ id }>
						<input
							type="checkbox"
							value="yes"
							name={ id }
							id={ id }
							checked={ checked }
							onChange={ () => setChecked( ! checked ) }
							{ ...props }
						/>
					</label>
				</fieldset>
			</td>
		</tr>
	);
};

export const SelectSetting = () => {};
export const RadioSetting = () => {};
