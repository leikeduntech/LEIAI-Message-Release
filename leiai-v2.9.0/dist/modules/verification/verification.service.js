'use strict';const _0x5479a7=_0x318b;function _0x249d(){const _0x4c84b0=['verifycationEntity','now','createVerification','Code','./../../common/constants/status.constant','../globalConfig/globalConfig.service','__decorate','1688004MdKGhf','getPhoneVerifyConfig','getNamespace','GlobalConfigService','USED','DESC','@alicloud/pop-core','save','defineProperty','metadata','POST','VerificationService','RedisCacheService','verifyCode','object','Injectable','VerificationUseStatusEnum','S内不得重新发送','globalConfigService','验证码发送失败！','get','1692552QqKPJC','当前验证码已被使用！','验证码已过期','code','352XjYwza','298433gfbJYq','function','./verifycation.entity','Repository','2017-05-25','findOne','../redisCache/redisCache.service','design:paramtypes','304472cGeGHI','验证码不存在','@nestjs/typeorm','7075chIfQU','__param','stringify','__esModule','update','Message','decorate','InjectRepository','length','expiresAt','used','del','图形验证码错误、请检查填写!','createdAt','确实必要参数错误！','BAD_REQUEST','HttpException','https://dysmsapi.aliyuncs.com','图形验证码已过期、请重新输入!','22358096gCgJqN','redisCacheService','sendPhoneCode','HttpStatus','7428344YvVdDM','data'];_0x249d=function(){return _0x4c84b0;};return _0x249d();}function _0x318b(_0x33ef69,_0x34bee3){const _0x249d62=_0x249d();return _0x318b=function(_0x318b18,_0x5ee7e4){_0x318b18=_0x318b18-0x14f;let _0x3c1315=_0x249d62[_0x318b18];return _0x3c1315;},_0x318b(_0x33ef69,_0x34bee3);}(function(_0x142441,_0x4d4614){const _0x544b50=_0x318b,_0x42e7fc=_0x142441();while(!![]){try{const _0x167542=-parseInt(_0x544b50(0x17f))/0x1+-parseInt(_0x544b50(0x187))/0x2+-parseInt(_0x544b50(0x17a))/0x3+-parseInt(_0x544b50(0x17e))/0x4*(-parseInt(_0x544b50(0x18a))/0x5)+-parseInt(_0x544b50(0x165))/0x6+-parseInt(_0x544b50(0x15c))/0x7+parseInt(_0x544b50(0x158))/0x8;if(_0x167542===_0x4d4614)break;else _0x42e7fc['push'](_0x42e7fc['shift']());}catch(_0x3e7ef2){_0x42e7fc['push'](_0x42e7fc['shift']());}}}(_0x249d,0x892ef));var __decorate=this&&this[_0x5479a7(0x164)]||function(_0x1a5100,_0x2daa98,_0x53e421,_0x9df8b6){const _0x32149a=_0x5479a7;var _0x21a29b=arguments[_0x32149a(0x192)],_0x25025d=_0x21a29b<0x3?_0x2daa98:_0x9df8b6===null?_0x9df8b6=Object['getOwnPropertyDescriptor'](_0x2daa98,_0x53e421):_0x9df8b6,_0x4f03ac;if(typeof Reflect===_0x32149a(0x173)&&typeof Reflect['decorate']==='function')_0x25025d=Reflect[_0x32149a(0x190)](_0x1a5100,_0x2daa98,_0x53e421,_0x9df8b6);else{for(var _0x344ddd=_0x1a5100['length']-0x1;_0x344ddd>=0x0;_0x344ddd--)if(_0x4f03ac=_0x1a5100[_0x344ddd])_0x25025d=(_0x21a29b<0x3?_0x4f03ac(_0x25025d):_0x21a29b>0x3?_0x4f03ac(_0x2daa98,_0x53e421,_0x25025d):_0x4f03ac(_0x2daa98,_0x53e421))||_0x25025d;}return _0x21a29b>0x3&&_0x25025d&&Object[_0x32149a(0x16d)](_0x2daa98,_0x53e421,_0x25025d),_0x25025d;},__metadata=this&&this['__metadata']||function(_0x3f338b,_0x3cf71f){const _0x189258=_0x5479a7;if(typeof Reflect===_0x189258(0x173)&&typeof Reflect['metadata']===_0x189258(0x180))return Reflect[_0x189258(0x16e)](_0x3f338b,_0x3cf71f);},__param=this&&this[_0x5479a7(0x18b)]||function(_0x2b72f6,_0x184714){return function(_0xfb490b,_0x4ab111){_0x184714(_0xfb490b,_0x4ab111,_0x2b72f6);};};Object[_0x5479a7(0x16d)](exports,_0x5479a7(0x18d),{'value':!![]}),exports[_0x5479a7(0x170)]=void 0x0;const globalConfig_service_1=require(_0x5479a7(0x163)),status_constant_1=require(_0x5479a7(0x162)),typeorm_1=require(_0x5479a7(0x189)),typeorm_2=require('typeorm'),verifycation_entity_1=require(_0x5479a7(0x181)),common_1=require('@nestjs/common'),utils_1=require('../../common/utils'),redisCache_service_1=require(_0x5479a7(0x185)),Core=require(_0x5479a7(0x16b));let VerificationService=class VerificationService{constructor(_0x5255b7,_0x1d9fca,_0x2c1e00){const _0x33a2ae=_0x5479a7;this['verifycationEntity']=_0x5255b7,this[_0x33a2ae(0x177)]=_0x1d9fca,this[_0x33a2ae(0x159)]=_0x2c1e00;}async[_0x5479a7(0x160)](_0x1533af,_0x196bd9,_0x10d0ef=0x1e*0x3c){const _0x2261a1=_0x5479a7,_0x529aa1=await this[_0x2261a1(0x15e)]['findOne']({'where':{'userId':_0x1533af['id'],'type':_0x196bd9},'order':{'createdAt':'DESC'}});if(_0x529aa1&&_0x529aa1[_0x2261a1(0x152)]['getTime']()+0x1*0x3c*0x3e8>Date[_0x2261a1(0x15f)]()){const _0x1828ac=Math['ceil']((_0x529aa1[_0x2261a1(0x152)]['getTime']()+0x1*0x3c*0x3e8-Date['now']())/0x3e8);throw new common_1['HttpException'](_0x1828ac+_0x2261a1(0x176),common_1['HttpStatus'][_0x2261a1(0x154)]);}const _0x140bce=(0x0,utils_1['createRandomCode'])(),_0x2f9fdc=new Date(Date[_0x2261a1(0x15f)]()+_0x10d0ef*0x3e8),{id:_0x18fe51,email:_0x33e714}=_0x1533af,_0x186683={'userId':_0x18fe51,'type':_0x196bd9,'code':_0x140bce,'expiresAt':_0x2f9fdc,'email':_0x33e714};return await this[_0x2261a1(0x15e)][_0x2261a1(0x16c)](_0x186683);}async[_0x5479a7(0x172)]({code:_0x2f365e,id:_0x3f0caa},_0x4b6a9c){const _0x59f0cd=_0x5479a7,_0x1c1940=await this[_0x59f0cd(0x15e)][_0x59f0cd(0x184)]({'where':{'id':_0x3f0caa,'type':_0x4b6a9c},'order':{'createdAt':_0x59f0cd(0x16a)}});if(!_0x1c1940)throw new common_1[(_0x59f0cd(0x155))](_0x59f0cd(0x188),common_1['HttpStatus'][_0x59f0cd(0x154)]);if(_0x1c1940[_0x59f0cd(0x14f)]===status_constant_1[_0x59f0cd(0x175)]['USED'])throw new common_1[(_0x59f0cd(0x155))](_0x59f0cd(0x17b),common_1['HttpStatus']['BAD_REQUEST']);else _0x1c1940['used']=status_constant_1[_0x59f0cd(0x175)][_0x59f0cd(0x169)],await this[_0x59f0cd(0x15e)][_0x59f0cd(0x18e)]({'id':_0x3f0caa},_0x1c1940);if(Number(_0x1c1940[_0x59f0cd(0x17d)])!==Number(_0x2f365e))throw new common_1[(_0x59f0cd(0x155))]('验证码错误',common_1[_0x59f0cd(0x15b)][_0x59f0cd(0x154)]);if(_0x1c1940[_0x59f0cd(0x193)]<new Date())throw new common_1[(_0x59f0cd(0x155))](_0x59f0cd(0x17c),common_1[_0x59f0cd(0x15b)][_0x59f0cd(0x154)]);return _0x1c1940;}async['verifyCaptcha'](_0x44e385){const _0x59a97c=_0x5479a7,{captchaId:_0x34a286,captchaCode:_0x22494a}=_0x44e385,_0x15d165=await this[_0x59a97c(0x177)][_0x59a97c(0x167)](),_0x90ce50=_0x15d165+':CAPTCHA:'+_0x34a286,_0x4b927a=await this['redisCacheService'][_0x59a97c(0x179)]({'key':_0x90ce50});await this[_0x59a97c(0x159)][_0x59a97c(0x150)]({'key':_0x90ce50});if(!_0x4b927a)throw new common_1['HttpException'](_0x59a97c(0x157),common_1[_0x59a97c(0x15b)][_0x59a97c(0x154)]);if(!_0x4b927a||_0x4b927a!==_0x22494a)throw new common_1['HttpException'](_0x59a97c(0x151),common_1[_0x59a97c(0x15b)][_0x59a97c(0x154)]);}async[_0x5479a7(0x15a)](_0x474ab4){const _0x312d2f=_0x5479a7;var _0x14bd03;const {accessKeyId:_0x1d5638,accessKeySecret:_0x43103d,SignName:_0x594871,TemplateCode:_0x3322da}=await this[_0x312d2f(0x177)][_0x312d2f(0x166)](),{phone:_0x297e6b,code:_0x2d464a}=_0x474ab4;if(!_0x297e6b||!_0x2d464a)throw new common_1[(_0x312d2f(0x155))](_0x312d2f(0x153),common_1['HttpStatus'][_0x312d2f(0x154)]);const _0x5ccc5d=new Core({'accessKeyId':_0x1d5638,'accessKeySecret':_0x43103d,'endpoint':_0x312d2f(0x156),'apiVersion':_0x312d2f(0x183)}),_0x56ae1f={'PhoneNumbers':_0x297e6b,'SignName':_0x594871,'TemplateCode':_0x3322da,'TemplateParam':JSON[_0x312d2f(0x18c)]({'code':_0x2d464a})},_0x2f2b65={'method':_0x312d2f(0x16f),'formatParams':![]};try{const _0x393fc4=await _0x5ccc5d['request']('SendSms',_0x56ae1f,_0x2f2b65);if(_0x393fc4[_0x312d2f(0x161)]==='OK')return!![];else throw new common_1[(_0x312d2f(0x155))](_0x393fc4[_0x312d2f(0x18f)]||'验证码发送失败！',common_1['HttpStatus'][_0x312d2f(0x154)]);}catch(_0x14b6f8){throw new common_1[(_0x312d2f(0x155))](((_0x14bd03=_0x14b6f8===null||_0x14b6f8===void 0x0?void 0x0:_0x14b6f8[_0x312d2f(0x15d)])===null||_0x14bd03===void 0x0?void 0x0:_0x14bd03['Message'])||_0x312d2f(0x178),common_1[_0x312d2f(0x15b)]['BAD_REQUEST']);}}};VerificationService=__decorate([(0x0,common_1[_0x5479a7(0x174)])(),__param(0x0,(0x0,typeorm_1[_0x5479a7(0x191)])(verifycation_entity_1['VerifycationEntity'])),__metadata(_0x5479a7(0x186),[typeorm_2[_0x5479a7(0x182)],globalConfig_service_1[_0x5479a7(0x168)],redisCache_service_1[_0x5479a7(0x171)]])],VerificationService),exports[_0x5479a7(0x170)]=VerificationService;