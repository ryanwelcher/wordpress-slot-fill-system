# PluginBlockSettingsMenuItem
This SlotFill adds a new item to the More options menu on any allowed block.
[View source](https://github.com/WordPress/gutenberg/blob/master/packages/edit-post/src/components/block-settings-menu/plugin-block-settings-menu-item.js)


## Available Props
 * {Array} *allowedBlocks* An array containing a list of block names for which the item should be shown. If not present, it'll be rendered for any block. If multiple blocks are selected, it'll be shown if and only if all of them are in the whitelist.
 * {string|Element} *icon* The [Dashicon](https://developer.wordpress.org/resource/dashicons/) icon slug string, or an SVG WP element.
 * {string} *label* The menu item text.
 * {Function} *onClick* Callback function to be executed when the user click the menu item.

 ## Inherif icon from registerPlugin()?
No. If no icon is passed, 'admin-plugins' is used.

## Example
```js
const { registerPlugin } = wp.plugins;
const { PluginBlockSettingsMenuItem } = wp.editPost;

const PluginBlockSettingsMenuGroupTest = () => (
	<PluginBlockSettingsMenuItem
		allowedBlocks={ ['core/paragraph'] }
		icon='smiley'
		label='Menu item text'
		onClick={ () => { alert( 'clicked' )} } />
)

registerPlugin( 'block-settings-menu-group-test', { render: PluginBlockSettingsMenuGroupTest } );
```
## Location

![Alt text](https://github.com/10up/slotfill-and-filter-demos/tree/master/assets/images/plugin-block-settings-menu-item-screenshot.png?raw=true "PluginBlockSettingsMenuItem Location")