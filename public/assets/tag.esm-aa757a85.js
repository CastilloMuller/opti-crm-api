import{c as u,B as d,b as v}from"./index-71826484.js";import{s as r,u as t,q as a,v as i,B as g,D as m,E as o,I as $,G as y}from"./vendor-62589595.js";var C={name:"ChevronLeftIcon",extends:u},f=i("path",{d:"M9.61296 13C9.50997 13.0005 9.40792 12.9804 9.3128 12.9409C9.21767 12.9014 9.13139 12.8433 9.05902 12.7701L3.83313 7.54416C3.68634 7.39718 3.60388 7.19795 3.60388 6.99022C3.60388 6.78249 3.68634 6.58325 3.83313 6.43628L9.05902 1.21039C9.20762 1.07192 9.40416 0.996539 9.60724 1.00012C9.81032 1.00371 10.0041 1.08597 10.1477 1.22959C10.2913 1.37322 10.3736 1.56698 10.3772 1.77005C10.3808 1.97313 10.3054 2.16968 10.1669 2.31827L5.49496 6.99022L10.1669 11.6622C10.3137 11.8091 10.3962 12.0084 10.3962 12.2161C10.3962 12.4238 10.3137 12.6231 10.1669 12.7701C10.0945 12.8433 10.0083 12.9014 9.91313 12.9409C9.81801 12.9804 9.71596 13.0005 9.61296 13Z",fill:"currentColor"},null,-1),h=[f];function B(e,n,s,p,l,c){return r(),t("svg",a({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),h,16)}C.render=B;var w={root:function(n){var s=n.props;return["p-tag p-component",{"p-tag-info":s.severity==="info","p-tag-success":s.severity==="success","p-tag-warning":s.severity==="warning","p-tag-danger":s.severity==="danger","p-tag-secondary":s.severity==="secondary","p-tag-contrast":s.severity==="contrast","p-tag-rounded":s.rounded}]},icon:"p-tag-icon",value:"p-tag-value"},k=d.extend({name:"tag",classes:w}),L={name:"BaseTag",extends:v,props:{value:null,severity:null,rounded:Boolean,icon:String},style:k,provide:function(){return{$parentInstance:this}}},S={name:"Tag",extends:L,inheritAttrs:!1};function D(e,n,s,p,l,c){return r(),t("span",a({class:e.cx("root")},e.ptmi("root")),[e.$slots.icon?(r(),g(m(e.$slots.icon),a({key:0,class:e.cx("icon")},e.ptm("icon")),null,16,["class"])):e.icon?(r(),t("span",a({key:1,class:[e.cx("icon"),e.icon]},e.ptm("icon")),null,16)):o("",!0),e.value||e.$slots.default?$(e.$slots,"default",{key:2},function(){return[i("span",a({class:e.cx("value")},e.ptm("value")),y(e.value),17)]}):o("",!0)],16)}S.render=D;export{C as a,S as s};
