import{s as p,r as l,a as P,a0 as ue,a1 as ne,j as a,d as e,u as ae,N as te,a2 as oe,a3 as ie,a4 as re,a5 as le,a6 as Ce,R as ce,b as se}from"./index--72b22610.js";import{a as $,i as j,r as z}from"./jsx-runtime_commonjs-proxy.a6c60e76.js";import{D as k,c as F,d as y,e as d}from"./DialogContent.f405bb64.js";import{D as T,a as w}from"./DialogTitle.ff8aa3b0.js";import{T as K,L as de,b as pe,D as De,M as V,a as C}from"./DateTimePicker.a9c5cd25.js";const Oe=p.div`
  padding: 5px 15px;
  display: grid;
  grid-template-columns: repeat(${i=>i.boardLength}, 1fr);
  gap: 50px;
  box-sizing: border-box;
  min-height: 80vh;
  width: 100%;
  background-color: #d9dedb;
  border-radius: 3px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`,Le=p.div`
  display: flex;
  flex-direction: column;
  width: 90%;
`,We=p.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  /* 드랍 보드 여유 바닥 */
  padding-bottom: 150px;
`,Ie={margin:"5px",marginBottom:"20px",borderRadius:"5px",maxWidth:340,backgroundColor:"#f2f7fa",boxShadow:"rgba(0, 0, 0, 0.16) 0px 1px 4px",display:"flex",alignItems:"center",padding:"10px 5px",paddingLeft:"20px"},qe=p.div`
  display: flex;
  justify-content: center;
  align-items: center;
`,Ne=p.span`
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
`,Ve=p.div`
  position: absolute;
  top: 0px;
  right: 0px;
`,He=p.div`
  position: absolute;
  top: 20px;
  right: 30px;
`;var R={},he=j.exports;Object.defineProperty(R,"__esModule",{value:!0});var xe=R.default=void 0,ge=he($),fe=z,ve=(0,ge.default)((0,fe.jsx)("path",{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"}),"Lock");xe=R.default=ve;var O={},me=j.exports;Object.defineProperty(O,"__esModule",{value:!0});var Be=O.default=void 0,be=me($),Ae=z,ke=(0,be.default)((0,Ae.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 12c0-4.42 3.58-8 8-8 1.85 0 3.55.63 4.9 1.69L5.69 16.9C4.63 15.55 4 13.85 4 12zm8 8c-1.85 0-3.55-.63-4.9-1.69L18.31 7.1C19.37 8.45 20 10.15 20 12c0 4.42-3.58 8-8 8z"}),"Block");Be=O.default=ke;var L={},Fe=j.exports;Object.defineProperty(L,"__esModule",{value:!0});var U=L.default=void 0,ye=Fe($),Te=z,Se=(0,ye.default)((0,Te.jsx)("path",{d:"M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreVert");U=L.default=Se;function _e(i){const{isFailed:o,isFixed:n}=i;l.exports.useState(n),l.exports.useState(o);const u=P();return{handleFix:()=>{u(ne(i))},handleFail:()=>{u(ue(i))}}}function Ee({open:i,togglePopupOpen:o,removeApplicant:n,handleClose:u}){return a(k,{open:i,onClose:o,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[e(T,{id:"alert-dialog-title",children:"\uD574\uB2F9 \uC9C0\uC6D0\uC790\uB97C \uD0C8\uB77D\uC2DC\uD0A4\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?"}),e(F,{children:e(w,{id:"alert-dialog-description",children:"\uD0C8\uB77D \uCC98\uB9AC\uB41C \uC9C0\uC6D0\uC790\uB294 \uD558\uB2E8 \uCC3D\uC5D0\uC11C \uD655\uC778\uD558\uC2E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4."})}),a(y,{children:[e(d,{onClick:n,children:"\uD0C8\uB77D \uCC98\uB9AC"}),e(d,{onClick:()=>{o(),u()},autoFocus:!0,children:"\uC544\uB2C8\uC624"})]})]})}function Me({open:i,applicantId:o,boardStatus:n,applicantIndex:u,tags:t,tagModalClose:r}){const[h,c]=l.exports.useState(!1),m=()=>{c(!1)},[s,D]=l.exports.useState(""),W=ae(x=>x.pageType.type),b=P();return a(te,{children:[a(k,{open:i,onClose:r,children:[e(T,{children:"\uD0DC\uADF8 \uC791\uC131"}),a(F,{children:[e(w,{children:"\uC9C0\uC6D0\uC790\uB2F9 \uD0DC\uADF8\uB294 3\uAC1C\uAE4C\uC9C0 \uC791\uC131\uD558\uC2E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4."}),e(K,{inputProps:{maxLength:8},helperText:"\uD0DC\uADF8\uB294 8\uAE00\uC790\uAE4C\uC9C0 \uAC00\uB2A5\uD569\uB2C8\uB2E4.",onChange:x=>{D(x.currentTarget.value)},autoFocus:!0,margin:"dense",id:"name",label:"#\uD0DC\uADF8\uC791\uC131",type:"email",fullWidth:!0,variant:"standard"})]}),a(y,{children:[e(d,{onClick:r,children:"\uCDE8\uC18C"}),e(d,{onClick:async()=>{if(t==null?void 0:t.find(g=>g.tagText==s))c(!0);else{c(!1),console.log({applicantId:o,boardStatus:n,applicantIndex:u,tagText:s});const g=await oe(s,o),{tagId:f}=g;W=="myapplicants"?b(ie({boardStatus:n,applicantIndex:u,tagId:f,tagText:s})):b(re({boardStatus:n,applicantIndex:u,tagId:f,tagText:s})),r()}},children:"\uC791\uC131"})]})]}),a(k,{open:h,onClose:m,children:[e(T,{children:"\uD0DC\uADF8 \uC911\uBCF5 \uBC1C\uC0DD"}),e(F,{children:e(w,{children:"\uC911\uBCF5\uB41C \uD0DC\uADF8\uB294 \uC791\uC131\uD558\uC2E4 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4."})}),e(y,{children:e(d,{onClick:m,children:"\uB2E4\uC2DC \uC791\uC131"})})]})]})}function we({open:i,applicantId:o,boardStatus:n,applicantIndex:u,dateModalClose:t}){const[r,h]=l.exports.useState(new Date),c=P();return e(de,{dateAdapter:pe,children:a(k,{open:i,onClose:t,children:[e(T,{children:"\uBA74\uC811 \uC77C\uC815\uC744 \uC120\uD0DD\uD574\uC8FC\uC138\uC694"}),e(F,{children:e(De,{value:r,onChange:D=>{h(D)},renderInput:D=>e(K,{...D})})}),a(y,{children:[e(d,{onClick:t,children:"\uCDE8\uC18C"}),e(d,{onClick:async()=>{console.log(new Date(r)),await le(o,""+new Date(r).getTime()),c(Ce({boardStatus:n,applicantIndex:u,interviewDate:""+new Date(r).getTime()})),t()},children:"\uC120\uD0DD"})]})]})})}const H=p.span`
  color: red;
