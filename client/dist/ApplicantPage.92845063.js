import{s as t,r as c,j as a,d as o,an as w,g as A,R as m,ao as b,ap as k,u as f,a as C,aq as D,ar as I,N as P}from"./index--b2370d60.js";import{D as _,a as S,b as j,c as F,d as R}from"./DialogTitle.ffb03f36.js";import{c as z}from"./Modal.4aba55c5.js";const G=t.div`
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
`,T=t.button`
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
`;function B({interviewers:d}){const[e,x]=c.exports.useState(),[p,r]=c.exports.useState(!1),[s,u]=c.exports.useState(""),i=c.exports.useRef(null),n=()=>{r(!0)};c.exports.useEffect(()=>{(async()=>{const y=await fetch((e==null?void 0:e.image.slice(0,18))+":8080"+(e==null?void 0:e.image.slice(18)),{headers:new Headers({Authorization:`${A.defaults.headers.common.Authorization}`})}).then(g=>g.blob()).then(g=>(console.log(URL.createObjectURL(g)),URL.createObjectURL(g)));u(y)})(),console.log(s)},[e]);const h=()=>{r(!1)},v=l=>{l.currentTarget.src="/default.png"};return d?a(O,{children:[d.map(l=>o(E,{children:a(T,{onClick:()=>{x(l),n()},children:[l.name," - ",l.nickname]})},l.pk)),a(_,{open:p,onClose:h,scroll:"paper","aria-labelledby":"scroll-dialog-title","aria-describedby":"scroll-dialog-description",fullWidth:!0,children:[a(S,{id:"scroll-dialog-title",children:[e==null?void 0:e.name," - ",e==null?void 0:e.nickname]}),o(j,{dividers:!0,children:a(F,{id:"scroll-dialog-description",tabIndex:-1,children:[o(w,{ref:i,src:s,alt:"\uBA74\uC811\uAD00 \uC0AC\uC9C4",onError:v}),a("p",{children:["Email : ",e==null?void 0:e.email]}),a("p",{children:["\uBD80\uC11C : ",e==null?void 0:e.department]})]})}),o(R,{children:o(z,{onClick:h,children:"\uD655\uC778"})})]})]}):null}const L=m.lazy(()=>b(()=>import("./ApplicantPDFViewer.a9858398.js"),["ApplicantPDFViewer.a9858398.js","index--b2370d60.js","_commonjsHelpers.6312ac27.js","Modal.4aba55c5.js","index.34b83dad.js","tiny-invariant.esm.d11e6c56.js","DialogTitle.ffb03f36.js"])),N=m.lazy(()=>b(()=>import("./ReviewAccordion.ea3461bc.js"),["ReviewAccordion.ea3461bc.js","ReviewAccordion.7cbbcfdf.css","jsx-runtime_commonjs-proxy.f758a4af.js","index--b2370d60.js","Modal.4aba55c5.js","_commonjsHelpers.6312ac27.js","Tooltip.5e6f5ab5.js","IconButton.31d8ad42.js","index.34b83dad.js","useDidMountEffect.b3051ca9.js"])),W=t.div`
  display: flex;
  width: 100vw;
  gap: 60px;
`,H=t.div`
  display: flex;
  box-sizing: border-box;
  width: 100%;
  margin: 0px 20px;
  margin-right: 50px;
  align-items: center;
  flex-direction: column;
`;function U(d){const{fileData:e,interviewers:x,reviewData:p,amIAnAuthor:r}=d;return a(W,{children:[o(L,{fileData:e}),a(H,{children:[o(B,{interviewers:x}),o(N,{reviewData:p,amIAnAuthor:r})]})]})}function V(){const e=k().applicantId,x=f(i=>{var n;return(n=i.auth.user)==null?void 0:n.pk}),p=f(i=>{var n;return(n=i.applicant.applicantInfo)==null?void 0:n.file}),r=f(i=>i.review.reviewData),s=f(i=>{var n;return(n=i.applicant.applicantInfo)==null?void 0:n.interviewer}),u=C();return c.exports.useEffect(()=>{(async()=>{await u(D(e)),await u(I(e)),console.log("Asd")})()},[]),console.log(r),p&&r?o(c.exports.Suspense,{fallback:o("div",{children:"loading..."}),children:o(U,{fileData:p,interviewers:s,reviewData:r,amIAnAuthor:Boolean(s==null?void 0:s.find(i=>i.pk==x))})}):null}function q(){return o(P,{children:o(V,{})})}var ie=Object.freeze(Object.defineProperty({__proto__:null,default:q},Symbol.toStringTag,{value:"Module"}));export{ie as A,te as D,J as F,G as P,Z as S,K as a,Q as b,X as c,oe as d,ee as e};
