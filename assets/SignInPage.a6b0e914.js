import{bA as g,bE as C,bx as p,bS as k,bR as w,bF as e,bU as m}from"./vendor.9e53a908.js";import{u as F,B as I,I as N,b as j,F as c,a as D,M,v as q,c as E,h as f}from"./index.46d6784b.js";import"./vant.226ba7de.js";const L=u=>{const t=g(u);return{ref:t,toggle:()=>t.value=!t.value,on:()=>t.value=!0,off:()=>t.value=!1}},O="_logo_ly99d_1",R="_icon_ly99d_8",T="_appName_ly99d_12",r={logo:O,icon:R,appName:T},G=C({setup:(u,t)=>{const b=F(),o=p({email:"",code:""}),s=p({email:[],code:[]}),i=g(),{ref:y,toggle:U,on:v,off:_}=L(!1),h=k(),S=w(),B=async a=>{var l;if(a.preventDefault(),Object.assign(s,{email:[],code:[]}),Object.assign(s,q(o,[{key:"email",type:"required",message:"\u5FC5\u586B"},{key:"email",type:"pattern",regex:/.+@.+/,message:"\u5FC5\u987B\u662F\u90AE\u7BB1\u5730\u5740"},{key:"code",type:"required",message:"\u5FC5\u586B"}])),!E(s)){const n=await f.post("/session",o,{_autoLoading:!0}).catch(d);localStorage.setItem("jwt",n.data.jwt);const x=(l=S.query.return_to)==null?void 0:l.toString();b.refreshMe(),h.push(x||"/")}},d=a=>{throw a.response.status===422&&Object.assign(s,a.response.data.errors),a},V=async()=>{v(),await f.post("/validation_codes",{email:o.email},{_autoLoading:!0}).catch(d).finally(_),i.value.startCount()};return()=>e(M,null,{title:()=>"\u767B\u5F55",icon:()=>e(I,null,null),default:()=>e("div",{class:r.wrapper},[e("div",{class:r.logo},[e(N,{class:r.icon,name:"mangosteen"},null),e("h1",{class:r.appName},[m("\u6A58\u5B50\u8BB0\u8D26")])]),e(j,{onSubmit:B},{default:()=>{var a,l;return[e(c,{label:"\u90AE\u7BB1\u5730\u5740",type:"text",placeholder:"\u8BF7\u8F93\u5165\u90AE\u7BB1\uFF0C\u7136\u540E\u70B9\u51FB\u53D1\u9001\u9A8C\u8BC1\u7801",modelValue:o.email,"onUpdate:modelValue":n=>o.email=n,error:(a=s.email)==null?void 0:a[0]},null),e(c,{ref:i,label:"\u9A8C\u8BC1\u7801",type:"validationCode",placeholder:"\u8BF7\u8F93\u5165\u516D\u4F4D\u6570\u5B57",countFrom:1,disabled:y.value,onClick:V,modelValue:o.code,"onUpdate:modelValue":n=>o.code=n,error:(l=s.code)==null?void 0:l[0]},null),e(c,{style:{paddingTop:"96px"}},{default:()=>[e(D,{type:"submit"},{default:()=>[m("\u767B\u5F55")]})]})]}})])})}});export{G as SignInPage,G as default};
