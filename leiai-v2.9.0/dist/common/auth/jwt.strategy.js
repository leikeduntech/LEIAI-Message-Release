'use strict';var _0x1af213=_0xfeee;(function(_0x4d4249,_0x5b14e0){var _0x4c28f2=_0xfeee,_0x2a9eec=_0x4d4249();while(!![]){try{var _0x2c7982=parseInt(_0x4c28f2(0x1b2))/0x1+parseInt(_0x4c28f2(0x1a4))/0x2*(-parseInt(_0x4c28f2(0x1b3))/0x3)+parseInt(_0x4c28f2(0x1a2))/0x4*(parseInt(_0x4c28f2(0x19b))/0x5)+parseInt(_0x4c28f2(0x1b6))/0x6+parseInt(_0x4c28f2(0x1a3))/0x7+-parseInt(_0x4c28f2(0x1ac))/0x8+-parseInt(_0x4c28f2(0x1a8))/0x9;if(_0x2c7982===_0x5b14e0)break;else _0x2a9eec['push'](_0x2a9eec['shift']());}catch(_0x32a88e){_0x2a9eec['push'](_0x2a9eec['shift']());}}}(_0x3d12,0x51516));function _0xfeee(_0x393e6c,_0x1f5b56){var _0x3d1200=_0x3d12();return _0xfeee=function(_0xfeee97,_0x16f0c2){_0xfeee97=_0xfeee97-0x19b;var _0x3bc1c3=_0x3d1200[_0xfeee97];return _0x3bc1c3;},_0xfeee(_0x393e6c,_0x1f5b56);}function _0x3d12(){var _0x19e09f=['nestjs-config','3919545XWdLpS','object','configService','decorate','1029408PEjeKe','validate','fromAuthHeaderAsBearerToken','defineProperty','metadata','PassportStrategy','112427WWnGoB','1805514CmoEBN','@nestjs/common','get','2264628QOZPcB','JwtStrategy','function','335NGfzTp','getOwnPropertyDescriptor','length','__metadata','ConfigService','__esModule','design:paramtypes','37916Aqtsli','2618973UeEzlz','2BFuEui','jwt','passport-jwt'];_0x3d12=function(){return _0x19e09f;};return _0x3d12();}var __decorate=this&&this['__decorate']||function(_0x4eea3e,_0x3f0c31,_0x3c439b,_0x2eaaaf){var _0x4a973c=_0xfeee,_0x99cf08=arguments[_0x4a973c(0x19d)],_0x3d49c1=_0x99cf08<0x3?_0x3f0c31:_0x2eaaaf===null?_0x2eaaaf=Object[_0x4a973c(0x19c)](_0x3f0c31,_0x3c439b):_0x2eaaaf,_0x1f06f0;if(typeof Reflect===_0x4a973c(0x1a9)&&typeof Reflect[_0x4a973c(0x1ab)]==='function')_0x3d49c1=Reflect[_0x4a973c(0x1ab)](_0x4eea3e,_0x3f0c31,_0x3c439b,_0x2eaaaf);else{for(var _0x54510b=_0x4eea3e[_0x4a973c(0x19d)]-0x1;_0x54510b>=0x0;_0x54510b--)if(_0x1f06f0=_0x4eea3e[_0x54510b])_0x3d49c1=(_0x99cf08<0x3?_0x1f06f0(_0x3d49c1):_0x99cf08>0x3?_0x1f06f0(_0x3f0c31,_0x3c439b,_0x3d49c1):_0x1f06f0(_0x3f0c31,_0x3c439b))||_0x3d49c1;}return _0x99cf08>0x3&&_0x3d49c1&&Object[_0x4a973c(0x1af)](_0x3f0c31,_0x3c439b,_0x3d49c1),_0x3d49c1;},__metadata=this&&this[_0x1af213(0x19e)]||function(_0x12a1db,_0x31ed4c){var _0x42c3d5=_0x1af213;if(typeof Reflect===_0x42c3d5(0x1a9)&&typeof Reflect[_0x42c3d5(0x1b0)]===_0x42c3d5(0x1b8))return Reflect[_0x42c3d5(0x1b0)](_0x12a1db,_0x31ed4c);};Object[_0x1af213(0x1af)](exports,_0x1af213(0x1a0),{'value':!![]}),exports[_0x1af213(0x1b7)]=void 0x0;const nestjs_config_1=require(_0x1af213(0x1a7)),passport_jwt_1=require(_0x1af213(0x1a6)),passport_1=require('@nestjs/passport'),common_1=require(_0x1af213(0x1b4));let JwtStrategy=class JwtStrategy extends(0x0,passport_1[_0x1af213(0x1b1)])(passport_jwt_1['Strategy']){constructor(_0x1ca989){var _0x4d2a7c=_0x1af213;super({'jwtFromRequest':passport_jwt_1['ExtractJwt'][_0x4d2a7c(0x1ae)](),'secretOrKey':_0x1ca989[_0x4d2a7c(0x1b5)](_0x4d2a7c(0x1a5))['secret']}),this[_0x4d2a7c(0x1aa)]=_0x1ca989;}async[_0x1af213(0x1ad)](_0x1fc986){return _0x1fc986;}};JwtStrategy=__decorate([(0x0,common_1['Injectable'])(),__metadata(_0x1af213(0x1a1),[nestjs_config_1[_0x1af213(0x19f)]])],JwtStrategy),exports['JwtStrategy']=JwtStrategy;