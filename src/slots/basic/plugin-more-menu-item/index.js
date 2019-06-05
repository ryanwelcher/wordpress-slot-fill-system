const { registerPlugin } = wp.plugins;
const { PluginMoreMenuItem,} = wp.editPost;
import { TenUp } from '../../../svg/icons';

const MyButtonMoreMenuItemTest = () => (
	<PluginMoreMenuItem
		href="https://10up.com/careers"
		target={'_blank'}
		rel={ 'noopener noreferrer' }
	>
		10up is hiring!
	</PluginMoreMenuItem>
);

registerPlugin( 'more-menu-item-test', { render: MyButtonMoreMenuItemTest, icon: TenUp } );
