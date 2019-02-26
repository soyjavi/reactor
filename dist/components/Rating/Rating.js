var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends"));var _toConsumableArray2=_interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));var _objectWithoutProperties2=_interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));var _propTypes=require("prop-types");var _react=_interopRequireDefault(require("react"));var _reactNative=require("react-native");var _Text=_interopRequireDefault(require("../Text"));var _Rating=_interopRequireDefault(require("./Rating.style"));var _jsxFileName="/Users/soyjavi/git/minube/reactor/components/Rating/Rating.js";var Rating=function Rating(_ref){var caption=_ref.caption,color=_ref.color,count=_ref.count,showValue=_ref.showValue,textColor=_ref.textColor,value=_ref.value,inherit=(0,_objectWithoutProperties2.default)(_ref,["caption","color","count","showValue","textColor","value"]);return _react.default.createElement(_reactNative.View,{style:_Rating.default.container,__source:{fileName:_jsxFileName,lineNumber:11}},(0,_toConsumableArray2.default)(Array(5).keys()).map(function(rate){return _react.default.createElement(_Text.default,(0,_extends2.default)({},inherit,{color:color,key:rate,style:[_Rating.default.rate,inherit.style],__source:{fileName:_jsxFileName,lineNumber:13}}),rate<Math.floor(value)?'★':'☆');}),value>0&&showValue&&_react.default.createElement(_Text.default,{caption:true,color:textColor,style:inherit.style,__source:{fileName:_jsxFileName,lineNumber:18}}," "+value+"/5"),count>0&&_react.default.createElement(_Text.default,{caption:true,color:textColor,style:inherit.style,__source:{fileName:_jsxFileName,lineNumber:24}}," ("+(count+" "+caption).trim()+")"));};Rating.propTypes={caption:_propTypes.string,color:_propTypes.string,count:_propTypes.number,showValue:_propTypes.bool,textColor:_propTypes.string,value:_propTypes.number};Rating.defaultProps={caption:'',color:undefined,count:0,showValue:true,textColor:undefined,value:0};var _default=Rating;exports.default=_default;