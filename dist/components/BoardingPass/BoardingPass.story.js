var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends"));var _react=_interopRequireDefault(require("react"));var _reactNative=require("react-native");var _react2=require("@storybook/react");var _addonActions=require("@storybook/addon-actions");var _react3=require("@storybook/addon-knobs/react");var _BoardingPass=_interopRequireDefault(require("./BoardingPass"));var _jsxFileName="/Users/soyjavi/git/minube/reactor/components/BoardingPass/BoardingPass.story.js";var children=_react.default.createElement(_reactNative.Text,{__source:{fileName:_jsxFileName,lineNumber:9}},"Children component...");var Loading=_react.default.createElement(_reactNative.Text,{__source:{fileName:_jsxFileName,lineNumber:10}},"Loading...");var endpoint='httpbin.org/';var service='get';var PROPS={endpoint:endpoint,service:service};(0,_react2.storiesOf)('✅ BoardingPass',module).add('default',function(){return _react.default.createElement(_BoardingPass.default,{__source:{fileName:_jsxFileName,lineNumber:18}},children);}).add('enabled (false)',function(){return _react.default.createElement(_BoardingPass.default,{enabled:false,__source:{fileName:_jsxFileName,lineNumber:23}},children);}).add('endpoint & method',function(){return _react.default.createElement(_BoardingPass.default,(0,_extends2.default)({},PROPS,{__source:{fileName:_jsxFileName,lineNumber:28}}),children);}).add('loading',function(){return _react.default.createElement(_BoardingPass.default,(0,_extends2.default)({loading:Loading},PROPS,{__source:{fileName:_jsxFileName,lineNumber:33}}),children);});