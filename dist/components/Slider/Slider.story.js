var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends"));var _toConsumableArray2=_interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));var _react=_interopRequireDefault(require("react"));var _react2=require("@storybook/react");var _react3=require("@storybook/addon-knobs/react");var _ListingCard=_interopRequireDefault(require("../ListingCard"));var _PictureCard=_interopRequireDefault(require("../PictureCard"));var _Slider=_interopRequireDefault(require("./Slider"));var _jsxFileName="/Users/soyjavi/git/minube/reactor/components/Slider/Slider.story.js";var dataSource=(0,_toConsumableArray2.default)(Array(16).keys()).map(function(index){return{category:"Category "+index,title:"Title "+index,rating:{value:index},image:"https://picsum.photos/320/200?image=1"+(index+1)};});var ItemListingCard=function ItemListingCard(_ref){var data=_ref.data;return _react.default.createElement(_ListingCard.default,(0,_extends2.default)({},data,{__source:{fileName:_jsxFileName,lineNumber:17}}));};var ItemPictureCard=function ItemPictureCard(_ref2){var data=_ref2.data;return _react.default.createElement(_PictureCard.default,(0,_extends2.default)({square:true},data,{__source:{fileName:_jsxFileName,lineNumber:18}}));};var STYLE={backgroundColor:'rgba(0,255,0,0.25)',padding:20};(0,_react2.storiesOf)('✅ Slider',module).add('default',function(){return _react.default.createElement(_Slider.default,{dataSource:dataSource,item:ItemListingCard,__source:{fileName:_jsxFileName,lineNumber:23}});}).add('navigation',function(){return _react.default.createElement(_Slider.default,{dataSource:dataSource,item:ItemListingCard,navigation:true,__source:{fileName:_jsxFileName,lineNumber:26}});}).add('itemMargin',function(){return _react.default.createElement(_Slider.default,{dataSource:dataSource,item:ItemListingCard,itemMargin:16,__source:{fileName:_jsxFileName,lineNumber:29}});}).add('steps (2)',function(){return _react.default.createElement(_Slider.default,{dataSource:dataSource,steps:2,item:ItemListingCard,__source:{fileName:_jsxFileName,lineNumber:32}});}).add('momentum',function(){return _react.default.createElement(_Slider.default,{dataSource:dataSource,momentum:true,item:ItemListingCard,__source:{fileName:_jsxFileName,lineNumber:35}});}).add('title',function(){return _react.default.createElement(_Slider.default,{dataSource:dataSource,title:"Explora nuevos destinos",item:ItemListingCard,__source:{fileName:_jsxFileName,lineNumber:38}});}).add('caption',function(){return _react.default.createElement(_Slider.default,{caption:"Muy del estilo de Chiang Mai",dataSource:dataSource,title:"Explora nuevos destinos",item:ItemListingCard,__source:{fileName:_jsxFileName,lineNumber:41}});}).add('style',function(){return _react.default.createElement(_Slider.default,{dataSource:dataSource,item:ItemPictureCard,style:STYLE,__source:{fileName:_jsxFileName,lineNumber:49}});}).add('🏀 Playground',function(){return _react.default.createElement(_Slider.default,{caption:(0,_react3.text)('caption','Muy del estilo de Chiang Mai'),dataSource:dataSource,itemMargin:(0,_react3.number)('itemMargin',10),navigation:(0,_react3.boolean)('navigation',true),momentum:(0,_react3.boolean)('momentum',false),steps:(0,_react3.number)('steps',1),title:(0,_react3.text)('title','Explora nuevos destinos'),item:ItemPictureCard,style:(0,_react3.object)('style',STYLE),__source:{fileName:_jsxFileName,lineNumber:52}});});