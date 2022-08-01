import{g as x,s as i,r as n,j as o,d as a,an as D,R as v,ao as b,ap as P,u as k,a as C,aq as S,ar as _,as as R,N as B}from"./index--9935a7bc.js";import{D as j,a as O,b as E,c as T,d as F}from"./DialogTitle.1f415f37.js";import{c as z}from"./Modal.54a5d878.js";const W={fetchReviewById:async t=>{try{return(await x.get(`/review/${t}/`)).data}catch(e){console.log(e)}},onWriteReview:async t=>{try{return(await x.post("/review/write/",{...t})).data}catch(e){console.log(e)}},onEditReview:async(t,e)=>{try{return(await x.patch(`/review/update/${t}/`,{...e})).data}catch(r){console.log(r)}},onDeleteReview:async t=>{try{const e=await x.delete(`/review/update/${t}/`)}catch(e){console.log(e)}}},ee=i.div`
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
`;function q({interviewers:t}){const[e,r]=n.exports.useState(),[c,s]=n.exports.useState(!1),h=()=>{s(!0)},d=()=>{s(!1)};return t?o(N,{children:[t.map(p=>a($,{children:o(V,{onClick:()=>{r(p),h()},children:[p.name," - ",p.nickname]})})),o(j,{open:c,onClose:d,scroll:"paper","aria-labelledby":"scroll-dialog-title","aria-describedby":"scroll-dialog-description",fullWidth:!0,children:[o(O,{id:"scroll-dialog-title",children:[e==null?void 0:e.name," - ",e==null?void 0:e.nickname]}),a(E,{dividers:!0,children:o(T,{id:"scroll-dialog-description",tabIndex:-1,children:[a(D,{src:e==null?void 0:e.image,alt:"\uBA74\uC811\uAD00 \uC0AC\uC9C4"}),o("p",{children:["Email : ",e==null?void 0:e.email]}),o("p",{children:["\uBD80\uC11C : ",e==null?void 0:e.department]})]})}),a(F,{children:a(z,{onClick:d,children:"\uD655\uC778"})})]})]}):null}const H=v.lazy(()=>b(()=>import("./ApplicantPDFViewer.b5329f12.js"),["ApplicantPDFViewer.b5329f12.js","index--9935a7bc.js","_commonjsHelpers.6312ac27.js","Modal.54a5d878.js","index.34b83dad.js","tiny-invariant.esm.d11e6c56.js","DialogTitle.1f415f37.js"])),L=v.lazy(()=>b(()=>import("./ReviewAccordion.606764b3.js"),["ReviewAccordion.606764b3.js","ReviewAccordion.7cbbcfdf.css","jsx-runtime_commonjs-proxy.6d4935ec.js","index--9935a7bc.js","Modal.54a5d878.js","_commonjsHelpers.6312ac27.js","Tooltip.b11f2281.js","IconButton.80338035.js","index.34b83dad.js","useDidMountEffect.fd686247.js","DialogTitle.1f415f37.js"])),M=i.div`
  display: flex;
  width: 100vw;
  gap: 60px;
`,Y=i.div`
  width: "100%";
  margin: "20px";
  margin-right: "50px";
  display: "flex";
  align-items: "center";
  flex-direction: "column";
`;function G(t){const{filePath:e,interviewers:r,reviewData:c,amIAnAuthor:s}=t;return o(M,{children:[a(H,{filePath:e}),o(Y,{children:[a(q,{interviewers:r}),a(L,{reviewData:c,amIAnAuthor:s})]})]})}function J(){const e=P().applicantId,[r,c]=n.exports.useState(""),[s,h]=n.exports.useState(!1),[d,p]=n.exports.useState(),w=k(m=>{var l;return(l=m.auth.user)==null?void 0:l.pk}),g=C(),[y,A]=n.exports.useState([]);return n.exports.useEffect(()=>{(async l=>{const u=await S(l),f=await W.fetchReviewById(l);p(u.interviewer),h(Boolean(u.interviewer.find(I=>I==w))),c(u.filePath),A(f.reviewData),g(_(u)),g(R({applicantId:+e,reviewData:f.reviewData}))})(e)},[]),a(G,{...{filePath:r,interviewers:d,reviewData:y,amIAnAuthor:s}})}function K(){return a(B,{children:a(J,{})})}var re=Object.freeze(Object.defineProperty({__proto__:null,default:K},Symbol.toStringTag,{value:"Module"}));export{re as A,ie as D,ee as P,te as S,oe as a,ae as b,W as r};
