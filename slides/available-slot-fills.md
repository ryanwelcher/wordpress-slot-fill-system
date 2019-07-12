## Available SlotFIlls ##
There are currently 8 SlotsFills exposed for use on the wp.editPost object.
* PluginPostStatusInfo
* PluginPrePublishPanel 
* PluginPostPublishPanel
* PluginMoreMenuItem 
* PluginBlockSettingsMenuItem
* PluginSidebar
* PluginSidebarMoreMenuItem
* PluginDocumentSettingPanel - new!

### Internal SlotFills ##
There are internal and special SlotFills as well. These are either not exposed or, in the case of `InspectorControls`, have certain uses. They include:
* InspectorControls
* InspectorControlsAdvanced
* BlockFormatControls
* and others

### Structure ## 
The available SlotFills are not just simple <Slot> components. They are named components that may contain inner components that can take props and some will inherit the icon provided by `registerPlugin`

[Back: wp.plugins API](./wp-plugins-api.md)