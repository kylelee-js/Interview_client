import{s as t,r as l,j as a,e as o,ay as w,h as A,R as m,az as b,aA as k,u as h,a as C,aB as D,aC as I,M as P}from"./index--1d2412bd.js";import{D as _,c as S,d as j,e as F}from"./DialogContent.4d994cfb.js";import{D as R,a as z}from"./DialogTitle.27a23680.js";const G=t.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 700px;
`,J=t.div`
  width: 90%;
  border: 0.1rem solid #cfd1d0;
  border-radius: 5px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  background-color: #f2f7fa;
  padding: 10px 20px;
  margin-bottom: 20px;
`,K=t.span`
  margin-top: 5px;
  padding: 5px;
`,Q=t.button`
  align-items: center;
  background-color: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 0.25rem;
  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
  box-sizing: border-box;
  color: rgba(0, 0, 0, 0.85);
  cursor: pointer;
  display: inline-flex;
  font-family: system-ui, -apple-system, system-ui, "Helvetica Neue", Helvetica,
    Arial, sans-serif;
  font-size: 12px;
  font-weight: 500;
  justify-content: center;
  line-height: 1;
  margin-top: 5;
  min-height: 0.5rem;
  padding: 5px 10px;
  position: relative;
  text-decoration: none;
  transition: all 250ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  width: auto;

  &:hover {
    border-color: rgba(0, 0, 0, 0.15);
    box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
    color: rgba(0, 0, 0, 0.65);
    transform: translateY(-1px);
  }
`,X=t.div`
  position: relative;
  border-radius: 5px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  width: 100%;
  max-width: 700px;
  padding: 15px;
  margin-left: 50px;
  margin-bottom: 100px;
  background-color: #c4c3c2;
`,Z=t.div`
  height: 1px;
  visibility: hidden;
`,ee=t.div`
  height: 1px;
  visibility: hidden;
`,te=t.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: sticky;
  /* TODO: media-query: 사용자 디바이스 높이에 따라 50px과 rem 중에서 선택 */
  /* top: 0.5rem; */
  top: 50px;
`,oe=t.div`
  position: relative;
  top: 0px;
  margin-top: 0.5rem;
  background-color: whitesmoke;
  width: 90%;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  padding: 10px;
  display: flex;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  gap: 30px;
  transition: all ease-in 0.3s;
  &.stuck {
    &:hover {
      top: -40px;
    }
  }
  &.shown {
    &:hover {
      top: 0px;
    }
  }
`,O=t.div`
  width: 90%;
  border: 0.1rem solid #cfd1d0;
  border-radius: 5px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  background-color: #f2f7fa;
  padding: 10px 20px;
  margin-bottom: 20px;
`,E=t.span`
  margin-top: 5px;
  padding: 5px;
`,B=t.button`
  align-items: center;
  background-color: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 0.25rem;
  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
  box-sizing: border-box;
  color: rgba(0, 0, 0, 0.85);
  cursor: pointer;
  display: inline-flex;
  font-family: system-ui, -apple-system, system-ui, "Helvetica Neue", Helvetica,
    Arial, sans-serif;
  font-size: 12px;
  font-weight: 500;
  justify-content: center;
  line-height: 1;
  margin-top: 5;
  min-height: 0.5rem;
  padding: 5px 10px;
  position: relative;
  text-decoration: none;
  transition: all 250ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  width: auto;

  &:hover {
    border-color: rgba(0, 0, 0, 0.15);
    box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
    color: rgba(0, 0, 0, 0.65);
    transform: translateY(-1px);
  }
`;function T({interviewers:d}){const[e,x]=l.exports.useState(),[c,r]=l.exports.useState(!1),[p,u]=l.exports.useState(""),i=l.exports.useRef(null),n=()=>{r(!0)};l.exports.useEffect(()=>{(async()=>{const y=await fetch((e==null?void 0:e.image.slice(0,18))+":8080"+(e==null?void 0:e.image.slice(18)),{headers:new Headers({Authorization:`${A.defaults.headers.common.Authorization}`})}).then(g=>g.blob()).then(g=>(console.log(URL.createObjectURL(g)),URL.createObjectURL(g)));u(y)})()},[e]);const f=()=>{r(!1)},v=s=>{s.currentTarget.src="/default.png"};return d?a(O,{children:[d.map(s=>o(E,{children:a(B,{onClick:()=>{x(s),n()},children:[s.name," - ",s.nickname]})},s.pk)),a(_,{open:c,onClose:f,scroll:"paper","aria-labelledby":"scroll-dialog-title","aria-describedby":"scroll-dialog-description",fullWidth:!0,children:[a(R,{id:"scroll-dialog-title",children:[e==null?void 0:e.name," - ",e==null?void 0:e.nickname]}),o(S,{dividers:!0,children:a(z,{id:"scroll-dialog-description",tabIndex:-1,children:[o(w,{ref:i,src:p,alt:"\uBA74\uC811\uAD00 \uC0AC\uC9C4",onError:v}),a("p",{children:["Email : ",e==null?void 0:e.email]}),a("p",{children:["\uBD80\uC11C : ",e==null?void 0:e.department]})]})}),o(j,{children:o(F,{onClick:f,children:"\uD655\uC778"})})]})]}):null}const L=m.lazy(()=>b(()=>import("./ApplicantPDFViewer.c0932a9b.js"),["ApplicantPDFViewer.c0932a9b.js","index--1d2412bd.js","_commonjsHelpers.6312ac27.js","DialogContent.4d994cfb.js","index.34b83dad.js","tiny-invariant.esm.d11e6c56.js","DialogTitle.27a23680.js"])),W=m.lazy(()=>b(()=>import("./ReviewAccordion.dccb4d63.js"),["ReviewAccordion.dccb4d63.js","ReviewAccordion.7cbbcfdf.css","jsx-runtime_commonjs-proxy.7f6fdd84.js","index--1d2412bd.js","DialogContent.4d994cfb.js","_commonjsHelpers.6312ac27.js","Tooltip.97c19732.js","index.34b83dad.js"])),H=t.div`
  display: flex;
  width: 100vw;
  gap: 60px;
`,N=t.div`
  display: flex;
  box-sizing: border-box;
  width: 100%;
  margin: 0px 20px;
  margin-right: 50px;
  align-items: center;
  flex-direction: column;
`;function U(d){const{fileData:e,interviewers:x,reviewData:c,amIAnAuthor:r}=d;return a(H,{children:[o(L,{fileData:e}),a(N,{children:[o(T,{interviewers:x}),o(W,{reviewData:c,amIAnAuthor:r})]})]})}function V(){const e=k().applicantId,x=h(i=>{var n;return(n=i.auth.user)==null?void 0:n.pk}),c=h(i=>{var n;return(n=i.applicant.applicantInfo)==null?void 0:n.file}),r=h(i=>i.review.reviewData),p=h(i=>{var n;return(n=i.applicant.applicantInfo)==null?void 0:n.interviewer}),u=C();return l.exports.useEffect(()=>{(async()=>{await u(D(e)),await u(I(e)),console.log("Asd")})()},[]),console.log(r),c&&r?o(l.exports.Suspense,{fallback:o("div",{children:"loading..."}),children:o(U,{fileData:c,interviewers:p,reviewData:r,amIAnAuthor:Boolean(p==null?void 0:p.find(i=>i.pk==x))})}):null}function M(){return o(P,{children:o(V,{})})}var ie=Object.freeze(Object.defineProperty({__proto__:null,default:M},Symbol.toStringTag,{value:"Module"}));export{ie as A,te as D,J as F,G as P,Z as S,K as a,Q as b,X as c,oe as d,ee as e};
