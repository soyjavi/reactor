var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _objectSpread2=_interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));var _reactNative=require("react-native");var _common=require("../../common");var COLOR=_common.THEME.COLOR,OFFSET=_common.THEME.OFFSET,UNIT=_common.THEME.UNIT;var _default=_reactNative.StyleSheet.create({dialog:{minWidth:'auto',width:UNIT*36},options:{borderTopColor:COLOR.BACKGROUND,borderTopWidth:1,marginVertical:OFFSET},option:(0,_objectSpread2.default)({},_common.LAYOUT.STYLE.ROW,{paddingVertical:OFFSET,borderBottomColor:COLOR.BACKGROUND,borderBottomWidth:1}),icon:{marginRight:UNIT}});exports.default=_default;