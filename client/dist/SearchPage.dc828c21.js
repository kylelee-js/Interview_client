import{u as p,a as x,g as m,r as o,C as g,aL as C,e as r,T as l,s as b}from"./index--dd59e357.js";import{d as f,a as S}from"./CardTemplate.d7d7acb6.js";import{B as y}from"./jsx-runtime_commonjs-proxy.148aaf30.js";import"./DialogContent.4ac042a6.js";import"./DialogTitle.da98250c.js";import"./DateTimePicker.8f14fd5a.js";import"./Tooltip.03575610.js";const w=b.div`
  padding: 5px 15px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  min-height: 80vh;
  width: 100%;
  background-color: #d9dedb;
  border-radius: 3px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;function B(){const c=p(e=>{var a;return(a=e.auth.user)==null?void 0:a.pk}),s=p(e=>e.search),n=x(),t=m().search,[d,h]=o.exports.useState(""),[A,u]=o.exports.useState("");return o.exports.useEffect(()=>{n(g("search"));const e=new URLSearchParams(t).get("option"),a=new URLSearchParams(t).get("searchKeyword");h(a),u(e),n(C({option:e,searchKeyword:a}))},[t]),s.length==0?r(w,{children:r(l,{sx:{marginTop:"30px"},variant:"h5",component:"div",children:"\uC77C\uCE58\uD558\uB294 \uAC80\uC0C9 \uACB0\uACFC\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4."})}):r(f,{boardLength:4,children:s.map((e,a)=>{const{id:i}=e;return r(y,{sx:{minWidth:250,width:"90%",marginTop:"10px",maxWidth:320,position:"relative",boxSizing:"border-box"},children:r(S,{...e,type:"search",userPk:c,keyword:d,applicantIndex:a,boardStatus:"0"})},i)})})}function K(){return r(B,{})}export{K as default};
