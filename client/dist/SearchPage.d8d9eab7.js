import{u as p,a as x,g as m,r as o,A as g,aJ as C,e as t,T as l,s as b}from"./index--e386dd30.js";import{d as f,a as S}from"./CardTemplate.5b6f08e8.js";import{B as y}from"./jsx-runtime_commonjs-proxy.7c296e68.js";import"./DialogContent.e5677454.js";import"./DialogTitle.295a2ea5.js";import"./DateTimePicker.11b2f433.js";import"./Tooltip.c6e9f5d9.js";import"./_commonjsHelpers.6312ac27.js";const w=b.div`
  padding: 5px 15px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  min-height: 80vh;
  width: 100%;
  background-color: #d9dedb;
  border-radius: 3px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;function B(){const c=p(e=>{var r;return(r=e.auth.user)==null?void 0:r.pk}),s=p(e=>e.search),n=x(),a=m().search,[d,h]=o.exports.useState(""),[A,u]=o.exports.useState("");return o.exports.useEffect(()=>{n(g("search"));const e=new URLSearchParams(a).get("option"),r=new URLSearchParams(a).get("searchKeyword");h(r),u(e),n(C({option:e,searchKeyword:r}))},[a]),s.length==0?t(w,{children:t(l,{sx:{marginTop:"30px"},variant:"h5",component:"div",children:"\uC77C\uCE58\uD558\uB294 \uAC80\uC0C9 \uACB0\uACFC\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4."})}):t(f,{boardLength:4,children:s.map((e,r)=>{const{id:i}=e;return t(y,{sx:{minWidth:250,width:"90%",marginTop:"10px",maxWidth:320,position:"relative",boxSizing:"border-box"},children:t(S,{...e,type:"search",userPk:c,keyword:d,applicantIndex:r,boardStatus:"0"})},i)})})}function W(){return t(B,{})}export{W as default};
