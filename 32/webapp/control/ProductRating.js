sap.ui.define([
	"sap/ui/core/Control",
	"sap/m/RatingIndicator",
	"sap/m/Label",
	"sap/m/Button"

], function (Control, RatingIndicator, Label, Button) {
	"use strict";
	return Control.extend("sap.ui5.walkthrough.control.ProductRating", {
		//metadata区域定义该控件的数据结构，包含属性和事件和暴露的API等元数据。
		//SAP UI5框架解析自定义控件的属性，自动为这些属性生成读写访问其setter和getter
		metadata : {
			//定义该自定义控件的属性，一个类型为int的值，默认值为0
			properties : {
				value: 	{type : "int", defaultValue : 0}
			},
			//通过三个名为"_rating","_label","_button"的聚合，
			//分别维护自定义控件同三个SAP UI5标准控件的聚合关系。
			//这些聚合关系为一一对应，即一个人自定义控件，最多只能拥有
			//一个RatingIndicator，一个Label，一个Button
			aggregations : {
				_rating : {type : "sap.m.RatingIndicator", multiple: false, visibility : "hidden"},
				_label : {type : "sap.m.Label", multiple: false, visibility : "hidden"},
				_button : {type : "sap.m.Button", multiple: false, visibility : "hidden"}
			},
			//用户可重复对一个产品进行评分，每次评分时，会抛出change事件，将新的评分参数传递到事件对象里。
			events : {
				change : {
					parameters : {
						value : {type : "int"}
					}
				}
			}
		},
		init : function () {
			this.setAggregation("_rating", new RatingIndicator({
				value: this.getValue(),
				iconSize: "2rem",
				visualMode: "Half",
				liveChange: this._onRate.bind(this)
			}));
			this.setAggregation("_label", new Label({
				text: "{i18n>productRatingLabelInitial}"
			}).addStyleClass("sapUiSmallMargin"));
			this.setAggregation("_button", new Button({
				text: "{i18n>productRatingButton}",
				press: this._onSubmit.bind(this)
			}).addStyleClass("sapUiTinyMarginTopBottom"));
		},

		setValue: function (fValue) {
			this.setProperty("value", fValue, true);
			this.getAggregation("_rating").setValue(fValue);
		},

		reset: function () {
			var oResourceBundle = this.getModel("i18n").getResourceBundle();

			this.setValue(0);
			this.getAggregation("_label").setDesign("Standard");
			this.getAggregation("_rating").setEnabled(true);
			this.getAggregation("_label").setText(oResourceBundle.getText("productRatingLabelInitial"));
			this.getAggregation("_button").setEnabled(true);
		},

		_onRate : function (oEvent) {
			var oRessourceBundle = this.getModel("i18n").getResourceBundle();
			var fValue = oEvent.getParameter("value");

			this.setProperty("value", fValue, true);

			this.getAggregation("_label").setText(oRessourceBundle.getText("productRatingLabelIndicator", [fValue, oEvent.getSource().getMaxValue()]));
			this.getAggregation("_label").setDesign("Bold");
		},
//点击rate按钮后，将评分和按钮禁用，避免重复评分，但可通过刷新页面重新评分
		_onSubmit : function (oEvent) {
			var oResourceBundle = this.getModel("i18n").getResourceBundle();

			this.getAggregation("_rating").setEnabled(false);
			this.getAggregation("_label").setText(oResourceBundle.getText("productRatingLabelFinal"));
			this.getAggregation("_button").setEnabled(false);
			this.fireEvent("change", {
				value: this.getValue()
			});
		},
		//渲染器，当XML视图里的控件被实例化时，渲染器负责基于这个控件的数据
		//生成对应的HTML源代码，然后添加到DOM树中
		renderer : function (oRm, oControl) {
			oRm.openStart("div", oControl);
			oRm.class("myAppDemoWTProductRating");
			oRm.openEnd();
			oRm.renderControl(oControl.getAggregation("_rating"));
			oRm.renderControl(oControl.getAggregation("_label"));
			oRm.renderControl(oControl.getAggregation("_button"));
			oRm.close("div");
		}
	});
});