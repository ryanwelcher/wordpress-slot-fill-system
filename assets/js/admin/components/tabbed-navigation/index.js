import { useDispatch, useSelect } from '@wordpress/data';
import './styles.css';

const TabbedNavigation = () => {
	const activeTab = useSelect( ( select ) => select( 'extending-gutenberg/settings' ).getActivePage() );
	const pages = useSelect( ( select ) => select( 'extending-gutenberg/settings' ).getPages() );
	const { changeTab } = useDispatch( 'extending-gutenberg/settings' );
	if ( pages.length < 2 ) {
		return null;
	}
	const links = pages.map( ( item ) => {
		const current = activeTab === item.slug ? 'eg-tab current' : 'eg-tab';
		return (
			<li key={ item.title } className={ current }>
				<button onClick={ () => {
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
