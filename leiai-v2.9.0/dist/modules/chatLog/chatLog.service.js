'use strict';const _0x462187=_0x38ae;(function(_0x2aced,_0x37306b){const _0x2b7b45=_0x38ae,_0x13e246=_0x2aced();while(!![]){try{const _0x2a621b=parseInt(_0x2b7b45(0x1c5))/0x1+-parseInt(_0x2b7b45(0x206))/0x2+-parseInt(_0x2b7b45(0x1f6))/0x3*(parseInt(_0x2b7b45(0x1ac))/0x4)+-parseInt(_0x2b7b45(0x1af))/0x5+parseInt(_0x2b7b45(0x1d4))/0x6+parseInt(_0x2b7b45(0x1c0))/0x7+parseInt(_0x2b7b45(0x1d5))/0x8;if(_0x2a621b===_0x37306b)break;else _0x13e246['push'](_0x13e246['shift']());}catch(_0x4c4ad9){_0x13e246['push'](_0x13e246['shift']());}}}(_0x4f84,0x880a4));function _0x38ae(_0x54e607,_0x31d49f){const _0x4f842b=_0x4f84();return _0x38ae=function(_0x38aea6,_0x4facac){_0x38aea6=_0x38aea6-0x1a7;let _0x5c841e=_0x4f842b[_0x38aea6];return _0x5c841e;},_0x38ae(_0x54e607,_0x31d49f);}var __decorate=this&&this[_0x462187(0x1dd)]||function(_0x1d394e,_0x4e330a,_0x1adc12,_0x3dcd7a){const _0x27e366=_0x462187;var _0x3ec439=arguments['length'],_0x5d7591=_0x3ec439<0x3?_0x4e330a:_0x3dcd7a===null?_0x3dcd7a=Object['getOwnPropertyDescriptor'](_0x4e330a,_0x1adc12):_0x3dcd7a,_0x3733dc;if(typeof Reflect===_0x27e366(0x1d9)&&typeof Reflect['decorate']===_0x27e366(0x1f5))_0x5d7591=Reflect[_0x27e366(0x1df)](_0x1d394e,_0x4e330a,_0x1adc12,_0x3dcd7a);else{for(var _0x4684f5=_0x1d394e[_0x27e366(0x1e7)]-0x1;_0x4684f5>=0x0;_0x4684f5--)if(_0x3733dc=_0x1d394e[_0x4684f5])_0x5d7591=(_0x3ec439<0x3?_0x3733dc(_0x5d7591):_0x3ec439>0x3?_0x3733dc(_0x4e330a,_0x1adc12,_0x5d7591):_0x3733dc(_0x4e330a,_0x1adc12))||_0x5d7591;}return _0x3ec439>0x3&&_0x5d7591&&Object['defineProperty'](_0x4e330a,_0x1adc12,_0x5d7591),_0x5d7591;},__metadata=this&&this[_0x462187(0x1b5)]||function(_0x56958b,_0xfb0015){const _0x4dc382=_0x462187;if(typeof Reflect===_0x4dc382(0x1d9)&&typeof Reflect[_0x4dc382(0x1cb)]==='function')return Reflect['metadata'](_0x56958b,_0xfb0015);},__param=this&&this['__param']||function(_0x488ab9,_0x5cd62e){return function(_0x389333,_0x13ecb8){_0x5cd62e(_0x389333,_0x13ecb8,_0x488ab9);};};function _0x4f84(){const _0x3ddb16=['Not','attachment;\x20filename=','cos','1228078RjAlXN','defineProperty','@nestjs/common','Workbook','ChatGroupEntity','querAllChatLog','chatGroupEntity','你推荐的图片不存在、请检查！','setHeader','chat.xlsx','你操作的图片不存在、请检查！','4WZjCTC','DeductionKey','Repository','1846735sPGhcJ','/q/55','tencent','findOne','__esModule','assistant','__metadata','paintCount','affected','BAD_REQUEST','?x-oss-process=image/resize,w_','HttpException','回答答案','DESC','count','chatLogEntity','find','1070069HoFCUf','design:paramtypes','write','图片成功！','../../common/utils','845299OuFRWz','forEach','assign','findAndCount','user','Content-Disposition','metadata','exportExcel','HttpStatus','ChatLogEntity','rec','querDrawLog','deleteChatLog','xlsx','map','2846844MaANRM','7956264HHXwUT','extend','model','userId','object','saveChatLog','formatDate','prompt','__decorate','username','decorate','InjectRepository','用户邮箱','super','parse','includes','recDrawImg','addWorksheet','length','chatList','ali','answer','用户名','你删除的对话记录不存在、请检查！','?imageView2/1/w/','thumbImg','components','Like','role','@nestjs/typeorm','../user/user.entity','../chatGroup/chatGroup.entity','function','2779701UuSMQx','byAppId','email','ChatLogService','isGroup','type','取消推荐','message_id','CHAT_TYPE','update','group','userEntity','PAINT_TYPE'];_0x4f84=function(){return _0x3ddb16;};return _0x4f84();}Object[_0x462187(0x207)](exports,_0x462187(0x1b3),{'value':!![]}),exports['ChatLogService']=void 0x0;const common_1=require(_0x462187(0x208)),typeorm_1=require(_0x462187(0x1f2)),chatLog_entity_1=require('./chatLog.entity'),typeorm_2=require('typeorm'),balance_constant_1=require('../../common/constants/balance.constant'),user_entity_1=require(_0x462187(0x1f3)),utils_1=require(_0x462187(0x1c4)),ExcelJS=require('exceljs'),chatGroup_entity_1=require(_0x462187(0x1f4));let ChatLogService=class ChatLogService{constructor(_0x168b20,_0x122880,_0x436294){const _0x175242=_0x462187;this['chatLogEntity']=_0x168b20,this['userEntity']=_0x122880,this[_0x175242(0x1a7)]=_0x436294;}async[_0x462187(0x1da)](_0x3e635e){const _0x539651=_0x462187;return await this[_0x539651(0x1be)]['save'](_0x3e635e);}async[_0x462187(0x1d0)](_0x3851ee,_0x5a1ef3){const _0x1de134=_0x462187,{id:_0x3f969a}=_0x3851ee[_0x1de134(0x1c9)],{model:_0x3b4b39}=_0x5a1ef3,_0x316e34={'userId':_0x3f969a,'type':balance_constant_1[_0x1de134(0x1ad)][_0x1de134(0x202)]};_0x3b4b39&&(_0x316e34[_0x1de134(0x1d7)]=_0x3b4b39);const _0x53f406=await this[_0x1de134(0x1be)][_0x1de134(0x1bf)]({'where':_0x316e34,'order':{'id':_0x1de134(0x1bc)},'select':['id',_0x1de134(0x1ea),_0x1de134(0x1dc),_0x1de134(0x1fd),_0x1de134(0x200),_0x1de134(0x1d7),_0x1de134(0x1d6),_0x1de134(0x1fb)]});return _0x53f406['forEach'](_0x226448=>{const _0x13691d=_0x1de134;var _0x358a64;if(_0x226448[_0x13691d(0x1fb)]===_0x13691d(0x1b6)){const _0x1a6967=_0x226448[_0x13691d(0x1d7)]==='mj'?0x136:0xa0,_0x333351=_0x226448[_0x13691d(0x1ea)][_0x13691d(0x1e4)](_0x13691d(0x205))?'tencent':_0x13691d(0x1e9),_0x2162e6=_0x333351===_0x13691d(0x1b1)?_0x13691d(0x1ed)+_0x1a6967+'/q/55':_0x13691d(0x1b9)+_0x1a6967;_0x226448[_0x13691d(0x1ee)]=_0x226448[_0x13691d(0x1ea)]+_0x2162e6;const _0x26e05b=_0x226448[_0x13691d(0x1d6)]?JSON['parse'](_0x226448[_0x13691d(0x1d6)]):null;_0x26e05b&&(_0x26e05b?_0x226448[_0x13691d(0x1fa)]=((_0x358a64=_0x26e05b===null||_0x26e05b===void 0x0?void 0x0:_0x26e05b[_0x13691d(0x1ef)][0x0])===null||_0x358a64===void 0x0?void 0x0:_0x358a64['components']['length'])===0x5:_0x226448[_0x13691d(0x1fa)]=![]);}}),_0x53f406;}async['querAllDrawLog'](_0xb524fd){const _0x1e1df7=_0x462187,{page:page=0x1,size:size=0x14,rec:_0x3c8647,userId:_0x380fd9,model:_0x21f1f9}=_0xb524fd,_0x3e0790={'type':balance_constant_1[_0x1e1df7(0x1ad)][_0x1e1df7(0x202)],'prompt':(0x0,typeorm_2[_0x1e1df7(0x203)])(''),'answer':(0x0,typeorm_2['Not'])('')};_0x3c8647&&Object['assign'](_0x3e0790,{'rec':_0x3c8647}),_0x380fd9&&Object['assign'](_0x3e0790,{'userId':_0x380fd9}),_0x21f1f9&&Object['assign'](_0x3e0790,{'model':_0x21f1f9});const [_0x933b7c,_0x55454b]=await this['chatLogEntity'][_0x1e1df7(0x1c8)]({'order':{'id':_0x1e1df7(0x1bc)},'skip':(page-0x1)*size,'take':size,'where':_0x3e0790});return _0x933b7c[_0x1e1df7(0x1c6)](_0x1fc57c=>{const _0x19e6ef=_0x1e1df7;var _0x563f70;if(_0x1fc57c[_0x19e6ef(0x1fb)]==='paintCount'){const _0x2031d0=_0x1fc57c[_0x19e6ef(0x1d7)]==='mj'?0x136:0xa0,_0x28b589=_0x1fc57c[_0x19e6ef(0x1ea)][_0x19e6ef(0x1e4)]('cos')?_0x19e6ef(0x1b1):_0x19e6ef(0x1e9),_0x59dc53=_0x28b589==='tencent'?'?imageView2/1/w/'+_0x2031d0+_0x19e6ef(0x1b0):_0x19e6ef(0x1b9)+_0x2031d0;_0x1fc57c[_0x19e6ef(0x1ee)]=_0x1fc57c['answer']+_0x59dc53;const _0x34b928=_0x1fc57c[_0x19e6ef(0x1d6)]?JSON[_0x19e6ef(0x1e3)](_0x1fc57c[_0x19e6ef(0x1d6)]):null;_0x34b928&&(_0x34b928?_0x1fc57c['isGroup']=((_0x563f70=_0x34b928===null||_0x34b928===void 0x0?void 0x0:_0x34b928[_0x19e6ef(0x1ef)][0x0])===null||_0x563f70===void 0x0?void 0x0:_0x563f70[_0x19e6ef(0x1ef)][_0x19e6ef(0x1e7)])===0x5:_0x1fc57c['isGroup']=![]);}}),{'rows':_0x933b7c,'count':_0x55454b};}async[_0x462187(0x1e5)](_0x2ae8b2){const _0x5d7cc1=_0x462187,{id:_0x3a28ac}=_0x2ae8b2,_0x52952e=await this[_0x5d7cc1(0x1be)]['findOne']({'where':{'id':_0x3a28ac,'type':balance_constant_1['DeductionKey']['PAINT_TYPE']}});if(!_0x52952e)throw new common_1[(_0x5d7cc1(0x1ba))](_0x5d7cc1(0x1a8),common_1[_0x5d7cc1(0x1cd)][_0x5d7cc1(0x1b8)]);const _0x14f67f=_0x52952e[_0x5d7cc1(0x1cf)]===0x1?0x0:0x1,_0x3ce117=await this[_0x5d7cc1(0x1be)][_0x5d7cc1(0x1ff)]({'id':_0x3a28ac},{'rec':_0x14f67f});if(_0x3ce117['affected']>0x0)return(_0x14f67f?'推荐':_0x5d7cc1(0x1fc))+_0x5d7cc1(0x1c3);throw new common_1['HttpException'](_0x5d7cc1(0x1ab),common_1[_0x5d7cc1(0x1cd)][_0x5d7cc1(0x1b8)]);}async[_0x462187(0x1cc)](_0x3f5bfa,_0x2d9188){const _0x2f3879=_0x462187,_0x48a597={'type':balance_constant_1[_0x2f3879(0x1ad)][_0x2f3879(0x1fe)]},{page:page=0x1,size:size=0x1e,prompt:_0x29ba0e,email:_0x467210}=_0x3f5bfa;_0x29ba0e&&Object['assign'](_0x48a597,{'prompt':(0x0,typeorm_2[_0x2f3879(0x1f0)])('%'+_0x29ba0e+'%')});if(_0x467210){const _0x28d67a=await this[_0x2f3879(0x201)][_0x2f3879(0x1b2)]({'where':{'email':_0x467210}});(_0x28d67a===null||_0x28d67a===void 0x0?void 0x0:_0x28d67a['id'])&&Object[_0x2f3879(0x1c7)](_0x48a597,{'userId':_0x28d67a['id']});}const [_0x4696b4,_0x3dca0f]=await this[_0x2f3879(0x1be)]['findAndCount']({'order':{'id':_0x2f3879(0x1bc)},'skip':(page-0x1)*size,'take':size,'where':_0x48a597}),_0x1a555b=_0x4696b4[_0x2f3879(0x1d3)](_0xabbed=>_0xabbed[_0x2f3879(0x1d8)]),_0x269ac0=await this['userEntity']['find']({'where':{'id':(0x0,typeorm_2['In'])(_0x1a555b)}}),_0x10236e=_0x4696b4[_0x2f3879(0x1d3)](_0x263994=>{const _0x1592c2=_0x2f3879,_0x308c31=_0x269ac0[_0x1592c2(0x1bf)](_0x2d158d=>_0x2d158d['id']===_0x263994[_0x1592c2(0x1d8)]);return{'username':_0x308c31?_0x308c31[_0x1592c2(0x1de)]:'','email':_0x308c31?_0x308c31[_0x1592c2(0x1f8)]:'','prompt':_0x263994[_0x1592c2(0x1dc)],'answer':_0x263994[_0x1592c2(0x1ea)],'createdAt':(0x0,utils_1['formatDate'])(_0x263994['createdAt'])};}),_0x4551e0=new ExcelJS[(_0x2f3879(0x209))](),_0x56df32=_0x4551e0[_0x2f3879(0x1e6)]('chatlog');_0x56df32['columns']=[{'header':_0x2f3879(0x1eb),'key':_0x2f3879(0x1de),'width':0x14},{'header':_0x2f3879(0x1e1),'key':'email','width':0x14},{'header':'提问时间','key':'createdAt','width':0x14},{'header':'提问问题','key':'prompt','width':0x50},{'header':_0x2f3879(0x1bb),'key':_0x2f3879(0x1ea),'width':0x96}],_0x10236e[_0x2f3879(0x1c6)](_0x4c2030=>_0x56df32['addRow'](_0x4c2030)),_0x2d9188[_0x2f3879(0x1a9)]('Content-Type','application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'),_0x2d9188[_0x2f3879(0x1a9)](_0x2f3879(0x1ca),_0x2f3879(0x204)+_0x2f3879(0x1aa)),await _0x4551e0[_0x2f3879(0x1d2)][_0x2f3879(0x1c2)](_0x2d9188),_0x2d9188['end']();}async[_0x462187(0x20b)](_0x52c2c3,_0x15a557){const _0x1a579e=_0x462187,{page:page=0x1,size:size=0x14,userId:_0x42ced9,prompt:_0x2e5b59}=_0x52c2c3,_0x18dd3d={'type':balance_constant_1['DeductionKey'][_0x1a579e(0x1fe)],'prompt':(0x0,typeorm_2['Not'])('')};_0x42ced9&&Object[_0x1a579e(0x1c7)](_0x18dd3d,{'userId':_0x42ced9}),_0x2e5b59&&Object[_0x1a579e(0x1c7)](_0x18dd3d,{'prompt':(0x0,typeorm_2[_0x1a579e(0x1f0)])('%'+_0x2e5b59+'%')});const [_0x58a630,_0x564b59]=await this[_0x1a579e(0x1be)]['findAndCount']({'order':{'id':'DESC'},'skip':(page-0x1)*size,'take':size,'where':_0x18dd3d}),_0x18f874=_0x58a630['map'](_0x173dcf=>_0x173dcf[_0x1a579e(0x1d8)]),_0x2bb350=await this['userEntity'][_0x1a579e(0x1bf)]({'where':{'id':(0x0,typeorm_2['In'])(_0x18f874)},'select':['id',_0x1a579e(0x1de),'email']});return _0x58a630[_0x1a579e(0x1c6)](_0x2e4502=>{const _0x4ca395=_0x1a579e,{username:_0x5abb7a,email:_0x55611a}=_0x2bb350[_0x4ca395(0x1bf)](_0x5e7721=>_0x5e7721['id']===_0x2e4502[_0x4ca395(0x1d8)])||{};_0x2e4502['username']=_0x5abb7a,_0x2e4502['email']=_0x55611a;}),_0x15a557[_0x1a579e(0x1c9)][_0x1a579e(0x1f1)]!==_0x1a579e(0x1e2)&&_0x58a630[_0x1a579e(0x1c6)](_0x545cfc=>_0x545cfc[_0x1a579e(0x1f8)]=(0x0,utils_1['maskEmail'])(_0x545cfc[_0x1a579e(0x1f8)])),{'rows':_0x58a630,'count':_0x564b59};}async[_0x462187(0x1e8)](_0x498bc7,_0x3ed560){const _0x1052aa=_0x462187,{id:_0x283403}=_0x498bc7['user'],{groupId:_0x3c9fea}=_0x3ed560,_0x2cb337={'userId':_0x283403,'isDelete':![]};_0x3c9fea&&Object[_0x1052aa(0x1c7)](_0x2cb337,{'groupId':_0x3c9fea});if(_0x3c9fea){const _0x590a1d=await this['chatGroupEntity'][_0x1052aa(0x1bd)]({'where':{'isDelete':![]}});if(_0x590a1d===0x0)return[];}const _0x5d6082=await this[_0x1052aa(0x1be)][_0x1052aa(0x1bf)]({'where':_0x2cb337});return _0x5d6082[_0x1052aa(0x1d3)](_0x2f7235=>{const _0x2578e2=_0x1052aa,{prompt:_0x4e4e94,role:_0x28b867,answer:_0x4be9be,createdAt:_0x4e1856,model:_0x14c053,conversationOptions:_0x2a2326,requestOptions:_0x2023bb,id:_0x54d81b}=_0x2f7235;return{'chatId':_0x54d81b,'dateTime':(0x0,utils_1[_0x2578e2(0x1db)])(_0x4e1856),'text':_0x28b867==='user'?_0x4e4e94:_0x4be9be,'inversion':_0x28b867==='user','error':![],'conversationOptions':_0x2a2326?JSON[_0x2578e2(0x1e3)](_0x2a2326):null,'requestOptions':_0x2023bb?JSON[_0x2578e2(0x1e3)](_0x2023bb):null};});}async[_0x462187(0x1d1)](_0x1abf60,_0x1bd066){const _0x55af7b=_0x462187,{id:_0xd53eb7}=_0x1abf60[_0x55af7b(0x1c9)],{id:_0x4be61b}=_0x1bd066,_0x2816c1=await this[_0x55af7b(0x1be)]['findOne']({'where':{'id':_0x4be61b,'userId':_0xd53eb7}});if(!_0x2816c1)throw new common_1['HttpException']('你删除的对话记录不存在、请检查！',common_1['HttpStatus']['BAD_REQUEST']);const _0x1a23a8=await this[_0x55af7b(0x1be)][_0x55af7b(0x1ff)]({'id':_0x4be61b},{'isDelete':!![]});if(_0x1a23a8[_0x55af7b(0x1b7)]>0x0)return'删除对话记录成功！';else throw new common_1[(_0x55af7b(0x1ba))](_0x55af7b(0x1ec),common_1[_0x55af7b(0x1cd)][_0x55af7b(0x1b8)]);}async['delByGroupId'](_0x54e619,_0x41e209){const _0x58e037=_0x462187,{groupId:_0x498bf8}=_0x41e209,{id:_0x57db30}=_0x54e619[_0x58e037(0x1c9)],_0x56a26d=await this[_0x58e037(0x1a7)]['findOne']({'where':{'id':_0x498bf8,'userId':_0x57db30}});if(!_0x56a26d)throw new common_1[(_0x58e037(0x1ba))](_0x58e037(0x1ec),common_1['HttpStatus']['BAD_REQUEST']);const _0x2dc64c=await this['chatLogEntity'][_0x58e037(0x1ff)]({'groupId':_0x498bf8},{'isDelete':!![]});if(_0x2dc64c[_0x58e037(0x1b7)]>0x0)return'删除对话记录成功！';if(_0x2dc64c[_0x58e037(0x1b7)]===0x0)throw new common_1[(_0x58e037(0x1ba))]('当前页面已经没有东西可以删除了！',common_1[_0x58e037(0x1cd)][_0x58e037(0x1b8)]);}async[_0x462187(0x1f7)](_0x412b87,_0x3ee7bc){const _0x313caa=_0x462187,{id:_0x484a4b}=_0x412b87[_0x313caa(0x1c9)],{appId:_0x224bed,page:page=0x1,size:size=0xa}=_0x3ee7bc,[_0x43a321,_0x1b9b0c]=await this[_0x313caa(0x1be)]['findAndCount']({'where':{'userId':_0x484a4b,'appId':_0x224bed,'role':_0x313caa(0x1b4)},'order':{'id':_0x313caa(0x1bc)},'take':size,'skip':(page-0x1)*size});return{'rows':_0x43a321,'count':_0x1b9b0c};}};ChatLogService=__decorate([(0x0,common_1['Injectable'])(),__param(0x0,(0x0,typeorm_1['InjectRepository'])(chatLog_entity_1[_0x462187(0x1ce)])),__param(0x1,(0x0,typeorm_1['InjectRepository'])(user_entity_1['UserEntity'])),__param(0x2,(0x0,typeorm_1[_0x462187(0x1e0)])(chatGroup_entity_1[_0x462187(0x20a)])),__metadata(_0x462187(0x1c1),[typeorm_2[_0x462187(0x1ae)],typeorm_2[_0x462187(0x1ae)],typeorm_2[_0x462187(0x1ae)]])],ChatLogService),exports[_0x462187(0x1f9)]=ChatLogService;