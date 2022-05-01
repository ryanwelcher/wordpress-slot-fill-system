/**
 * WordPress dependencies
 */
import { registerPlugin } from '@wordpress/plugins';
import { PluginPostStatusInfo } from '@wordpress/edit-post';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { Avocado } from '../../../svg/icons';

registerPlugin('example-post-status-info', {
	render: () => (
		<PluginPostStatusInfo className="my-custom-class-name">
			<p>{__('Post Status Info SlotFill', 'slot-fill-system')}</p>
		</PluginPostStatusInfo>
	),
	icon: Avocado,
});
