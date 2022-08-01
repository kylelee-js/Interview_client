import{s as C,r as p,a as N,a0 as J,a1 as Q,j as a,d as e,u as U,N as X,a2 as Y,a3 as Z,a4 as ee,R as ue,b as ae}from"./index--fcf21d68.js";import{a as S,i as $,r as j}from"./jsx-runtime_commonjs-proxy.8982611d.js";import{D as k,a as T,b as _,c as E,d as M}from"./DialogTitle.122039b8.js";import{c as g}from"./Modal.92fc6452.js";import{T as oe,M as O,a as l}from"./TextField.1f2cc8b7.js";const ke=C.div`
  padding: 5px 15px;
  display: grid;
  grid-template-columns: repeat(${n=>n.boardLength}, 1fr);
  gap: 50px;
  box-sizing: border-box;
  min-height: 80vh;
  width: 100%;
  background-color: #d9dedb;
  border-radius: 3px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`,Te=C.div`
  display: flex;
  flex-direction: column;
  width: 90%;
`,_e=C.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  /* 드랍 보드 여유 바닥 */
  padding-bottom: 150px;
`,Ee={margin:"5px",marginBottom:"20px",borderRadius:"5px",maxWidth:340,backgroundColor:"#f2f7fa",boxShadow:"rgba(0, 0, 0, 0.16) 0px 1px 4px",display:"flex",alignItems:"center",padding:"10px 5px",paddingLeft:"20px"},Me=C.div`
  display: flex;
  justify-content: center;
  align-items: center;
`,Se=C.span`
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
`,$e=C.div`
  position: absolute;
  top: 0px;
  right: 0px;
`,je=C.div`
  position: absolute;
  top: 20px;
  right: 30px;
`;var z={},ne=$.exports;Object.defineProperty(z,"__esModule",{value:!0});var te=z.default=void 0,ie=ne(S),re=j,le=(0,ie.default)((0,re.jsx)("path",{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"}),"Lock");te=z.default=le;var R={},Ce=$.exports;Object.defineProperty(R,"__esModule",{value:!0});var se=R.default=void 0,ce=Ce(S),de=j,pe=(0,ce.default)((0,de.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 12c0-4.42 3.58-8 8-8 1.85 0 3.55.63 4.9 1.69L5.69 16.9C4.63 15.55 4 13.85 4 12zm8 8c-1.85 0-3.55-.63-4.9-1.69L18.31 7.1C19.37 8.45 20 10.15 20 12c0 4.42-3.58 8-8 8z"}),"Block");se=R.default=pe;var w={},he=$.exports;Object.defineProperty(w,"__esModule",{value:!0});var V=w.default=void 0,De=he(S),xe=j,ge=(0,De.default)((0,xe.jsx)("path",{d:"M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreVert");V=w.default=ge;function fe(n){const{isFailed:t,isFixed:o}=n;p.exports.useState(o),p.exports.useState(t);const u=N();return{handleFix:()=>{u(Q(n))},handleFail:()=>{u(J(n))}}}function ve({open:n,togglePopupOpen:t,removeApplicant:o,handleClose:u}){return a(k,{open:n,onClose:t,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[e(T,{id:"alert-dialog-title",children:"\uD574\uB2F9 \uC9C0\uC6D0\uC790\uB97C \uD0C8\uB77D\uC2DC\uD0A4\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?"}),e(_,{children:e(E,{id:"alert-dialog-description",children:"\uD0C8\uB77D \uCC98\uB9AC\uB41C \uC9C0\uC6D0\uC790\uB294 \uD558\uB2E8 \uCC3D\uC5D0\uC11C \uD655\uC778\uD558\uC2E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4."})}),a(M,{children:[e(g,{onClick:o,children:"\uD0C8\uB77D \uCC98\uB9AC"}),e(g,{onClick:()=>{t(),u()},autoFocus:!0,children:"\uC544\uB2C8\uC624"})]})]})}function Be({open:n,applicantId:t,boardStatus:o,applicantIndex:u,tags:i,tagModalClose:h}){const[v,D]=p.exports.useState(!1),B=()=>{D(!1)},[s,A]=p.exports.useState(""),m=U(r=>r.pageType.type),f=N();return a(X,{children:[a(k,{open:n,onClose:h,children:[e(T,{children:"\uD0DC\uADF8 \uC791\uC131"}),a(_,{children:[e(E,{children:"\uC9C0\uC6D0\uC790\uB2F9 \uD0DC\uADF8\uB294 3\uAC1C\uAE4C\uC9C0 \uC791\uC131\uD558\uC2E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4."}),e(oe,{inputProps:{maxLength:8},helperText:"\uD0DC\uADF8\uB294 8\uAE00\uC790\uAE4C\uC9C0 \uAC00\uB2A5\uD569\uB2C8\uB2E4.",onChange:r=>{A(r.currentTarget.value)},autoFocus:!0,margin:"dense",id:"name",label:"#\uD0DC\uADF8\uC791\uC131",type:"email",fullWidth:!0,variant:"standard"})]}),a(M,{children:[e(g,{onClick:h,children:"\uCDE8\uC18C"}),e(g,{onClick:async()=>{if(i==null?void 0:i.find(c=>c.tagText==s))D(!0);else{D(!1),console.log({applicantId:t,boardStatus:o,applicantIndex:u,tagText:s});const c=await Y(s,t),{tagId:d}=c;m=="myapplicants"?f(Z({boardStatus:o,applicantIndex:u,tagId:d,tagText:s})):f(ee({boardStatus:o,applicantIndex:u,tagId:d,tagText:s})),h()}},children:"\uC791\uC131"})]})]}),a(k,{open:v,onClose:B,children:[e(T,{children:"\uD0DC\uADF8 \uC911\uBCF5 \uBC1C\uC0DD"}),e(_,{children:e(E,{children:"\uC911\uBCF5\uB41C \uD0DC\uADF8\uB294 \uC791\uC131\uD558\uC2E4 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4."})}),e(M,{children:e(g,{onClick:B,children:"\uB2E4\uC2DC \uC791\uC131"})})]})]})}const q=C.span`
  color: red;
