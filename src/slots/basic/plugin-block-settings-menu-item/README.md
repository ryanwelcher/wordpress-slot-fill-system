# PluginBlockSettingsMenuItem
This slot appears allows for adding a new item in to the More Options area. 
This will either appear in the controls for each block or at the Top Toolbar depending on the users setting.

[View source](https://github.com/WordPress/gutenberg/blob/master/packages/edit-post/src/components/block-settings-menu/plugin-block-settings-menu-item.js)

## Source Code

## Available Props
* @param {Object} props Component props.
 * @param {Array} [props.allowedBlocks] An array containing a list of block names for which the item should be shown. If not present, it'll be rendered for any block. If multiple blocks are selected, it'll be shown if and only if all of them are in the whitelist.
 * @param {string|Element} [props.icon] The [Dashicon](https://developer.wordpress.org/resource/dashicons/) icon slug string, or an SVG WP element.
 * @param {string} props.label The menu item text.
 * @param {Function} props.onClick Callback function to be executed when the user click the menu item.

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