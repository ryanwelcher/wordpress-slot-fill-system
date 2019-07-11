const { registerPlugin } = wp.plugins;
const { Fill } = wp.components;

import { TenUp } from '../../../svg/icons';
import BasicCreateSlotFill from '../basic-create-slot-fill';
import CustomizeFillStructure from '../customize-fill-structure';
import CustomizeSlotStructure from '../customize-slot-stucture';
import CustomizeBoth from '../customize-both';

const CustomSlotFillDemo = () => (
	<>
		<Fill name="BasicSlot">
			<p>This text will appear wherever the Slot named "BasicSlot" is rendered</p>
		</Fill>
		<BasicCreateSlotFill>
			<p>{`This appears where <BasicCreateSlotFill.Slot/> is rendered`}</p>
		</BasicCreateSlotFill>
		<BasicCreateSlotFill>
			{ ( props ) => (
				<p>I was passed fillProps!<br/>{`Modified Date: ${props.modified}`} </p>
			) }
		</BasicCreateSlotFill>
		<CustomizeFillStructure>
			<p>This gets wrapped in a nested panel</p>
		</CustomizeFillStructure>
		<CustomizeFillStructure>
			<p>So does this</p>
		</CustomizeFillStructure>
		<CustomizeSlotStructure>
			<p>This is in a panel</p>
		</CustomizeSlotStructure>
		<CustomizeSlotStructure>
			<p>This is in the same panel</p>
		</CustomizeSlotStructure>
		<CustomizeBoth>
			First list item
		</CustomizeBoth>
		<CustomizeBoth>
			Second list item
		</CustomizeBoth>
	</>
);

registerPlugin( 'extending-gutenberg-custom-slotfills', { render: CustomSlotFillDemo, icon: TenUp } );
