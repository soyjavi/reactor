var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _regenerator=_interopRequireDefault(require("@babel/runtime/regenerator"));var _objectSpread2=_interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));var _objectWithoutProperties2=_interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));var _environment=_interopRequireDefault(require("../../../common/environment"));var _BoardingPass=require("../../../components/BoardingPass");var _entropy=_interopRequireDefault(require("./entropy"));var IS_PRODUCTION=_environment.default.IS_PRODUCTION,IS_WEB=_environment.default.IS_WEB,PKG=_environment.default.PKG;var browserName=_entropy.default.browserName,browserVersion=_entropy.default.browserVersion,deviceManufacturer=_entropy.default.deviceManufacturer,deviceModel=_entropy.default.deviceModel,osName=_entropy.default.osName,osVersion=_entropy.default.osVersion,locale=_entropy.default.locale,platform=_entropy.default.platform,totalMemory=_entropy.default.totalMemory,userAgent=_entropy.default.userAgent,screenProperties=(0,_objectWithoutProperties2.default)(_entropy.default,["browserName","browserVersion","deviceManufacturer","deviceModel","osName","osVersion","locale","platform","totalMemory","userAgent"]);var _callee=function _callee(){var event,method,props,_args=arguments;return _regenerator.default.async(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:event=_args.length>0&&_args[0]!==undefined?_args[0]:{};method=_args.length>1&&_args[1]!==undefined?_args[1]:'event';props=(0,_objectSpread2.default)({device_manufacturer:deviceManufacturer,device_model:deviceModel,language:locale,library:{name:PKG.name,version:PKG.version},os_name:IS_WEB?browserName:osName,os_version:IS_WEB?browserVersion:osVersion,platform:IS_WEB?'Web':osName},event);if(method==='session'){props.user_properties={$set:(0,_objectSpread2.default)({browser:{name:browserName,version:browserVersion},os:{name:osName,version:osVersion},screen:screenProperties,totalMemory:totalMemory},event.userProperties)};}(0,_BoardingPass.fetch)({method:'POST',endpoint:IS_PRODUCTION?'api.minube.com':'dev.api.minube.com',secure:true,service:"tracking/"+method,body:JSON.stringify(props)});case 5:case"end":return _context.stop();}}});};exports.default=_callee;