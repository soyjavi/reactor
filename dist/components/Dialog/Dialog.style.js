var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _objectSpread2=_interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));var _reactNative=require("react-native");var _common=require("../../common");var BORDER_RADIUS=_common.THEME.BORDER_RADIUS,COLOR=_common.THEME.COLOR,ELEVATION=_common.THEME.ELEVATION,OFFSET=_common.THEME.OFFSET;var _default=_reactNative.StyleSheet.create({container:{height:'100%',left:0,maxHeight:_common.ENV.IS_WEB?'100vh':'100%',position:_common.ENV.IS_WEB?'fixed':'absolute',top:0,width:'100%',zIndex:2},background:{backgroundColor:'rgba(0,0,0,0.5)'},children:{paddingHorizontal:OFFSET,paddingBottom:OFFSET},frame:(0,_objectSpread2.default)({},ELEVATION.LARGE,{backgroundColor:COLOR.BACKGROUND,borderRadius:BORDER_RADIUS}),header:(0,_objectSpread2.default)({},_common.LAYOUT.STYLE.ROW,{alignItems:'flex-start',justifyContent:'flex-end'}),safeArea:(0,_objectSpread2.default)({},_common.LAYOUT.STYLE.CENTERED,{flex:1}),scroll:{borderBottomColor:COLOR.BASE,borderBottomWidth:1,borderTopColor:COLOR.BASE,borderTopWidth:1},title:{flex:1,padding:OFFSET}});exports.default=_default;