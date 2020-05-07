import { useEffect, useContext, useRef } from '@wordpress/element';
import PPCContext from '../PPCContext';

const Notice = ( { id, type = 'error', message = 'Default Message' } ) => {
	const { dispatch } = useContext( PPCContext );
	const classes = `notice notice-${ type } settings-${ type } is-dismissible notice-fader`;
	const ref = useRef();

	/**
	 * Clear the notification after 3 seconds if not clicked
	 */
	useEffect( () => {
		let remove;
		const fade = setTimeout( () => {
			ref.current.classList.add( 'fade' );
			remove = setTimeout( () => dispatch( { type: 'CLEAR_NOTICE', payload: id } ), 800 );
		}, 3000 );

		return () => {
			clearTimeout( fade );
			clearTimeout( remove );
		};
	}, [] );

	return (
		<div className={ classes } ref={ ref }>
			<p><strong>{ message }</strong></p>
			<button
				type="button"
				className="notice-dismiss"
				onClick={ () => dispatch( { type: 'CLEAR_NOTICE', payload: id } ) }
			>
				<span className="screen-reader-text">Dismiss this notice.</span>
			</button>
		</div>
	);
};
export default Notice;
