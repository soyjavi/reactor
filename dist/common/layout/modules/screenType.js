Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _default=function _default(){var width=arguments.length>0&&arguments[0]!==undefined?arguments[0]:360;return{TINY:width<360,PHONE:width>=360&&width<376,TABLET:width>=376&&width<510,SMALL:width>=510&&width<720,REGULAR:width>=720&&width<1024,LARGE:width>=1024};};exports.default=_default;