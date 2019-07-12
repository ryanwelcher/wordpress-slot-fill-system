
## The Gutenberg SlotFill System  ##
* `SlotFillProvider` is rendered in the `Editor` component.
* Various Slots are exposed in the `Layout` component.
* Fills are registered using the `wp.plugins` API function `registerPlugin`
* Fills are rendered in hidden div by the `PluginArea` component

  
### Pseudo code of the Editor component render function ###
```jsx
<Editor>
    <SlotFillProvider>
            <Layout> 
                <PluginArea />
            </Layout>
    </SlotFillProvider>
</Editor>
```
[View actual source](https://github.com/WordPress/gutenberg/blob/master/packages/edit-post/src/editor.js)

