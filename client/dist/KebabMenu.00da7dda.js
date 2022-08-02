import{s as C,r as l,a as H,a0 as U,a1 as X,j as a,d as e,u as Y,N as Z,a2 as ee,a3 as ue,a4 as ae,R as ne,b as oe}from"./index--98a1aa81.js";import{a as j,i as z,r as R}from"./jsx-runtime_commonjs-proxy.88d19f0c.js";import{D as _,a as E,b as M,c as S,d as $}from"./DialogTitle.bb1db00d.js";import{c as g}from"./Modal.a47a3860.js";import{T as te,M as N,a as r}from"./TextField.44e0a5ad.js";const _e=C.div`
  padding: 5px 15px;
  display: grid;
  grid-template-columns: repeat(${o=>o.boardLength}, 1fr);
  gap: 50px;
  box-sizing: border-box;
  min-height: 80vh;
  width: 100%;
  background-color: #d9dedb;
  border-radius: 3px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`,Ee=C.div`
  display: flex;
  flex-direction: column;
  width: 90%;
`,Me=C.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  /* 드랍 보드 여유 바닥 */
  padding-bottom: 150px;
`,Se={margin:"5px",marginBottom:"20px",borderRadius:"5px",maxWidth:340,backgroundColor:"#f2f7fa",boxShadow:"rgba(0, 0, 0, 0.16) 0px 1px 4px",display:"flex",alignItems:"center",padding:"10px 5px",paddingLeft:"20px"},$e=C.div`
  display: flex;
  justify-content: center;
  align-items: center;
`,je=C.span`
  cursor: pointer;
  /* word-wrap: normal; */
  margin-top: 5px;
  display: inline-block;
  white-space: normal;
  word-break: keep-all;
  font-size: 12px;
  padding: 3px 5px;
  margin-right: 10px;
  background-color: grey;
  color: white;
  border-radius: 5px;
`,ze=C.div`
  position: absolute;
  top: 0px;
  right: 0px;
`,Re=C.div`
  position: absolute;
  top: 20px;
  right: 30px;
`;var P={},ie=z.exports;Object.defineProperty(P,"__esModule",{value:!0});var re=P.default=void 0,le=ie(j),Ce=R,se=(0,le.default)((0,Ce.jsx)("path",{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"}),"Lock");re=P.default=se;var w={},ce=z.exports;Object.defineProperty(w,"__esModule",{value:!0});var de=w.default=void 0,pe=ce(j),he=R,De=(0,pe.default)((0,he.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 12c0-4.42 3.58-8 8-8 1.85 0 3.55.63 4.9 1.69L5.69 16.9C4.63 15.55 4 13.85 4 12zm8 8c-1.85 0-3.55-.63-4.9-1.69L18.31 7.1C19.37 8.45 20 10.15 20 12c0 4.42-3.58 8-8 8z"}),"Block");de=w.default=De;var W={},xe=z.exports;Object.defineProperty(W,"__esModule",{value:!0});var I=W.default=void 0,ge=xe(j),fe=R,ve=(0,ge.default)((0,fe.jsx)("path",{d:"M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreVert");I=W.default=ve;function Be(o){const{isFailed:t,isFixed:n}=o;l.exports.useState(n),l.exports.useState(t);const u=H();return{handleFix:()=>{u(X(o))},handleFail:()=>{u(U(o))}}}function me({open:o,togglePopupOpen:t,removeApplicant:n,handleClose:u}){return a(_,{open:o,onClose:t,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[e(E,{id:"alert-dialog-title",children:"\uD574\uB2F9 \uC9C0\uC6D0\uC790\uB97C \uD0C8\uB77D\uC2DC\uD0A4\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?"}),e(M,{children:e(S,{id:"alert-dialog-description",children:"\uD0C8\uB77D \uCC98\uB9AC\uB41C \uC9C0\uC6D0\uC790\uB294 \uD558\uB2E8 \uCC3D\uC5D0\uC11C \uD655\uC778\uD558\uC2E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4."})}),a($,{children:[e(g,{onClick:n,children:"\uD0C8\uB77D \uCC98\uB9AC"}),e(g,{onClick:()=>{t(),u()},autoFocus:!0,children:"\uC544\uB2C8\uC624"})]})]})}function be({open:o,applicantId:t,boardStatus:n,applicantIndex:u,tags:i,tagModalClose:c}){const[f,d]=l.exports.useState(!1),v=()=>{d(!1)},[s,A]=l.exports.useState(""),L=Y(p=>p.pageType.type),B=H();return a(Z,{children:[a(_,{open:o,onClose:c,children:[e(E,{children:"\uD0DC\uADF8 \uC791\uC131"}),a(M,{children:[e(S,{children:"\uC9C0\uC6D0\uC790\uB2F9 \uD0DC\uADF8\uB294 3\uAC1C\uAE4C\uC9C0 \uC791\uC131\uD558\uC2E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4."}),e(te,{inputProps:{maxLength:8},helperText:"\uD0DC\uADF8\uB294 8\uAE00\uC790\uAE4C\uC9C0 \uAC00\uB2A5\uD569\uB2C8\uB2E4.",onChange:p=>{A(p.currentTarget.value)},autoFocus:!0,margin:"dense",id:"name",label:"#\uD0DC\uADF8\uC791\uC131",type:"email",fullWidth:!0,variant:"standard"})]}),a($,{children:[e(g,{onClick:c,children:"\uCDE8\uC18C"}),e(g,{onClick:async()=>{if(i==null?void 0:i.find(h=>h.tagText==s))d(!0);else{d(!1),console.log({applicantId:t,boardStatus:n,applicantIndex:u,tagText:s});const h=await ee(s,t),{tagId:D}=h;L=="myapplicants"?B(ue({boardStatus:n,applicantIndex:u,tagId:D,tagText:s})):B(ae({boardStatus:n,applicantIndex:u,tagId:D,tagText:s})),c()}},children:"\uC791\uC131"})]})]}),a(_,{open:f,onClose:v,children:[e(E,{children:"\uD0DC\uADF8 \uC911\uBCF5 \uBC1C\uC0DD"}),e(M,{children:e(S,{children:"\uC911\uBCF5\uB41C \uD0DC\uADF8\uB294 \uC791\uC131\uD558\uC2E4 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4."})}),e($,{children:e(g,{onClick:v,children:"\uB2E4\uC2DC \uC791\uC131"})})]})]})}const V=C.span`
  color: red;
