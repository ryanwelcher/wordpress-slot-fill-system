/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
// eslint-disable-next-line @wordpress/no-unsafe-wp-apis
import { __experimentalMainDashboardButton as MainDashboardButton } from '@wordpress/edit-site';
// eslint-disable-next-line @wordpress/no-unsafe-wp-apis
import { __experimentalNavigationBackButton as NavigationBackButton } from '@wordpress/components';

const SiteEditorMainDashboardButtonExample = () => {
	return (
		<MainDashboardButton>
			<NavigationBackButton
				backButtonLabel={__('Custom CTA Text')}
				className="edit-site-navigation-panel__back-to-dashboard"
				href="index.php"
			/>
		</MainDashboardButton>
	);
};

export default SiteEditorMainDashboardButtonExample;
