sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/resource/ResourceModel"
], function (Controller, MessageToast, JSONModel, ResourceModel) {
	"use strict";
	return Controller.extend("sap.ui5.walkthrough.controller.App", {
		onInit : function () {
			var oData = {
				recipient : {
					name : "SAP UI5 初学者教程之八 - 多语言的支持"
				}
			};
			var oModel = new JSONModel(oData);
			this.getView().setModel(oModel);
			var i18nModel = new ResourceModel({
				// sap.ui.demo.walkthrough是跟目录，在index.html定义的，第一个i18n是文件夹名字，第二个i18n是文件名字，省略的文件的后缀名
				bundleName: "sap.ui5.walkthrough.i18n.i18n"
			 });
			// 把i18nMod放到view里，并给个i18n1名字。这个model可以用this.getView().getModel("i18n1")取得
			this.getView().setModel(i18nModel, "mingi18n");
		},
		onShowHello : function () {
			//MessageToast.show("Hello World"); - 步骤7的代码
			var oBundle = this.getView().getModel("mingi18n").getResourceBundle();
			// 取得画面value为/recipient/name的值
			var sRecipient = this.getView().getModel().getProperty("/recipient/name");
			// 从i18n文件里，取得key为helloMsg的字符串，[sRecipient])为helloMsg的字符串的参数（helloMsg=Hello {0}）
			var sMsg = oBundle.getText("helloMsg", [sRecipient]);
			MessageToast.show(sMsg);
		}
	});
});