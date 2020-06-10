const selectors = {
	getPages( state ) {
		const { pages } = state;
		return pages;
	},

	getActivePage( state ) {
		const { activePage } = state;
		return activePage;
	},

	blocksEnabled( state ) {
		const { settings: blocksEnabled } = state;
		return blocksEnabled;
	},
	getSavingStatus( state ) {
		const { isSaving } = state;
		return isSaving;
	},

	getLoadingStatus( state ) {
		const { loadingSettings } = state;
		return loadingSettings;
	},

	getSettings( state ) {
		const { settings } = state;
		return settings;
	},
};

export default selectors;
