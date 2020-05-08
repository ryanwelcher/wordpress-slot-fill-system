import { useContext } from '@wordpress/element';
import PPCContext from '../PPCContext';

const SettingsPage = ( { title, children } ) => {
	const { dispatch, saving } = useContext( PPCContext );
	return (
		<>
			<div className="wrap">
				<h1>{ title }</h1>
				{ children }
				<p className="submit">
					<button
						disabled={ saving }
						className="button button-primary"
						onClick={ () => dispatch( { type: 'TOGGLE_SAVING' } ) }
					>Save Changes
					</button>
				</p>
			</div>
		</>
	);
};

export default SettingsPage;
