var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _react=_interopRequireDefault(require("react"));var _react2=require("@storybook/react");var _react3=require("@storybook/addon-knobs/react");var _common=require("../../common");var _ProgressBar=_interopRequireDefault(require("./ProgressBar"));var _jsxFileName="/Users/soyjavi/git/minube/reactor/components/ProgressBar/ProgressBar.story.js";(0,_react2.storiesOf)('✅ ProgressBar',module).add('default',function(){return _react.default.createElement(_ProgressBar.default,{__source:{fileName:_jsxFileName,lineNumber:10}});}).add('progress',function(){return _react.default.createElement(_ProgressBar.default,{progress:0.33,__source:{fileName:_jsxFileName,lineNumber:13}});}).add('color',function(){return _react.default.createElement(_ProgressBar.default,{progress:0.5,color:_common.THEME.COLOR.SECONDARY,__source:{fileName:_jsxFileName,lineNumber:16}});}).add('trackColor',function(){return _react.default.createElement(_ProgressBar.default,{progress:0.5,trackColor:_common.THEME.COLOR.ERROR,__source:{fileName:_jsxFileName,lineNumber:19}});}).add('style',function(){return _react.default.createElement(_ProgressBar.default,{progress:0.5,style:{borderRadius:_common.THEME.OFFSET/2,height:_common.THEME.OFFSET},__source:{fileName:_jsxFileName,lineNumber:22}});}).add('🏀 Playground',function(){return _react.default.createElement(_ProgressBar.default,{progress:(0,_react3.number)('progress',0.5),indeterminate:(0,_react3.boolean)('indeterminate',false),color:(0,_react3.color)('color',_common.THEME.COLOR.SECONDARY),trackColor:(0,_react3.color)('trackColor',_common.THEME.COLOR.BACKGROUND),__source:{fileName:_jsxFileName,lineNumber:25}});});