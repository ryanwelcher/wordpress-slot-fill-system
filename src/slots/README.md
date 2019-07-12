## SlotFill System Components ##

### Slot ##
Where ever this component is rendered, and Fills with the same name will have their content rendered here.

#### Props: ####
* {string}  __name__             The name of the Slot.
* {Object}  __fillProps__         Object that is passed to Fills.
* {Boolean} __bubblesVirtually__ Changes event bubbling behavior     
### Example ###
```js
<Slot 
    name="my-slot-name" 
    fillProps={ { key: 'value' } } 
    bubblesVirtually
/>
```

### Fill ##
The contents of the Fill will be rendered in the Slot with the same name property. Regardless of where the Fill is rendered.
#### Props: ####
* {string} __name__ The name of the Slot that this Fill associated with.

### Example ###
```js
<Fill name="my-slot-name">
    Fill Contents
</Fill>
```

### SlotFillProvider ##
This component is the glue that connects Fills with their associated Slot. Both the Slot and Fill components must be wrapped by this compoement.
#### Props: ####
None
### Example ###
```js
<SlotFillProvider>
    <Slot 
        name="my-slot-name" 
        fillProps={ { key: 'value' } } 
        bubblesVirtually
    />
    <Fill name="my-slot-name">
        Fill Contents
    </Fill>
</SlotFillProvider>
```