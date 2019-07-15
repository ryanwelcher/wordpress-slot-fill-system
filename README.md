## The Gutenberg SlotFill System ##

This plugin contains the examples for my JavaScript for WordPress conference talk.

This repo is not being maintained. Please refer to [10up SlotFill and Filter demos](https://github.com/10up/slotfill-and-filter-demos) for on-going updates/demos.

### Setup Instructions ###

Install all dependencies.

```js
npm install
```

Run the setup command to build the initial files.
```js
npm run setup
```


The files for the Dashboard Widget demo are separated from the others

Build Commands - compiles once.

```js
npm run build
npm run build:dashboard
```
Watch Commands - compiles when files are changed.

```js
npm run start
npm run start:dashboard
```

The demos are broken out into separate includes in the `src/index.js` file. Uncomment the one you wish to view and run `npm run build` or `npm run start`.