sap.ui.define([], function () {
	'use strict';
	return {
		determineIcon: function (status) {
			if (status === 'Available') {
				return 'We gotcha';
			}  else {
				return 'Out of stock :(';
			}
		}
	};
});