import{s as o,r as u,j as n,d as i,an as v,R as m,ao as h,ap as y,u as g,a as w,aq as k,ar as A,N as C}from"./index--0cb22fa5.js";import{D as I,a as P,b as _,c as D,d as S}from"./DialogTitle.048b79bf.js";import{c as j}from"./Modal.22e07e09.js";const J=o.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 700px;
`,M=o.div`
  width: 90%;
  border: 0.1rem solid #cfd1d0;
  border-radius: 5px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  background-color: #f2f7fa;
  padding: 10px 20px;
  margin-bottom: 20px;
`,Y=o.span`
  margin-top: 5px;
  padding: 5px;
`,$=o.button`
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
`,G=o.div`
  position: relative;
  border-radius: 5px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  width: 100%;
  max-width: 700px;
  padding: 15px;
  margin-left: 50px;
  margin-bottom: 100px;
  background-color: #c4c3c2;
`,K=o.div`
  height: 1px;
  visibility: hidden;
`,Q=o.div`
  height: 1px;
  visibility: hidden;
`,X=o.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: sticky;
  /* TODO: media-query: 사용자 디바이스 높이에 따라 50px과 rem 중에서 선택 */
  /* top: 0.5rem; */
  top: 50px;
`,Z=o.div`
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
`,O=o.div`
  width: 90%;
  border: 0.1rem solid #cfd1d0;
  border-radius: 5px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  background-color: #f2f7fa;
  padding: 10px 20px;
  margin-bottom: 20px;
`,R=o.span`
  margin-top: 5px;
  padding: 5px;
`,F=o.button`
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
`;function z({interviewers:l}){const[e,p]=u.exports.useState(),[s,r]=u.exports.useState(!1),c=()=>{r(!0)},d=()=>{r(!1)},a=t=>{const f=JSON.parse(""+sessionStorage.getItem("persist:root")),{access:b}=JSON.parse(f.auth);try{fetch((e==null?void 0:e.image.slice(0,18))+":8080"+(e==null?void 0:e.image.slice(18)),{headers:new Headers({Authorization:`Bearer ${b}`})}).then(x=>x.blob()).then(x=>{console.log(URL.createObjectURL(x)),t.currentTarget.src=URL.createObjectURL(x)})}catch{t.currentTarget.src="/default.png"}};return l?n(O,{children:[l.map(t=>i(R,{children:n(F,{onClick:()=>{p(t),c()},children:[t.name," - ",t.nickname]})},t.pk)),n(I,{open:s,onClose:d,scroll:"paper","aria-labelledby":"scroll-dialog-title","aria-describedby":"scroll-dialog-description",fullWidth:!0,children:[n(P,{id:"scroll-dialog-title",children:[e==null?void 0:e.name," - ",e==null?void 0:e.nickname]}),i(_,{dividers:!0,children:n(D,{id:"scroll-dialog-description",tabIndex:-1,children:[i(v,{src:e==null?void 0:e.image,alt:"\uBA74\uC811\uAD00 \uC0AC\uC9C4",onError:a}),n("p",{children:["Email : ",e==null?void 0:e.email]}),n("p",{children:["\uBD80\uC11C : ",e==null?void 0:e.department]})]})}),i(S,{children:i(j,{onClick:d,children:"\uD655\uC778"})})]})]}):null}const T=m.lazy(()=>h(()=>import("./ApplicantPDFViewer.7dc398f0.js"),["ApplicantPDFViewer.7dc398f0.js","index--0cb22fa5.js","_commonjsHelpers.6312ac27.js","Modal.22e07e09.js","index.34b83dad.js","tiny-invariant.esm.d11e6c56.js","DialogTitle.048b79bf.js"])),B=m.lazy(()=>h(()=>import("./ReviewAccordion.bbd4e004.js"),["ReviewAccordion.bbd4e004.js","ReviewAccordion.7cbbcfdf.css","jsx-runtime_commonjs-proxy.80c39cf2.js","index--0cb22fa5.js","Modal.22e07e09.js","_commonjsHelpers.6312ac27.js","Tooltip.bab9bea8.js","IconButton.db226df7.js","index.34b83dad.js","useDidMountEffect.62c15b18.js"])),E=o.div`
  display: flex;
  width: 100vw;
  gap: 60px;
`,N=o.div`
  display: flex;
  box-sizing: border-box;
  width: 100%;
  margin: 0px 20px;
  margin-right: 50px;
  align-items: center;
  flex-direction: column;
`;function L(l){const{fileData:e,interviewers:p,reviewData:s,amIAnAuthor:r}=l;return n(E,{children:[i(T,{fileData:e}),n(N,{children:[i(z,{interviewers:p}),i(B,{reviewData:s,amIAnAuthor:r})]})]})}function W(){const e=y().applicantId,p=g(a=>{var t;return(t=a.auth.user)==null?void 0:t.pk}),s=g(a=>{var t;return(t=a.applicant.applicantInfo)==null?void 0:t.file}),r=g(a=>a.review.reviewData),c=g(a=>{var t;return(t=a.applicant.applicantInfo)==null?void 0:t.interviewer}),d=w();return u.exports.useEffect(()=>{(async()=>{await d(k(e)),await d(A(e)),console.log("Asd")})()},[]),console.log(r),s&&r?i(u.exports.Suspense,{fallback:i("div",{children:"loading..."}),children:i(L,{fileData:s,interviewers:c,reviewData:r,amIAnAuthor:Boolean(c==null?void 0:c.find(a=>a.pk==p))})}):null}function H(){return i(C,{children:i(W,{})})}var ee=Object.freeze(Object.defineProperty({__proto__:null,default:H},Symbol.toStringTag,{value:"Module"}));export{ee as A,X as D,M as F,J as P,K as S,Y as a,$ as b,G as c,Z as d,Q as e};
