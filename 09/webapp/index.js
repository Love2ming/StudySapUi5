sap.ui.define([
	"sap/ui/core/ComponentContainer"
], function (ComponentContainer) {
	"use strict";

	new ComponentContainer({
		name: "sap.ui5.walkthrough",
		settings : {
			id : "walkthrough"
		},
		async: true
	}).placeAt("content");
});
// index.html里调用了index.js文件，在此文件里调用了ComponentContainer。
// 问题来了，那么ComponentContainer是在哪个js文件里实现的呢？
// 答案是Component.js。
// 那么又有问题了，Component.js在哪个目录呢？
// name: "sap.ui.demo.walkthrough",定义了Component.js所在的目录
// data-sap-ui-resourceroots='{
// "sap.ui.demo.walkthrough": "./"
// }'>
// 定义了sap.ui.demo.walkthrough所代表的目录，这里就是根目录，也就是webapp直下。
// 如果name: "sap.ui.demo.walkthrough.comp",那么Component.js所在的目录就是webapp/comp
// 当调用了ComponentContainer，UI5就会去找Component.js文件，并执行Component.js的init方法。