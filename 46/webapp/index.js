sap.ui.require([
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/mvc/XMLView",
	"sap/ui/model/resource/ResourceModel"
], function (JSONModel, XMLView, ResourceModel) {
	"use strict";
	// 将其作为输入参数传入到sap.ui.getCore().attachInit中，当UI5框架初始化时，会自动调用这个函数
	sap.ui.getCore().attachInit(function () {
		var oModel = new JSONModel({
			salesAmount: 12345.6789,
			currencyCode: "EUR"
		 });
		// 新建一个JSONModel，其字段salesAmount和currencyCode作为金额的数值的单位绑定到XML视图的数据类型对应的InPut字段
		sap.ui.getCore().setModel(oModel);
		var oResourceModel = new ResourceModel({
			bundleName: "sap.ui5.walkthrough.i18n.i18n"
		});
		sap.ui.getCore().setModel(oResourceModel, "i18n");
		var oView = new XMLView({
			viewName: "sap.ui5.walkthrough.view.App"
		});
		sap.ui.getCore().getMessageManager().registerObject(oView, true);
		oView.placeAt("content");
	});
});