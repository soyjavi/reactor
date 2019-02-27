var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _objectSpread2=_interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));var _reactNative=require("react-native");var _common=require("../../common");var COLOR=_common.THEME.COLOR,UNIT=_common.THEME.UNIT,SPACE=_common.THEME.SPACE;var SIZE=UNIT*2;var _default=_reactNative.StyleSheet.create({container:(0,_objectSpread2.default)({},_common.LAYOUT.STYLE.ROW,{marginBottom:SPACE.REGULAR}),icon:{height:SIZE*0.7,width:SIZE*0.7},label:{marginBottom:0,marginLeft:UNIT},option:(0,_objectSpread2.default)({},_common.LAYOUT.STYLE.CENTERED,{height:SIZE,width:SIZE,borderWidth:2,borderColor:COLOR.TEXT_LIGHTEN,borderRadius:SIZE/10}),rounded:{borderRadius:SIZE/2},selected:{borderColor:COLOR.PRIMARY,backgroundColor:COLOR.PRIMARY}});exports.default=_default;