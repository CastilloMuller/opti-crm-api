import{Q as E,r as f,c as P,u as T,v as n,D as l,N as d,R as s,a1 as G,x as S,s as H,P as c,I as b}from"./vendor-1b1e291c.js";import{a as A,s as r,b as Q,c as V,d as W,e as y,f as _,g as w,_ as z}from"./index-5f40dbbc.js";import{s as O,a as g}from"./calendar.esm-16fc512b.js";import"./index.esm-b1fae58e.js";const j={class:"leads-view"},J={class:"leads-grid"},K={class:"new-lead-form"},M={class:"form-field"},X={class:"form-field"},Y={class:"form-field"},Z={class:"form-field"},ee={class:"form-field"},oe={class:"form-field"},ae={class:"form-field"},te={class:"form-field"},le=E({__name:"LeadsView",setup(se){const D=G(),L=A(),p=f(""),m=f(!0),v=f(!1),a=f({name:"",status:"Standaard",email:"",phone:"",decisionDate:null,quotationValue:null,priority:null,successRate:null}),N=["Probeer af te ronden","Goede kans, warm houden","Standaard","Bellen als niets gehoord","Goede kans","Hot","Snel beslissen","Hot en snel beslissen","Niets mee doen","Wacht op gemeente"],R=t=>({"Hot en snel beslissen":"danger","Probeer af te ronden":"warning","Goede kans, warm houden":"success",Standaard:"info","Bellen als niets gehoord":"warning","Goede kans":"success",Hot:"danger","Snel beslissen":"danger","Niets mee doen":"info","Wacht op gemeente":"warning"})[t],U=t=>t?new Date(t).toLocaleDateString("nl-NL",{year:"numeric",month:"long",day:"numeric"}):"",$=t=>t?new Intl.NumberFormat("nl-NL",{style:"currency",currency:"EUR"}).format(t):"",q=t=>{p.value=t.field,m.value=t.order===1},C=(t,e,i)=>{const u=t[i],o=e[i];return u===o?0:u==null?m.value?1:-1:o==null||u<o?m.value?-1:1:u>o?m.value?1:-1:0},k=P(()=>{let t=[...L.leads.value];return p.value&&t.sort((e,i)=>C(e,i,p.value)),t}),x=()=>{var t;L.addLead({name:a.value.name,status:a.value.status,email:a.value.email||void 0,phone:a.value.phone||void 0,decisionDate:((t=a.value.decisionDate)==null?void 0:t.toISOString())||void 0,quotationValue:a.value.quotationValue||void 0,priority:a.value.priority||void 0,successRate:a.value.successRate||void 0}),v.value=!1,I()},I=()=>{a.value={name:"",status:"Standaard",email:"",phone:"",decisionDate:null,quotationValue:null,priority:null,successRate:null}},F=t=>{D.push(`/leads/${t.id}`)},h=t=>{const e=t.files[0],i=new FileReader;i.onload=u=>{},i.readAsText(e)},B=()=>{};return(t,e)=>{const i=S("LeadsToolbar"),u=S("FileUpload");return H(),T("div",j,[e[24]||(e[24]=n("h1",null,"Leads",-1)),l(i,{onNewLead:e[0]||(e[0]=o=>v.value=!0),onFilterStatus:e[1]||(e[1]=o=>t.filterStatus=o),onSortChange:e[2]||(e[2]=o=>p.value=o),onSortDirection:e[3]||(e[3]=o=>m.value=o),onImport:e[4]||(e[4]=o=>t.showImportDialog=!0),onExport:B}),n("div",J,[l(s(W),{value:k.value,onSort:q,responsiveLayout:"scroll"},{default:d(()=>[l(s(r),{field:"name",header:"Name",sortable:""}),l(s(r),{field:"status",header:"Status",sortable:""},{body:d(o=>[l(s(Q),{severity:R(o.data.status)},{default:d(()=>[c(b(o.data.status),1)]),_:2},1032,["severity"])]),_:1}),l(s(r),{field:"email",header:"Email",sortable:""}),l(s(r),{field:"phone",header:"Phone",sortable:""}),l(s(r),{field:"decisionDate",header:"Decision Date",sortable:""},{body:d(o=>[c(b(U(o.data.decisionDate)),1)]),_:1}),l(s(r),{field:"quotationValue",header:"Quotation Value",sortable:""},{body:d(o=>[c(b($(o.data.quotationValue)),1)]),_:1}),l(s(r),{field:"priority",header:"Priority",sortable:""}),l(s(r),{field:"successRate",header:"Success Rate",sortable:""}),l(s(r),{header:"Actions"},{body:d(o=>[l(s(V),{onClick:ne=>F(o.data),icon:"pi pi-eye",class:"p-button-rounded p-button-primary"},null,8,["onClick"])]),_:1})]),_:1},8,["value"])]),l(s(g),{visible:v.value,"onUpdate:visible":e[14]||(e[14]=o=>v.value=o),modal:"",header:"New Lead",style:{width:"50vw"}},{footer:d(()=>[l(s(V),{label:"Cancel",icon:"pi pi-times",onClick:e[13]||(e[13]=o=>v.value=!1),class:"p-button-text"}),l(s(V),{label:"Create",icon:"pi pi-check",onClick:x,disabled:!a.value.name||!a.value.status,autofocus:""},null,8,["disabled"])]),default:d(()=>[n("div",K,[n("div",M,[e[16]||(e[16]=n("label",{for:"name"},"Name*",-1)),l(s(y),{id:"name",modelValue:a.value.name,"onUpdate:modelValue":e[5]||(e[5]=o=>a.value.name=o),required:"",autofocus:""},null,8,["modelValue"])]),n("div",X,[e[17]||(e[17]=n("label",{for:"status"},"Status*",-1)),l(s(_),{id:"status",modelValue:a.value.status,"onUpdate:modelValue":e[6]||(e[6]=o=>a.value.status=o),options:N,optionLabel:"self",optionValue:"self",required:""},null,8,["modelValue"])]),n("div",Y,[e[18]||(e[18]=n("label",{for:"email"},"Email",-1)),l(s(y),{id:"email",modelValue:a.value.email,"onUpdate:modelValue":e[7]||(e[7]=o=>a.value.email=o),type:"email"},null,8,["modelValue"])]),n("div",Z,[e[19]||(e[19]=n("label",{for:"phone"},"Phone",-1)),l(s(y),{id:"phone",modelValue:a.value.phone,"onUpdate:modelValue":e[8]||(e[8]=o=>a.value.phone=o)},null,8,["modelValue"])]),n("div",ee,[e[20]||(e[20]=n("label",{for:"decisionDate"},"Decision Date",-1)),l(s(O),{id:"decisionDate",modelValue:a.value.decisionDate,"onUpdate:modelValue":e[9]||(e[9]=o=>a.value.decisionDate=o),dateFormat:"dd/mm/yy",showIcon:!0},null,8,["modelValue"])]),n("div",oe,[e[21]||(e[21]=n("label",{for:"quotationValue"},"Quotation Value",-1)),l(s(w),{id:"quotationValue",modelValue:a.value.quotationValue,"onUpdate:modelValue":e[10]||(e[10]=o=>a.value.quotationValue=o),mode:"currency",currency:"EUR",locale:"nl-NL"},null,8,["modelValue"])]),n("div",ae,[e[22]||(e[22]=n("label",{for:"priority"},"Priority (1-10)",-1)),l(s(w),{id:"priority",modelValue:a.value.priority,"onUpdate:modelValue":e[11]||(e[11]=o=>a.value.priority=o),min:1,max:10,showButtons:""},null,8,["modelValue"])]),n("div",te,[e[23]||(e[23]=n("label",{for:"successRate"},"Success Rate (%)",-1)),l(s(w),{id:"successRate",modelValue:a.value.successRate,"onUpdate:modelValue":e[12]||(e[12]=o=>a.value.successRate=o),min:0,max:100,suffix:"%",showButtons:""},null,8,["modelValue"])])])]),_:1},8,["visible"]),l(s(g),{visible:t.showImportDialog,"onUpdate:visible":e[15]||(e[15]=o=>t.showImportDialog=o),modal:"",header:"Import Leads",style:{width:"40vw"}},{default:d(()=>[l(u,{mode:"basic",accept:".csv",maxFileSize:1e6,onUpload:h,auto:!0,chooseLabel:"Select CSV File"})]),_:1},8,["visible"])])}}});const me=z(le,[["__scopeId","data-v-ff3ac923"]]);export{me as default};
