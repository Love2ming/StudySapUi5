sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"
 ], function (UIComponent, JSONModel, ResourceModel) {
    "use strict";
    return UIComponent.extend("sap.ui5.walkthrough.Component", {
       metadata : {
          "interfaces": ["sap.ui.core.IAsyncContentCreation"],
          "rootView": {
             "viewName": "sap.ui5.walkthrough.view.App",
             "type": "XML",
             "id": "app"
          }
       },
       init : function () {
          UIComponent.prototype.init.apply(this, arguments);
          var oData = {
             recipient : {
                name : "SAP UI5 初学者教程之九 - 创建第一个 Component"
             }
          };
          var oModel = new JSONModel(oData);
          this.setModel(oModel);
 
          var i18nModel = new ResourceModel({
             bundleName: "sap.ui5.walkthrough.i18n.i18n"
          });
          this.setModel(i18nModel, "i18n");
       }
    });
 });
// 以前是在index.js里初始化view，现在由Component.js初始化view。
// 用metadata知道view的代码文件，view的类型，view的加载是同步还异步
// 以前是在App.controller.js里初始化model，现在由Component.js初始化Model。
// 在UIComponent的构造方法里，使用metadata实例化view，
// 实例化JSONModel，ResourceModel，以前要把Model放到view里，
// 现在不用了，放到自己的里面就可以了。虽然没有放到view里，但也能从view里取得出来。