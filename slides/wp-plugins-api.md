## wp.plugins API

The `@wordpress/plugins` API is used to manage adding and removing plugins that are used in the SlotFill system.

[View Source](https://github.com/WordPress/gutenberg/blob/trunk/packages/plugins/src/api/index.js)

### registerPlugin

`registerPlugin` is used to register a new plugin by adding it to the internal array used by the `wp.plugin` API.

#### Params

-   **name** `string`: Must unique and include only lowercase alphanumeric characters or dashes, and start with a letter.
-   **settings** `Object`:
-   **settings.render** `Function`: Component containing the UI to be rendered
-   **settings.icon** `(string|WPElement|Function)`: An icon to be shown in the UI. It can be a slug of the Dashicon, or an element (or function returning an element) if you choose to render your own.

#### Icon Inheritance

Some SlotFills will inherit the icon passed to `registerPlugin`.

### Example

```js
import { registerPlugin } from '@wordpress/plugins';
import { PluginPostStatusInfo } from '@wordpress/edit-post';

const MyFirstPlugin = () => (
	<PluginPostStatusInfo className="my-custom-classname">
		<p>Fill Content</p>
	</PluginPostStatusInfo>
);
registerPlugin( 'example-plugin', { render: MyFirstPlugin, icon: 'smiley' } );
```

### unregisterPlugin

Unregister a plugin by name

#### Params

-   **name** `string`: The name of a registered plugin.

### Example

```js
import { unregisterPlugin } from '@wordpress/plugins';
unregisterPlugin( 'example-plugin' );
```

### getPlugin

Retrieves the settings object for a registered plugin by name.

#### Params

-   **name** `string`: The name of a registered plugin.

### Returns

-   **name** `Object`: Plugin settings.

### Example

```js
import { getPlugin } from '@wordpress/plugins';
getPlugin( 'example-plugin' );
```

### getPlugins

Retrieves the settings objects for all registered plugins.

#### Params

None

### Returns

-   **name** `array`: Array of plugin settings objects.

### Example

```js
import { getPlugins } from '@wordpress/plugins';
getPlugins();
```

[Back: How Does WordPress Do It?](./how-does-wordpress-do-it.md) | [Next: Available SlotFills](./available-slot-fills.md)
