'use strict';const _0x2c5d79=_0x52ee;(function(_0x1eb550,_0x21ad1b){const _0x4f48a7=_0x52ee,_0x43650c=_0x1eb550();while(!![]){try{const _0x15d14f=-parseInt(_0x4f48a7(0x11b))/0x1*(parseInt(_0x4f48a7(0xf3))/0x2)+parseInt(_0x4f48a7(0x119))/0x3*(parseInt(_0x4f48a7(0xeb))/0x4)+parseInt(_0x4f48a7(0x129))/0x5+parseInt(_0x4f48a7(0xe9))/0x6+parseInt(_0x4f48a7(0xfe))/0x7*(parseInt(_0x4f48a7(0x107))/0x8)+parseInt(_0x4f48a7(0x11a))/0x9*(parseInt(_0x4f48a7(0x10c))/0xa)+parseInt(_0x4f48a7(0xf2))/0xb*(-parseInt(_0x4f48a7(0x132))/0xc);if(_0x15d14f===_0x21ad1b)break;else _0x43650c['push'](_0x43650c['shift']());}catch(_0x95dfb5){_0x43650c['push'](_0x43650c['shift']());}}}(_0x4de9,0xe8233));var __decorate=this&&this[_0x2c5d79(0x109)]||function(_0x44e26a,_0x16071f,_0x935a2d,_0x45f894){const _0x3298bd=_0x2c5d79;var _0x25e1b8=arguments[_0x3298bd(0xf0)],_0x4854a0=_0x25e1b8<0x3?_0x16071f:_0x45f894===null?_0x45f894=Object[_0x3298bd(0x126)](_0x16071f,_0x935a2d):_0x45f894,_0x569ed6;if(typeof Reflect===_0x3298bd(0x12a)&&typeof Reflect[_0x3298bd(0x12f)]===_0x3298bd(0x113))_0x4854a0=Reflect[_0x3298bd(0x12f)](_0x44e26a,_0x16071f,_0x935a2d,_0x45f894);else{for(var _0x10f5e1=_0x44e26a['length']-0x1;_0x10f5e1>=0x0;_0x10f5e1--)if(_0x569ed6=_0x44e26a[_0x10f5e1])_0x4854a0=(_0x25e1b8<0x3?_0x569ed6(_0x4854a0):_0x25e1b8>0x3?_0x569ed6(_0x16071f,_0x935a2d,_0x4854a0):_0x569ed6(_0x16071f,_0x935a2d))||_0x4854a0;}return _0x25e1b8>0x3&&_0x4854a0&&Object[_0x3298bd(0x101)](_0x16071f,_0x935a2d,_0x4854a0),_0x4854a0;},__metadata=this&&this['__metadata']||function(_0x4dfca9,_0x26c0ea){const _0x56a8f2=_0x2c5d79;if(typeof Reflect===_0x56a8f2(0x12a)&&typeof Reflect[_0x56a8f2(0x11f)]===_0x56a8f2(0x113))return Reflect['metadata'](_0x4dfca9,_0x26c0ea);},__param=this&&this['__param']||function(_0x4aebcf,_0x53cc65){return function(_0x7c012f,_0x26cf9d){_0x53cc65(_0x7c012f,_0x26cf9d,_0x4aebcf);};};Object[_0x2c5d79(0x101)](exports,_0x2c5d79(0x112),{'value':!![]}),exports['SigninService']=void 0x0;const globalConfig_service_1=require(_0x2c5d79(0xf9)),userBalance_service_1=require(_0x2c5d79(0xf1)),common_1=require('@nestjs/common'),signIn_entity_1=require(_0x2c5d79(0x110)),typeorm_1=require(_0x2c5d79(0xf6)),typeorm_2=require('typeorm'),date_1=require(_0x2c5d79(0x11e)),user_entity_1=require('../user/user.entity'),balance_constant_1=require(_0x2c5d79(0x130));function _0x4de9(){const _0x3200ec=['UserBalanceService','defineProperty','getDate','今日已签到、改天再来吧!.','InjectRepository','andWhere','save','51400FKIiXd','昨天签到了、今天是连续签到！','__decorate','isSigned','UserEntity','15321220hkZKXL','signin.signInTime\x20>=\x20:firstDay','signinEntity','setDate','./signIn.entity','GlobalConfigService','__esModule','function','SigninService','push','userEntity','YYYY-MM-DD','log','3280029dWiKkc','9jRBXiP','1QODnGb','globalConfigService','RechargeType','../../common/utils/date','metadata','startOf','month','getRawMany','day','design:paramtypes','Sign\x20in\x20successful.','getOwnPropertyDescriptor','default','update','1586945lRdpov','object','Injectable','user','YYYY-MM-DD\x20HH:mm:ss','SIGN_IN','decorate','../../common/constants/balance.constant','signin.signInDate\x20as\x20signInDate,\x20signin.isSigned\x20as\x20isSigned','34990212hsbbsN','BAD_REQUEST','getSigninLog','3699108uOGdPu','saveRecordRechargeLog','4lAVKOb','signin.signInTime\x20<=\x20:lastDay','昨天没签到、今天重置天数！','获取签到数据失败！','userBalanceService','length','./../userBalance/userBalance.service','11cBTgPz','2250922IgrwRx','Repository','用户不存在','@nestjs/typeorm','HttpStatus','format','./../globalConfig/globalConfig.service','debug','Logger','findOne','signInDate','1561VlkGZM','signin'];_0x4de9=function(){return _0x3200ec;};return _0x4de9();}function _0x52ee(_0x3c0260,_0x2e255f){const _0x4de91d=_0x4de9();return _0x52ee=function(_0x52ee46,_0xf3852e){_0x52ee46=_0x52ee46-0xe9;let _0x311d4f=_0x4de91d[_0x52ee46];return _0x311d4f;},_0x52ee(_0x3c0260,_0x2e255f);}let SigninService=class SigninService{constructor(_0x1f21bd,_0x598306,_0x2037fb,_0x214b75){const _0x5eddf3=_0x2c5d79;this[_0x5eddf3(0x10e)]=_0x1f21bd,this['userEntity']=_0x598306,this[_0x5eddf3(0xef)]=_0x2037fb,this[_0x5eddf3(0x11c)]=_0x214b75;}async['sign'](_0x1c500d){const _0x2cb34c=_0x2c5d79,{id:_0x17c26a}=_0x1c500d['user'],_0x280084=(0x0,date_1['default'])(new Date())['format']('YYYY-MM-DD'),_0x2466da=await this[_0x2cb34c(0x10e)][_0x2cb34c(0xfc)]({'where':{'userId':_0x17c26a,'signInDate':_0x280084}});if(_0x2466da)throw new common_1['HttpException'](_0x2cb34c(0x103),common_1[_0x2cb34c(0xf7)][_0x2cb34c(0x133)]);const {model3Count:_0x4effbb,model4Count:_0x40c43d,drawMjCount:_0x4eae2e}=await this[_0x2cb34c(0x11c)]['getSignatureGiftConfig']();await this[_0x2cb34c(0x10e)][_0x2cb34c(0x106)]({'userId':_0x17c26a,'signInTime':new Date(),'signInDate':_0x280084,'isSigned':!![]}),await this['userBalanceService']['addBalanceToUser'](_0x17c26a,{'model3Count':_0x4effbb,'model4Count':_0x40c43d,'drawMjCount':_0x4eae2e}),await this[_0x2cb34c(0xef)][_0x2cb34c(0xea)]({'userId':_0x17c26a,'rechargeType':balance_constant_1[_0x2cb34c(0x11d)][_0x2cb34c(0x12e)],'model3Count':_0x4effbb,'model4Count':_0x40c43d,'drawMjCount':_0x4eae2e});const _0x1e0d05=(0x0,date_1[_0x2cb34c(0x127)])(new Date())['subtract'](0x1,_0x2cb34c(0x123))['format'](_0x2cb34c(0x117)),_0xf7ce06=await this[_0x2cb34c(0x10e)][_0x2cb34c(0xfc)]({'where':{'userId':_0x17c26a,'signInDate':_0x1e0d05}});if(_0xf7ce06){common_1['Logger'][_0x2cb34c(0xfa)]('用户'+_0x17c26a+_0x2cb34c(0x108),_0x2cb34c(0x114));const _0x813765=await this['userEntity'][_0x2cb34c(0xfc)]({'where':{'id':_0x17c26a}});if(!_0x813765)throw new common_1['HttpException'](_0x2cb34c(0xf5),common_1[_0x2cb34c(0xf7)]['BAD_REQUEST']);const {consecutiveDays:consecutiveDays=0x0}=_0x813765;await this[_0x2cb34c(0x116)][_0x2cb34c(0x128)]({'id':_0x17c26a},{'consecutiveDays':consecutiveDays+0x1});}else common_1[_0x2cb34c(0xfb)]['debug']('用户'+_0x17c26a+_0x2cb34c(0xed),'SigninService'),await this[_0x2cb34c(0x116)][_0x2cb34c(0x128)]({'id':_0x17c26a},{'consecutiveDays':0x1});return _0x2cb34c(0x125);}async[_0x2c5d79(0x134)](_0x558da3){const _0x34e852=_0x2c5d79;try{const {id:_0x2d2959}=_0x558da3[_0x34e852(0x12c)],_0x371380=(0x0,date_1[_0x34e852(0x127)])()[_0x34e852(0x120)](_0x34e852(0x121))[_0x34e852(0xf8)](_0x34e852(0x12d)),_0x158137=(0x0,date_1[_0x34e852(0x127)])()['endOf'](_0x34e852(0x121))[_0x34e852(0xf8)](_0x34e852(0x12d)),_0x1d5a41=this[_0x34e852(0x10e)]['createQueryBuilder'](_0x34e852(0xff)),_0x58cc90=await _0x1d5a41['select'](_0x34e852(0x131))[_0x34e852(0x105)]('signin.userId\x20=\x20:userId',{'userId':_0x558da3[_0x34e852(0x12c)]['id']})[_0x34e852(0x105)](_0x34e852(0x10d),{'firstDay':_0x371380})[_0x34e852(0x105)](_0x34e852(0xec),{'lastDay':_0x158137})[_0x34e852(0x122)](),_0x2d4348=new Date(_0x371380),_0x293a58=new Date(_0x158137),_0x6ac1cc=[],_0x13f632=new Date(_0x2d4348);while(_0x13f632<=_0x293a58){_0x6ac1cc[_0x34e852(0x115)]((0x0,date_1[_0x34e852(0x127)])(new Date(_0x13f632))[_0x34e852(0xf8)](_0x34e852(0x117))),_0x13f632[_0x34e852(0x10f)](_0x13f632[_0x34e852(0x102)]()+0x1);}const _0x56fed7=[];for(const _0x261441 of _0x6ac1cc){const _0x4ca766=_0x58cc90['find'](_0x2e0a9e=>_0x2e0a9e[_0x34e852(0xfd)]===_0x261441);!_0x4ca766?_0x56fed7['push']({'signInDate':_0x261441,'isSigned':![]}):(_0x4ca766[_0x34e852(0x10a)]=!![],_0x56fed7[_0x34e852(0x115)](_0x4ca766));}return _0x56fed7;}catch(_0x48355e){console[_0x34e852(0x118)]('error:\x20',_0x48355e);throw new common_1['HttpException'](_0x34e852(0xee),common_1[_0x34e852(0xf7)][_0x34e852(0x133)]);}}};SigninService=__decorate([(0x0,common_1[_0x2c5d79(0x12b)])(),__param(0x0,(0x0,typeorm_1[_0x2c5d79(0x104)])(signIn_entity_1['SigninEntity'])),__param(0x1,(0x0,typeorm_1[_0x2c5d79(0x104)])(user_entity_1[_0x2c5d79(0x10b)])),__metadata(_0x2c5d79(0x124),[typeorm_2[_0x2c5d79(0xf4)],typeorm_2[_0x2c5d79(0xf4)],userBalance_service_1[_0x2c5d79(0x100)],globalConfig_service_1[_0x2c5d79(0x111)]])],SigninService),exports[_0x2c5d79(0x114)]=SigninService;