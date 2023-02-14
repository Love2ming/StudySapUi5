sap.ui.define([
    "sap/m/Text"
],function (Text){
    "use strict";

    new Text({
        text: "hello content",
        tooltip:"我是Tooltip"
    }).placeAt("content")
})