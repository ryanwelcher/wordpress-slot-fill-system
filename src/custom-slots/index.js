/**
 * WordPress dependencies
 */
import { render } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import {
	Panel,
	PanelBody,
	PanelRow,
	Slot,
	SlotFillProvider,
} from '@wordpress/components';
import { PluginArea } from '@wordpress/plugins';

/**
 * Internal dependencies
 */
import BasicCreateSlotFill from './basic-create-slot-fill';
import CustomizeFillStructure from './customize-fill-structure';
import CustomizeSlotStructure from './customize-slot-stucture';
import CustomizeBoth from './customize-both';
import InheritIcon from './inherit-icon';

// Import the registerPlugin calls.
import './plugins';

const SettingsScreen = () => (
	<div className="wrap">
		<h2>
			{ __( 'Custom SlotFill Examples', 'gutenberg-slot-fill-system' ) }
		</h2>
		<SlotFillProvider>
			<Panel>
				<PanelBody title="Raw SlotFill" initialOpen={ false }>
					<PanelRow>
						<Slot name="BasicSlot" />
					</PanelRow>
				</PanelBody>
				<PanelBody title="Basic" initialOpen={ false }>
					<PanelRow>
						<BasicCreateSlotFill.Slot />
					</PanelRow>
				</PanelBody>
				<PanelBody title="Basic with Props" initialOpen={ false }>
					<PanelRow>
						<BasicCreateSlotFill.Slot
							fillProps={ { test: 'data' } }
						/>
					</PanelRow>
				</PanelBody>
				<PanelBody
					title="Customize Slot Structure"
					initialOpen={ false }
				>
					<PanelRow>
						<CustomizeSlotStructure.Slot />
					</PanelRow>
				</PanelBody>
				<PanelBody
					title="Customize Fill Structure"
					initialOpen={ false }
				>
					<PanelRow>
						<CustomizeFillStructure.Slot />
					</PanelRow>
				</PanelBody>
				<PanelBody
					title="Customized Slot and Fill Structure"
					initialOpen={ false }
				>
					<PanelRow>
						<CustomizeBoth.Slot />
					</PanelRow>
				</PanelBody>
			</Panel>
			<PluginArea scope="custom-slots" />
		</SlotFillProvider>
	</div>
);

// Render the app to the screen.
render(
	<SettingsScreen />,
	document.getElementById( 'gutenberg-slot-fill-system-custom-slots' )
);

// import { registerPlugin } from '@wordpress/plugins';
// import { PluginDocumentSettingPanel } from '@wordpress/edit-post';
// import { Fill, Slot } from '@wordpress/components';
// import { Logo } from '../../svg/icons';

// // Import our custom SlotFill components.
// import BasicCreateSlotFill from './basic-create-slot-fill';
// import CustomizeFillStructure from './customize-fill-structure';
// import CustomizeSlotStructure from './customize-slot-stucture';
// import CustomizeBoth from './customize-both';
// import InheritIcon from './inherit-icon';

// // Import the registerPlugin calls.
// import './plugins';

// const CustomSlotFillDemo = () => (
// 	<>
// 		<PluginDocumentSettingPanel
// 			name="custom-panel-one"
// 			title="Raw SlotFill"
// 		>
// 			<Slot name="BasicSlot" />
// 		</PluginDocumentSettingPanel>

// 		<PluginDocumentSettingPanel name="custom-panel-two" title="Basic">
// 			<BasicCreateSlotFill.Slot />
// 		</PluginDocumentSettingPanel>

// 		<PluginDocumentSettingPanel
// 			name="custom-panel-three"
// 			title="Basic with Props"
// 		>
// 			<BasicCreateSlotFill.Slot
// 				fillProps={ wp.data.select( 'core/editor' ).getCurrentPost() }
// 			/>
// 		</PluginDocumentSettingPanel>

// 		<PluginDocumentSettingPanel
// 			name="custom-panel-four"
// 			title="Customize Fill Structure"
// 		>
// 			<CustomizeFillStructure.Slot />
// 		</PluginDocumentSettingPanel>

// 		<PluginDocumentSettingPanel
// 			name="custom-panel-five"
// 			title="Customize Slot Struture"
// 		>
// 			<CustomizeSlotStructure.Slot />
// 		</PluginDocumentSettingPanel>

// 		<PluginDocumentSettingPanel
// 			name="custom-panel-six"
// 			title="Customis Slot and Fill Structure"
// 		>
// 			<CustomizeBoth.Slot />
// 		</PluginDocumentSettingPanel>

// 		<PluginDocumentSettingPanel
// 			name="custom-panel-seven"
// 			title="Using pluginContext"
// 		>
// 			<InheritIcon.Slot />
// 		</PluginDocumentSettingPanel>
// 	</>
// );

// registerPlugin( 'extending-gutenberg-custom-panel', {
// 	render: CustomSlotFillDemo,
// 	icon: Logo,
// } );
