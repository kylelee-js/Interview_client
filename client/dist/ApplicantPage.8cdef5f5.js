import{g as x,s as i,r as s,j as o,d as a,an as D,R as b,ao as w,ap as P,u as k,a as C,aq as S,ar as _,as as R,N as B}from"./index--a1e937cd.js";import{D as E,a as j,b as O,c as T,d as z}from"./DialogTitle.f2aa29d5.js";import{c as F}from"./Modal.df6337c8.js";const W={fetchReviewById:async t=>{try{return(await x.get(`/review/${t}/`)).data}catch(e){console.log(e)}},onWriteReview:async t=>{try{return(await x.post("/review/write/",{...t})).data}catch(e){console.log(e)}},onEditReview:async(t,e)=>{try{return(await x.patch(`/review/update/${t}/`,{...e})).data}catch(r){console.log(r)}},onDeleteReview:async t=>{try{const e=await x.delete(`/review/update/${t}/`)}catch(e){console.log(e)}}},ee=i.div`
  position: relative;
  border-radius: 5px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  width: 100%;
  max-width: 700px;
  padding: 15px;
  margin-left: 50px;
  margin-bottom: 100px;
  background-color: #c4c3c2;
`,te=i.div`
  height: 1px;
  visibility: hidden;
`,ae=i.div`
  height: 1px;
  visibility: hidden;
`,ie=i.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: sticky;
  /* TODO: media-query: 사용자 디바이스 높이에 따라 50px과 rem 중에서 선택 */
  /* top: 0.5rem; */
  top: 50px;
`,oe=i.div`
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
`,N=i.div`
  width: 90%;
  border: 0.1rem solid #cfd1d0;
  border-radius: 5px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  background-color: #f2f7fa;
  padding: 10px 20px;
  margin-bottom: 20px;
`,$=i.span`
  margin-top: 5px;
  padding: 5px;
`,V=i.button`
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
`;function q({interviewers:t}){const[e,r]=s.exports.useState(),[p,c]=s.exports.useState(!1),g=()=>{c(!0)},d=()=>{c(!1)},h=n=>{n.currentTarget.src="/default.png"};return t?o(N,{children:[t.map(n=>a($,{children:o(V,{onClick:()=>{r(n),g()},children:[n.name," - ",n.nickname]})})),o(E,{open:p,onClose:d,scroll:"paper","aria-labelledby":"scroll-dialog-title","aria-describedby":"scroll-dialog-description",fullWidth:!0,children:[o(j,{id:"scroll-dialog-title",children:[e==null?void 0:e.name," - ",e==null?void 0:e.nickname]}),a(O,{dividers:!0,children:o(T,{id:"scroll-dialog-description",tabIndex:-1,children:[a(D,{src:e==null?void 0:e.image,alt:"\uBA74\uC811\uAD00 \uC0AC\uC9C4",onError:h}),o("p",{children:["Email : ",e==null?void 0:e.email]}),o("p",{children:["\uBD80\uC11C : ",e==null?void 0:e.department]})]})}),a(z,{children:a(F,{onClick:d,children:"\uD655\uC778"})})]})]}):null}const H=b.lazy(()=>w(()=>import("./ApplicantPDFViewer.5669ac34.js"),["ApplicantPDFViewer.5669ac34.js","index--a1e937cd.js","_commonjsHelpers.6312ac27.js","Modal.df6337c8.js","index.34b83dad.js","tiny-invariant.esm.d11e6c56.js","DialogTitle.f2aa29d5.js"])),L=b.lazy(()=>w(()=>import("./ReviewAccordion.2b738df4.js"),["ReviewAccordion.2b738df4.js","ReviewAccordion.7cbbcfdf.css","jsx-runtime_commonjs-proxy.44c47bd6.js","index--a1e937cd.js","Modal.df6337c8.js","_commonjsHelpers.6312ac27.js","Tooltip.eb1d6ab6.js","IconButton.e2497f4e.js","index.34b83dad.js","useDidMountEffect.4a0cdacb.js","DialogTitle.f2aa29d5.js"])),M=i.div`
  display: flex;
  width: 100vw;
  gap: 60px;
`,Y=i.div`
  display: flex;
  box-sizing: border-box;
  width: 100%;
  margin: 20px;
  margin-right: 50px;
  align-items: center;
  flex-direction: column;
`;function G(t){const{filePath:e,interviewers:r,reviewData:p,amIAnAuthor:c}=t;return o(M,{children:[a(H,{filePath:e}),o(Y,{children:[a(q,{interviewers:r}),a(L,{reviewData:p,amIAnAuthor:c})]})]})}function J(){const e=P().applicantId,[r,p]=s.exports.useState(""),[c,g]=s.exports.useState(!1),[d,h]=s.exports.useState(),n=k(f=>{var l;return(l=f.auth.user)==null?void 0:l.pk}),m=C(),[y,A]=s.exports.useState([]);return s.exports.useEffect(()=>{(async l=>{const u=await S(l),v=await W.fetchReviewById(l);h(u.interviewer),g(Boolean(u.interviewer.find(I=>I==n))),p(u.filePath),A(v.reviewData),m(_(u)),m(R({applicantId:+e,reviewData:v.reviewData}))})(e)},[]),a(G,{...{filePath:r,interviewers:d,reviewData:y,amIAnAuthor:c}})}function K(){return a(B,{children:a(J,{})})}var re=Object.freeze(Object.defineProperty({__proto__:null,default:K},Symbol.toStringTag,{value:"Module"}));export{re as A,ie as D,ee as P,te as S,oe as a,ae as b,W as r};
