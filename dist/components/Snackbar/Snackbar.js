var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends"));var _objectWithoutProperties2=_interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));var _propTypes=require("prop-types");var _react=_interopRequireDefault(require("react"));var _reactNative=require("react-native");var _common=require("../../common");var _Button=_interopRequireDefault(require("../Button"));var _Dialog=_interopRequireDefault(require("../Dialog"));var _Text=_interopRequireDefault(require("../Text"));var _Snackbar=_interopRequireDefault(require("./Snackbar.style"));var _jsxFileName="/Users/soyjavi/git/minube/reactor/components/Snackbar/Snackbar.js";var COLOR=_common.THEME.COLOR;var Snackbar=function Snackbar(_ref){var button=_ref.button,caption=_ref.caption,onPress=_ref.onPress,inherit=(0,_objectWithoutProperties2.default)(_ref,["button","caption","onPress"]);return _react.default.createElement(_Dialog.default,{visible:inherit.visible,background:false,style:_Snackbar.default.frame,styleContainer:_Snackbar.default.dialog,__source:{fileName:_jsxFileName,lineNumber:16}},_react.default.createElement(_reactNative.View,{style:_Snackbar.default.container,__source:{fileName:_jsxFileName,lineNumber:17}},_react.default.createElement(_Text.default,{level:2,style:_Snackbar.default.caption,__source:{fileName:_jsxFileName,lineNumber:18}},caption),button&&_react.default.createElement(_Button.default,(0,_extends2.default)({color:COLOR.PRIMARY},inherit,{contained:false,small:true,onPress:onPress,title:button.toUpperCase(),__source:{fileName:_jsxFileName,lineNumber:22}}))));};Snackbar.propTypes={button:_propTypes.string,caption:_propTypes.string,onPress:_propTypes.func};Snackbar.defaultProps={button:undefined,caption:undefined,onPress:undefined};var _default=Snackbar;exports.default=_default;