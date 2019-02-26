var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _react=_interopRequireDefault(require("react"));var _react2=require("@storybook/react");var _addonActions=require("@storybook/addon-actions");var _react3=require("@storybook/addon-knobs/react");var _Dialog=_interopRequireDefault(require("./Dialog"));var _Text=_interopRequireDefault(require("../Text"));var _jsxFileName="/Users/soyjavi/git/minube/reactor/components/Dialog/Dialog.story.js";var STYLE={backgroundColor:'rgba(0,255,0,0.25)'};var STYLE_CONTAINER={backgroundColor:'rgba(0,255,0,0.25)',height:'50%'};(0,_react2.storiesOf)('✅ Dialog',module).add('default',function(){return _react.default.createElement(_Dialog.default,{__source:{fileName:_jsxFileName,lineNumber:14}});}).add('visible',function(){return _react.default.createElement(_Dialog.default,{visible:true,__source:{fileName:_jsxFileName,lineNumber:17}});}).add('background (disabled)',function(){return _react.default.createElement(_Dialog.default,{background:false,visible:true,__source:{fileName:_jsxFileName,lineNumber:20}});}).add('title',function(){return _react.default.createElement(_Dialog.default,{title:"Hello world",visible:true,__source:{fileName:_jsxFileName,lineNumber:23}});}).add('highlight',function(){return _react.default.createElement(_Dialog.default,{highlight:true,title:"Hello world",visible:true,style:STYLE,__source:{fileName:_jsxFileName,lineNumber:26}});}).add('children',function(){return _react.default.createElement(_Dialog.default,{title:"Hello world",visible:true,__source:{fileName:_jsxFileName,lineNumber:29}},_react.default.createElement(_Text.default,{__source:{fileName:_jsxFileName,lineNumber:30}},"lorem ipsum..."));}).add('reverse',function(){return _react.default.createElement(_Dialog.default,{reverse:true,visible:true,__source:{fileName:_jsxFileName,lineNumber:34}});}).add('⚡ onClose',function(){return _react.default.createElement(_Dialog.default,{title:"Hello world",onClose:(0,_addonActions.action)('Dialog.onClose()'),visible:true,__source:{fileName:_jsxFileName,lineNumber:37}});}).add('⚡ onClose + highlight',function(){return _react.default.createElement(_Dialog.default,{title:"Hello world",highlight:true,onClose:(0,_addonActions.action)('Dialog.onClose()'),visible:true,style:STYLE,__source:{fileName:_jsxFileName,lineNumber:40}});}).add('style',function(){return _react.default.createElement(_Dialog.default,{title:"Hello world",style:STYLE,visible:true,__source:{fileName:_jsxFileName,lineNumber:43}});}).add('styleContainer',function(){return _react.default.createElement(_Dialog.default,{title:"Hello world",styleContainer:STYLE_CONTAINER,visible:true,__source:{fileName:_jsxFileName,lineNumber:46}});}).add('🏀 Playground',function(){return _react.default.createElement(_Dialog.default,{background:(0,_react3.boolean)('background',true),highlight:(0,_react3.boolean)('highlight',true),reverse:(0,_react3.boolean)('reverse',false),onClose:(0,_addonActions.action)('Dialog.onClose()'),onSubmit:(0,_addonActions.action)('Dialog.onSubmit()'),title:(0,_react3.text)('title','Title'),visible:(0,_react3.boolean)('visible',true),style:(0,_react3.object)('style',STYLE),styleContainer:(0,_react3.object)('styleContainer',STYLE_CONTAINER),__source:{fileName:_jsxFileName,lineNumber:49}},_react.default.createElement(_Text.default,{__source:{fileName:_jsxFileName,lineNumber:60}},"Example of children"));});