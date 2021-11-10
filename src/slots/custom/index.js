const { registerPlugin } = wp.plugins;
const { PluginDocumentSettingPanel } = wp.editPost;
const { Fill, Slot } = wp.components;
import { Logo } from '../../svg/icons';

// Import our custom SlotFill components.
import BasicCreateSlotFill from './basic-create-slot-fill';
import CustomizeFillStructure from './customize-fill-structure';
import CustomizeSlotStructure from './customize-slot-stucture';
import CustomizeBoth from './customize-both';
import InheritIcon from './inherit-icon';

// Import the registerPlugin calls.
import './plugins';


const CustomSlotFillDemo = () => (
	<>
		<PluginDocumentSettingPanel name="custom-panel-one" title="Raw SlotFill">
			<Slot name="BasicSlot" />
		</PluginDocumentSettingPanel>

		<PluginDocumentSettingPanel name="custom-panel-two" title="Basic">
			<BasicCreateSlotFill.Slot/>
		</PluginDocumentSettingPanel>

		<PluginDocumentSettingPanel name="custom-panel-three" title="Basic with Props">
			{/* <BasicCreateSlotFill.Slot fillProps={ wp.data.select('core/editor').getCurrentPost() } /> */}
		</PluginDocumentSettingPanel>
		
		<PluginDocumentSettingPanel name="custom-panel-four" title="Customize Fill Structure">
			<CustomizeFillStructure.Slot />
		</PluginDocumentSettingPanel>
		
		<PluginDocumentSettingPanel name="custom-panel-five" title="Customize Slot Struture">
			<CustomizeSlotStructure.Slot />
		</PluginDocumentSettingPanel>
		
		<PluginDocumentSettingPanel name="custom-panel-six" title="Customis Slot and Fill Structure">
			<CustomizeBoth.Slot />
		</PluginDocumentSettingPanel>
		
		<PluginDocumentSettingPanel name="custom-panel-seven" title="Using pluginContext">
			<InheritIcon.Slot />
		</PluginDocumentSettingPanel>
	</>
);

registerPlugin( 'extending-gutenberg-custom-panel', { render: CustomSlotFillDemo, icon: Logo } );
