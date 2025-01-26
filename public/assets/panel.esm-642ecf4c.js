import{c as v,B as P,U as g,R as w,b as O}from"./index-2790fa8c.js";import{s as i,u as p,q as l,v as c,y as S,I as s,C as B,A as f,E as u,J as C,N as D,a0 as j,O as $,G as I,B as E,K,L,D as N}from"./vendor-62589595.js";import{d as k}from"./column.esm-2238abf2.js";var h={name:"MinusIcon",extends:v},A=c("path",{d:"M13.2222 7.77778H0.777778C0.571498 7.77778 0.373667 7.69584 0.227806 7.54998C0.0819442 7.40412 0 7.20629 0 7.00001C0 6.79373 0.0819442 6.5959 0.227806 6.45003C0.373667 6.30417 0.571498 6.22223 0.777778 6.22223H13.2222C13.4285 6.22223 13.6263 6.30417 13.7722 6.45003C13.9181 6.5959 14 6.79373 14 7.00001C14 7.20629 13.9181 7.40412 13.7722 7.54998C13.6263 7.69584 13.4285 7.77778 13.2222 7.77778Z",fill:"currentColor"},null,-1),M=[A];function _(e,t,o,r,n,a){return i(),p("svg",l({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),M,16)}h.render=_;var R={root:function(t){var o=t.props;return["p-panel p-component",{"p-panel-toggleable":o.toggleable}]},header:"p-panel-header",title:"p-panel-title",icons:"p-panel-icons",toggler:"p-panel-header-icon p-panel-toggler p-link",toggleablecontent:"p-toggleable-content",content:"p-panel-content",footer:"p-panel-footer"},V=P.extend({name:"panel",classes:R}),q={name:"BasePanel",extends:O,props:{header:String,toggleable:Boolean,collapsed:Boolean,toggleButtonProps:{type:null,default:null}},style:V,provide:function(){return{$parentInstance:this}}},z={name:"Panel",extends:q,inheritAttrs:!1,emits:["update:collapsed","toggle"],data:function(){return{id:this.$attrs.id,d_collapsed:this.collapsed}},watch:{"$attrs.id":function(t){this.id=t||g()},collapsed:function(t){this.d_collapsed=t}},mounted:function(){this.id=this.id||g()},methods:{toggle:function(t){this.d_collapsed=!this.d_collapsed,this.$emit("update:collapsed",this.d_collapsed),this.$emit("toggle",{originalEvent:t,value:this.d_collapsed})},onKeyDown:function(t){(t.code==="Enter"||t.code==="NumpadEnter"||t.code==="Space")&&(this.toggle(t),t.preventDefault())}},computed:{buttonAriaLabel:function(){return this.toggleButtonProps&&this.toggleButtonProps.ariaLabel?this.toggleButtonProps.ariaLabel:this.header}},components:{PlusIcon:k,MinusIcon:h},directives:{ripple:w}};function d(e){"@babel/helpers - typeof";return d=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d(e)}function m(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),o.push.apply(o,r)}return o}function b(e){for(var t=1;t<arguments.length;t++){var o=arguments[t]!=null?arguments[t]:{};t%2?m(Object(o),!0).forEach(function(r){H(e,r,o[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):m(Object(o)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))})}return e}function H(e,t,o){return t=T(t),t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function T(e){var t=U(e,"string");return d(t)=="symbol"?t:String(t)}function U(e,t){if(d(e)!="object"||!e)return e;var o=e[Symbol.toPrimitive];if(o!==void 0){var r=o.call(e,t||"default");if(d(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var G=["id"],J=["id","aria-label","aria-controls","aria-expanded"],Z=["id","aria-labelledby"];function F(e,t,o,r,n,a){var y=S("ripple");return i(),p("div",l({class:e.cx("root")},e.ptmi("root")),[c("div",l({class:e.cx("header")},e.ptm("header")),[s(e.$slots,"header",{id:n.id+"_header",class:B(e.cx("title"))},function(){return[e.header?(i(),p("span",l({key:0,id:n.id+"_header",class:e.cx("title")},e.ptm("title")),I(e.header),17,G)):u("",!0)]}),c("div",l({class:e.cx("icons")},e.ptm("icons")),[s(e.$slots,"icons"),e.toggleable?f((i(),p("button",l({key:0,id:n.id+"_header",type:"button",role:"button",class:e.cx("toggler"),"aria-label":a.buttonAriaLabel,"aria-controls":n.id+"_content","aria-expanded":!n.d_collapsed,onClick:t[0]||(t[0]=function(){return a.toggle&&a.toggle.apply(a,arguments)}),onKeydown:t[1]||(t[1]=function(){return a.onKeyDown&&a.onKeyDown.apply(a,arguments)})},b(b({},e.toggleButtonProps),e.ptm("toggler"))),[s(e.$slots,"togglericon",{collapsed:n.d_collapsed},function(){return[(i(),E(N(n.d_collapsed?"PlusIcon":"MinusIcon"),K(L(e.ptm("togglericon"))),null,16))]})],16,J)),[[y]]):u("",!0)],16)],16),C($,l({name:"p-toggleable-content"},e.ptm("transition")),{default:D(function(){return[f(c("div",l({id:n.id+"_content",class:e.cx("toggleablecontent"),role:"region","aria-labelledby":n.id+"_header"},e.ptm("toggleablecontent")),[c("div",l({class:e.cx("content")},e.ptm("content")),[s(e.$slots,"default")],16),e.$slots.footer?(i(),p("div",l({key:0,class:e.cx("footer")},e.ptm("footer")),[s(e.$slots,"footer")],16)):u("",!0)],16,Z),[[j,!n.d_collapsed]])]}),_:3},16)],16)}z.render=F;export{z as s};
