var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _react=_interopRequireDefault(require("react"));var _react2=require("@storybook/react");var _react3=require("@storybook/addon-knobs/react");var _Activity=_interopRequireDefault(require("./Activity"));var _jsxFileName="/Users/soyjavi/git/minube/reactor/components/Activity/Activity.story.js";(0,_react2.storiesOf)('✅ Activity',module).add('default',function(){return _react.default.createElement(_Activity.default,{__source:{fileName:_jsxFileName,lineNumber:9}});}).add('color',function(){return _react.default.createElement(_Activity.default,{color:"green",__source:{fileName:_jsxFileName,lineNumber:12}});}).add('size',function(){return _react.default.createElement(_Activity.default,{size:"large",__source:{fileName:_jsxFileName,lineNumber:15}});}).add('🏀 Playground',function(){return _react.default.createElement(_Activity.default,{animating:(0,_react3.boolean)('animating',true),color:(0,_react3.color)('color','green'),hidesWhenStopped:(0,_react3.boolean)('hidesWhenStopped',false),size:(0,_react3.select)('size',['small','large'],'small'),__source:{fileName:_jsxFileName,lineNumber:18}});});