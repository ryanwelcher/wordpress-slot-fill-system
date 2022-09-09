const { registerPlugin } = wp.plugins;
const { Fill, Button } = wp.components;

import { Avocado } from '../../svg/icons';
import BasicCreateSlotFill from '../basic-create-slot-fill';
import SlotFillProps from '../fill-props';
import CustomizeFillStructure from '../customize-fill-structure';
import CustomizeSlotStructure from '../customize-slot-stucture';
import CustomizeBoth from '../customize-both';
import InheritIcon from '../inherit-icon';

const CustomSlotFillDemo = () => (
	<>
		<Fill name="BasicSlot">
			<p>
				This text will appear wherever the Slot named "BasicSlot" is
				rendered
			</p>
		</Fill>

		<BasicCreateSlotFill>
			<p>{ `This appears where <BasicCreateSlotFill.Slot/> is rendered` }</p>
		</BasicCreateSlotFill>

		<SlotFillProps>
			{ ( props ) => (
				<p>
					I was passed fillProps!
					<br />
					{ `Message: ${ props.message }` }
				</p>
			) }
		</SlotFillProps>

		<CustomizeFillStructure>Button 1</CustomizeFillStructure>
		<CustomizeFillStructure>Button 2</CustomizeFillStructure>
		<CustomizeFillStructure>Button 3</CustomizeFillStructure>

		<CustomizeSlotStructure>
			This will be rendered in a code tag
		</CustomizeSlotStructure>

		<CustomizeBoth>First list item</CustomizeBoth>
		<CustomizeBoth>Second list item</CustomizeBoth>

		<InheritIcon>I inherited my icon!</InheritIcon>
	</>
);

registerPlugin( 'extending-gutenberg-custom-slotfills', {
	render: CustomSlotFillDemo,
	icon: Avocado,
	scope: 'custom-slots',
} );
