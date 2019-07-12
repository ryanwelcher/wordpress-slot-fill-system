const { registerPlugin } = wp.plugins;
const { PluginDocumentSettingPanel } = wp.editPost;
const { Fill, Slot } = wp.components;
import { TenUp } from '../../svg/icons';

// Import our custom SlotFill components.
import BasicCreateSlotFill from './basic-create-slot-fill';
import CustomizeFillStructure from './customize-fill-structure';
import CustomizeSlotStructure from './customize-slot-stucture';
import CustomizeBoth from './customize-both';

// Import the registerPlugin calls.
import './plugins';


const CustomSlotFillDemo = () => (
	<PluginDocumentSettingPanel name="custom-panel" title="Custom SlotFills">
		{ /* Raw Slot exposed */ }
		<Slot name="BasicSlot" />

		{/*<BasicCreateSlotFill.Slot fillProps={ { name: 'Ryan' } } />*/}
		<BasicCreateSlotFill.Slot fillProps={ wp.data.select('core/editor').getCurrentPost() } />

		<CustomizeFillStructure.Slot />

		<CustomizeSlotStructure.Slot />

		<CustomizeBoth.Slot />
	</PluginDocumentSettingPanel>
);

registerPlugin( 'extending-gutenberg-custom-panel', { render: CustomSlotFillDemo, icon: TenUp } );
