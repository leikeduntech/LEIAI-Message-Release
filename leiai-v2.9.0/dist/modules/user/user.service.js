'use strict';const _0x145302=_0xd13a;(function(_0x148eb2,_0x33124e){const _0x3f97eb=_0xd13a,_0x480dad=_0x148eb2();while(!![]){try{const _0x323b19=parseInt(_0x3f97eb(0x1e6))/0x1+-parseInt(_0x3f97eb(0x268))/0x2+-parseInt(_0x3f97eb(0x26b))/0x3+-parseInt(_0x3f97eb(0x1f3))/0x4*(parseInt(_0x3f97eb(0x214))/0x5)+-parseInt(_0x3f97eb(0x264))/0x6*(parseInt(_0x3f97eb(0x266))/0x7)+parseInt(_0x3f97eb(0x229))/0x8*(-parseInt(_0x3f97eb(0x1eb))/0x9)+parseInt(_0x3f97eb(0x21c))/0xa;if(_0x323b19===_0x33124e)break;else _0x480dad['push'](_0x480dad['shift']());}catch(_0x555d5c){_0x480dad['push'](_0x480dad['shift']());}}}(_0x4d53,0x4f1bd));function _0x4d53(){const _0x48b777=['584049jasBka','无效的邀请码！','当前用户不存在！','registerVerifyEmailDesc','用户名或者邮箱已被注册！','的账号激活','error:\x20','Injectable','userBalanceService','getUserById','BAD_REQUEST','generateRandomString','addBalanceToUser','inviteCode','../globalConfig/config.entity','createdAt','connection','checkUserStatus','用户名已存在！','reduce','queryOne','630998XmnlhS','HttpException','lastLoginIp','updateStatus','@nestjs/common','513297fCdplN','whiteListEntity','forEach','map','verifyUserRegisterByPhone','hashSync','sign','configMap:\x20','788BxYPrM','addBalanceToNewUser','WhiteListEntity','userEntity','Repository','__param','RechargeType','object','queryUserInfoById','role','@nestjs-modules/mailer','client','affected','findAndCount','UserEntity','超级管理员不可被操作！','sendMail','verificationService','queryUserBalance','修改密码失败、请重新试试吧。','当前绑定用户不存在！','./../globalConfig/globalConfig.service','UNAUTHORIZED','用户不存在！','已生成过邀请码、请勿重复生成','savaLoginIp','Registration','isVerifyEmail','Like','../../common/utils','BLACKLISTED','register','没有变更，无需更改！','13835HbSkrt','findOne','registerVerifyExpir','../../common/constants/verification.constant','registerIp','createUserFromOpenId','当前用户已被加入锁定、请联系管理员解锁！','log','10905620oOXbGR','UserService','绑定微信失败、请联系管理员！','getUserInfo','update','openId','123456','length','LOCKED','./user.entity','ACTIVE','inviteLink','HttpStatus','8PdDEMt','修改用户状态成功！','userId','生成邀请码失败，请重新试一次吧！','createUserAndVerifycation','getUserOpenId','getOpenIdByUserId','createVerification','UserStatusErrMsg','UserBalanceService','updateUserPassword','phone','@default.com','ADMIN_GIFT','VerificationService','verifyUserPassword','ConfigEntity','lodash','email','maskEmail','@nestjs/typeorm','修改用户状态失败！','avatar','__metadata','密码重置为[','../../common/constants/balance.constant','createRandomUid','status','registerVerifyEmailFrom','metadata','username','resetUserPass','createUser','compareSync','design:paramtypes','password','save','DESC','当前用户信息失效、请重新登录！','genInviteCode','当前密码错误！','assign','configEntity','重置密码失败！','globalConfigService','typeorm','InjectRepository','getConfigs','user','Connection','registerBaseUrl','userDefautlAvatar','configVal','VerificationEnum','PENDING','UserStatusEnum','当前账户不存在！','balanceInfo','email\x20response\x20\x20->\x20:\x20','6odjEwV','configKey','557011nUnEtI','恭喜您绑定成功、后续可直接扫码登录了！','1042286FoTdTP','super','saveRecordRechargeLog'];_0x4d53=function(){return _0x48b777;};return _0x4d53();}var __decorate=this&&this['__decorate']||function(_0x4860fd,_0x3a2a27,_0x5d6360,_0x34eb95){const _0x12df4a=_0xd13a;var _0x1c52b3=arguments[_0x12df4a(0x223)],_0x2d8e12=_0x1c52b3<0x3?_0x3a2a27:_0x34eb95===null?_0x34eb95=Object['getOwnPropertyDescriptor'](_0x3a2a27,_0x5d6360):_0x34eb95,_0x225e87;if(typeof Reflect===_0x12df4a(0x1fa)&&typeof Reflect['decorate']==='function')_0x2d8e12=Reflect['decorate'](_0x4860fd,_0x3a2a27,_0x5d6360,_0x34eb95);else{for(var _0x3e95c1=_0x4860fd[_0x12df4a(0x223)]-0x1;_0x3e95c1>=0x0;_0x3e95c1--)if(_0x225e87=_0x4860fd[_0x3e95c1])_0x2d8e12=(_0x1c52b3<0x3?_0x225e87(_0x2d8e12):_0x1c52b3>0x3?_0x225e87(_0x3a2a27,_0x5d6360,_0x2d8e12):_0x225e87(_0x3a2a27,_0x5d6360))||_0x2d8e12;}return _0x1c52b3>0x3&&_0x2d8e12&&Object['defineProperty'](_0x3a2a27,_0x5d6360,_0x2d8e12),_0x2d8e12;},__metadata=this&&this[_0x145302(0x240)]||function(_0x1a632a,_0x2736c3){const _0x2aea0c=_0x145302;if(typeof Reflect==='object'&&typeof Reflect[_0x2aea0c(0x246)]==='function')return Reflect[_0x2aea0c(0x246)](_0x1a632a,_0x2736c3);},__param=this&&this[_0x145302(0x1f8)]||function(_0x2aa1f3,_0x2e6f21){return function(_0xca31d2,_0x169136){_0x2e6f21(_0xca31d2,_0x169136,_0x2aa1f3);};};Object['defineProperty'](exports,'__esModule',{'value':!![]}),exports[_0x145302(0x21d)]=void 0x0;const globalConfig_service_1=require(_0x145302(0x208)),user_constant_1=require('./../../common/constants/user.constant'),mailer_1=require(_0x145302(0x1fd)),verification_service_1=require('./../verification/verification.service'),common_1=require(_0x145302(0x1ea)),typeorm_1=require(_0x145302(0x23d)),typeorm_2=require(_0x145302(0x256)),user_entity_1=require(_0x145302(0x225)),bcrypt=require('bcryptjs'),_=require(_0x145302(0x23a)),verification_constant_1=require(_0x145302(0x217)),userBalance_service_1=require('../userBalance/userBalance.service'),utils_1=require(_0x145302(0x210)),balance_constant_1=require(_0x145302(0x242)),config_entity_1=require(_0x145302(0x279)),whiteList_entity_1=require('../chatgpt/whiteList.entity');let UserService=class UserService{constructor(_0x3ee827,_0x20f988,_0x1c71ef,_0x47c358,_0x5bbd27,_0x42d8d2,_0x1d68e5,_0x354abe){const _0x23174c=_0x145302;this['userEntity']=_0x3ee827,this[_0x23174c(0x1ec)]=_0x20f988,this[_0x23174c(0x1e1)]=_0x1c71ef,this[_0x23174c(0x204)]=_0x47c358,this['mailerService']=_0x5bbd27,this[_0x23174c(0x273)]=_0x42d8d2,this['globalConfigService']=_0x1d68e5,this[_0x23174c(0x253)]=_0x354abe;}async[_0x145302(0x22d)](_0x16ec04,_0x21a184){const _0x207549=_0x145302,{username:_0x673820,email:_0x3e4e29,password:_0x39d908,invitedBy:_0x20f279,client:client=0x0}=_0x16ec04;if(_0x20f279){const _0x354cec=await this[_0x207549(0x1f6)][_0x207549(0x215)]({'where':{'inviteCode':_0x20f279}});if(!_0x354cec)throw new common_1[(_0x207549(0x1e7))](_0x207549(0x26c),common_1[_0x207549(0x228)][_0x207549(0x275)]);}const _0x271ea7=[{'username':_0x673820},{'email':_0x3e4e29}],_0x586893=await this[_0x207549(0x1f6)][_0x207549(0x215)]({'where':_0x271ea7});if(_0x586893&&_0x586893[_0x207549(0x244)]!==user_constant_1[_0x207549(0x260)][_0x207549(0x25f)])throw new common_1[(_0x207549(0x1e7))](_0x207549(0x26f),common_1[_0x207549(0x228)][_0x207549(0x275)]);try{const _0x22b0bd=_['cloneDeep'](_0x16ec04),_0x4ec01b=bcrypt[_0x207549(0x1f0)](_0x39d908,0xa),_0x5eca87=(0x0,utils_1['getClientIp'])(_0x21a184);_0x22b0bd['password']=_0x4ec01b,_0x22b0bd[_0x207549(0x218)]=_0x5eca87,_0x22b0bd[_0x207549(0x1fe)]=client;let _0x3de8c7;if(!_0x586893){const _0x8b7990=await this['globalConfigService'][_0x207549(0x258)](['userDefautlAvatar']);_0x22b0bd[_0x207549(0x23f)]=_0x8b7990,_0x3de8c7=await this[_0x207549(0x1f6)][_0x207549(0x24d)](_0x22b0bd);}else _0x3de8c7=_0x586893;const _0x24cb17=await this['configEntity']['find']({'where':{'configKey':(0x0,typeorm_2['In'])([_0x207549(0x20e),_0x207549(0x25b),'registerVerifyEmailTitle',_0x207549(0x26e),_0x207549(0x245),_0x207549(0x216)])}}),_0xc4bb9e=_0x24cb17[_0x207549(0x1e4)]((_0x5080ca,_0x43b0fa)=>{const _0x52a0a4=_0x207549;return _0x5080ca[_0x43b0fa[_0x52a0a4(0x265)]]=_0x43b0fa[_0x52a0a4(0x25d)],_0x5080ca;},{}),_0x372681=_0xc4bb9e[_0x207549(0x20e)]?Number(_0xc4bb9e[_0x207549(0x20e)]):0x1;if(_0x372681){const _0x491021=_0xc4bb9e['registerVerifyExpir']?Number(_0xc4bb9e[_0x207549(0x216)]):0x1e*0x3c,_0x34eb00=await this[_0x207549(0x204)][_0x207549(0x230)](_0x3de8c7,verification_constant_1[_0x207549(0x25e)][_0x207549(0x20d)],_0x491021),{code:_0x5309da,email:_0x18d366,id:_0x35e526}=_0x34eb00,{registerVerifyEmailFrom:_0x3716a9}=_0xc4bb9e;console[_0x207549(0x21b)](_0x207549(0x1f2),_0xc4bb9e);const _0x409032=await this['mailerService'][_0x207549(0x203)]({'to':_0x18d366,'subject':'来自'+_0x3716a9+_0x207549(0x270),'template':_0x207549(0x212),'context':Object[_0x207549(0x252)]({'baseUrl':_0xc4bb9e[_0x207549(0x25b)],'code':_0x5309da,'id':_0x35e526},_0xc4bb9e)});console['log'](_0x207549(0x263),_0x409032);}else{const {username:_0x1d0db9,email:_0x1d4137,id:_0x4ba515,invitedBy:_0x363abd}=_0x3de8c7;await this['updateUserStatus'](_0x4ba515,user_constant_1['UserStatusEnum'][_0x207549(0x226)]);let _0x2a8f87;_0x363abd&&(_0x2a8f87=await this['qureyUserInfoByInviteCode'](_0x363abd)),await this['userBalanceService'][_0x207549(0x1f4)](_0x4ba515,_0x2a8f87===null||_0x2a8f87===void 0x0?void 0x0:_0x2a8f87['id']);}return _0x3de8c7;}catch(_0x252b13){console[_0x207549(0x21b)](_0x207549(0x271),_0x252b13);throw _0x252b13;}}async['verifyUserCredentials'](_0x1c3807){const _0x30115d=_0x145302,{username:_0x131c72,password:_0x145f7e,uid:uid=0x0,phone:_0x330619}=_0x1c3807;let _0xda4466=null;if(uid>0x0){_0xda4466=await this[_0x30115d(0x1f6)][_0x30115d(0x215)]({'where':{'id':uid}});if(!_0xda4466)throw new common_1[(_0x30115d(0x1e7))](_0x30115d(0x261),common_1[_0x30115d(0x228)][_0x30115d(0x275)]);if(!bcrypt['compareSync'](_0x145f7e,_0xda4466[_0x30115d(0x24c)]))throw new common_1[(_0x30115d(0x1e7))]('当前密码错误！',common_1[_0x30115d(0x228)][_0x30115d(0x275)]);}if(_0x131c72&&_0x145f7e){const _0x5785c1=[{'username':_0x131c72},{'email':_0x131c72}];_0xda4466=await this[_0x30115d(0x1f6)][_0x30115d(0x215)]({'where':_0x5785c1});if(!_0xda4466)throw new common_1[(_0x30115d(0x1e7))]('当前账户不存在！',common_1[_0x30115d(0x228)]['BAD_REQUEST']);if(!bcrypt[_0x30115d(0x24a)](_0x145f7e,_0xda4466[_0x30115d(0x24c)]))throw new common_1['HttpException'](_0x30115d(0x251),common_1[_0x30115d(0x228)]['BAD_REQUEST']);}if(_0x330619&&_0x145f7e){const _0x118258=[{'phone':_0x330619}];_0xda4466=await this[_0x30115d(0x1f6)]['findOne']({'where':_0x118258});if(!_0xda4466)throw new common_1[(_0x30115d(0x1e7))](_0x30115d(0x261),common_1[_0x30115d(0x228)][_0x30115d(0x275)]);if(!bcrypt[_0x30115d(0x24a)](_0x145f7e,_0xda4466['password']))throw new common_1[(_0x30115d(0x1e7))](_0x30115d(0x251),common_1['HttpStatus']['BAD_REQUEST']);}if(!_0xda4466)throw new common_1[(_0x30115d(0x1e7))](_0x30115d(0x261),common_1['HttpStatus']['BAD_REQUEST']);if(_0xda4466[_0x30115d(0x244)]!==user_constant_1[_0x30115d(0x260)][_0x30115d(0x226)])throw new common_1[(_0x30115d(0x1e7))](user_constant_1[_0x30115d(0x231)][_0xda4466['status']],common_1['HttpStatus'][_0x30115d(0x275)]);return _0xda4466;}async[_0x145302(0x238)](_0x1b46a8,_0x1c6453){const _0x381783=_0x145302,_0x4f5112=await this[_0x381783(0x1f6)]['findOne']({'where':{'id':_0x1b46a8}});return bcrypt[_0x381783(0x24a)](_0x1c6453,_0x4f5112['password']);}async['updateUserStatus'](_0x27a0f2,_0x31b206){const _0x5bcafa=_0x145302,_0x39c919=await this[_0x5bcafa(0x1f6)][_0x5bcafa(0x220)]({'id':_0x27a0f2},{'status':_0x31b206});return _0x39c919[_0x5bcafa(0x1ff)]>0x0;}async['getUserStatus'](_0x15f86a){const _0x47e489=_0x145302,_0x4a5b75=await this[_0x47e489(0x1f6)][_0x47e489(0x215)]({'where':{'id':_0x15f86a}});return _0x4a5b75['status'];}async[_0x145302(0x1fb)](_0x4407da){const _0x4a18e1=_0x145302;return await this[_0x4a18e1(0x1f6)][_0x4a18e1(0x215)]({'where':{'id':_0x4407da}});}async['queryOneUserInfo'](_0xf1e7cf){const _0x2b0031=_0x145302;return await this[_0x2b0031(0x1f6)][_0x2b0031(0x215)]({'where':{'id':_0xf1e7cf}});}async[_0x145302(0x1e2)](_0x434b0b){const _0x4d9ef6=_0x145302,_0x3d5db9=await this[_0x4d9ef6(0x1f6)][_0x4d9ef6(0x215)]({'where':{'id':_0x434b0b}});if(!_0x3d5db9)throw new common_1[(_0x4d9ef6(0x1e7))](_0x4d9ef6(0x24f),common_1[_0x4d9ef6(0x228)][_0x4d9ef6(0x209)]);if(_0x3d5db9[_0x4d9ef6(0x244)]===user_constant_1[_0x4d9ef6(0x260)][_0x4d9ef6(0x211)])throw new common_1[(_0x4d9ef6(0x1e7))]('当前用户已被加入黑名单、请联系管理员解封！',common_1['HttpStatus'][_0x4d9ef6(0x275)]);if(_0x3d5db9[_0x4d9ef6(0x244)]===user_constant_1[_0x4d9ef6(0x260)][_0x4d9ef6(0x224)])throw new common_1[(_0x4d9ef6(0x1e7))](_0x4d9ef6(0x21a),common_1[_0x4d9ef6(0x228)]['BAD_REQUEST']);}async[_0x145302(0x21f)](_0xe5ecc9){const _0x396d42=_0x145302,_0x1511fe=await this[_0x396d42(0x1f6)][_0x396d42(0x215)]({'where':{'id':_0xe5ecc9},'select':[_0x396d42(0x247),_0x396d42(0x23f),_0x396d42(0x1fc),'email',_0x396d42(0x1f1),_0x396d42(0x278),_0x396d42(0x221),'consecutiveDays']});if(!_0x1511fe)throw new common_1[(_0x396d42(0x1e7))](_0x396d42(0x24f),common_1['HttpStatus'][_0x396d42(0x209)]);_0x1511fe['isBindWx']=!!(_0x1511fe===null||_0x1511fe===void 0x0?void 0x0:_0x1511fe[_0x396d42(0x221)]),delete _0x1511fe[_0x396d42(0x221)];const _0x2dbda0=await this['userBalanceService'][_0x396d42(0x205)](_0xe5ecc9);return{'userInfo':_0x1511fe,'userBalance':Object[_0x396d42(0x252)]({},_0x2dbda0)};}async[_0x145302(0x274)](_0x1486c5){const _0x40e676=_0x145302;return await this[_0x40e676(0x1f6)][_0x40e676(0x215)]({'where':{'id':_0x1486c5}});}async[_0x145302(0x22e)](_0xacbeba){const _0x4299c0=_0x145302;return await this[_0x4299c0(0x1f6)][_0x4299c0(0x215)]({'where':{'openId':_0xacbeba}});}async['updateInfo'](_0x2f1974,_0x425a96){const _0x5a4142=_0x145302,{id:_0x1d9778}=_0x425a96[_0x5a4142(0x259)],_0x1b2e75=await this[_0x5a4142(0x1f6)][_0x5a4142(0x215)]({'where':{'id':_0x1d9778}});if(!_0x1b2e75)throw new common_1[(_0x5a4142(0x1e7))](_0x5a4142(0x26d),common_1[_0x5a4142(0x228)][_0x5a4142(0x275)]);if(_0x2f1974['username']&&_0x1b2e75['username']===_0x2f1974[_0x5a4142(0x247)])throw new common_1[(_0x5a4142(0x1e7))](_0x5a4142(0x213),common_1[_0x5a4142(0x228)][_0x5a4142(0x275)]);if(_0x2f1974['username']){const _0x13e7da=await this[_0x5a4142(0x1f6)][_0x5a4142(0x215)]({'where':{'username':_0x2f1974[_0x5a4142(0x247)],'id':(0x0,typeorm_2['Not'])(_0x1d9778)}});if(_0x13e7da)throw new common_1[(_0x5a4142(0x1e7))](_0x5a4142(0x1e3),common_1[_0x5a4142(0x228)][_0x5a4142(0x275)]);}const _0x589168=await this[_0x5a4142(0x1f6)][_0x5a4142(0x220)]({'id':_0x1d9778},_0x2f1974);if(_0x589168[_0x5a4142(0x1ff)]<=0x0)throw new common_1['HttpException']('修改用户信息失败！',common_1['HttpStatus']['BAD_REQUEST']);return'修改用户信息成功！';}async[_0x145302(0x233)](_0x295804,_0x57a6ef){const _0x10decc=_0x145302,_0x3d7201=bcrypt[_0x10decc(0x1f0)](_0x57a6ef,0xa),_0xa85545=await this[_0x10decc(0x1f6)][_0x10decc(0x220)]({'id':_0x295804},{'password':_0x3d7201});if(_0xa85545[_0x10decc(0x1ff)]<=0x0)throw new common_1[(_0x10decc(0x1e7))](_0x10decc(0x206),common_1[_0x10decc(0x228)]['BAD_REQUEST']);}async[_0x145302(0x250)](_0x585cff){const _0xde08f0=_0x145302,{id:_0x52df89}=_0x585cff[_0xde08f0(0x259)],_0xa089e5=await this[_0xde08f0(0x1f6)][_0xde08f0(0x215)]({'where':{'id':_0x52df89}});if(!_0xa089e5||_0xa089e5['inviteCode'])throw new common_1[(_0xde08f0(0x1e7))](_0xde08f0(0x20b),common_1[_0xde08f0(0x228)][_0xde08f0(0x275)]);const _0x356cce=(0x0,utils_1[_0xde08f0(0x276)])(),_0x4a80a4=await this[_0xde08f0(0x1f6)][_0xde08f0(0x215)]({'where':{'inviteCode':_0x356cce}});if(_0x4a80a4)throw new common_1['HttpException'](_0xde08f0(0x22c),common_1[_0xde08f0(0x228)][_0xde08f0(0x275)]);const _0x35d850=await this[_0xde08f0(0x1f6)]['update']({'id':_0x52df89},{'inviteCode':_0x356cce});if(_0x35d850['affected']<=0x0)throw new common_1['HttpException']('生成邀请码失败，请重新试一次吧！',common_1[_0xde08f0(0x228)][_0xde08f0(0x275)]);return _0x356cce;}async['getInviteRecord'](_0x111431,_0x53847b){const _0x312b6e=_0x145302;try{const {id:_0x46b5b8}=_0x111431[_0x312b6e(0x259)],{page:page=0x1,size:size=0xa}=_0x53847b,_0xdbbaae=await this[_0x312b6e(0x1f6)][_0x312b6e(0x215)]({'where':{'id':_0x46b5b8}}),{inviteCode:_0x4139a0}=_0xdbbaae;if(!_0x4139a0)return[];const [_0x2b7127,_0x54aae4]=await this[_0x312b6e(0x1f6)][_0x312b6e(0x200)]({'where':{'inviteCode':_0x4139a0},'order':{'id':'DESC'},'select':[_0x312b6e(0x247),_0x312b6e(0x23b),_0x312b6e(0x27a),_0x312b6e(0x244),'avatar'],'take':size,'skip':(page-0x1)*size});return(0x0,utils_1['formatCreateOrUpdateDate'])(_0x2b7127)[_0x312b6e(0x1ee)](_0x1bf149=>{const _0x239f67=_0x312b6e;return _0x1bf149[_0x239f67(0x23b)]=(0x0,utils_1['maskEmail'])(_0x1bf149[_0x239f67(0x23b)]),_0x1bf149;}),{'rows':_0x2b7127,'count':_0x54aae4};}catch(_0x3e3ad5){console['log'](_0x312b6e(0x271),_0x3e3ad5);throw new common_1['HttpException']('获取邀请记录失败！',common_1[_0x312b6e(0x228)]['BAD_REQUEST']);}}async[_0x145302(0x227)](_0x689028){const _0x42dd91=_0x145302,_0x510471=await this[_0x42dd91(0x1f6)][_0x42dd91(0x215)]({'where':{'inviteCode':_0x689028}});if(!_0x510471)return 0x1;const {inviteLinkCount:inviteLinkCount=0x0}=_0x510471,_0x4da79b=await this[_0x42dd91(0x1f6)][_0x42dd91(0x220)]({'inviteCode':_0x689028},{'inviteLinkCount':inviteLinkCount+0x1});return _0x4da79b['affected']?0x1:0x0;}async['qureyUserInfoByInviteCode'](_0x20dc60){const _0x38ba95=_0x145302;return await this[_0x38ba95(0x1f6)][_0x38ba95(0x215)]({'where':{'inviteCode':_0x20dc60}});}async['userRecharge'](_0x289bed){const _0xbfeda=_0x145302,{userId:_0x24bcb0,model3Count:model3Count=0x0,model4Count:model4Count=0x0,drawMjCount:drawMjCount=0x0}=_0x289bed;await this['userBalanceService'][_0xbfeda(0x277)](_0x24bcb0,{'model3Count':model3Count,'model4Count':model4Count,'drawMjCount':drawMjCount});const _0x3fdc1f=await this[_0xbfeda(0x273)][_0xbfeda(0x26a)]({'userId':_0x24bcb0,'rechargeType':balance_constant_1[_0xbfeda(0x1f9)][_0xbfeda(0x236)],'model3Count':model3Count,'model4Count':model4Count,'drawMjCount':drawMjCount,'extent':''});return _0x3fdc1f;}async['queryAll'](_0x22fbdf,_0x406217){const _0x453e74=_0x145302,{page:page=0x1,size:size=0xa,username:_0x1fe96e,email:_0x5634ab,status:_0x8cb2a9,keyword:_0xbb55f0}=_0x22fbdf;let _0x282b2b={};_0x1fe96e&&Object[_0x453e74(0x252)](_0x282b2b,{'username':(0x0,typeorm_2[_0x453e74(0x20f)])('%'+_0x1fe96e+'%')}),_0x5634ab&&Object[_0x453e74(0x252)](_0x282b2b,{'email':(0x0,typeorm_2['Like'])('%'+_0x5634ab+'%')}),_0x8cb2a9&&Object[_0x453e74(0x252)](_0x282b2b,{'status':_0x8cb2a9});_0xbb55f0&&(_0x282b2b=[{'username':(0x0,typeorm_2[_0x453e74(0x20f)])('%'+_0xbb55f0+'%')},{'email':(0x0,typeorm_2['Like'])('%'+_0xbb55f0+'%')},{'phone':(0x0,typeorm_2[_0x453e74(0x20f)])('%'+_0xbb55f0+'%')}]);const [_0x142dcc,_0x293b73]=await this[_0x453e74(0x1f6)][_0x453e74(0x200)]({'skip':(page-0x1)*size,'where':_0x282b2b,'take':size,'order':{'createdAt':_0x453e74(0x24e)},'cache':!![],'select':[_0x453e74(0x247),_0x453e74(0x23f),_0x453e74(0x278),_0x453e74(0x1fc),_0x453e74(0x1f1),_0x453e74(0x244),'id',_0x453e74(0x23b),'createdAt',_0x453e74(0x1e8)]}),_0x3815a2=_0x142dcc[_0x453e74(0x1ee)](_0xd72801=>_0xd72801['id']),_0x24d014=await this[_0x453e74(0x273)]['queryUserBalanceByIds'](_0x3815a2);return _0x142dcc[_0x453e74(0x1ed)](_0xfeea70=>_0xfeea70[_0x453e74(0x262)]=_0x24d014['find'](_0x31aea5=>_0x31aea5[_0x453e74(0x22b)]===_0xfeea70['id'])),_0x406217[_0x453e74(0x259)][_0x453e74(0x1fc)]!==_0x453e74(0x269)&&_0x142dcc[_0x453e74(0x1ed)](_0xc47df8=>_0xc47df8[_0x453e74(0x23b)]=(0x0,utils_1[_0x453e74(0x23c)])(_0xc47df8['email'])),_0x406217['user']['role']!==_0x453e74(0x269)&&_0x142dcc[_0x453e74(0x1ed)](_0x4d6935=>_0x4d6935[_0x453e74(0x1e8)]=(0x0,utils_1['maskIpAddress'])(_0x4d6935[_0x453e74(0x1e8)])),{'rows':_0x142dcc,'count':_0x293b73};}async[_0x145302(0x1e5)]({id:_0x32e0a2}){const _0x9ef6e0=_0x145302;return await this['userEntity']['findOne']({'where':{'id':_0x32e0a2},'select':[_0x9ef6e0(0x247),_0x9ef6e0(0x23f),_0x9ef6e0(0x278),_0x9ef6e0(0x1fc),'sign',_0x9ef6e0(0x244)]});}async[_0x145302(0x1e9)](_0x5077e2){const _0x1a534d=_0x145302,{id:_0x26b909,status:_0xb50dd}=_0x5077e2,_0x1262fa=await this[_0x1a534d(0x1f6)][_0x1a534d(0x215)]({'where':{'id':_0x26b909}});if(!_0x1262fa)throw new common_1['HttpException'](_0x1a534d(0x20a),common_1[_0x1a534d(0x228)][_0x1a534d(0x275)]);if(_0x1262fa[_0x1a534d(0x244)]===user_constant_1[_0x1a534d(0x260)][_0x1a534d(0x25f)])throw new common_1[(_0x1a534d(0x1e7))]('未激活用户不可手动变更状态！',common_1[_0x1a534d(0x228)]['BAD_REQUEST']);if(_0x1262fa['role']===_0x1a534d(0x269))throw new common_1[(_0x1a534d(0x1e7))](_0x1a534d(0x202),common_1['HttpStatus'][_0x1a534d(0x275)]);if(_0xb50dd===user_constant_1[_0x1a534d(0x260)][_0x1a534d(0x25f)])throw new common_1[(_0x1a534d(0x1e7))]('不可将用户置为未激活状态！',common_1['HttpStatus'][_0x1a534d(0x275)]);const _0x281ce9=await this[_0x1a534d(0x1f6)]['update']({'id':_0x26b909},{'status':_0xb50dd});if(_0x281ce9[_0x1a534d(0x1ff)]<=0x0)throw new common_1[(_0x1a534d(0x1e7))](_0x1a534d(0x23e),common_1[_0x1a534d(0x228)][_0x1a534d(0x275)]);return _0x1a534d(0x22a);}async[_0x145302(0x248)](_0x5e8cec){const _0x24f89f=_0x145302,{id:_0x52f37e}=_0x5e8cec,_0x4ecd5d=await this[_0x24f89f(0x1f6)]['findOne']({'where':{'id':_0x52f37e}});if(!_0x4ecd5d)throw new common_1[(_0x24f89f(0x1e7))](_0x24f89f(0x20a),common_1[_0x24f89f(0x228)]['BAD_REQUEST']);const _0x448575=_0x24f89f(0x222),_0x24e1d2=bcrypt['hashSync'](_0x448575,0xa),_0x342396=await this[_0x24f89f(0x1f6)][_0x24f89f(0x220)]({'id':_0x52f37e},{'password':_0x24e1d2});if(_0x342396[_0x24f89f(0x1ff)]<=0x0)throw new common_1[(_0x24f89f(0x1e7))](_0x24f89f(0x254),common_1[_0x24f89f(0x228)][_0x24f89f(0x275)]);return _0x24f89f(0x241)+_0x448575+']成功!';}async[_0x145302(0x20c)](_0x26c887,_0x61d636){const _0x262347=_0x145302;return await this[_0x262347(0x1f6)]['update']({'id':_0x26c887},{'lastLoginIp':_0x61d636});}async['getUserFromOpenId'](_0x4030da,_0x2e63b9){const _0xe4f8d=_0x145302,_0x2ab138=await this[_0xe4f8d(0x1f6)][_0xe4f8d(0x215)]({'where':{'openId':_0x4030da}});if(!_0x2ab138){const _0x52f794=_0x2e63b9?_0x2e63b9['split'](':')[0x1]:'',_0x4b5eab=await this['qureyUserInfoByInviteCode'](_0x52f794),_0x33c046=await this['createUserFromOpenId'](_0x4030da,_0x52f794);return await this['userBalanceService'][_0xe4f8d(0x1f4)](_0x33c046['id'],_0x52f794?_0x4b5eab===null||_0x4b5eab===void 0x0?void 0x0:_0x4b5eab['id']:null),_0x33c046;}return _0x2ab138;}async[_0x145302(0x219)](_0xd5a3d5,_0x654539){const _0x3d124f=_0x145302,_0x90afad=await this[_0x3d124f(0x255)]['getConfigs']([_0x3d124f(0x25c)]),_0x216857={'avatar':_0x90afad,'username':'用户'+(0x0,utils_1[_0x3d124f(0x243)])(),'status':user_constant_1['UserStatusEnum'][_0x3d124f(0x226)],'sex':0x0,'email':(0x0,utils_1['createRandomUid'])()+_0x3d124f(0x235),'invitedBy':_0x654539,'openId':_0xd5a3d5},_0x4a7857=await this[_0x3d124f(0x1f6)][_0x3d124f(0x24d)](_0x216857);return _0x4a7857;}async['bindWx'](_0x2c5efb,_0x45d5b5){const _0x243188=_0x145302;try{const _0x2373e0=await this['userEntity'][_0x243188(0x215)]({'where':{'id':_0x45d5b5}});if(!_0x2373e0)return{'status':![],'msg':_0x243188(0x207)};const _0x2c0245=await this[_0x243188(0x1f6)]['findOne']({'where':{'openId':_0x2c5efb}});if(_0x2c0245)return{'status':![],'msg':'该微信已绑定其他账号！'};const _0x3aef19=await this['userEntity'][_0x243188(0x220)]({'id':_0x45d5b5},{'openId':_0x2c5efb});if(_0x3aef19[_0x243188(0x1ff)]<=0x0)return{'status':![],'msg':_0x243188(0x21e)};return{'status':!![],'msg':_0x243188(0x267)};}catch(_0x28db79){return{'status':![],'msg':'绑定微信失败、请联系管理员！'};}}async[_0x145302(0x22f)](_0xe46506){const _0x342a87=_0x145302,_0x2200da=await this['userEntity'][_0x342a87(0x215)]({'where':{'id':_0xe46506}});return _0x2200da===null||_0x2200da===void 0x0?void 0x0:_0x2200da[_0x342a87(0x221)];}async[_0x145302(0x1ef)](_0x2e38df){const _0x14eb31=_0x145302,{username:_0x46923a,password:_0x4b132a,phone:_0x54ebc6,phoneCode:_0x45990c}=_0x2e38df,_0x2febb7=await this['userEntity']['findOne']({'where':[{'username':_0x46923a},{'phone':_0x54ebc6}]});if(_0x2febb7&&_0x2febb7['username']===_0x46923a)throw new common_1[(_0x14eb31(0x1e7))]('用户名已存在、请更换用户名！',common_1[_0x14eb31(0x228)][_0x14eb31(0x275)]);if(_0x2febb7&&_0x2febb7[_0x14eb31(0x234)]===_0x54ebc6)throw new common_1['HttpException']('当前手机号已注册、请勿重复注册！',common_1[_0x14eb31(0x228)][_0x14eb31(0x275)]);}async[_0x145302(0x249)](_0x41b971){const _0x311272=_0x145302;return await this[_0x311272(0x1f6)][_0x311272(0x24d)](_0x41b971);}};function _0xd13a(_0x345d21,_0x4599c6){const _0x4d538d=_0x4d53();return _0xd13a=function(_0xd13a9f,_0x528a81){_0xd13a9f=_0xd13a9f-0x1e1;let _0x52ea35=_0x4d538d[_0xd13a9f];return _0x52ea35;},_0xd13a(_0x345d21,_0x4599c6);}UserService=__decorate([(0x0,common_1[_0x145302(0x272)])(),__param(0x0,(0x0,typeorm_1[_0x145302(0x257)])(user_entity_1[_0x145302(0x201)])),__param(0x1,(0x0,typeorm_1[_0x145302(0x257)])(whiteList_entity_1[_0x145302(0x1f5)])),__param(0x7,(0x0,typeorm_1[_0x145302(0x257)])(config_entity_1[_0x145302(0x239)])),__metadata(_0x145302(0x24b),[typeorm_2[_0x145302(0x1f7)],typeorm_2[_0x145302(0x1f7)],typeorm_2[_0x145302(0x25a)],verification_service_1[_0x145302(0x237)],mailer_1['MailerService'],userBalance_service_1[_0x145302(0x232)],globalConfig_service_1['GlobalConfigService'],typeorm_2[_0x145302(0x1f7)]])],UserService),exports[_0x145302(0x21d)]=UserService;