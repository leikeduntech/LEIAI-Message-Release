'use strict';var _0xf1fa94=_0x51e1;function _0x3449(){var _0xe06c81=['66eJBibA','Column','用户性别','prototype','object','69177wVnFqc','avatar','viewer','registerIp','用户状态','decorate','3980660dbAXSq','我是一台基于深度学习和自然语言处理技术的\x20AI\x20机器人，旨在为用户提供高效、精准、个性化的智能服务。','phone','用户邮箱','inviteLinkCount','metadata','design:type','UserEntity','用户连续签到天数','lastLoginIp','微信openId','status','__decorate','用户邀请码','3410592CWdXZQ','username','defineProperty','200tafWfN','7125288cIXzfT','sex','用户邀请链接被点击次数','inviteCode','用户手机号','password','用户头像','typeorm','9YJRDCB','length','904862nRAfQE','function','users','用户签名','用户注册来源','role','Entity','sign','client','consecutiveDays','197750qwYXDQ','44610PTgsZi'];_0x3449=function(){return _0xe06c81;};return _0x3449();}(function(_0x2ed2af,_0x1b7271){var _0xd84f1e=_0x51e1,_0x3ec371=_0x2ed2af();while(!![]){try{var _0xe54a5e=-parseInt(_0xd84f1e(0x129))/0x1+parseInt(_0xd84f1e(0x102))/0x2*(parseInt(_0xd84f1e(0x107))/0x3)+parseInt(_0xd84f1e(0x11b))/0x4+parseInt(_0xd84f1e(0x11e))/0x5*(parseInt(_0xd84f1e(0x101))/0x6)+-parseInt(_0xd84f1e(0x100))/0x7+-parseInt(_0xd84f1e(0x11f))/0x8+parseInt(_0xd84f1e(0x127))/0x9*(parseInt(_0xd84f1e(0x10d))/0xa);if(_0xe54a5e===_0x1b7271)break;else _0x3ec371['push'](_0x3ec371['shift']());}catch(_0x514418){_0x3ec371['push'](_0x3ec371['shift']());}}}(_0x3449,0x767a8));function _0x51e1(_0x1f14b7,_0x23e4aa){var _0x34497a=_0x3449();return _0x51e1=function(_0x51e1bd,_0x1ca837){_0x51e1bd=_0x51e1bd-0xfb;var _0x1f4f84=_0x34497a[_0x51e1bd];return _0x1f4f84;},_0x51e1(_0x1f14b7,_0x23e4aa);}var __decorate=this&&this[_0xf1fa94(0x119)]||function(_0x38d419,_0x36e5d7,_0x407024,_0x536344){var _0xf9148b=_0xf1fa94,_0x416385=arguments[_0xf9148b(0x128)],_0x48b86b=_0x416385<0x3?_0x36e5d7:_0x536344===null?_0x536344=Object['getOwnPropertyDescriptor'](_0x36e5d7,_0x407024):_0x536344,_0x3c84b4;if(typeof Reflect===_0xf9148b(0x106)&&typeof Reflect[_0xf9148b(0x10c)]===_0xf9148b(0x12a))_0x48b86b=Reflect[_0xf9148b(0x10c)](_0x38d419,_0x36e5d7,_0x407024,_0x536344);else{for(var _0x3c20a4=_0x38d419['length']-0x1;_0x3c20a4>=0x0;_0x3c20a4--)if(_0x3c84b4=_0x38d419[_0x3c20a4])_0x48b86b=(_0x416385<0x3?_0x3c84b4(_0x48b86b):_0x416385>0x3?_0x3c84b4(_0x36e5d7,_0x407024,_0x48b86b):_0x3c84b4(_0x36e5d7,_0x407024))||_0x48b86b;}return _0x416385>0x3&&_0x48b86b&&Object[_0xf9148b(0x11d)](_0x36e5d7,_0x407024,_0x48b86b),_0x48b86b;},__metadata=this&&this['__metadata']||function(_0x17e85f,_0x2d0079){var _0x54b0be=_0xf1fa94;if(typeof Reflect===_0x54b0be(0x106)&&typeof Reflect['metadata']===_0x54b0be(0x12a))return Reflect[_0x54b0be(0x112)](_0x17e85f,_0x2d0079);};Object[_0xf1fa94(0x11d)](exports,'__esModule',{'value':!![]}),exports[_0xf1fa94(0x114)]=void 0x0;const typeorm_1=require(_0xf1fa94(0x126)),baseEntity_1=require('../../common/entity/baseEntity');let UserEntity=class UserEntity extends baseEntity_1['BaseEntity']{};__decorate([(0x0,typeorm_1['Column'])({'length':0xc,'comment':'用户昵称'}),__metadata(_0xf1fa94(0x113),String)],UserEntity['prototype'],_0xf1fa94(0x11c),void 0x0),__decorate([(0x0,typeorm_1[_0xf1fa94(0x103)])({'length':0x40,'comment':'用户密码','nullable':!![]}),__metadata(_0xf1fa94(0x113),String)],UserEntity[_0xf1fa94(0x105)],_0xf1fa94(0x124),void 0x0),__decorate([(0x0,typeorm_1[_0xf1fa94(0x103)])({'default':0x0,'comment':_0xf1fa94(0x10b)}),__metadata('design:type',Number)],UserEntity[_0xf1fa94(0x105)],_0xf1fa94(0x118),void 0x0),__decorate([(0x0,typeorm_1['Column'])({'default':0x1,'comment':_0xf1fa94(0x104)}),__metadata(_0xf1fa94(0x113),Number)],UserEntity[_0xf1fa94(0x105)],_0xf1fa94(0x120),void 0x0),__decorate([(0x0,typeorm_1[_0xf1fa94(0x103)])({'length':0x40,'unique':!![],'comment':_0xf1fa94(0x110)}),__metadata('design:type',String)],UserEntity[_0xf1fa94(0x105)],'email',void 0x0),__decorate([(0x0,typeorm_1[_0xf1fa94(0x103)])({'length':0x40,'nullable':!![],'comment':_0xf1fa94(0x123)}),__metadata(_0xf1fa94(0x113),String)],UserEntity[_0xf1fa94(0x105)],_0xf1fa94(0x10f),void 0x0),__decorate([(0x0,typeorm_1[_0xf1fa94(0x103)])({'length':0x12c,'nullable':!![],'default':'','comment':_0xf1fa94(0x125)}),__metadata(_0xf1fa94(0x113),String)],UserEntity[_0xf1fa94(0x105)],_0xf1fa94(0x108),void 0x0),__decorate([(0x0,typeorm_1[_0xf1fa94(0x103)])({'length':0x12c,'nullable':!![],'default':_0xf1fa94(0x10e),'comment':_0xf1fa94(0x12c)}),__metadata('design:type',String)],UserEntity['prototype'],_0xf1fa94(0xfd),void 0x0),__decorate([(0x0,typeorm_1[_0xf1fa94(0x103)])({'length':0x40,'default':'','comment':'注册IP','nullable':!![]}),__metadata(_0xf1fa94(0x113),String)],UserEntity[_0xf1fa94(0x105)],_0xf1fa94(0x10a),void 0x0),__decorate([(0x0,typeorm_1[_0xf1fa94(0x103)])({'length':0x40,'default':'','comment':'最后一次登录IP','nullable':!![]}),__metadata('design:type',String)],UserEntity[_0xf1fa94(0x105)],_0xf1fa94(0x116),void 0x0),__decorate([(0x0,typeorm_1[_0xf1fa94(0x103)])({'length':0xa,'default':'','comment':_0xf1fa94(0x11a)}),__metadata('design:type',String)],UserEntity['prototype'],_0xf1fa94(0x122),void 0x0),__decorate([(0x0,typeorm_1[_0xf1fa94(0x103)])({'length':0xa,'default':'','comment':'用户填写的别人的邀请码'}),__metadata(_0xf1fa94(0x113),String)],UserEntity[_0xf1fa94(0x105)],'invitedBy',void 0x0),__decorate([(0x0,typeorm_1['Column'])({'length':0xa,'default':_0xf1fa94(0x109),'comment':'用户角色'}),__metadata('design:type',String)],UserEntity[_0xf1fa94(0x105)],_0xf1fa94(0xfb),void 0x0),__decorate([(0x0,typeorm_1['Column'])({'length':0x40,'default':'','comment':_0xf1fa94(0x117),'nullable':!![]}),__metadata(_0xf1fa94(0x113),String)],UserEntity[_0xf1fa94(0x105)],'openId',void 0x0),__decorate([(0x0,typeorm_1[_0xf1fa94(0x103)])({'length':0x40,'comment':_0xf1fa94(0x12d),'nullable':!![]}),__metadata(_0xf1fa94(0x113),String)],UserEntity[_0xf1fa94(0x105)],_0xf1fa94(0xfe),void 0x0),__decorate([(0x0,typeorm_1['Column'])({'comment':_0xf1fa94(0x121),'default':0x0}),__metadata(_0xf1fa94(0x113),Number)],UserEntity[_0xf1fa94(0x105)],_0xf1fa94(0x111),void 0x0),__decorate([(0x0,typeorm_1[_0xf1fa94(0x103)])({'comment':_0xf1fa94(0x115),'default':0x0}),__metadata(_0xf1fa94(0x113),Number)],UserEntity['prototype'],_0xf1fa94(0xff),void 0x0),UserEntity=__decorate([(0x0,typeorm_1[_0xf1fa94(0xfc)])({'name':_0xf1fa94(0x12b)})],UserEntity),exports[_0xf1fa94(0x114)]=UserEntity;