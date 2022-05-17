# The Gutenberg SlotFill System

This repository contains working example of all of the existing SlotFills available in WordPress as of version 6.0.

## Slots Available in the Post Edit Screen

-   [PluginPostStatusInfo](./plugin-post-status-info.md)
-   [PluginPrePublishPanel](./plugin-pre-publish-panel.md)
-   [PluginPostPublishPanel](./plugin-post-publish-panel.md)
-   [PluginMoreMenuItem](./plugin-more-menu-item.md)
-   [PluginBlockSettingsMenuItem](./plugin-block-settings-menu-item.md)
-   [PluginSidebar](./plugin-sidebar.md)
-   [PluginSidebarMoreMenuItem](./plugin-sidebar-more-menu-item.md)
-   [PluginDocumentSettingPanel](./plugin-document-setting-panel.md)
-   [MainDashboardButton](https://developer.wordpress.org/block-editor/reference-guides/slotfills/main-dashboard-button/#post-editor-example) **Marked as experimental**

## Slots Available in the Site Edit Screen

-   [PluginMoreMenuItem](./plugin-more-menu-item.md)
-   [PluginSidebar](./plugin-sidebar.md)
-   [MainDashboardButton](https://developer.wordpress.org/block-editor/reference-guides/slotfills/main-dashboard-button/#site-editor-example) **Marked as experimental**

### Setup Instructions

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
