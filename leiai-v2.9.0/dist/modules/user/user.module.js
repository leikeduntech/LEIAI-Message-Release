'use strict';const _0x1556ed=_0x1340;function _0x1340(_0xaa2ba6,_0x936661){const _0x3fdd3a=_0x3fdd();return _0x1340=function(_0x1340bd,_0x5517e5){_0x1340bd=_0x1340bd-0xf4;let _0x3ca468=_0x3fdd3a[_0x1340bd];return _0x3ca468;},_0x1340(_0xaa2ba6,_0x936661);}(function(_0x5e23a4,_0x17f71e){const _0x3b61b0=_0x1340,_0x3d01fa=_0x5e23a4();while(!![]){try{const _0x3c0481=parseInt(_0x3b61b0(0xfa))/0x1+parseInt(_0x3b61b0(0x113))/0x2+-parseInt(_0x3b61b0(0xff))/0x3+parseInt(_0x3b61b0(0x118))/0x4*(-parseInt(_0x3b61b0(0xf5))/0x5)+-parseInt(_0x3b61b0(0x115))/0x6*(parseInt(_0x3b61b0(0xfd))/0x7)+parseInt(_0x3b61b0(0x10c))/0x8*(-parseInt(_0x3b61b0(0xf9))/0x9)+parseInt(_0x3b61b0(0x101))/0xa;if(_0x3c0481===_0x17f71e)break;else _0x3d01fa['push'](_0x3d01fa['shift']());}catch(_0x35066b){_0x3d01fa['push'](_0x3d01fa['shift']());}}}(_0x3fdd,0x1b700));var __decorate=this&&this[_0x1556ed(0x117)]||function(_0x4cbdbc,_0x1b91e3,_0x123fc1,_0x2d8808){const _0x149c10=_0x1556ed;var _0x437186=arguments[_0x149c10(0x10d)],_0x1a722c=_0x437186<0x3?_0x1b91e3:_0x2d8808===null?_0x2d8808=Object['getOwnPropertyDescriptor'](_0x1b91e3,_0x123fc1):_0x2d8808,_0x38088b;if(typeof Reflect==='object'&&typeof Reflect['decorate']===_0x149c10(0x10e))_0x1a722c=Reflect['decorate'](_0x4cbdbc,_0x1b91e3,_0x123fc1,_0x2d8808);else{for(var _0x1c0f32=_0x4cbdbc['length']-0x1;_0x1c0f32>=0x0;_0x1c0f32--)if(_0x38088b=_0x4cbdbc[_0x1c0f32])_0x1a722c=(_0x437186<0x3?_0x38088b(_0x1a722c):_0x437186>0x3?_0x38088b(_0x1b91e3,_0x123fc1,_0x1a722c):_0x38088b(_0x1b91e3,_0x123fc1))||_0x1a722c;}return _0x437186>0x3&&_0x1a722c&&Object['defineProperty'](_0x1b91e3,_0x123fc1,_0x1a722c),_0x1a722c;};Object[_0x1556ed(0x103)](exports,'__esModule',{'value':!![]}),exports[_0x1556ed(0xf6)]=void 0x0;const verifycation_entity_1=require(_0x1556ed(0x116)),verification_service_1=require(_0x1556ed(0x108)),common_1=require('@nestjs/common'),typeorm_1=require(_0x1556ed(0xfb)),user_controller_1=require('./user.controller'),user_service_1=require(_0x1556ed(0x10b)),user_entity_1=require(_0x1556ed(0x114)),userBalance_service_1=require(_0x1556ed(0xf7)),balance_entity_1=require(_0x1556ed(0x100)),accountLog_entity_1=require(_0x1556ed(0x102)),config_entity_1=require('../globalConfig/config.entity'),cramiPackage_entity_1=require(_0x1556ed(0xfe)),whiteList_entity_1=require(_0x1556ed(0x104)),userBalance_entity_1=require('../userBalance/userBalance.entity'),salesUsers_entity_1=require(_0x1556ed(0x10a)),redisCache_service_1=require(_0x1556ed(0x109));let UserModule=class UserModule{};function _0x3fdd(){const _0x4fb95a=['./user.service','8KgPWZw','length','function','ConfigEntity','UserEntity','Module','WhiteListEntity','381496ijYLUm','./user.entity','6NYBTnY','./../verification/verifycation.entity','__decorate','404324HXQixM','UserService','UserBalanceEntity','VerificationService','10odyiQk','UserModule','../userBalance/userBalance.service','SalesUsersEntity','759096mSRlpM','86886JQRqZF','@nestjs/typeorm','TypeOrmModule','398867DppkEY','../crami/cramiPackage.entity','521163JgggLM','../userBalance/balance.entity','3519580UQROXW','../userBalance/accountLog.entity','defineProperty','../chatgpt/whiteList.entity','BalanceEntity','AccountLogEntity','VerifycationEntity','./../verification/verification.service','../redisCache/redisCache.service','../sales/salesUsers.entity'];_0x3fdd=function(){return _0x4fb95a;};return _0x3fdd();}UserModule=__decorate([(0x0,common_1['Global'])(),(0x0,common_1[_0x1556ed(0x111)])({'imports':[typeorm_1[_0x1556ed(0xfc)]['forFeature']([user_entity_1[_0x1556ed(0x110)],verifycation_entity_1[_0x1556ed(0x107)],balance_entity_1[_0x1556ed(0x105)],accountLog_entity_1[_0x1556ed(0x106)],config_entity_1[_0x1556ed(0x10f)],cramiPackage_entity_1['CramiPackageEntity'],whiteList_entity_1[_0x1556ed(0x112)],userBalance_entity_1[_0x1556ed(0x11a)],salesUsers_entity_1[_0x1556ed(0xf8)]])],'controllers':[user_controller_1['UserController']],'providers':[user_service_1[_0x1556ed(0x119)],verification_service_1[_0x1556ed(0xf4)],userBalance_service_1['UserBalanceService'],redisCache_service_1['RedisCacheService']],'exports':[user_service_1['UserService']]})],UserModule),exports[_0x1556ed(0xf6)]=UserModule;