`;var Ke=ce.memo(function({id:o,status:n,tags:u,applicantIndex:t,isMine:r,isFailed:h,isFixed:c,type:m}){const[s,D]=l.exports.useState(!1),[W,b]=l.exports.useTransition(),{handleFail:S,handleFix:_}=_e({status:""+(+n-1),applicantIndex:t,isFailed:Boolean(h),isFixed:Boolean(c)}),x=se(),g=()=>{b(()=>{x(`/applicant/${o}`)})},f=()=>{D(M=>!M),B(null)},[E,B]=l.exports.useState(null),A=Boolean(E),G=M=>{B(M.currentTarget)},v=()=>{console.log(n,t),B(null)},J=()=>{console.log(n,t),f(),S()},[Q,I]=l.exports.useState(!1),q=()=>{I(!0)},X=()=>{I(!1),B(null)},[Y,N]=l.exports.useState(!1),Z=()=>{N(!0)},ee=()=>{N(!1),B(null)};return a("div",{children:[e(d,{id:"basic-button","aria-controls":A?"basic-menu":void 0,"aria-haspopup":"true","aria-expanded":A?"true":void 0,sx:{borderRadius:8},style:{fontSize:"20px",maxWidth:"30px",maxHeight:"32px",minWidth:"30px",minHeight:"32px",textAlign:"center",display:"flex",justifyContent:"center",alignItems:"center"},onClick:G,children:e(U,{htmlColor:"grey",fontSize:"inherit"})}),m=="pool"?a(V,{id:"basic-menu",anchorEl:E,open:A,onClose:v,MenuListProps:{"aria-labelledby":"basic-button"},children:[e(C,{onClick:g,children:"\uC9C0\uC6D0\uC790 \uC815\uBCF4\uBCF4\uAE30"}),e(C,{disabled:(u==null?void 0:u.length)==3||!r,onClick:q,children:"\uC9C0\uC6D0\uC790 \uD0DC\uADF8\uCD94\uAC00"})]}):a(V,{id:"basic-menu",anchorEl:E,open:A,onClose:v,MenuListProps:{"aria-labelledby":"basic-button"},children:[e(C,{onClick:g,children:"\uC9C0\uC6D0\uC790 \uB9AC\uBDF0\uC791\uC131"}),e(C,{disabled:(u==null?void 0:u.length)==3,onClick:q,children:"\uC9C0\uC6D0\uC790 \uD0DC\uADF8\uCD94\uAC00"}),h?e(C,{onClick:()=>{S(),v()},children:e(H,{children:"\uC9C0\uC6D0\uC790 \uD0C8\uB77D\uCCA0\uD68C"})}):a("div",{children:[e(C,{onClick:f,children:e(H,{children:"\uC9C0\uC6D0\uC790 \uD0C8\uB77D\uCC98\uB9AC"})}),c?a(C,{onClick:()=>{v(),_()},children:[e("b",{children:"\uC9C0\uC6D0\uC790 \uC7A0\uAE08\uD574\uC81C"})," "]}):a(C,{onClick:()=>{v(),_()},children:[e("b",{children:"\uC9C0\uC6D0\uC790 \uC774\uB3D9\uC7A0\uAE08"})," "]})]}),e(C,{disabled:(u==null?void 0:u.length)==3,onClick:Z,children:"\uBA74\uC811\uC77C\uC815 \uC120\uD0DD"})]}),e(Ee,{open:s,togglePopupOpen:f,removeApplicant:J,handleClose:v}),e(Me,{open:Q,tagModalClose:X,applicantId:o,boardStatus:n,applicantIndex:t,tags:u}),e(we,{open:Y,applicantId:o,boardStatus:n,applicantIndex:t,dateModalClose:ee})]})});export{Le as B,qe as C,Ke as K,Ve as M,Ne as T,xe as a,Ie as b,We as c,Be as d,Oe as e,He as f};
