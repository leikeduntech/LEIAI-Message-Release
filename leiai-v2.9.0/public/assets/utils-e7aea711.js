import{d as D,cH as Ue,cI as Xe,f as ce,cR as Ye,cn as Qe,e as G,r as $,aX as Z,bm as de,aa as b,bu as Ze,cs as ve,cK as ne,cv as Je,bl as Y,cS as ge,P as Re,aS as Ce,cT as fe,cA as Pe,aK as et,T as tt,a0 as j,aB as q,aA as V,$ as U,bh as nt,a1 as it,a6 as pe,a4 as H,cU as ot,w as me,b3 as ye,a7 as rt,bj as lt,bn as st,bo as at,aE as dt,at as ut,aQ as X,cV as ie,cW as ct}from"./index-f164dacb.js";import{N as ft}from"./Empty-9f412620.js";function be(e,t){let{target:n}=e;for(;n;){if(n.dataset&&n.dataset[t]!==void 0)return!0;n=n.parentElement}return!1}function oe(e){const t=e.filter(n=>n!==void 0);if(t.length!==0)return t.length===1?t[0]:n=>{e.forEach(i=>{i&&i(n)})}}function Se(e){return e&-e}class ht{constructor(t,n){this.l=t,this.min=n;const i=new Array(t+1);for(let o=0;o<t+1;++o)i[o]=0;this.ft=i}add(t,n){if(n===0)return;const{l:i,ft:o}=this;for(t+=1;t<=i;)o[t]+=n,t+=Se(t)}get(t){return this.sum(t+1)-this.sum(t)}sum(t){if(t===void 0&&(t=this.l),t<=0)return 0;const{ft:n,min:i,l:o}=this;if(t>o)throw new Error("[FinweckTree.sum]: `i` is larger than length.");let s=t*i;for(;t>0;)s+=n[t],t-=Se(t);return s}getBound(t){let n=0,i=this.l;for(;i>n;){const o=Math.floor((n+i)/2),s=this.sum(o);if(s>t){i=o;continue}else if(s<t){if(n===o)return this.sum(n+1)<=t?n+1:o;n=o}else return o}return n}}let Q;function vt(){return Q===void 0&&("matchMedia"in window?Q=window.matchMedia("(pointer:coarse)").matches:Q=!1),Q}let re;function ke(){return re===void 0&&(re="chrome"in window?window.devicePixelRatio:1),re}const gt=ne(".v-vl",{maxHeight:"inherit",height:"100%",overflow:"auto",minWidth:"1px"},[ne("&:not(.v-vl--show-scrollbar)",{scrollbarWidth:"none"},[ne("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",{width:0,height:0,display:"none"})])]),pt=D({name:"VirtualList",inheritAttrs:!1,props:{showScrollbar:{type:Boolean,default:!0},items:{type:Array,default:()=>[]},itemSize:{type:Number,required:!0},itemResizable:Boolean,itemsStyle:[String,Object],visibleItemsTag:{type:[String,Object],default:"div"},visibleItemsProps:Object,ignoreItemResize:Boolean,onScroll:Function,onWheel:Function,onResize:Function,defaultScrollKey:[Number,String],defaultScrollIndex:Number,keyField:{type:String,default:"key"},paddingTop:{type:[Number,String],default:0},paddingBottom:{type:[Number,String],default:0}},setup(e){const t=Ue();gt.mount({id:"vueuc/virtual-list",head:!0,anchorMetaName:Xe,ssr:t}),ce(()=>{const{defaultScrollIndex:d,defaultScrollKey:g}=e;d!=null?y({index:d}):g!=null&&y({key:g})});let n=!1,i=!1;Ye(()=>{if(n=!1,!i){i=!0;return}y({top:m.value,left:p})}),Qe(()=>{n=!0,i||(i=!0)});const o=G(()=>{const d=new Map,{keyField:g}=e;return e.items.forEach((S,P)=>{d.set(S[g],P)}),d}),s=$(null),r=$(void 0),a=new Map,h=G(()=>{const{items:d,itemSize:g,keyField:S}=e,P=new ht(d.length,g);return d.forEach((M,O)=>{const w=M[S],L=a.get(w);L!==void 0&&P.add(O,L)}),P}),f=$(0);let p=0;const m=$(0),R=Z(()=>Math.max(h.value.getBound(m.value-de(e.paddingTop))-1,0)),K=G(()=>{const{value:d}=r;if(d===void 0)return[];const{items:g,itemSize:S}=e,P=R.value,M=Math.min(P+Math.ceil(d/S+1),g.length-1),O=[];for(let w=P;w<=M;++w)O.push(g[w]);return O}),y=(d,g)=>{if(typeof d=="number"){x(d,g,"auto");return}const{left:S,top:P,index:M,key:O,position:w,behavior:L,debounce:l=!0}=d;if(S!==void 0||P!==void 0)x(S,P,L);else if(M!==void 0)k(M,L,l);else if(O!==void 0){const u=o.value.get(O);u!==void 0&&k(u,L,l)}else w==="bottom"?x(0,Number.MAX_SAFE_INTEGER,L):w==="top"&&x(0,0,L)};let C,A=null;function k(d,g,S){const{value:P}=h,M=P.sum(d)+de(e.paddingTop);if(!S)s.value.scrollTo({left:0,top:M,behavior:g});else{C=d,A!==null&&window.clearTimeout(A),A=window.setTimeout(()=>{C=void 0,A=null},16);const{scrollTop:O,offsetHeight:w}=s.value;if(M>O){const L=P.get(d);M+L<=O+w||s.value.scrollTo({left:0,top:M+L-w,behavior:g})}else s.value.scrollTo({left:0,top:M,behavior:g})}}function x(d,g,S){s.value.scrollTo({left:d,top:g,behavior:S})}function F(d,g){var S,P,M;if(n||e.ignoreItemResize||T(g.target))return;const{value:O}=h,w=o.value.get(d),L=O.get(w),l=(M=(P=(S=g.borderBoxSize)===null||S===void 0?void 0:S[0])===null||P===void 0?void 0:P.blockSize)!==null&&M!==void 0?M:g.contentRect.height;if(l===L)return;l-e.itemSize===0?a.delete(d):a.set(d,l-e.itemSize);const N=l-L;if(N===0)return;O.add(w,N);const _=s.value;if(_!=null){if(C===void 0){const W=O.sum(w);_.scrollTop>W&&_.scrollBy(0,N)}else if(w<C)_.scrollBy(0,N);else if(w===C){const W=O.sum(w);l+W>_.scrollTop+_.offsetHeight&&_.scrollBy(0,N)}I()}f.value++}const c=!vt();let v=!1;function z(d){var g;(g=e.onScroll)===null||g===void 0||g.call(e,d),(!c||!v)&&I()}function B(d){var g;if((g=e.onWheel)===null||g===void 0||g.call(e,d),c){const S=s.value;if(S!=null){if(d.deltaX===0&&(S.scrollTop===0&&d.deltaY<=0||S.scrollTop+S.offsetHeight>=S.scrollHeight&&d.deltaY>=0))return;d.preventDefault(),S.scrollTop+=d.deltaY/ke(),S.scrollLeft+=d.deltaX/ke(),I(),v=!0,Je(()=>{v=!1})}}}function E(d){if(n||T(d.target)||d.contentRect.height===r.value)return;r.value=d.contentRect.height;const{onResize:g}=e;g!==void 0&&g(d)}function I(){const{value:d}=s;d!=null&&(m.value=d.scrollTop,p=d.scrollLeft)}function T(d){let g=d;for(;g!==null;){if(g.style.display==="none")return!0;g=g.parentElement}return!1}return{listHeight:r,listStyle:{overflow:"auto"},keyToIndex:o,itemsStyle:G(()=>{const{itemResizable:d}=e,g=Y(h.value.sum());return f.value,[e.itemsStyle,{boxSizing:"content-box",height:d?"":g,minHeight:d?g:"",paddingTop:Y(e.paddingTop),paddingBottom:Y(e.paddingBottom)}]}),visibleItemsStyle:G(()=>(f.value,{transform:`translateY(${Y(h.value.sum(R.value))})`})),viewportItems:K,listElRef:s,itemsElRef:$(null),scrollTo:y,handleListResize:E,handleListScroll:z,handleListWheel:B,handleItemResize:F}},render(){const{itemResizable:e,keyField:t,keyToIndex:n,visibleItemsTag:i}=this;return b(ve,{onResize:this.handleListResize},{default:()=>{var o,s;return b("div",Ze(this.$attrs,{class:["v-vl",this.showScrollbar&&"v-vl--show-scrollbar"],onScroll:this.handleListScroll,onWheel:this.handleListWheel,ref:"listElRef"}),[this.items.length!==0?b("div",{ref:"itemsElRef",class:"v-vl-items",style:this.itemsStyle},[b(i,Object.assign({class:"v-vl-visible-items",style:this.visibleItemsStyle},this.visibleItemsProps),{default:()=>this.viewportItems.map(r=>{const a=r[t],h=n.get(a),f=this.$slots.default({item:r,index:h})[0];return e?b(ve,{key:a,onResize:p=>this.handleItemResize(a,p)},{default:()=>f}):(f.key=a,f)})})]):(s=(o=this.$slots).empty)===null||s===void 0?void 0:s.call(o)])}})}});function mt(e,t){t&&(ce(()=>{const{value:n}=e;n&&ge.registerHandler(n,t)}),Re(()=>{const{value:n}=e;n&&ge.unregisterHandler(n)}))}const yt=D({name:"Checkmark",render(){return b("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},b("g",{fill:"none"},b("path",{d:"M14.046 3.486a.75.75 0 0 1-.032 1.06l-7.93 7.474a.85.85 0 0 1-1.188-.022l-2.68-2.72a.75.75 0 1 1 1.068-1.053l2.234 2.267l7.468-7.038a.75.75 0 0 1 1.06.032z",fill:"currentColor"})))}}),bt=D({props:{onFocus:Function,onBlur:Function},setup(e){return()=>b("div",{style:"width: 0; height: 0",tabindex:0,onFocus:e.onFocus,onBlur:e.onBlur})}});function we(e){return Array.isArray(e)?e:[e]}const ue={STOP:"STOP"};function Me(e,t){const n=t(e);e.children!==void 0&&n!==ue.STOP&&e.children.forEach(i=>Me(i,t))}function St(e,t={}){const{preserveGroup:n=!1}=t,i=[],o=n?r=>{r.isLeaf||(i.push(r.key),s(r.children))}:r=>{r.isLeaf||(r.isGroup||i.push(r.key),s(r.children))};function s(r){r.forEach(o)}return s(e),i}function kt(e,t){const{isLeaf:n}=e;return n!==void 0?n:!t(e)}function wt(e){return e.children}function xt(e){return e.key}function Nt(){return!1}function Tt(e,t){const{isLeaf:n}=e;return!(n===!1&&!Array.isArray(t(e)))}function Rt(e){return e.disabled===!0}function Ct(e,t){return e.isLeaf===!1&&!Array.isArray(t(e))}function le(e){var t;return e==null?[]:Array.isArray(e)?e:(t=e.checkedKeys)!==null&&t!==void 0?t:[]}function se(e){var t;return e==null||Array.isArray(e)?[]:(t=e.indeterminateKeys)!==null&&t!==void 0?t:[]}function Pt(e,t){const n=new Set(e);return t.forEach(i=>{n.has(i)||n.add(i)}),Array.from(n)}function Mt(e,t){const n=new Set(e);return t.forEach(i=>{n.has(i)&&n.delete(i)}),Array.from(n)}function zt(e){return(e==null?void 0:e.type)==="group"}function Ot(e){const t=new Map;return e.forEach((n,i)=>{t.set(n.key,i)}),n=>{var i;return(i=t.get(n))!==null&&i!==void 0?i:null}}class Ft extends Error{constructor(){super(),this.message="SubtreeNotLoadedError: checking a subtree whose required nodes are not fully loaded."}}function Lt(e,t,n,i){return J(t.concat(e),n,i,!1)}function It(e,t){const n=new Set;return e.forEach(i=>{const o=t.treeNodeMap.get(i);if(o!==void 0){let s=o.parent;for(;s!==null&&!(s.disabled||n.has(s.key));)n.add(s.key),s=s.parent}}),n}function Et(e,t,n,i){const o=J(t,n,i,!1),s=J(e,n,i,!0),r=It(e,n),a=[];return o.forEach(h=>{(s.has(h)||r.has(h))&&a.push(h)}),a.forEach(h=>o.delete(h)),o}function ae(e,t){const{checkedKeys:n,keysToCheck:i,keysToUncheck:o,indeterminateKeys:s,cascade:r,leafOnly:a,checkStrategy:h,allowNotLoaded:f}=e;if(!r)return i!==void 0?{checkedKeys:Pt(n,i),indeterminateKeys:Array.from(s)}:o!==void 0?{checkedKeys:Mt(n,o),indeterminateKeys:Array.from(s)}:{checkedKeys:Array.from(n),indeterminateKeys:Array.from(s)};const{levelTreeNodeMap:p}=t;let m;o!==void 0?m=Et(o,n,t,f):i!==void 0?m=Lt(i,n,t,f):m=J(n,t,f,!1);const R=h==="parent",K=h==="child"||a,y=m,C=new Set,A=Math.max.apply(null,Array.from(p.keys()));for(let k=A;k>=0;k-=1){const x=k===0,F=p.get(k);for(const c of F){if(c.isLeaf)continue;const{key:v,shallowLoaded:z}=c;if(K&&z&&c.children.forEach(T=>{!T.disabled&&!T.isLeaf&&T.shallowLoaded&&y.has(T.key)&&y.delete(T.key)}),c.disabled||!z)continue;let B=!0,E=!1,I=!0;for(const T of c.children){const d=T.key;if(!T.disabled){if(I&&(I=!1),y.has(d))E=!0;else if(C.has(d)){E=!0,B=!1;break}else if(B=!1,E)break}}B&&!I?(R&&c.children.forEach(T=>{!T.disabled&&y.has(T.key)&&y.delete(T.key)}),y.add(v)):E&&C.add(v),x&&K&&y.has(v)&&y.delete(v)}}return{checkedKeys:Array.from(y),indeterminateKeys:Array.from(C)}}function J(e,t,n,i){const{treeNodeMap:o,getChildren:s}=t,r=new Set,a=new Set(e);return e.forEach(h=>{const f=o.get(h);f!==void 0&&Me(f,p=>{if(p.disabled)return ue.STOP;const{key:m}=p;if(!r.has(m)&&(r.add(m),a.add(m),Ct(p.rawNode,s))){if(i)return ue.STOP;if(!n)throw new Ft}})}),a}function Kt(e,{includeGroup:t=!1,includeSelf:n=!0},i){var o;const s=i.treeNodeMap;let r=e==null?null:(o=s.get(e))!==null&&o!==void 0?o:null;const a={keyPath:[],treeNodePath:[],treeNode:r};if(r!=null&&r.ignored)return a.treeNode=null,a;for(;r;)!r.ignored&&(t||!r.isGroup)&&a.treeNodePath.push(r),r=r.parent;return a.treeNodePath.reverse(),n||a.treeNodePath.pop(),a.keyPath=a.treeNodePath.map(h=>h.key),a}function At(e){if(e.length===0)return null;const t=e[0];return t.isGroup||t.ignored||t.disabled?t.getNext():t}function Bt(e,t){const n=e.siblings,i=n.length,{index:o}=e;return t?n[(o+1)%i]:o===n.length-1?null:n[o+1]}function xe(e,t,{loop:n=!1,includeDisabled:i=!1}={}){const o=t==="prev"?_t:Bt,s={reverse:t==="prev"};let r=!1,a=null;function h(f){if(f!==null){if(f===e){if(!r)r=!0;else if(!e.disabled&&!e.isGroup){a=e;return}}else if((!f.disabled||i)&&!f.ignored&&!f.isGroup){a=f;return}if(f.isGroup){const p=he(f,s);p!==null?a=p:h(o(f,n))}else{const p=o(f,!1);if(p!==null)h(p);else{const m=Gt(f);m!=null&&m.isGroup?h(o(m,n)):n&&h(o(f,!0))}}}}return h(e),a}function _t(e,t){const n=e.siblings,i=n.length,{index:o}=e;return t?n[(o-1+i)%i]:o===0?null:n[o-1]}function Gt(e){return e.parent}function he(e,t={}){const{reverse:n=!1}=t,{children:i}=e;if(i){const{length:o}=i,s=n?o-1:0,r=n?-1:o,a=n?-1:1;for(let h=s;h!==r;h+=a){const f=i[h];if(!f.disabled&&!f.ignored)if(f.isGroup){const p=he(f,t);if(p!==null)return p}else return f}}return null}const Ht={getChild(){return this.ignored?null:he(this)},getParent(){const{parent:e}=this;return e!=null&&e.isGroup?e.getParent():e},getNext(e={}){return xe(this,"next",e)},getPrev(e={}){return xe(this,"prev",e)}};function $t(e,t){const n=t?new Set(t):void 0,i=[];function o(s){s.forEach(r=>{i.push(r),!(r.isLeaf||!r.children||r.ignored)&&(r.isGroup||n===void 0||n.has(r.key))&&o(r.children)})}return o(e),i}function jt(e,t){const n=e.key;for(;t;){if(t.key===n)return!0;t=t.parent}return!1}function ze(e,t,n,i,o,s=null,r=0){const a=[];return e.forEach((h,f)=>{var p;const m=Object.create(i);if(m.rawNode=h,m.siblings=a,m.level=r,m.index=f,m.isFirstChild=f===0,m.isLastChild=f+1===e.length,m.parent=s,!m.ignored){const R=o(h);Array.isArray(R)&&(m.children=ze(R,t,n,i,o,m,r+1))}a.push(m),t.set(m.key,m),n.has(r)||n.set(r,[]),(p=n.get(r))===null||p===void 0||p.push(m)}),a}function Ut(e,t={}){var n;const i=new Map,o=new Map,{getDisabled:s=Rt,getIgnored:r=Nt,getIsGroup:a=zt,getKey:h=xt}=t,f=(n=t.getChildren)!==null&&n!==void 0?n:wt,p=t.ignoreEmptyChildren?c=>{const v=f(c);return Array.isArray(v)?v.length?v:null:v}:f,m=Object.assign({get key(){return h(this.rawNode)},get disabled(){return s(this.rawNode)},get isGroup(){return a(this.rawNode)},get isLeaf(){return kt(this.rawNode,p)},get shallowLoaded(){return Tt(this.rawNode,p)},get ignored(){return r(this.rawNode)},contains(c){return jt(this,c)}},Ht),R=ze(e,i,o,m,p);function K(c){if(c==null)return null;const v=i.get(c);return v&&!v.isGroup&&!v.ignored?v:null}function y(c){if(c==null)return null;const v=i.get(c);return v&&!v.ignored?v:null}function C(c,v){const z=y(c);return z?z.getPrev(v):null}function A(c,v){const z=y(c);return z?z.getNext(v):null}function k(c){const v=y(c);return v?v.getParent():null}function x(c){const v=y(c);return v?v.getChild():null}const F={treeNodes:R,treeNodeMap:i,levelTreeNodeMap:o,maxLevel:Math.max(...o.keys()),getChildren:p,getFlattenedNodes(c){return $t(R,c)},getNode:K,getPrev:C,getNext:A,getParent:k,getChild:x,getFirstAvailableNode(){return At(R)},getPath(c,v={}){return Kt(c,v,F)},getCheckedKeys(c,v={}){const{cascade:z=!0,leafOnly:B=!1,checkStrategy:E="all",allowNotLoaded:I=!1}=v;return ae({checkedKeys:le(c),indeterminateKeys:se(c),cascade:z,leafOnly:B,checkStrategy:E,allowNotLoaded:I},F)},check(c,v,z={}){const{cascade:B=!0,leafOnly:E=!1,checkStrategy:I="all",allowNotLoaded:T=!1}=z;return ae({checkedKeys:le(v),indeterminateKeys:se(v),keysToCheck:c==null?[]:we(c),cascade:B,leafOnly:E,checkStrategy:I,allowNotLoaded:T},F)},uncheck(c,v,z={}){const{cascade:B=!0,leafOnly:E=!1,checkStrategy:I="all",allowNotLoaded:T=!1}=z;return ae({checkedKeys:le(v),indeterminateKeys:se(v),keysToUncheck:c==null?[]:we(c),cascade:B,leafOnly:E,checkStrategy:I,allowNotLoaded:T},F)},getNonLeafKeys(c={}){return St(R,c)}};return F}function Vt(e,t){return b(tt,{name:"fade-in-scale-up-transition"},{default:()=>e?b(et,{clsPrefix:t,class:`${t}-base-select-option__check`},{default:()=>b(yt)}):null})}const Ne=D({name:"NBaseSelectOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(e){const{valueRef:t,pendingTmNodeRef:n,multipleRef:i,valueSetRef:o,renderLabelRef:s,renderOptionRef:r,labelFieldRef:a,valueFieldRef:h,showCheckmarkRef:f,nodePropsRef:p,handleOptionClick:m,handleOptionMouseEnter:R}=Ce(fe),K=Z(()=>{const{value:k}=n;return k?e.tmNode.key===k.key:!1});function y(k){const{tmNode:x}=e;x.disabled||m(k,x)}function C(k){const{tmNode:x}=e;x.disabled||R(k,x)}function A(k){const{tmNode:x}=e,{value:F}=K;x.disabled||F||R(k,x)}return{multiple:i,isGrouped:Z(()=>{const{tmNode:k}=e,{parent:x}=k;return x&&x.rawNode.type==="group"}),showCheckmark:f,nodeProps:p,isPending:K,isSelected:Z(()=>{const{value:k}=t,{value:x}=i;if(k===null)return!1;const F=e.tmNode.rawNode[h.value];if(x){const{value:c}=o;return c.has(F)}else return k===F}),labelField:a,renderLabel:s,renderOption:r,handleMouseMove:A,handleMouseEnter:C,handleClick:y}},render(){const{clsPrefix:e,tmNode:{rawNode:t},isSelected:n,isPending:i,isGrouped:o,showCheckmark:s,nodeProps:r,renderOption:a,renderLabel:h,handleClick:f,handleMouseEnter:p,handleMouseMove:m}=this,R=Vt(n,e),K=h?[h(t,n),s&&R]:[Pe(t[this.labelField],t,n),s&&R],y=r==null?void 0:r(t),C=b("div",Object.assign({},y,{class:[`${e}-base-select-option`,t.class,y==null?void 0:y.class,{[`${e}-base-select-option--disabled`]:t.disabled,[`${e}-base-select-option--selected`]:n,[`${e}-base-select-option--grouped`]:o,[`${e}-base-select-option--pending`]:i,[`${e}-base-select-option--show-checkmark`]:s}],style:[(y==null?void 0:y.style)||"",t.style||""],onClick:oe([f,y==null?void 0:y.onClick]),onMouseenter:oe([p,y==null?void 0:y.onMouseenter]),onMousemove:oe([m,y==null?void 0:y.onMousemove])}),b("div",{class:`${e}-base-select-option__content`},K));return t.render?t.render({node:C,option:t,selected:n}):a?a({node:C,option:t,selected:n}):C}}),Te=D({name:"NBaseSelectGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{renderLabelRef:e,renderOptionRef:t,labelFieldRef:n,nodePropsRef:i}=Ce(fe);return{labelField:n,nodeProps:i,renderLabel:e,renderOption:t}},render(){const{clsPrefix:e,renderLabel:t,renderOption:n,nodeProps:i,tmNode:{rawNode:o}}=this,s=i==null?void 0:i(o),r=t?t(o,!1):Pe(o[this.labelField],o,!1),a=b("div",Object.assign({},s,{class:[`${e}-base-select-group-header`,s==null?void 0:s.class]}),r);return o.render?o.render({node:a,option:o}):n?n({node:a,option:o,selected:!1}):a}}),Dt=j("base-select-menu",`
 line-height: 1.5;
 outline: none;
 z-index: 0;
 position: relative;
 border-radius: var(--n-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-color);
`,[j("scrollbar",`
 max-height: var(--n-height);
 `),j("virtual-list",`
 max-height: var(--n-height);
 `),j("base-select-option",`
 min-height: var(--n-option-height);
 font-size: var(--n-option-font-size);
 display: flex;
 align-items: center;
 `,[q("content",`
 z-index: 1;
 white-space: nowrap;
 text-overflow: ellipsis;
 overflow: hidden;
 `)]),j("base-select-group-header",`
 min-height: var(--n-option-height);
 font-size: .93em;
 display: flex;
 align-items: center;
 `),j("base-select-menu-option-wrapper",`
 position: relative;
 width: 100%;
 `),q("loading, empty",`
 display: flex;
 padding: 12px 32px;
 flex: 1;
 justify-content: center;
 `),q("loading",`
 color: var(--n-loading-color);
 font-size: var(--n-loading-size);
 `),q("action",`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-top: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),j("base-select-group-header",`
 position: relative;
 cursor: default;
 padding: var(--n-option-padding);
 color: var(--n-group-header-text-color);
 `),j("base-select-option",`
 cursor: pointer;
 position: relative;
 padding: var(--n-option-padding);
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 box-sizing: border-box;
 color: var(--n-option-text-color);
 opacity: 1;
 `,[V("show-checkmark",`
 padding-right: calc(var(--n-option-padding-right) + 20px);
 `),U("&::before",`
 content: "";
 position: absolute;
 left: 4px;
 right: 4px;
 top: 0;
 bottom: 0;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),U("&:active",`
 color: var(--n-option-text-color-pressed);
 `),V("grouped",`
 padding-left: calc(var(--n-option-padding-left) * 1.5);
 `),V("pending",[U("&::before",`
 background-color: var(--n-option-color-pending);
 `)]),V("selected",`
 color: var(--n-option-text-color-active);
 `,[U("&::before",`
 background-color: var(--n-option-color-active);
 `),V("pending",[U("&::before",`
 background-color: var(--n-option-color-active-pending);
 `)])]),V("disabled",`
 cursor: not-allowed;
 `,[nt("selected",`
 color: var(--n-option-text-color-disabled);
 `),V("selected",`
 opacity: var(--n-option-opacity-disabled);
 `)]),q("check",`
 font-size: 16px;
 position: absolute;
 right: calc(var(--n-option-padding-right) - 4px);
 top: calc(50% - 7px);
 color: var(--n-option-check-color);
 transition: color .3s var(--n-bezier);
 `,[it({enterScale:"0.5"})])])]),Xt=D({name:"InternalSelectMenu",props:Object.assign(Object.assign({},pe.props),{clsPrefix:{type:String,required:!0},scrollable:{type:Boolean,default:!0},treeMate:{type:Object,required:!0},multiple:Boolean,size:{type:String,default:"medium"},value:{type:[String,Number,Array],default:null},autoPending:Boolean,virtualScroll:{type:Boolean,default:!0},show:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},loading:Boolean,focusable:Boolean,renderLabel:Function,renderOption:Function,nodeProps:Function,showCheckmark:{type:Boolean,default:!0},onMousedown:Function,onScroll:Function,onFocus:Function,onBlur:Function,onKeyup:Function,onKeydown:Function,onTabOut:Function,onMouseenter:Function,onMouseleave:Function,onResize:Function,resetMenuOnOptionsChange:{type:Boolean,default:!0},inlineThemeDisabled:Boolean,onToggle:Function}),setup(e){const t=pe("InternalSelectMenu","-internal-select-menu",Dt,ot,e,H(e,"clsPrefix")),n=$(null),i=$(null),o=$(null),s=G(()=>e.treeMate.getFlattenedNodes()),r=G(()=>Ot(s.value)),a=$(null);function h(){const{treeMate:l}=e;let u=null;const{value:N}=e;N===null?u=l.getFirstAvailableNode():(e.multiple?u=l.getNode((N||[])[(N||[]).length-1]):u=l.getNode(N),(!u||u.disabled)&&(u=l.getFirstAvailableNode())),d(u||null)}function f(){const{value:l}=a;l&&!e.treeMate.getNode(l.key)&&(a.value=null)}let p;me(()=>e.show,l=>{l?p=me(()=>e.treeMate,()=>{e.resetMenuOnOptionsChange?(e.autoPending?h():f(),ut(g)):f()},{immediate:!0}):p==null||p()},{immediate:!0}),Re(()=>{p==null||p()});const m=G(()=>de(t.value.self[X("optionHeight",e.size)])),R=G(()=>ie(t.value.self[X("padding",e.size)])),K=G(()=>e.multiple&&Array.isArray(e.value)?new Set(e.value):new Set),y=G(()=>{const l=s.value;return l&&l.length===0});function C(l){const{onToggle:u}=e;u&&u(l)}function A(l){const{onScroll:u}=e;u&&u(l)}function k(l){var u;(u=o.value)===null||u===void 0||u.sync(),A(l)}function x(){var l;(l=o.value)===null||l===void 0||l.sync()}function F(){const{value:l}=a;return l||null}function c(l,u){u.disabled||d(u,!1)}function v(l,u){u.disabled||C(u)}function z(l){var u;be(l,"action")||(u=e.onKeyup)===null||u===void 0||u.call(e,l)}function B(l){var u;be(l,"action")||(u=e.onKeydown)===null||u===void 0||u.call(e,l)}function E(l){var u;(u=e.onMousedown)===null||u===void 0||u.call(e,l),!e.focusable&&l.preventDefault()}function I(){const{value:l}=a;l&&d(l.getNext({loop:!0}),!0)}function T(){const{value:l}=a;l&&d(l.getPrev({loop:!0}),!0)}function d(l,u=!1){a.value=l,u&&g()}function g(){var l,u;const N=a.value;if(!N)return;const _=r.value(N.key);_!==null&&(e.virtualScroll?(l=i.value)===null||l===void 0||l.scrollTo({index:_}):(u=o.value)===null||u===void 0||u.scrollTo({index:_,elSize:m.value}))}function S(l){var u,N;!((u=n.value)===null||u===void 0)&&u.contains(l.target)&&((N=e.onFocus)===null||N===void 0||N.call(e,l))}function P(l){var u,N;!((u=n.value)===null||u===void 0)&&u.contains(l.relatedTarget)||(N=e.onBlur)===null||N===void 0||N.call(e,l)}ye(fe,{handleOptionMouseEnter:c,handleOptionClick:v,valueSetRef:K,pendingTmNodeRef:a,nodePropsRef:H(e,"nodeProps"),showCheckmarkRef:H(e,"showCheckmark"),multipleRef:H(e,"multiple"),valueRef:H(e,"value"),renderLabelRef:H(e,"renderLabel"),renderOptionRef:H(e,"renderOption"),labelFieldRef:H(e,"labelField"),valueFieldRef:H(e,"valueField")}),ye(ct,n),ce(()=>{const{value:l}=o;l&&l.sync()});const M=G(()=>{const{size:l}=e,{common:{cubicBezierEaseInOut:u},self:{height:N,borderRadius:_,color:W,groupHeaderTextColor:Fe,actionDividerColor:Le,optionTextColorPressed:Ie,optionTextColor:Ee,optionTextColorDisabled:Ke,optionTextColorActive:Ae,optionOpacityDisabled:Be,optionCheckColor:_e,actionTextColor:Ge,optionColorPending:He,optionColorActive:$e,loadingColor:je,loadingSize:Ve,optionColorActivePending:De,[X("optionFontSize",l)]:We,[X("optionHeight",l)]:qe,[X("optionPadding",l)]:te}}=t.value;return{"--n-height":N,"--n-action-divider-color":Le,"--n-action-text-color":Ge,"--n-bezier":u,"--n-border-radius":_,"--n-color":W,"--n-option-font-size":We,"--n-group-header-text-color":Fe,"--n-option-check-color":_e,"--n-option-color-pending":He,"--n-option-color-active":$e,"--n-option-color-active-pending":De,"--n-option-height":qe,"--n-option-opacity-disabled":Be,"--n-option-text-color":Ee,"--n-option-text-color-active":Ae,"--n-option-text-color-disabled":Ke,"--n-option-text-color-pressed":Ie,"--n-option-padding":te,"--n-option-padding-left":ie(te,"left"),"--n-option-padding-right":ie(te,"right"),"--n-loading-color":je,"--n-loading-size":Ve}}),{inlineThemeDisabled:O}=e,w=O?rt("internal-select-menu",G(()=>e.size[0]),M,e):void 0,L={selfRef:n,next:I,prev:T,getPendingTmNode:F};return mt(n,e.onResize),Object.assign({mergedTheme:t,virtualListRef:i,scrollbarRef:o,itemSize:m,padding:R,flattenedNodes:s,empty:y,virtualListContainer(){const{value:l}=i;return l==null?void 0:l.listElRef},virtualListContent(){const{value:l}=i;return l==null?void 0:l.itemsElRef},doScroll:A,handleFocusin:S,handleFocusout:P,handleKeyUp:z,handleKeyDown:B,handleMouseDown:E,handleVirtualListResize:x,handleVirtualListScroll:k,cssVars:O?void 0:M,themeClass:w==null?void 0:w.themeClass,onRender:w==null?void 0:w.onRender},L)},render(){const{$slots:e,virtualScroll:t,clsPrefix:n,mergedTheme:i,themeClass:o,onRender:s}=this;return s==null||s(),b("div",{ref:"selfRef",tabindex:this.focusable?0:-1,class:[`${n}-base-select-menu`,o,this.multiple&&`${n}-base-select-menu--multiple`],style:this.cssVars,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onKeyup:this.handleKeyUp,onKeydown:this.handleKeyDown,onMousedown:this.handleMouseDown,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},this.loading?b("div",{class:`${n}-base-select-menu__loading`},b(st,{clsPrefix:n,strokeWidth:20})):this.empty?b("div",{class:`${n}-base-select-menu__empty`,"data-empty":!0},dt(e.empty,()=>[b(ft,{theme:i.peers.Empty,themeOverrides:i.peerOverrides.Empty})])):b(at,{ref:"scrollbarRef",theme:i.peers.Scrollbar,themeOverrides:i.peerOverrides.Scrollbar,scrollable:this.scrollable,container:t?this.virtualListContainer:void 0,content:t?this.virtualListContent:void 0,onScroll:t?void 0:this.doScroll},{default:()=>t?b(pt,{ref:"virtualListRef",class:`${n}-virtual-list`,items:this.flattenedNodes,itemSize:this.itemSize,showScrollbar:!1,paddingTop:this.padding.top,paddingBottom:this.padding.bottom,onResize:this.handleVirtualListResize,onScroll:this.handleVirtualListScroll,itemResizable:!0},{default:({item:r})=>r.isGroup?b(Te,{key:r.key,clsPrefix:n,tmNode:r}):r.ignored?null:b(Ne,{clsPrefix:n,key:r.key,tmNode:r})}):b("div",{class:`${n}-base-select-menu-option-wrapper`,style:{paddingTop:this.padding.top,paddingBottom:this.padding.bottom}},this.flattenedNodes.map(r=>r.isGroup?b(Te,{key:r.key,clsPrefix:n,tmNode:r}):b(Ne,{clsPrefix:n,key:r.key,tmNode:r})))}),lt(e.action,r=>r&&[b("div",{class:`${n}-base-select-menu__action`,"data-action":!0,key:"action"},r),b(bt,{onFocus:this.onTabOut,key:"focus-detector"})]))}});function ee(e){return e.type==="group"}function Oe(e){return e.type==="ignored"}function Yt(e,t){try{return!!(1+t.toString().toLowerCase().indexOf(e.trim().toLowerCase()))}catch{return!1}}function Qt(e,t){return{getIsGroup:ee,getIgnored:Oe,getKey(i){return ee(i)?i.name||i.key||"key-required":i[e]},getChildren(i){return i[t]}}}function Zt(e,t,n,i){if(!t)return e;function o(s){if(!Array.isArray(s))return[];const r=[];for(const a of s)if(ee(a)){const h=o(a[i]);h.length&&r.push(Object.assign({},a,{[i]:h}))}else{if(Oe(a))continue;t(n,a)&&r.push(a)}return r}return o(e)}function Jt(e,t,n){const i=new Map;return e.forEach(o=>{ee(o)?o[n].forEach(s=>{i.set(s[t],s)}):i.set(o[t],o)}),i}export{Xt as N,pt as V,Qt as a,Jt as b,Ut as c,Zt as f,be as h,oe as m,Yt as p,mt as u};