import{s as t,r as u,j as a,d as o,an as f,R as g,ao as m,ap as b,u as x,a as h,aq as v,ar as y,N as w}from"./index--98a1aa81.js";import{D as k,a as A,b as C,c as D,d as I}from"./DialogTitle.bb1db00d.js";import{c as P}from"./Modal.a47a3860.js";const q=t.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 700px;
`,L=t.div`
  width: 90%;
  border: 0.1rem solid #cfd1d0;
  border-radius: 5px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  background-color: #f2f7fa;
  padding: 10px 20px;
  margin-bottom: 20px;
`,M=t.span`
  margin-top: 5px;
  padding: 5px;
`,Y=t.button`
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
`,$=t.div`
  position: relative;
  border-radius: 5px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  width: 100%;
  max-width: 700px;
  padding: 15px;
  margin-left: 50px;
  margin-bottom: 100px;
  background-color: #c4c3c2;
`,G=t.div`
  height: 1px;
  visibility: hidden;
`,J=t.div`
  height: 1px;
  visibility: hidden;
`,K=t.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: sticky;
  /* TODO: media-query: 사용자 디바이스 높이에 따라 50px과 rem 중에서 선택 */
  /* top: 0.5rem; */
  top: 50px;
`,Q=t.div`
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
`,_=t.div`
  width: 90%;
  border: 0.1rem solid #cfd1d0;
  border-radius: 5px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  background-color: #f2f7fa;
  padding: 10px 20px;
  margin-bottom: 20px;
`,S=t.span`
  margin-top: 5px;
  padding: 5px;
`,j=t.button`
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
`;function F({interviewers:p}){const[e,c]=u.exports.useState(),[s,r]=u.exports.useState(!1),l=()=>{r(!0)},d=()=>{r(!1)},n=i=>{i.currentTarget.src="/default.png"};return p?a(_,{children:[p.map(i=>o(S,{children:a(j,{onClick:()=>{c(i),l()},children:[i.name," - ",i.nickname]})},i.pk)),a(k,{open:s,onClose:d,scroll:"paper","aria-labelledby":"scroll-dialog-title","aria-describedby":"scroll-dialog-description",fullWidth:!0,children:[a(A,{id:"scroll-dialog-title",children:[e==null?void 0:e.name," - ",e==null?void 0:e.nickname]}),o(C,{dividers:!0,children:a(D,{id:"scroll-dialog-description",tabIndex:-1,children:[o(f,{src:(e==null?void 0:e.image.slice(0,18))+":8080"+(e==null?void 0:e.image.slice(18)),alt:"\uBA74\uC811\uAD00 \uC0AC\uC9C4",onError:n}),a("p",{children:["Email : ",e==null?void 0:e.email]}),a("p",{children:["\uBD80\uC11C : ",e==null?void 0:e.department]})]})}),o(I,{children:o(P,{onClick:d,children:"\uD655\uC778"})})]})]}):null}const z=g.lazy(()=>m(()=>import("./ApplicantPDFViewer.b104c844.js"),["ApplicantPDFViewer.b104c844.js","index--98a1aa81.js","_commonjsHelpers.6312ac27.js","Modal.a47a3860.js","index.34b83dad.js","tiny-invariant.esm.d11e6c56.js","DialogTitle.bb1db00d.js"])),E=g.lazy(()=>m(()=>import("./ReviewAccordion.34d94a97.js"),["ReviewAccordion.34d94a97.js","ReviewAccordion.7cbbcfdf.css","jsx-runtime_commonjs-proxy.88d19f0c.js","index--98a1aa81.js","Modal.a47a3860.js","_commonjsHelpers.6312ac27.js","Tooltip.a90db405.js","IconButton.ae5ea2df.js","index.34b83dad.js","useDidMountEffect.d63343ab.js"])),O=t.div`
  display: flex;
  width: 100vw;
  gap: 60px;
`,T=t.div`
  display: flex;
  box-sizing: border-box;
  width: 100%;
  margin: 0px 20px;
  margin-right: 50px;
  align-items: center;
  flex-direction: column;
`;function B(p){const{fileData:e,interviewers:c,reviewData:s,amIAnAuthor:r}=p;return a(O,{children:[o(z,{fileData:e}),a(T,{children:[o(F,{interviewers:c}),o(E,{reviewData:s,amIAnAuthor:r})]})]})}function R(){const e=b().applicantId,c=x(n=>{var i;return(i=n.auth.user)==null?void 0:i.pk}),s=x(n=>{var i;return(i=n.applicant.applicantInfo)==null?void 0:i.file}),r=x(n=>n.review.reviewData),l=x(n=>{var i;return(i=n.applicant.applicantInfo)==null?void 0:i.interviewer}),d=h();return u.exports.useEffect(()=>{(async()=>{await d(v(e)),await d(y(e)),console.log("Asd")})()},[]),console.log(r),s&&r?o(u.exports.Suspense,{fallback:o("div",{children:"loading..."}),children:o(B,{fileData:s,interviewers:l,reviewData:r,amIAnAuthor:Boolean(l==null?void 0:l.find(n=>n.pk==c))})}):null}function N(){return o(w,{children:o(R,{})})}var U=Object.freeze(Object.defineProperty({__proto__:null,default:N},Symbol.toStringTag,{value:"Module"}));export{U as A,K as D,L as F,q as P,G as S,M as a,Y as b,$ as c,Q as d,J as e};
