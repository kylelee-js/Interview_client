import{s as o,r as u,j as n,d as i,an as y,R as h,ao as f,ap as w,u as g,a as k,aq as A,ar as C,N as I}from"./index--b22ca49a.js";import{D as P,a as _,b as D,c as S,d as j}from"./DialogTitle.72678a48.js";import{c as O}from"./Modal.1873caaa.js";const M=o.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 700px;
`,Y=o.div`
  width: 90%;
  border: 0.1rem solid #cfd1d0;
  border-radius: 5px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  background-color: #f2f7fa;
  padding: 10px 20px;
  margin-bottom: 20px;
`,$=o.span`
  margin-top: 5px;
  padding: 5px;
`,G=o.button`
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
`,K=o.div`
  position: relative;
  border-radius: 5px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  width: 100%;
  max-width: 700px;
  padding: 15px;
  margin-left: 50px;
  margin-bottom: 100px;
  background-color: #c4c3c2;
`,Q=o.div`
  height: 1px;
  visibility: hidden;
`,X=o.div`
  height: 1px;
  visibility: hidden;
`,Z=o.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: sticky;
  /* TODO: media-query: 사용자 디바이스 높이에 따라 50px과 rem 중에서 선택 */
  /* top: 0.5rem; */
  top: 50px;
`,ee=o.div`
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
`,R=o.div`
  width: 90%;
  border: 0.1rem solid #cfd1d0;
  border-radius: 5px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  background-color: #f2f7fa;
  padding: 10px 20px;
  margin-bottom: 20px;
`,F=o.span`
  margin-top: 5px;
  padding: 5px;
`,z=o.button`
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
`;function T({interviewers:l}){const[e,p]=u.exports.useState(),[s,r]=u.exports.useState(!1),c=()=>{r(!0)},d=()=>{r(!1)},a=async t=>{const b=JSON.parse(""+sessionStorage.getItem("persist:root")),{access:v}=JSON.parse(b.auth);try{const m=await fetch((e==null?void 0:e.image.slice(0,18))+":8080"+(e==null?void 0:e.image.slice(18)),{headers:new Headers({Authorization:`Bearer ${v}`})}).then(x=>x.blob()).then(x=>(console.log(URL.createObjectURL(x)),URL.createObjectURL(x)));t.currentTarget.src=m}catch{t.currentTarget.src="/default.png"}};return l?n(R,{children:[l.map(t=>i(F,{children:n(z,{onClick:()=>{p(t),c()},children:[t.name," - ",t.nickname]})},t.pk)),n(P,{open:s,onClose:d,scroll:"paper","aria-labelledby":"scroll-dialog-title","aria-describedby":"scroll-dialog-description",fullWidth:!0,children:[n(_,{id:"scroll-dialog-title",children:[e==null?void 0:e.name," - ",e==null?void 0:e.nickname]}),i(D,{dividers:!0,children:n(S,{id:"scroll-dialog-description",tabIndex:-1,children:[i(y,{src:e==null?void 0:e.image,alt:"\uBA74\uC811\uAD00 \uC0AC\uC9C4",onError:a}),n("p",{children:["Email : ",e==null?void 0:e.email]}),n("p",{children:["\uBD80\uC11C : ",e==null?void 0:e.department]})]})}),i(j,{children:i(O,{onClick:d,children:"\uD655\uC778"})})]})]}):null}const B=h.lazy(()=>f(()=>import("./ApplicantPDFViewer.12c6cbfd.js"),["ApplicantPDFViewer.12c6cbfd.js","index--b22ca49a.js","_commonjsHelpers.6312ac27.js","Modal.1873caaa.js","index.34b83dad.js","tiny-invariant.esm.d11e6c56.js","DialogTitle.72678a48.js"])),E=h.lazy(()=>f(()=>import("./ReviewAccordion.fa4ffec5.js"),["ReviewAccordion.fa4ffec5.js","ReviewAccordion.7cbbcfdf.css","jsx-runtime_commonjs-proxy.84ee599a.js","index--b22ca49a.js","Modal.1873caaa.js","_commonjsHelpers.6312ac27.js","Tooltip.575a8a63.js","IconButton.b455215f.js","index.34b83dad.js","useDidMountEffect.5760e649.js"])),N=o.div`
  display: flex;
  width: 100vw;
  gap: 60px;
`,L=o.div`
  display: flex;
  box-sizing: border-box;
  width: 100%;
  margin: 0px 20px;
  margin-right: 50px;
  align-items: center;
  flex-direction: column;
`;function W(l){const{fileData:e,interviewers:p,reviewData:s,amIAnAuthor:r}=l;return n(N,{children:[i(B,{fileData:e}),n(L,{children:[i(T,{interviewers:p}),i(E,{reviewData:s,amIAnAuthor:r})]})]})}function H(){const e=w().applicantId,p=g(a=>{var t;return(t=a.auth.user)==null?void 0:t.pk}),s=g(a=>{var t;return(t=a.applicant.applicantInfo)==null?void 0:t.file}),r=g(a=>a.review.reviewData),c=g(a=>{var t;return(t=a.applicant.applicantInfo)==null?void 0:t.interviewer}),d=k();return u.exports.useEffect(()=>{(async()=>{await d(A(e)),await d(C(e)),console.log("Asd")})()},[]),console.log(r),s&&r?i(u.exports.Suspense,{fallback:i("div",{children:"loading..."}),children:i(W,{fileData:s,interviewers:c,reviewData:r,amIAnAuthor:Boolean(c==null?void 0:c.find(a=>a.pk==p))})}):null}function U(){return i(I,{children:i(H,{})})}var te=Object.freeze(Object.defineProperty({__proto__:null,default:U},Symbol.toStringTag,{value:"Module"}));export{te as A,Z as D,Y as F,M as P,Q as S,$ as a,G as b,K as c,ee as d,X as e};
