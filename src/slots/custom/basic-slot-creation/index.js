const { Slot } = wp.components;

const Toolbar = () => (
	<div className="toolbar">
		<Slot name="Toolbar"/>
	</div>
);
export default Toolbar;





