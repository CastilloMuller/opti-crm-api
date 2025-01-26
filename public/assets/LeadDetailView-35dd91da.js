import{d as j,Q as J,c as k,r as v,p as Z,u as h,v as t,G as i,J as o,R as s,N as n,E as K,Z as W,x as X,s as $,P as Y,F as ee,z as te}from"./vendor-62589595.js";import{a as le,s as u,_ as oe}from"./index-71826484.js";import{s as V}from"./panel.esm-88a1bd03.js";import{s as I}from"./tag.esm-aa757a85.js";import{s as se,a as g,c as ae}from"./column.esm-c9e8de1f.js";import{s as ne,a as x}from"./calendar.esm-7b8de70e.js";import{a as S,s as ie}from"./index.esm-7e28eb4c.js";import{s as L,a as de}from"./confirmdialog.esm-888c3629.js";var ue=Symbol();function re(){var D=j(ue);if(!D)throw new Error("No PrimeVue Confirmation provided!");return D}const me={key:0,class:"lead-detail-view"},ce={class:"lead-header"},pe={class:"lead-title"},ve={class:"lead-actions"},fe={class:"lead-content"},be={class:"lead-main"},ye={class:"info-grid"},we={class:"info-item"},Ce={class:"info-item"},ke={class:"info-item"},Ve={class:"info-item"},ge={class:"info-item"},De={class:"info-item"},_e={class:"info-item"},Te={class:"lead-sidebar"},Ne={class:"timeline-item"},he={class:"timeline-date"},$e={class:"timeline-type"},xe={class:"timeline-content"},Se={class:"notes-container"},Le={class:"note-header"},Ue={class:"note-content"},Ae={class:"dialog-content"},Ie={class:"field"},Re={class:"field"},Ee={class:"field"},Me={class:"field"},Be={class:"dialog-content"},qe={class:"field"},ze={class:"field"},Fe={class:"field"},Ge={class:"dialog-content"},He={class:"field"},Pe=J({__name:"LeadDetailView",setup(D){const p=W(),c=le(),U=re(),d=k(()=>c.getLeadById(p.params.id)),R=k(()=>c.getLeadTasks(p.params.id)),f=v(!1),r=v({type:"bellen",title:"",description:"",scheduledDate:new Date,completed:!1}),E=()=>{c.addTask({leadId:p.params.id,...r.value}),f.value=!1,r.value={type:"bellen",title:"",description:"",scheduledDate:new Date,completed:!1}},M=a=>{c.updateTask(a.id,a)},B=k(()=>c.getLeadNotes(p.params.id).sort((a,e)=>new Date(e.createdAt).getTime()-new Date(a.createdAt).getTime())),b=v(!1),w=v({content:""}),q=()=>{c.addNote({leadId:p.params.id,content:w.value.content}),b.value=!1,w.value.content=""},z=a=>{U.require({message:"Are you sure you want to delete this note?",header:"Delete Confirmation",icon:"pi pi-info-circle",acceptClass:"p-button-danger",accept:()=>{c.deleteNote(a)}})},F=k(()=>c.getLeadCommunications(p.params.id).sort((a,e)=>new Date(e.timestamp).getTime()-new Date(a.timestamp).getTime())),y=v(!1),m=v({type:"outbound",method:"bellen",content:""}),G=()=>{c.addCommunication({leadId:p.params.id,type:m.value.type,method:m.value.method,timestamp:new Date().toISOString(),content:m.value.content}),y.value=!1,m.value={type:"outbound",method:"bellen",content:""}},_=[{label:"Call",value:"bellen"},{label:"Meeting",value:"afspraak"},{label:"Email",value:"mailen"},{label:"Research",value:"uitzoeken"}],H=[{label:"Outbound",value:"outbound"},{label:"Inbound",value:"inbound"}],A=a=>{var e;return((e=_.find(T=>T.value===a))==null?void 0:e.label)||a},C=a=>new Date(a).toLocaleDateString("nl-NL",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit"}),P=a=>a?new Intl.NumberFormat("nl-NL",{style:"currency",currency:"EUR"}).format(a):"",O=a=>({"Hot en snel beslissen":"danger",Hot:"danger","Snel beslissen":"warning","Goede kans":"success","Goede kans, warm houden":"success",Standaard:"info","Niets mee doen":"secondary"})[a]||"info",Q=()=>{U.require({message:"Are you sure you want to delete this lead?",header:"Delete Confirmation",icon:"pi pi-exclamation-triangle",accept:()=>{}})};return Z(()=>{d.value||console.error("Lead not found")}),(a,e)=>{const T=X("Timeline");return d.value?($(),h("div",me,[t("div",ce,[t("div",pe,[t("h1",null,i(d.value.name),1),o(s(I),{value:d.value.status,severity:O(d.value.status)},null,8,["value","severity"])]),t("div",ve,[o(s(u),{icon:"pi pi-pencil",onClick:e[0]||(e[0]=l=>a.showEditDialog=!0),class:"p-button-text"}),o(s(u),{icon:"pi pi-trash",onClick:Q,class:"p-button-text p-button-danger"})])]),t("div",fe,[t("div",be,[o(s(V),{header:"Lead Information",class:"info-panel"},{default:n(()=>[t("div",ye,[t("div",we,[e[18]||(e[18]=t("label",null,"Email",-1)),t("div",null,i(d.value.email||"Not specified"),1)]),t("div",Ce,[e[19]||(e[19]=t("label",null,"Phone",-1)),t("div",null,i(d.value.phone||"Not specified"),1)]),t("div",ke,[e[20]||(e[20]=t("label",null,"Decision Date",-1)),t("div",null,i(C(d.value.decisionDate)||"Not specified"),1)]),t("div",Ve,[e[21]||(e[21]=t("label",null,"Quotation Value",-1)),t("div",null,i(P(d.value.quotationValue)||"Not specified"),1)]),t("div",ge,[e[22]||(e[22]=t("label",null,"Priority",-1)),t("div",null,i(d.value.priority||"Not specified")+"/10",1)]),t("div",De,[e[23]||(e[23]=t("label",null,"Success Rate",-1)),t("div",null,i(d.value.successRate||"Not specified")+"%",1)]),t("div",_e,[e[24]||(e[24]=t("label",null,"Lead Score",-1)),t("div",null,i(d.value.leadscore),1)])])]),_:1}),o(s(V),{header:"Tasks",class:"tasks-panel"},{icons:n(()=>[o(s(u),{icon:"pi pi-plus",onClick:e[1]||(e[1]=l=>f.value=!0),class:"p-button-text p-button-sm"})]),default:n(()=>[o(s(se),{value:R.value,class:"tasks-table"},{default:n(()=>[o(s(g),{field:"type",header:"Type"},{body:n(({data:l})=>[o(s(I),{value:A(l.type)},null,8,["value"])]),_:1}),o(s(g),{field:"title",header:"Title"}),o(s(g),{field:"scheduledDate",header:"Date"},{body:n(({data:l})=>[Y(i(C(l.scheduledDate)),1)]),_:1}),o(s(g),{field:"completed",header:"Status"},{body:n(({data:l})=>[o(s(ae),{modelValue:l.completed,"onUpdate:modelValue":N=>l.completed=N,onChange:N=>M(l),binary:!0},null,8,["modelValue","onUpdate:modelValue","onChange"])]),_:1})]),_:1},8,["value"])]),_:1})]),t("div",Te,[o(s(V),{header:"Communication History",class:"history-panel"},{icons:n(()=>[o(s(u),{icon:"pi pi-plus",onClick:e[2]||(e[2]=l=>y.value=!0),class:"p-button-text p-button-sm"})]),default:n(()=>[o(T,{value:F.value,class:"history-timeline"},{content:n(l=>[t("div",Ne,[t("small",he,i(C(l.item.timestamp)),1),t("div",$e,i(l.item.type==="outbound"?"Sent":"Received")+" "+i(A(l.item.method)),1),t("div",xe,i(l.item.content),1)])]),_:1},8,["value"])]),_:1}),o(s(V),{header:"Notes",class:"notes-panel"},{icons:n(()=>[o(s(u),{icon:"pi pi-plus",onClick:e[3]||(e[3]=l=>b.value=!0),class:"p-button-text p-button-sm"})]),default:n(()=>[t("div",Se,[($(!0),h(ee,null,te(B.value,l=>($(),h("div",{key:l.id,class:"note-item"},[t("div",Le,[t("small",null,i(C(l.createdAt)),1),o(s(u),{icon:"pi pi-trash",onClick:N=>z(l.id),class:"p-button-text p-button-danger p-button-sm"},null,8,["onClick"])]),t("div",Ue,i(l.content),1)]))),128))])]),_:1})])]),o(s(x),{visible:f.value,"onUpdate:visible":e[9]||(e[9]=l=>f.value=l),modal:"",header:"New Task",style:{width:"450px"}},{footer:n(()=>[o(s(u),{label:"Cancel",onClick:e[8]||(e[8]=l=>f.value=!1),class:"p-button-text"}),o(s(u),{label:"Create",onClick:E,autofocus:""})]),default:n(()=>[t("div",Ae,[t("div",Ie,[e[25]||(e[25]=t("label",{for:"taskType"},"Type*",-1)),o(s(S),{id:"taskType",modelValue:r.value.type,"onUpdate:modelValue":e[4]||(e[4]=l=>r.value.type=l),options:_,placeholder:"Select Type",class:"w-full"},null,8,["modelValue"])]),t("div",Re,[e[26]||(e[26]=t("label",{for:"taskTitle"},"Title*",-1)),o(s(ie),{id:"taskTitle",modelValue:r.value.title,"onUpdate:modelValue":e[5]||(e[5]=l=>r.value.title=l),class:"w-full"},null,8,["modelValue"])]),t("div",Ee,[e[27]||(e[27]=t("label",{for:"taskDate"},"Date*",-1)),o(s(ne),{id:"taskDate",modelValue:r.value.scheduledDate,"onUpdate:modelValue":e[6]||(e[6]=l=>r.value.scheduledDate=l),showTime:"",class:"w-full"},null,8,["modelValue"])]),t("div",Me,[e[28]||(e[28]=t("label",{for:"taskDescription"},"Description",-1)),o(s(L),{id:"taskDescription",modelValue:r.value.description,"onUpdate:modelValue":e[7]||(e[7]=l=>r.value.description=l),rows:"3",class:"w-full"},null,8,["modelValue"])])])]),_:1},8,["visible"]),o(s(x),{visible:y.value,"onUpdate:visible":e[14]||(e[14]=l=>y.value=l),modal:"",header:"Add Communication",style:{width:"450px"}},{footer:n(()=>[o(s(u),{label:"Cancel",onClick:e[13]||(e[13]=l=>y.value=!1),class:"p-button-text"}),o(s(u),{label:"Add",onClick:G,autofocus:""})]),default:n(()=>[t("div",Be,[t("div",qe,[e[29]||(e[29]=t("label",{for:"commType"},"Type*",-1)),o(s(S),{id:"commType",modelValue:m.value.type,"onUpdate:modelValue":e[10]||(e[10]=l=>m.value.type=l),options:H,placeholder:"Select Type",class:"w-full"},null,8,["modelValue"])]),t("div",ze,[e[30]||(e[30]=t("label",{for:"commMethod"},"Method*",-1)),o(s(S),{id:"commMethod",modelValue:m.value.method,"onUpdate:modelValue":e[11]||(e[11]=l=>m.value.method=l),options:_,placeholder:"Select Method",class:"w-full"},null,8,["modelValue"])]),t("div",Fe,[e[31]||(e[31]=t("label",{for:"commContent"},"Content*",-1)),o(s(L),{id:"commContent",modelValue:m.value.content,"onUpdate:modelValue":e[12]||(e[12]=l=>m.value.content=l),rows:"3",class:"w-full"},null,8,["modelValue"])])])]),_:1},8,["visible"]),o(s(x),{visible:b.value,"onUpdate:visible":e[17]||(e[17]=l=>b.value=l),modal:"",header:"Add Note",style:{width:"450px"}},{footer:n(()=>[o(s(u),{label:"Cancel",onClick:e[16]||(e[16]=l=>b.value=!1),class:"p-button-text"}),o(s(u),{label:"Add",onClick:q,autofocus:""})]),default:n(()=>[t("div",Ge,[t("div",He,[e[32]||(e[32]=t("label",{for:"noteContent"},"Note Content*",-1)),o(s(L),{id:"noteContent",modelValue:w.value.content,"onUpdate:modelValue":e[15]||(e[15]=l=>w.value.content=l),rows:"4",class:"w-full",autoResize:""},null,8,["modelValue"])])])]),_:1},8,["visible"]),o(s(de))])):K("",!0)}}});const Ye=oe(Pe,[["__scopeId","data-v-a446db6b"]]);export{Ye as default};