`;var ze=ue.memo(function({id:t,status:o,tags:u,applicantIndex:i,isMine:h,isFailed:v,isFixed:D,type:B}){const[s,A]=p.exports.useState(!1),{handleFail:m,handleFix:f}=fe({status:""+(+o-1),applicantIndex:i,isFailed:Boolean(v),isFixed:Boolean(D)}),P=ae(),F=()=>{P(`/applicant/${t}`)},r=()=>{A(y=>!y),d(null)},[c,d]=p.exports.useState(null),b=Boolean(c),H=y=>{d(y.currentTarget)},x=()=>{console.log(o,i),d(null)},I=()=>{console.log(o,i),r(),m()},[K,W]=p.exports.useState(!1),L=()=>{W(!0)},G=()=>{W(!1),d(null)};return a("div",{children:[e(g,{id:"basic-button","aria-controls":b?"basic-menu":void 0,"aria-haspopup":"true","aria-expanded":b?"true":void 0,sx:{borderRadius:8},style:{fontSize:"20px",maxWidth:"30px",maxHeight:"32px",minWidth:"30px",minHeight:"32px",textAlign:"center",display:"flex",justifyContent:"center",alignItems:"center"},onClick:H,children:e(V,{htmlColor:"grey",fontSize:"inherit"})}),B=="pool"?a(O,{id:"basic-menu",anchorEl:c,open:b,onClose:x,MenuListProps:{"aria-labelledby":"basic-button"},children:[e(l,{onClick:F,children:"\uC9C0\uC6D0\uC790 \uC815\uBCF4\uBCF4\uAE30"}),e(l,{disabled:(u==null?void 0:u.length)==3||!h,onClick:L,children:"\uC9C0\uC6D0\uC790 \uD0DC\uADF8\uCD94\uAC00"})]}):a(O,{id:"basic-menu",anchorEl:c,open:b,onClose:x,MenuListProps:{"aria-labelledby":"basic-button"},children:[e(l,{onClick:F,children:"\uC9C0\uC6D0\uC790 \uB9AC\uBDF0\uC791\uC131"}),e(l,{disabled:(u==null?void 0:u.length)==3,onClick:L,children:"\uC9C0\uC6D0\uC790 \uD0DC\uADF8\uCD94\uAC00"}),v?e(l,{onClick:()=>{m(),x()},children:e(q,{children:"\uC9C0\uC6D0\uC790 \uD0C8\uB77D\uCCA0\uD68C"})}):a("div",{children:[e(l,{onClick:r,children:e(q,{children:"\uC9C0\uC6D0\uC790 \uD0C8\uB77D\uCC98\uB9AC"})}),D?a(l,{onClick:()=>{x(),f()},children:[e("b",{children:"\uC9C0\uC6D0\uC790 \uC7A0\uAE08\uD574\uC81C"})," "]}):a(l,{onClick:()=>{x(),f()},children:[e("b",{children:"\uC9C0\uC6D0\uC790 \uC774\uB3D9\uC7A0\uAE08"})," "]})]})]}),e(ve,{open:s,togglePopupOpen:r,removeApplicant:I,handleClose:x}),e(Be,{open:K,tagModalClose:G,applicantId:t,boardStatus:o,applicantIndex:i,tags:u})]})});export{Te as B,Me as C,ze as K,$e as M,Se as T,te as a,Ee as b,_e as c,se as d,ke as e,je as f};
