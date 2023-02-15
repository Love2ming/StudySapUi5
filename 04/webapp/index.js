sap.ui.define([
    "sap/ui/core/mvc/XMLView"
], function (XMLView) {
    "use strict";
    XMLView.create({
        viewName: "sap.ui5.walkthrough.view.App"
    }).then(function (oView) {
        oView.placeAt("content");
    });
});

// 使用XMLView库。
//
// XMLView.create的作用是找到webapp/view/App.view.xml，
// 并加载进来。
// sap.ui.demo.walkthrough1是index.html里
// data-sap-ui-resourceroots和data-sap-ui-onInit定义的
//
// then：如果找到了并加载成功就调用placeAt方法，替换掉id为content的DOM的内容。