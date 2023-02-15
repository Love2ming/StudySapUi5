sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    //引入JSONModel库
    "sap/ui/model/json/JSONModel"
], function (Controller, MessageToast, JSONModel) {
    "use strict";
    return Controller.extend("sap.ui5.walkthrough.controller.App", {
        //onInit是UI5生命周期里的一个方法，当controller创建完毕后，会调用它
        onInit : function () {
            //创建数据。数据的路径是recipient/name
            var oData = {
                recipient : {
                    name : "SAP UI5 初学者教程之七 - JSON 模型初探"
                }
            };
            // 创建JSONModel
            var oModel = new JSONModel(oData);
            // 把创建的Model放到view里
            this.getView().setModel(oModel);
        },
        onShowHello : function () {
            MessageToast.show("Hello World");
            var oInput = this.byId("myinput");
            console.log(oInput);
        }
    });
});