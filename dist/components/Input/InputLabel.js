var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends"));var _objectWithoutProperties2=_interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));var _propTypes=require("prop-types");var _react=_interopRequireDefault(require("react"));var _common=require("../../common");var _Text=_interopRequireDefault(require("../Text"));var _InputLabel=_interopRequireDefault(require("./InputLabel.style"));var _jsxFileName="/Users/soyjavi/git/minube/reactor/components/Input/InputLabel.js";var COLOR=_common.THEME.COLOR;var InputLabel=function InputLabel(_ref){var color=_ref.color,focus=_ref.focus,error=_ref.error,inherit=(0,_objectWithoutProperties2.default)(_ref,["color","focus","error"]);var textColor;if(focus)textColor=color;if(error)textColor=COLOR.ERROR;return _react.default.createElement(_Text.default,(0,_extends2.default)({},inherit,{color:textColor,numberOfLines:1,subtitle:true,level:3,lighten:true,style:[_InputLabel.default.container,inherit.style],__source:{fileName:_jsxFileName,lineNumber:19}}));};InputLabel.propTypes={color:_propTypes.string,focus:_propTypes.bool,error:_propTypes.bool};InputLabel.defaultProps={color:COLOR.PRIMARY,focus:false,error:false};var _default=InputLabel;exports.default=_default;