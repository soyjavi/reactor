var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _common=require("../../../common");var _embedUrl=_interopRequireDefault(require("./embedUrl"));var COLOR=_common.THEME.COLOR;var _default=function _default(_ref){var autoPlay=_ref.autoPlay,controls=_ref.controls,height=_ref.height,loop=_ref.loop,source=_ref.source,muted=_ref.muted,width=_ref.width;var embed=(0,_embedUrl.default)(source);var css='position: absolute; left: 0; top: 0; margin: 0; padding: 0; overflow: hidden;';return!embed?"<video\n      "+(autoPlay?'autoplay':'')+" "+(controls?'controls':'')+" "+(loop?'loop':'')+" "+(muted?'muted':'')+"\n      height=\"100%\"\n      playsinline\n      preload=\"true\"\n      src=\""+source+"\"\n      style=\"object-fit: cover; background: "+COLOR.BASE+"; "+css+"\"\n      webkit-playsinline\n      width=\"100%\"\n    />":"<iframe\n      allowtransparency=\"true\"\n      frameBorder=\"0\"\n      src=\""+embed+"&autoplay="+(autoPlay?1:0)+"\"\n      height=\""+height+"\"\n      style=\"background: transparent; "+css+"\"\n      title=\""+embed+"\"\n      width=\""+width+"\"\n    />";};exports.default=_default;