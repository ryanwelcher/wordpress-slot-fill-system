import { useDispatch, useSelect } from '@wordpress/data';

const TabbedNavigation = () => {
	const activeTab = useSelect( ( select ) => select( 'extending-gutenberg/settings' ).getActivePage() );
	const pages = useSelect( ( select ) => select( 'extending-gutenberg/settings' ).getPages() );
	const { changeTab } = useDispatch( 'extending-gutenberg/settings' );
	const buttonStyles = {
		borderRight: 'none',
		borderBottom: '4px solid #fff',
		borderTop: 'none',
		borderLeft: 'none',
		color: '#666',
		cursor: 'pointer',
		margin: '0 10px',
		padding: '15px 0',
	};

	const links = pages.map( ( item ) => {
		const current = activeTab === item.slug ? 'current' : '';
		return (
			<li key={ item.title } className={ current }>
				<button style={ buttonStyles }onClick={ () => {
					changeTab( item.slug );
				} }>{ item.title }
				</button>
			</li>
		);
	} );
	return (
		<div className="wp-filter">
			<ul className="filter-links">
				{ links }
			</ul>
		</div>
	);
};
export default TabbedNavigation;
