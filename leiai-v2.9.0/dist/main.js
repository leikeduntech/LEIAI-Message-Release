'use strict';const _0x54445f=_0xd8dd;(function(_0x246142,_0x5d2270){const _0x72aef0=_0xd8dd,_0x2eaa49=_0x246142();while(!![]){try{const _0xe672c0=parseInt(_0x72aef0(0x13e))/0x1*(parseInt(_0x72aef0(0x168))/0x2)+-parseInt(_0x72aef0(0x151))/0x3+parseInt(_0x72aef0(0x147))/0x4+parseInt(_0x72aef0(0x14d))/0x5+-parseInt(_0x72aef0(0x169))/0x6*(-parseInt(_0x72aef0(0x142))/0x7)+-parseInt(_0x72aef0(0x158))/0x8+parseInt(_0x72aef0(0x15c))/0x9*(-parseInt(_0x72aef0(0x150))/0xa);if(_0xe672c0===_0x5d2270)break;else _0x2eaa49['push'](_0x2eaa49['shift']());}catch(_0x1d12a1){_0x2eaa49['push'](_0x2eaa49['shift']());}}}(_0x469c,0xda7d6));function _0x469c(){const _0x5d74b4=['create','./common/filters/allExceptions.filter','./public','use','1424nrGswh','148512ghCFxQ','useGlobalFilters','listen','Logger','compression','timeout','__esModule','log','@nestjs/common','@nestjs/core','set','./common/filters/typeOrmQueryFailed.filter','587anzfoy','TypeOrmQueryFailedFilter','useGlobalPipes','./app.module','112zgxWFi','ValidationPipe','setGlobalPrefix','defineProperty','useGlobalInterceptors','1681072AgmnWa','view\x20engine','uncaughtException','PORT','AppModule','Main','8036965GEVhRz','swagger文档已经就绪,文档地址请访问:\x20http://localhost:','SWAGGERPREFIX','7946930rKWHet','1555242xLnbsF','express-xml-bodyparser','TransformInterceptor','path','getInstance','APIPREFIX','enableCors','5068768rFTUbR','./config/main','./common/swagger','initDatabase','9IHUwPH','resolve','createSwagger','config','NestFactory','getHttpAdapter','templates/pages','.env'];_0x469c=function(){return _0x5d74b4;};return _0x469c();}Object[_0x54445f(0x145)](exports,_0x54445f(0x138),{'value':!![]});const Dotenv=require('dotenv');Dotenv[_0x54445f(0x15f)]({'path':_0x54445f(0x163)});const core_1=require(_0x54445f(0x13b)),app_module_1=require(_0x54445f(0x141)),swagger_1=require(_0x54445f(0x15a)),allExceptions_filter_1=require(_0x54445f(0x165)),typeOrmQueryFailed_filter_1=require(_0x54445f(0x13d)),common_1=require(_0x54445f(0x13a)),transform_interceptor_1=require('./common/interceptors/transform.interceptor'),main_1=require(_0x54445f(0x159)),initDatabase_1=require('./modules/database/initDatabase'),compression=require(_0x54445f(0x136)),xmlBodyParser=require(_0x54445f(0x152)),path_1=require(_0x54445f(0x154));function _0xd8dd(_0x1f5cd8,_0xd0d514){const _0x469c2f=_0x469c();return _0xd8dd=function(_0xd8dd68,_0x51d443){_0xd8dd68=_0xd8dd68-0x134;let _0x580162=_0x469c2f[_0xd8dd68];return _0x580162;},_0xd8dd(_0x1f5cd8,_0xd0d514);}async function bootstrap(){const _0x3f8cfe=_0x54445f;await(0x0,initDatabase_1[_0x3f8cfe(0x15b)])();const _0xc9d9e2=await core_1[_0x3f8cfe(0x160)][_0x3f8cfe(0x164)](app_module_1[_0x3f8cfe(0x14b)]);_0xc9d9e2[_0x3f8cfe(0x167)](compression());const _0x379550=(0x0,path_1[_0x3f8cfe(0x15d)])(__dirname,_0x3f8cfe(0x166));_0xc9d9e2[_0x3f8cfe(0x167)](xmlBodyParser()),_0xc9d9e2[_0x3f8cfe(0x157)](),_0xc9d9e2[_0x3f8cfe(0x144)](main_1[_0x3f8cfe(0x156)]),_0xc9d9e2[_0x3f8cfe(0x146)](new transform_interceptor_1[(_0x3f8cfe(0x153))]()),_0xc9d9e2[_0x3f8cfe(0x16a)](new typeOrmQueryFailed_filter_1[(_0x3f8cfe(0x13f))]()),_0xc9d9e2['useGlobalFilters'](new allExceptions_filter_1['AllExceptionsFilter']()),_0xc9d9e2[_0x3f8cfe(0x140)](new common_1[(_0x3f8cfe(0x143))]()),_0xc9d9e2['getHttpAdapter']()[_0x3f8cfe(0x155)]()[_0x3f8cfe(0x13c)]('views',_0x3f8cfe(0x162)),_0xc9d9e2[_0x3f8cfe(0x161)]()[_0x3f8cfe(0x155)]()[_0x3f8cfe(0x13c)](_0x3f8cfe(0x148),'hbs'),process['on'](_0x3f8cfe(0x149),function(_0x5bc6ee){console['log'](_0x5bc6ee);}),(0x0,swagger_1[_0x3f8cfe(0x15e)])(_0xc9d9e2);const _0x16edd8=await _0xc9d9e2[_0x3f8cfe(0x134)](main_1['PORT'],()=>{const _0x131b59=_0x3f8cfe;common_1[_0x131b59(0x135)][_0x131b59(0x139)]('服务已经启动,接口请访问:\x20http://localhost:'+main_1[_0x131b59(0x14a)]+main_1[_0x131b59(0x156)],_0x131b59(0x14c)),common_1[_0x131b59(0x135)][_0x131b59(0x139)](_0x131b59(0x14e)+main_1[_0x131b59(0x14a)]+main_1[_0x131b59(0x14f)],_0x131b59(0x14c));});_0x16edd8[_0x3f8cfe(0x137)]=0x5*0x3c*0x3e8;}bootstrap();