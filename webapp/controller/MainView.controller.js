sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"../model/Formatter",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
], function (Controller, JSONModel, Formatter, Filter, FilterOperator) {
	"use strict";
	return Controller.extend("com.syonchev.exercise3.controller.MainView", {
		formatter: Formatter,
		onInit: function () {
			var productsModel = this.getView().getModel("productsModel");
		},
		onFilter: function (oEvent) {
			var aFilter = [];
			var sQuery = oEvent.getParameter("query");
			if (sQuery) {
				aFilter.push(new Filter("Name", FilterOperator.Contains, sQuery));
			}
			var oTable = this.byId("idProductsTable");
			var oBinding = oTable.getBinding("items");
			oBinding.filter(aFilter);
		},
	});
});