var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _objectSpread2=_interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));var _reactNative=require("react-native");var _common=require("../../common");var BORDER_RADIUS=_common.THEME.BORDER_RADIUS,COLOR=_common.THEME.COLOR,UNIT=_common.THEME.UNIT;var _default=_reactNative.StyleSheet.create({content:{backgroundColor:COLOR.BASE},borderRadius:{borderRadius:BORDER_RADIUS},image:{opacity:0.8},info:(0,_objectSpread2.default)({},_common.LAYOUT.STYLE.CENTERED,{position:'absolute',left:0,height:'100%',width:'100%',padding:UNIT,alignSelf:'center'}),small:{height:UNIT*10},text:{color:COLOR.WHITE,textAlign:'center'}});exports.default=_default;