'use strict';var _0x8930c9=_0x2fed;(function(_0x13f080,_0x2ee29e){var _0x7fed4=_0x2fed,_0x46197d=_0x13f080();while(!![]){try{var _0x4511b1=parseInt(_0x7fed4(0x10c))/0x1+-parseInt(_0x7fed4(0xf5))/0x2*(parseInt(_0x7fed4(0xf8))/0x3)+parseInt(_0x7fed4(0xfd))/0x4*(-parseInt(_0x7fed4(0xed))/0x5)+parseInt(_0x7fed4(0xf2))/0x6+parseInt(_0x7fed4(0xf3))/0x7*(parseInt(_0x7fed4(0x101))/0x8)+parseInt(_0x7fed4(0xf1))/0x9+parseInt(_0x7fed4(0x102))/0xa*(-parseInt(_0x7fed4(0x105))/0xb);if(_0x4511b1===_0x2ee29e)break;else _0x46197d['push'](_0x46197d['shift']());}catch(_0x5821c9){_0x46197d['push'](_0x46197d['shift']());}}}(_0x1e55,0xc82a1));function _0x1e55(){var _0x3cc7f6=['__decorate','Entity','22355HPLlEl','remark','申请提现人用户Id','metadata','504954VmnbJa','5631876VttHLu','7IBjeAQ','contactInformation','4bpgZhg','auditStatus','Column','169077gIkAFm','提现联系信息、备注即可','提现备注留言','function','paymentStatus','1420pMqKwL','prototype','sales_order','object','6290616HPuITJ','1006410CEDnVb','typeorm','打款状态','88hvEamr','decorate','withdrawalChannels','design:type','length','BaseEntity','SalesOrderEntity','1543845MDgjzu','__metadata','orderStatus','__esModule','defineProperty'];_0x1e55=function(){return _0x3cc7f6;};return _0x1e55();}var __decorate=this&&this[_0x8930c9(0xeb)]||function(_0x14a439,_0x5adae2,_0x4262f4,_0x166d20){var _0x2952d1=_0x8930c9,_0x4c3192=arguments[_0x2952d1(0x109)],_0x5754bc=_0x4c3192<0x3?_0x5adae2:_0x166d20===null?_0x166d20=Object['getOwnPropertyDescriptor'](_0x5adae2,_0x4262f4):_0x166d20,_0x11454e;if(typeof Reflect==='object'&&typeof Reflect[_0x2952d1(0x106)]===_0x2952d1(0xfb))_0x5754bc=Reflect[_0x2952d1(0x106)](_0x14a439,_0x5adae2,_0x4262f4,_0x166d20);else{for(var _0x3014d5=_0x14a439[_0x2952d1(0x109)]-0x1;_0x3014d5>=0x0;_0x3014d5--)if(_0x11454e=_0x14a439[_0x3014d5])_0x5754bc=(_0x4c3192<0x3?_0x11454e(_0x5754bc):_0x4c3192>0x3?_0x11454e(_0x5adae2,_0x4262f4,_0x5754bc):_0x11454e(_0x5adae2,_0x4262f4))||_0x5754bc;}return _0x4c3192>0x3&&_0x5754bc&&Object[_0x2952d1(0xea)](_0x5adae2,_0x4262f4,_0x5754bc),_0x5754bc;},__metadata=this&&this[_0x8930c9(0x10d)]||function(_0x61bfab,_0x2047bc){var _0x2838d7=_0x8930c9;if(typeof Reflect===_0x2838d7(0x100)&&typeof Reflect[_0x2838d7(0xf0)]===_0x2838d7(0xfb))return Reflect[_0x2838d7(0xf0)](_0x61bfab,_0x2047bc);};Object[_0x8930c9(0xea)](exports,_0x8930c9(0x10f),{'value':!![]}),exports['SalesOrderEntity']=void 0x0;const typeorm_1=require(_0x8930c9(0x103)),baseEntity_1=require('../../common/entity/baseEntity');let SalesOrderEntity=class SalesOrderEntity extends baseEntity_1[_0x8930c9(0x10a)]{};function _0x2fed(_0x57052e,_0x3b0c53){var _0x1e55ef=_0x1e55();return _0x2fed=function(_0x2fedc0,_0x13254c){_0x2fedc0=_0x2fedc0-0xea;var _0x182b9e=_0x1e55ef[_0x2fedc0];return _0x182b9e;},_0x2fed(_0x57052e,_0x3b0c53);}__decorate([(0x0,typeorm_1['Column'])({'comment':_0x8930c9(0xef)}),__metadata(_0x8930c9(0x108),Number)],SalesOrderEntity[_0x8930c9(0xfe)],'userId',void 0x0),__decorate([(0x0,typeorm_1[_0x8930c9(0xf7)])({'comment':'申请提现的金额'}),__metadata(_0x8930c9(0x108),Number)],SalesOrderEntity[_0x8930c9(0xfe)],'withdrawalAmount',void 0x0),__decorate([(0x0,typeorm_1[_0x8930c9(0xf7)])({'comment':'工单状态'}),__metadata(_0x8930c9(0x108),Number)],SalesOrderEntity[_0x8930c9(0xfe)],_0x8930c9(0x10e),void 0x0),__decorate([(0x0,typeorm_1['Column'])({'comment':'审核状态'}),__metadata(_0x8930c9(0x108),Number)],SalesOrderEntity[_0x8930c9(0xfe)],_0x8930c9(0xf6),void 0x0),__decorate([(0x0,typeorm_1[_0x8930c9(0xf7)])({'comment':'审核人','nullable':!![]}),__metadata(_0x8930c9(0x108),Number)],SalesOrderEntity[_0x8930c9(0xfe)],'auditUserId',void 0x0),__decorate([(0x0,typeorm_1['Column'])({'comment':_0x8930c9(0x104),'nullable':!![]}),__metadata(_0x8930c9(0x108),Number)],SalesOrderEntity[_0x8930c9(0xfe)],_0x8930c9(0xfc),void 0x0),__decorate([(0x0,typeorm_1[_0x8930c9(0xf7)])({'comment':'提现渠道\x201:\x20支付宝\x202：\x20微信\x203:\x20\x20银行卡','nullable':!![]}),__metadata('design:type',Number)],SalesOrderEntity[_0x8930c9(0xfe)],_0x8930c9(0x107),void 0x0),__decorate([(0x0,typeorm_1['Column'])({'comment':_0x8930c9(0xf9),'nullable':!![]}),__metadata(_0x8930c9(0x108),String)],SalesOrderEntity[_0x8930c9(0xfe)],_0x8930c9(0xf4),void 0x0),__decorate([(0x0,typeorm_1[_0x8930c9(0xf7)])({'comment':_0x8930c9(0xfa),'nullable':!![]}),__metadata('design:type',String)],SalesOrderEntity['prototype'],_0x8930c9(0xee),void 0x0),SalesOrderEntity=__decorate([(0x0,typeorm_1[_0x8930c9(0xec)])({'name':_0x8930c9(0xff)})],SalesOrderEntity),exports[_0x8930c9(0x10b)]=SalesOrderEntity;