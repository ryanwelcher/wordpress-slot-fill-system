const { Fill } = wp.components;
const { registerPlugin } = wp.plugins;
const ToolBarFills = () => (
	<>
		<Fill name="Toolbar">
			Panel body 2
		</Fill>
		<Fill name="Toolbar">
			Panel body 3
		</Fill>
		<Fill name="Toolbar">
			Panel body 4
		</Fill>
	</>
);


export default ToolBarFills;
//registerPlugin( 'raw-slot-fill', { render: ToolBarFills } );
