var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _objectSpread2=_interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));var _reactNative=require("react-native");var _common=require("../../common");var _default=_reactNative.StyleSheet.create({container:(0,_objectSpread2.default)({height:'100%',width:'100%',overflow:'hidden'},_reactNative.Platform.select({web:{height:!_common.ENV.IS_TEST&&!_common.ENV.IS_SERVER?window.innerHeight:undefined,width:'100vw'}}))});exports.default=_default;