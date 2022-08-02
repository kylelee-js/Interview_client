import{s as i,r as u,j as a,d as o,an as f,R as g,ao as m,ap as b,u as x,a as h,aq as v,ar as y,N as w}from"./index--34b06246.js";import{D as k,a as A,b as D,c as C,d as I}from"./DialogTitle.0e34da51.js";import{c as P}from"./Modal.8d5f179e.js";const q=i.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 700px;
`,L=i.div`
  width: 90%;
  border: 0.1rem solid #cfd1d0;
  border-radius: 5px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  background-color: #f2f7fa;
  padding: 10px 20px;
  margin-bottom: 20px;
`,M=i.span`
  margin-top: 5px;
  padding: 5px;
`,Y=i.button`
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
`,$=i.div`
  position: relative;
  border-radius: 5px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  width: 100%;
  max-width: 700px;
  padding: 15px;
  margin-left: 50px;
  margin-bottom: 100px;
  background-color: #c4c3c2;
`,G=i.div`
  height: 1px;
  visibility: hidden;
`,J=i.div`
  height: 1px;
  visibility: hidden;
`,K=i.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: sticky;
  /* TODO: media-query: 사용자 디바이스 높이에 따라 50px과 rem 중에서 선택 */
  /* top: 0.5rem; */
  top: 50px;
`,Q=i.div`
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
`,_=i.div`
  width: 90%;
  border: 0.1rem solid #cfd1d0;
  border-radius: 5px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  background-color: #f2f7fa;
  padding: 10px 20px;
  margin-bottom: 20px;
`,S=i.span`
  margin-top: 5px;
  padding: 5px;
`,j=i.button`
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
`;function F({interviewers:p}){const[e,c]=u.exports.useState(),[s,r]=u.exports.useState(!1),l=()=>{r(!0)},d=()=>{r(!1)},n=t=>{t.currentTarget.src="/default.png"};return p?a(_,{children:[p.map(t=>o(S,{children:a(j,{onClick:()=>{c(t),l()},children:[t.name," - ",t.nickname]})},t.pk)),a(k,{open:s,onClose:d,scroll:"paper","aria-labelledby":"scroll-dialog-title","aria-describedby":"scroll-dialog-description",fullWidth:!0,children:[a(A,{id:"scroll-dialog-title",children:[e==null?void 0:e.name," - ",e==null?void 0:e.nickname]}),o(D,{dividers:!0,children:a(C,{id:"scroll-dialog-description",tabIndex:-1,children:[o(f,{src:e==null?void 0:e.image,alt:"\uBA74\uC811\uAD00 \uC0AC\uC9C4",onError:n}),a("p",{children:["Email : ",e==null?void 0:e.email]}),a("p",{children:["\uBD80\uC11C : ",e==null?void 0:e.department]})]})}),o(I,{children:o(P,{onClick:d,children:"\uD655\uC778"})})]})]}):null}const z=g.lazy(()=>m(()=>import("./ApplicantPDFViewer.733bd98c.js"),["ApplicantPDFViewer.733bd98c.js","index--34b06246.js","_commonjsHelpers.6312ac27.js","Modal.8d5f179e.js","index.34b83dad.js","tiny-invariant.esm.d11e6c56.js","DialogTitle.0e34da51.js"])),E=g.lazy(()=>m(()=>import("./ReviewAccordion.af1f92c7.js"),["ReviewAccordion.af1f92c7.js","ReviewAccordion.7cbbcfdf.css","jsx-runtime_commonjs-proxy.d697268c.js","index--34b06246.js","Modal.8d5f179e.js","_commonjsHelpers.6312ac27.js","Tooltip.d0bae2b9.js","IconButton.c58c81c0.js","index.34b83dad.js","useDidMountEffect.6f555da9.js"])),O=i.div`
  display: flex;
  width: 100vw;
  gap: 60px;
`,T=i.div`
  display: flex;
  box-sizing: border-box;
  width: 100%;
  margin: 0px 20px;
  margin-right: 50px;
  align-items: center;
  flex-direction: column;
`;function B(p){const{fileData:e,interviewers:c,reviewData:s,amIAnAuthor:r}=p;return a(O,{children:[o(z,{fileData:e}),a(T,{children:[o(F,{interviewers:c}),o(E,{reviewData:s,amIAnAuthor:r})]})]})}function R(){const e=b().applicantId,c=x(n=>{var t;return(t=n.auth.user)==null?void 0:t.pk}),s=x(n=>{var t;return(t=n.applicant.applicantInfo)==null?void 0:t.file}),r=x(n=>n.review.reviewData),l=x(n=>{var t;return(t=n.applicant.applicantInfo)==null?void 0:t.interviewer}),d=h();return u.exports.useEffect(()=>{(async()=>{await d(v(e)),await d(y(e)),console.log("Asd")})()},[]),console.log(r),s&&r?o(u.exports.Suspense,{fallback:o("div",{children:"loading..."}),children:o(B,{fileData:s,interviewers:l,reviewData:r,amIAnAuthor:Boolean(l==null?void 0:l.find(n=>n.pk==c))})}):null}function N(){return o(w,{children:o(R,{})})}var U=Object.freeze(Object.defineProperty({__proto__:null,default:N},Symbol.toStringTag,{value:"Module"}));export{U as A,K as D,L as F,q as P,G as S,M as a,Y as b,$ as c,Q as d,J as e};
