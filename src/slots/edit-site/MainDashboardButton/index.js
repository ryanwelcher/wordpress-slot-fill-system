/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
// eslint-disable-next-line @wordpress/no-unsafe-wp-apis
import { __experimentalMainDashboardButton as MainDashboardButton } from '@wordpress/edit-site';
// eslint-disable-next-line @wordpress/no-unsafe-wp-apis
import { __experimentalNavigationBackButton as NavigationBackButton } from '@wordpress/components';
import { registerPlugin } from '@wordpress/plugins';

/**
 * Internal dependencies
 */
import { Avocado } from '../../../svg/icons';

// Register the plugin.
registerPlugin( 'example-edit-site-plugin-more-menu-item', {
	render: () => (
		<MainDashboardButton>
			<NavigationBackButton
				backButtonLabel={ __(
					'Custom CTA Text',
					'gutenberg-slot-fill-system'
				) }
				className="edit-site-navigation-panel__back-to-dashboard"
				href="index.php"
			/>
		</MainDashboardButton>
	),
	icon: Avocado,
} );
