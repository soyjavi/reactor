var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _react=_interopRequireDefault(require("react"));var _react2=require("@storybook/react");var _addonActions=require("@storybook/addon-actions");var _react3=require("@storybook/addon-knobs/react");var _InputOption=_interopRequireDefault(require("./InputOption"));var _jsxFileName="/Users/soyjavi/git/minube/reactor/components/InputOption/InputOption.story.js";var style={backgroundColor:'rgba(0,255,0,0.25)',padding:10};var LABEL='Lorem Ipsum...';(0,_react2.storiesOf)('✅ InputOption',module).add('default',function(){return _react.default.createElement(_InputOption.default,{__source:{fileName:_jsxFileName,lineNumber:17}});}).add('label',function(){return _react.default.createElement(_InputOption.default,{label:LABEL,__source:{fileName:_jsxFileName,lineNumber:20}});}).add('value',function(){return _react.default.createElement(_InputOption.default,{value:true,__source:{fileName:_jsxFileName,lineNumber:23}});}).add('rounded (false)',function(){return _react.default.createElement(_InputOption.default,{rounded:false,__source:{fileName:_jsxFileName,lineNumber:26}});}).add('inherit:style',function(){return _react.default.createElement(_InputOption.default,{style:style,__source:{fileName:_jsxFileName,lineNumber:29}});}).add('⚡ onChange',function(){return _react.default.createElement(_InputOption.default,{onChange:(0,_addonActions.action)('InputOption.onChange()'),__source:{fileName:_jsxFileName,lineNumber:32}});}).add('🏀 Playground',function(){return _react.default.createElement(_InputOption.default,{label:(0,_react3.text)('label',LABEL),value:(0,_react3.boolean)('value',true),rounded:(0,_react3.boolean)('rounded',true),onChange:(0,_addonActions.action)('InputOption.onChange()'),style:(0,_react3.object)('style',style),__source:{fileName:_jsxFileName,lineNumber:35}});});