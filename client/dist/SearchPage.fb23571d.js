import{e as F,d as K,a as O,T as j,M as E,K as L}from"./KebabMenu.375dbcfe.js";import{u as A,a as P,f as z,r as l,aC as M,d as e,T as o,j as i,s as v}from"./index--72b22610.js";import{B as R}from"./jsx-runtime_commonjs-proxy.a6c60e76.js";import{C as W,a as N,T as S,b as U}from"./Tooltip.9abd6615.js";import"./DialogContent.f405bb64.js";import"./DialogTitle.ff8aa3b0.js";import"./DateTimePicker.a9c5cd25.js";import"./_commonjsHelpers.6312ac27.js";const _=v.div`
  padding: 5px 15px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  /* align-items: center; */
  min-height: 80vh;
  width: 100%;
  background-color: #d9dedb;
  border-radius: 3px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`,$=["\uBBF8\uB4F1\uB85D","\uC11C\uB958\uD569\uACA9","1\uCC28\uD569\uACA9","2\uCC28\uD569\uACA9","\uCD5C\uC885\uD569\uACA9"],s=v.span`
  background-color: ${c=>c.match?"yellow":"transparent"};
`;function G(){const c=A(t=>{var r;return(r=t.auth.user)==null?void 0:r.pk}),C=A(t=>t.search),T=P(),d=z().search,[n,w]=l.exports.useState(""),[H,k]=l.exports.useState("");return l.exports.useEffect(()=>{const t=new URLSearchParams(d).get("option"),r=new URLSearchParams(d).get("searchKeyword");w(r),k(t),T(M({option:t,searchKeyword:r}))},[d]),C.length==0?e(_,{children:e(o,{sx:{marginTop:"30px"},variant:"h5",component:"div",children:"\uC77C\uCE58\uD558\uB294 \uAC80\uC0C9 \uACB0\uACFC\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4."})}):e(F,{boardLength:4,children:C.map((t,r)=>{var y;const{status:p,department:x,job:m,interviewer:h,applicantName:B,isFailed:g,isFixed:f,tags:u,id:D,interviewDate:b=null}=t;return e(R,{sx:{minWidth:250,width:"90%",marginTop:"10px",maxWidth:320,position:"relative",boxSizing:"border-box"},children:i(W,{variant:"outlined",children:[i(N,{children:[i(o,{sx:{fontSize:14,borderRadius:"3px"},color:"text.secondary",gutterBottom:!0,children:[e(s,{match:x.indexOf(n)>-1,children:x}),"-"," ",e(s,{match:m.indexOf(n)>-1,children:m})]}),i(o,{variant:"h5",component:"div",children:[e(s,{match:B.indexOf(n)>-1,children:B})," ",g&&e(S,{title:"\uD574\uB2F9 \uC9C0\uC6D0\uC790\uB294 \uC804\uD615 \uD0C8\uB77D\uC0C1\uD0DC\uC785\uB2C8\uB2E4.",children:e(K,{color:"error",sx:{verticalAlign:"text-top"}})})," ",f&&e(S,{title:"\uD574\uB2F9 \uC9C0\uC6D0\uC790\uB294 \uAC80\uD1A0 \uC911\uC785\uB2C8\uB2E4.",children:e(O,{sx:{verticalAlign:"text-top"}})})]}),e(o,{sx:{mb:1.5},color:"text.secondary",children:$[+p]}),e(o,{variant:"body2",children:u==null?void 0:u.map(a=>e(j,{id:""+a.id,children:i(s,{style:{color:a.tagText.indexOf(n)>-1?"black":"inherit"},match:a.tagText.indexOf(n)>-1,children:["#",a.tagText]})},a.id))}),b&&i(o,{sx:{fontSize:"12px",marginTop:2,marginBottom:0},color:"text.secondary",children:["\uBA74\uC811\uC608\uC815\uC77C :"," ",(y=new Date(+b))==null?void 0:y.toLocaleString("ko-KR",{year:"numeric",month:"numeric",day:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0})]})]}),e(E,{children:e(U,{children:e(L,{type:"myapplicants",id:D,status:p,isMine:Boolean(h==null?void 0:h.find(a=>a.pk===c)),applicantIndex:r,isFailed:g,isFixed:f,tags:u})})})]})},D)})})}function ee(){return e(G,{})}export{ee as default};
