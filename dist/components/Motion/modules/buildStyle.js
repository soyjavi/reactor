var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));var _objectSpread2=_interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));var _objectWithoutProperties2=_interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));var _common=require("../../../common");var IS_WEB=_common.ENV.IS_WEB;var MOTION=_common.THEME.MOTION;var TRANSFORM_PROPERTIES=['scale','translateX','translateY','rotate'];var _default=function _default(){var _ref=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{},_ref$props=_ref.props;_ref$props=_ref$props===void 0?{}:_ref$props;var _ref$props$delay=_ref$props.delay,delay=_ref$props$delay===void 0?0:_ref$props$delay,duration=_ref$props.duration,useNativeDriver=_ref$props.useNativeDriver,_ref$state=_ref.state;_ref$state=_ref$state===void 0?{}:_ref$state;var _ref$state$timeline=_ref$state.timeline,timeline=_ref$state$timeline===void 0?[]:_ref$state$timeline,state=(0,_objectWithoutProperties2.default)(_ref$state,["timeline"]);if(timeline.length===0)return undefined;var style={};timeline.forEach(function(_ref2){var value=_ref2.value,property=_ref2.property;var newValue=useNativeDriver?value:state[property];style=(0,_objectSpread2.default)({},style,TRANSFORM_PROPERTIES.includes(property)?{transform:[(0,_defineProperty2.default)({},property,newValue)]}:(0,_defineProperty2.default)({},property,newValue));});if(useNativeDriver&&IS_WEB){style=(0,_objectSpread2.default)({},style,{transitionDelay:delay+"ms",transitionDuration:duration+"ms",transitionProperty:Object.keys(style).join(', '),transitionTimingFunction:MOTION.EASE});}return style;};exports.default=_default;