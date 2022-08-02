import{s as o,r as u,j as n,d as i,an as v,R as h,ao as m,ap as y,u as g,a as w,aq as k,ar as A,N as C}from"./index--75d13b74.js";import{D as I,a as P,b as _,c as D,d as S}from"./DialogTitle.aad95e78.js";import{c as j}from"./Modal.c72bee6d.js";const J=o.div`
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
`;function T({interviewers:p}){const[e,d]=u.exports.useState(),[c,r]=u.exports.useState(!1),l=()=>{r(!0)},x=()=>{r(!1)},a=t=>{const f=JSON.parse(""+sessionStorage.getItem("persist:root")),{access:b}=JSON.parse(f.auth);try{fetch((e==null?void 0:e.image.slice(0,18))+":8080"+(e==null?void 0:e.image.slice(18)),{headers:new Headers({Authorization:`Bearer ${b}`})}).then(s=>s.blob()).then(s=>{console.log(URL.createObjectURL(s)),t.currentTarget.src=URL.createObjectURL(s)}).catch(s=>{s.currentTarget.src="/default.png"})}catch{t.currentTarget.src="/default.png"}};return p?n(O,{children:[p.map(t=>i(R,{children:n(F,{onClick:()=>{d(t),l()},children:[t.name," - ",t.nickname]})},t.pk)),n(I,{open:c,onClose:x,scroll:"paper","aria-labelledby":"scroll-dialog-title","aria-describedby":"scroll-dialog-description",fullWidth:!0,children:[n(P,{id:"scroll-dialog-title",children:[e==null?void 0:e.name," - ",e==null?void 0:e.nickname]}),i(_,{dividers:!0,children:n(D,{id:"scroll-dialog-description",tabIndex:-1,children:[i(v,{src:e==null?void 0:e.image,alt:"\uBA74\uC811\uAD00 \uC0AC\uC9C4",onError:a}),n("p",{children:["Email : ",e==null?void 0:e.email]}),n("p",{children:["\uBD80\uC11C : ",e==null?void 0:e.department]})]})}),i(S,{children:i(j,{onClick:x,children:"\uD655\uC778"})})]})]}):null}const z=h.lazy(()=>m(()=>import("./ApplicantPDFViewer.226bfb64.js"),["ApplicantPDFViewer.226bfb64.js","index--75d13b74.js","_commonjsHelpers.6312ac27.js","Modal.c72bee6d.js","index.34b83dad.js","tiny-invariant.esm.d11e6c56.js","DialogTitle.aad95e78.js"])),B=h.lazy(()=>m(()=>import("./ReviewAccordion.6b1e875f.js"),["ReviewAccordion.6b1e875f.js","ReviewAccordion.7cbbcfdf.css","jsx-runtime_commonjs-proxy.c4a67d59.js","index--75d13b74.js","Modal.c72bee6d.js","_commonjsHelpers.6312ac27.js","Tooltip.dbe47c22.js","IconButton.de1be2f7.js","index.34b83dad.js","useDidMountEffect.c2c034f3.js"])),E=o.div`
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
`;function L(p){const{fileData:e,interviewers:d,reviewData:c,amIAnAuthor:r}=p;return n(E,{children:[i(z,{fileData:e}),n(N,{children:[i(T,{interviewers:d}),i(B,{reviewData:c,amIAnAuthor:r})]})]})}function W(){const e=y().applicantId,d=g(a=>{var t;return(t=a.auth.user)==null?void 0:t.pk}),c=g(a=>{var t;return(t=a.applicant.applicantInfo)==null?void 0:t.file}),r=g(a=>a.review.reviewData),l=g(a=>{var t;return(t=a.applicant.applicantInfo)==null?void 0:t.interviewer}),x=w();return u.exports.useEffect(()=>{(async()=>{await x(k(e)),await x(A(e)),console.log("Asd")})()},[]),console.log(r),c&&r?i(u.exports.Suspense,{fallback:i("div",{children:"loading..."}),children:i(L,{fileData:c,interviewers:l,reviewData:r,amIAnAuthor:Boolean(l==null?void 0:l.find(a=>a.pk==d))})}):null}function H(){return i(C,{children:i(W,{})})}var ee=Object.freeze(Object.defineProperty({__proto__:null,default:H},Symbol.toStringTag,{value:"Module"}));export{ee as A,X as D,M as F,J as P,K as S,Y as a,$ as b,G as c,Z as d,Q as e};
