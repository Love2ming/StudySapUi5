sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], function (Controller, MyMessageToast) {
    "use strict";
    return Controller.extend("sap.ui5.walkthrough.controller.App", {
        onShowHello : function () {
            MyMessageToast.show("Hello World");
        }
    });
});
// 在Controller或者其他的module，使用sap.ui.define，
// 定义全局的namespace，在别的代码块里也可以使用
// 使用sap.ui.require也是进行异步加载，不是全局的namespace，
// 在别的代码块里无法使用
// 函数的参数的名字，使用Controller或者module本身的名字，
// 比如这里的function (Controller, MessageToast)