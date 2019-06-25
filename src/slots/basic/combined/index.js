const { registerPlugin } = wp.plugins;
const { PluginSidebar, PluginPrePublishPanel } = wp.editPost;
const { Fill, PanelBody } = wp.components;
const { Fragment } = wp.element;

const PluginSidebarTest = () => (
	<Fragment>
		<PluginSidebar
			name='plugin-sidebar-test'
			title='My Plugin'
			icon="smiley"
		>
			<PanelBody>
				<p>Plugin Sidebar</p>
			</PanelBody>
		</PluginSidebar>
		<PluginPrePublishPanel
			className='custom-panel-class'
			title='Panel Title'
			initialOpen={ true }
		>
			<p> Pre Publish Panel </p>
		</PluginPrePublishPanel>
	</Fragment>
);




registerPlugin( 'extending-gutenberg', { render: PluginSidebarTest } );
