import{s as t,r as p,c as w,j as a,e as o,aA as A,h as k,R as m,aB as b,aC as C,u as h,a as D,aD as I,aE as P,w as _}from"./index--1bd7c833.js";import{D as S,c as j,d as R,e as F}from"./DialogContent.b29b62a0.js";import{D as z,a as E}from"./DialogTitle.6b4ceb95.js";t.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 700px;
`;const J=t.div`
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
  transition: top ease-in 0.5s;
  /* TODO: media-query: 사용자 vh에 따라 유동적으로 top 높이 변경 - ex: clac() */
  top: 50px;
  /* &.stuck {
    top: 50%;
    transform: translateY(-50%);
  } */
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
`;function L({interviewers:d}){const[e,x]=p.exports.useState(),[c,r]=p.exports.useState(!1),[l,u]=p.exports.useState(""),i=p.exports.useRef(null),n=()=>{r(!0)};w(()=>{(async()=>{const y=await fetch((e==null?void 0:e.image.slice(0,18))+":8080"+(e==null?void 0:e.image.slice(18)),{headers:new Headers({Authorization:`${k.defaults.headers.common.Authorization}`})}).then(g=>g.blob()).then(g=>(console.log(URL.createObjectURL(g)),URL.createObjectURL(g)));u(y)})()},[e]);const f=()=>{r(!1)},v=s=>{s.currentTarget.src="/default.png"};return d?a(O,{children:[d.map(s=>o(B,{children:a(T,{onClick:()=>{x(s),n()},children:[s.name," - ",s.nickname]})},s.pk)),a(S,{open:c,onClose:f,scroll:"paper","aria-labelledby":"scroll-dialog-title","aria-describedby":"scroll-dialog-description",fullWidth:!0,children:[a(z,{id:"scroll-dialog-title",children:[e==null?void 0:e.name," - ",e==null?void 0:e.nickname]}),o(j,{dividers:!0,children:a(E,{id:"scroll-dialog-description",tabIndex:-1,children:[o(A,{ref:i,src:l,alt:"\uBA74\uC811\uAD00 \uC0AC\uC9C4",onError:v}),a("p",{children:["Email : ",e==null?void 0:e.email]}),a("p",{children:["\uBD80\uC11C : ",e==null?void 0:e.department]})]})}),o(R,{children:o(F,{onClick:f,children:"\uD655\uC778"})})]})]}):null}const H=m.lazy(()=>b(()=>import("./ApplicantPDFViewer.b4c39033.js"),["ApplicantPDFViewer.b4c39033.js","index--1bd7c833.js","DialogContent.b29b62a0.js","index.3c60740d.js","tiny-invariant.esm.d11e6c56.js","DialogTitle.6b4ceb95.js"])),N=m.lazy(()=>b(()=>import("./ReviewAccordion.58fd880a.js"),["ReviewAccordion.58fd880a.js","ReviewAccordion.595782a5.css","jsx-runtime_commonjs-proxy.245f540f.js","index--1bd7c833.js","DialogContent.b29b62a0.js","Tooltip.69805ed7.js","index.3c60740d.js"])),W=t.div`
  display: flex;
  width: 100vw;
  height: 100%;
  gap: 60px;
`,U=t.div`
  display: flex;
  box-sizing: border-box;
  width: 100%;
  margin: 0px 20px;
  margin-right: 50px;
  align-items: center;
  flex-direction: column;
`;function V(d){const{fileData:e,interviewers:x,reviewData:c,amIAnAuthor:r}=d;return a(W,{children:[o(H,{fileData:e}),a(U,{children:[o(L,{interviewers:x}),o(N,{reviewData:c,amIAnAuthor:r})]})]})}function M(){const e=C().applicantId,x=h(i=>{var n;return(n=i.auth.user)==null?void 0:n.pk}),c=h(i=>{var n;return(n=i.applicant.applicantInfo)==null?void 0:n.file}),r=h(i=>i.review.reviewData),l=h(i=>{var n;return(n=i.applicant.applicantInfo)==null?void 0:n.interviewer}),u=D();return p.exports.useEffect(()=>{(async()=>{await u(I(e)),await u(P(e)),console.log("Asd")})()},[]),console.log(r),c&&r?o(p.exports.Suspense,{fallback:o("div",{children:"loading..."}),children:o(V,{fileData:c,interviewers:l,reviewData:r,amIAnAuthor:Boolean(l==null?void 0:l.find(i=>i.pk==x))})}):null}function Y(){return o(_,{children:o(M,{})})}const ie=Object.freeze(Object.defineProperty({__proto__:null,default:Y},Symbol.toStringTag,{value:"Module"}));export{ie as A,te as D,J as F,X as P,Z as S,K as a,Q as b,oe as c,ee as d};