`;var Pe=ne.memo(function({id:t,status:n,tags:u,applicantIndex:i,isMine:c,isFailed:f,isFixed:d,type:v}){const[s,A]=l.exports.useState(!1),[L,B]=l.exports.useTransition(),{handleFail:F,handleFix:y}=Be({status:""+(+n-1),applicantIndex:i,isFailed:Boolean(f),isFixed:Boolean(d)}),p=oe(),h=()=>{B(()=>{p(`/applicant/${t}`)})},D=()=>{A(T=>!T),m(null)},[k,m]=l.exports.useState(null),b=Boolean(k),K=T=>{m(T.currentTarget)},x=()=>{console.log(n,i),m(null)},G=()=>{console.log(n,i),D(),F()},[J,O]=l.exports.useState(!1),q=()=>{O(!0)},Q=()=>{O(!1),m(null)};return a("div",{children:[e(g,{id:"basic-button","aria-controls":b?"basic-menu":void 0,"aria-haspopup":"true","aria-expanded":b?"true":void 0,sx:{borderRadius:8},style:{fontSize:"20px",maxWidth:"30px",maxHeight:"32px",minWidth:"30px",minHeight:"32px",textAlign:"center",display:"flex",justifyContent:"center",alignItems:"center"},onClick:K,children:e(I,{htmlColor:"grey",fontSize:"inherit"})}),v=="pool"?a(N,{id:"basic-menu",anchorEl:k,open:b,onClose:x,MenuListProps:{"aria-labelledby":"basic-button"},children:[e(r,{onClick:h,children:"\uC9C0\uC6D0\uC790 \uC815\uBCF4\uBCF4\uAE30"}),e(r,{disabled:(u==null?void 0:u.length)==3||!c,onClick:q,children:"\uC9C0\uC6D0\uC790 \uD0DC\uADF8\uCD94\uAC00"})]}):a(N,{id:"basic-menu",anchorEl:k,open:b,onClose:x,MenuListProps:{"aria-labelledby":"basic-button"},children:[e(r,{onClick:h,children:"\uC9C0\uC6D0\uC790 \uB9AC\uBDF0\uC791\uC131"}),e(r,{disabled:(u==null?void 0:u.length)==3,onClick:q,children:"\uC9C0\uC6D0\uC790 \uD0DC\uADF8\uCD94\uAC00"}),f?e(r,{onClick:()=>{F(),x()},children:e(V,{children:"\uC9C0\uC6D0\uC790 \uD0C8\uB77D\uCCA0\uD68C"})}):a("div",{children:[e(r,{onClick:D,children:e(V,{children:"\uC9C0\uC6D0\uC790 \uD0C8\uB77D\uCC98\uB9AC"})}),d?a(r,{onClick:()=>{x(),y()},children:[e("b",{children:"\uC9C0\uC6D0\uC790 \uC7A0\uAE08\uD574\uC81C"})," "]}):a(r,{onClick:()=>{x(),y()},children:[e("b",{children:"\uC9C0\uC6D0\uC790 \uC774\uB3D9\uC7A0\uAE08"})," "]})]})]}),e(me,{open:s,togglePopupOpen:D,removeApplicant:G,handleClose:x}),e(be,{open:J,tagModalClose:Q,applicantId:t,boardStatus:n,applicantIndex:i,tags:u})]})});export{Ee as B,$e as C,Pe as K,ze as M,je as T,re as a,Se as b,Me as c,de as d,_e as e,Re as f};
