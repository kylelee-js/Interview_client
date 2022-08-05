import{s as t,r as p,c as w,j as a,e as o,az as A,h as k,R as m,aA as b,aB as D,u as h,a as C,aC as I,aD as P,w as _}from"./index--0b1a11bd.js";import{D as S,c as j,d as F,e as R}from"./DialogContent.acd8c5d8.js";import{D as z,a as O}from"./DialogTitle.ac63e382.js";const J=t.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 700px;
`,K=t.div`
  width: 90%;
  border: 0.1rem solid #cfd1d0;
  border-radius: 5px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  background-color: #f2f7fa;
  padding: 10px 20px;
  margin-bottom: 20px;
`,Q=t.span`
  margin-top: 5px;
  padding: 5px;
`,X=t.button`
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
`,Z=t.div`
  position: relative;
  border-radius: 5px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  width: 100%;
  max-width: 700px;
  padding: 15px;
  margin-left: 50px;
  margin-bottom: 100px;
  background-color: #c4c3c2;
`,ee=t.div`
  height: 1px;
  visibility: hidden;
`,te=t.div`
  height: 1px;
  visibility: hidden;
`,oe=t.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: sticky;
  /* TODO: media-query: 사용자 디바이스 높이에 따라 50px과 rem 중에서 선택 */
  /* top: 0.5rem; */
  top: 50px;
`,ie=t.div`
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
`,E=t.div`
  width: 90%;
  border: 0.1rem solid #cfd1d0;
  border-radius: 5px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  background-color: #f2f7fa;
  padding: 10px 20px;
  margin-bottom: 20px;
`,B=t.span`
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
`;function L({interviewers:d}){const[e,x]=p.exports.useState(),[c,r]=p.exports.useState(!1),[l,u]=p.exports.useState(""),i=p.exports.useRef(null),n=()=>{r(!0)};w(()=>{(async()=>{const y=await fetch(e==null?void 0:e.image,{headers:new Headers({Authorization:`${k.defaults.headers.common.Authorization}`})}).then(g=>g.blob()).then(g=>(console.log(URL.createObjectURL(g)),URL.createObjectURL(g)));u(y)})()},[e]);const f=()=>{r(!1)},v=s=>{s.currentTarget.src="/default.png"};return d?a(E,{children:[d.map(s=>o(B,{children:a(T,{onClick:()=>{x(s),n()},children:[s.name," - ",s.nickname]})},s.pk)),a(S,{open:c,onClose:f,scroll:"paper","aria-labelledby":"scroll-dialog-title","aria-describedby":"scroll-dialog-description",fullWidth:!0,children:[a(z,{id:"scroll-dialog-title",children:[e==null?void 0:e.name," - ",e==null?void 0:e.nickname]}),o(j,{dividers:!0,children:a(O,{id:"scroll-dialog-description",tabIndex:-1,children:[o(A,{ref:i,src:l,alt:"\uBA74\uC811\uAD00 \uC0AC\uC9C4",onError:v}),a("p",{children:["Email : ",e==null?void 0:e.email]}),a("p",{children:["\uBD80\uC11C : ",e==null?void 0:e.department]})]})}),o(F,{children:o(R,{onClick:f,children:"\uD655\uC778"})})]})]}):null}const W=m.lazy(()=>b(()=>import("./ApplicantPDFViewer.8aaeaeb1.js"),["ApplicantPDFViewer.8aaeaeb1.js","index--0b1a11bd.js","_commonjsHelpers.6312ac27.js","DialogContent.acd8c5d8.js","index.34b83dad.js","tiny-invariant.esm.d11e6c56.js","DialogTitle.ac63e382.js"])),H=m.lazy(()=>b(()=>import("./ReviewAccordion.709e6dd6.js"),["ReviewAccordion.709e6dd6.js","ReviewAccordion.7cbbcfdf.css","jsx-runtime_commonjs-proxy.d341c0e7.js","index--0b1a11bd.js","DialogContent.acd8c5d8.js","_commonjsHelpers.6312ac27.js","Tooltip.94aa3911.js","index.34b83dad.js"])),N=t.div`
  display: flex;
  width: 100vw;
  gap: 60px;
`,U=t.div`
  display: flex;
  box-sizing: border-box;
  width: 100%;
  margin: 0px 20px;
  margin-right: 50px;
  align-items: center;
  flex-direction: column;
`;function V(d){const{fileData:e,interviewers:x,reviewData:c,amIAnAuthor:r}=d;return a(N,{children:[o(W,{fileData:e}),a(U,{children:[o(L,{interviewers:x}),o(H,{reviewData:c,amIAnAuthor:r})]})]})}function M(){const e=D().applicantId,x=h(i=>{var n;return(n=i.auth.user)==null?void 0:n.pk}),c=h(i=>{var n;return(n=i.applicant.applicantInfo)==null?void 0:n.file}),r=h(i=>i.review.reviewData),l=h(i=>{var n;return(n=i.applicant.applicantInfo)==null?void 0:n.interviewer}),u=C();return p.exports.useEffect(()=>{(async()=>{await u(I(e)),await u(P(e)),console.log("Asd")})()},[]),console.log(r),c&&r?o(p.exports.Suspense,{fallback:o("div",{children:"loading..."}),children:o(V,{fileData:c,interviewers:l,reviewData:r,amIAnAuthor:Boolean(l==null?void 0:l.find(i=>i.pk==x))})}):null}function Y(){return o(_,{children:o(M,{})})}var ne=Object.freeze(Object.defineProperty({__proto__:null,default:Y},Symbol.toStringTag,{value:"Module"}));export{ne as A,oe as D,K as F,J as P,ee as S,Q as a,X as b,Z as c,ie as d,te as e};
