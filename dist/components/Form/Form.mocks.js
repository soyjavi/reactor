Object.defineProperty(exports,"__esModule",{value:true});exports.STYLE=exports.VALUE=exports.ATTRIBUTES=void 0;var _InputSelect=require("../InputSelect/InputSelect.mocks");var ATTRIBUTES={username:{disabled:true,required:true,defaultValue:'soyjavi',icon:'twitter'},password:{required:true,defaultValue:'soyjavi',icon:'twitter'},mail:{keyboard:'email-address',placeholder:'Your email...',required:true,hint:'we will not send you spam.',inline:3},phone:{keyboard:'phone-pad',placeholder:'000 000 000',inline:3},phoneCountryCode:{countryCode:true,keyboard:'phone-pad',placeholder:'+00 000 000 000',hint:'Using property countryCode',inline:3},bio:{lines:4},role:{required:true,type:'select',defaultValue:'backend',dataSource:_InputSelect.DATASOURCE_STRING,inline:2},roleAdvanced:{required:true,type:'select',defaultValue:1,dataSource:_InputSelect.DATASOURCE,inline:2},avatar:{type:'image',defaultValue:'http://soyjavi.com/assets/images/soyjavi.jpg'},twitter:{icon:'twitter',inline:3},isPublic:{type:'bool',inline:3},isPrivate:{type:'bool',inline:3},isOption1:{type:'option',label:'Option'},isOption2:{type:'option',label:'Option 2'},isOption3:{type:'option',label:'Option 3'},isOptionRounded:{type:'option',rounded:false,label:'Checkbox'},social:{title:'Social Networks',attributes:{twitter:{icon:'twitter',inline:3},facebook:{icon:'facebook',inline:3},github:{inline:3,required:true}}},languages:{type:'list'},terms:{type:'option',label:'ACCEPT, terms & conditions',rounded:false}};exports.ATTRIBUTES=ATTRIBUTES;var VALUE={username:'soyjavi',isPublic:true,social:{twitter:'soyjavi',facebook:'😅'},languages:['JavaScript','CoffeeScript','C++']};exports.VALUE=VALUE;var STYLE={backgroundColor:'rgba(255,255,255,1)',padding:20};exports.STYLE=STYLE;