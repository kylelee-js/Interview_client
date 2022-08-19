import{r as u,j as d,e as t,s as x,T as F,x as l,aW as R}from"./index--4bd2c2be.js";function k(r){const[f,a]=u.exports.useState(0),[g,s]=u.exports.useState(0);return u.exports.useEffect(()=>{const c=()=>{r.current&&(a(r.current.clientWidth),s(r.current.clientHeight))};return c(),window.addEventListener("resize",c),()=>{window.removeEventListener("resize",c)}},[]),{width:f,height:g}}const T=x.div`
  position: fixed;
  /* z-index: ${r=>r.zIndex}; */
  opacity: ${r=>r.opacity};
  left: 50%;
  top: 50%;
  width: 100vw;
  height: 100vh;
  transform: translate(-50%, -50%);
  max-height: 100vh;
  max-width: 100vw;
`,z=x.canvas`
  width: 100%;
  height: 100%;
`,$=[148,132,89,139,140,177,69,90,235,290],y=["01-hero-lightpass","02-head-bob-turn","03-flip-for-guts","04-explode-tips","05-flip-for-nc","06-transparency-head","07-flip-reveal-guts","08-turn-for-chip","09-scoop-turn","10-fall-into-case"];function L({startY:r,children:f,canvasIdx:a,endY:g}){const s=u.exports.useRef(null),c=u.exports.useRef(null),w=u.exports.useRef(null),{width:p,height:m}=k(c);return u.exports.useEffect(()=>{var v;const h=(v=s.current)==null?void 0:v.getContext("2d"),C=new Image,e=1;C.src=`${b}/${y[a]}/${e.toString().padStart(4,"0")}.jpg`,C.onload=()=>{var A,B;h==null||h.drawImage(C,0,0,(A=s.current)==null?void 0:A.width,(B=s.current)==null?void 0:B.height)},s.current&&(s.current.width=p,s.current.height=m);const o=A=>{var B,E;C.src=`${b}/${y[a]}/${(A<1?1:A).toString().padStart(4,"0")}.jpg`,h==null||h.drawImage(C,0,0,(B=s.current)==null?void 0:B.width,(E=s.current)==null?void 0:E.height)},D=()=>{const A=window.scrollY-r,B=g-r,E=A/B,S=Math.min($[a]-1,Math.floor(E*$[a]));console.log(`
        scrollTop : ${A} (${window.scrollY} - ${r})
        maxScroll : ${B}
        frameIndex : ${S}
      `),w.current=requestAnimationFrame(U=>{o(S)})};return window.addEventListener("scroll",D),()=>{window.removeEventListener("scroll",D),cancelAnimationFrame(w.current)}},[p,m,a]),d(T,{ref:c,zIndex:10-a,opacity:1,children:[t(z,{ref:s}),f]})}const W=x.div`
  color: white;
  font-size: 40px;
  font-weight: 600;
  position: fixed;
  left: ${r=>50-r.position[0]}%;
  top: ${r=>50-r.position[1]}%;
  transform: translate(-50%, -50%);
  opacity: 0;
`,j=r=>{const{children:f,start:a,position:g,interval:s=2e3,fontSize:c=34}=r,w=u.exports.useRef(null),p=u.exports.useRef(null);return u.exports.useEffect(()=>{const m=()=>{w.current=requestAnimationFrame(h=>{if(p.current){const C=window.scrollY,o=(s-(C-a))/s;p.current.style.opacity=(1-Math.abs(o)).toString(),p.current.style.transform=`matrix(1, 0, 0, 1, 0, ${40*o})`}})};return window.addEventListener("scroll",m),()=>{window.removeEventListener("scroll",m),cancelAnimationFrame(w.current)}},[]),t(W,{ref:p,position:g,children:t(F,{component:"div",fontSize:`${c}px`,children:f})})},i=j;function q({canvasIdx:r}){return d(l,{children:[r==0&&d(l,{children:[d(i,{start:0,position:[10,10],fontSize:50,children:[t("b",{children:"\uC18C\uAC1C\uD569\uB2C8\uB2E4"}),t("br",{}),t("h1",{children:"Airpods Pro"})]}),t(i,{start:3e3,position:[0,0],children:"\uADF8 \uB180\uB77C\uC6B4 \uAE30\uB2A5"})]}),r==1&&d(l,{children:[t(i,{start:7e3,position:[1,1],children:"\uB204\uAD6C\uB3C4 \uB530\uB77C\uC62C \uC218 \uC788\uB294 \uC644\uC131\uB3C4"}),t(i,{start:8e3,position:[40,10],children:"\uC6C5\uC7A5\uD568\uACFC \uC138\uBC00\uD568"}),t(i,{start:9e3,position:[20,-20],children:"\uADF8\uB9AC\uACE0 \uC644\uBCBD\uD55C \uB3D9\uAE30\uD654\uAE4C\uC9C0"})]}),r==2&&d(l,{children:[t(i,{start:7e3,position:[1,1],interval:1500,children:"\uB204\uAD6C\uB3C4 \uB530\uB77C\uC62C \uC218 \uC788\uB294 \uC644\uC131\uB3C4"}),t(i,{start:8e3,position:[40,10],interval:1500,children:"\uC6C5\uC7A5\uD568\uACFC \uC138\uBC00\uD568"}),t(i,{start:9e3,position:[20,-20],interval:1500,children:"\uADF8\uB9AC\uACE0 \uC644\uBCBD\uD55C \uB3D9\uAE30\uD654\uAE4C\uC9C0"})]}),r==3&&d(l,{children:[t(i,{start:12500,position:[35,1],interval:1e3,children:"\uC911\uAC04 \uC0AC\uC774\uC988"}),t(i,{start:14e3,position:[10,1],interval:1200,children:"\uC791\uC740 \uC0AC\uC774\uC988"}),t(i,{start:14e3,position:[40,1],interval:1200,children:"\uD070 \uC0AC\uC774\uC988\uC758 \uC774\uC5B4\uD301"})]}),r==4&&d(l,{children:[t(i,{start:24e3,position:[1,1],children:"\uC644\uBCBD\uD55C \uB178\uC774\uC988 \uCE94\uC2AC\uB9C1"}),t(i,{start:28e3,position:[40,10],children:"\uADF8\uB9AC\uACE0 \uC644\uBCBD\uD55C \uC77C\uC0C1 \uCCAD\uC74C\uAE30\uB2A5\uAE4C\uC9C0"})]}),r==5&&d(l,{children:[t(i,{start:22e3,position:[1,1],children:"\uC644\uBCBD\uD55C \uB178\uC774\uC988 \uCE94\uC2AC\uB9C1"}),t(i,{start:24e3,position:[43,30],children:t("p",{style:{color:"black"},children:"\uADF8\uB9AC\uACE0 \uC644\uBCBD\uD55C \uC77C\uC0C1 \uCCAD\uC74C\uAE30\uB2A5\uAE4C\uC9C0"})})]}),r==6&&t(l,{children:t(i,{start:27e3,position:[10,35],interval:1500,children:t("p",{style:{color:"black"},children:"\uCD5C\uC2E0\uC2DD \uC560\uD50C\uC758 \uCE69\uC14B \uD0D1\uC7AC"})})}),r==7&&t(l,{}),r==8&&t(l,{}),r==9&&t(l,{children:t(i,{start:5e4,position:[10,10],children:t("h1",{children:"\uAC10\uC0AC\uD569\uB2C8\uB2E4."})})})]})}const Y=x.div`
  height: 55000px;
  width: 100%;
`,b="https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large",_=[148,132,89,139,140,177,69,90,235,290],n=[0,4904,9278,12227,16833,21472,27337,29623,32605,40392,50001],M=["01-hero-lightpass","02-head-bob-turn","03-flip-for-guts","04-explode-tips","05-flip-for-nc","06-transparency-head","07-flip-reveal-guts","08-turn-for-chip","09-scoop-turn","10-fall-into-case"],P=R`
  0%{
    opacity: 0;
  }
  50%, 80%{
    opacity: 1;
  }
  100%{
    opacity: 0;
  }
`,H=x.p`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  z-index: 1000;
  color: white;
  font-weight: 700;
  letter-spacing: 0.2rem;
  animation: ${P} 3s;
  animation-delay: calc(0.2s * var(--i));
`;function I(){const r=u.exports.useRef(null),f=u.exports.useRef(null),[a,g]=u.exports.useState(-1),[s,c]=u.exports.useState(!1),[w,p]=u.exports.useState([]),m=u.exports.useRef(0),h=e=>{m.current=e,e%2==0?c(!1):c(!0)};u.exports.useEffect(()=>{g(m.current),console.log("canvasIdx : ",a)},[s]);const C=()=>{const e=window.scrollY;let o=0;switch(!0){case n[1]>e:break;case(n[1]<=e&&n[2]>e):o=1;break;case(n[2]<=e&&n[3]>e):o=2;break;case(n[3]<=e&&n[4]>e):o=3;break;case(n[4]<=e&&n[5]>e):o=4;break;case(n[5]<=e&&n[6]>e):o=5;break;case(n[6]<=e&&n[7]>e):o=6;break;case(n[7]<=e&&n[8]>e):o=7;break;case(n[8]<=e&&n[9]>e):o=8;break;case n[9]<=e:o=9;break}f.current=requestAnimationFrame(D=>{h(o)})};return u.exports.useEffect(()=>(document.body.style.backgroundColor="black",(()=>{for(let e=0;e<10;e++)for(let o=0;o<_[e];o++){const D=new Image;D.src=`${b}/${M[e]}/${o.toString().padStart(4,"0")}.jpg`,p(v=>[...v,D])}})(),window.addEventListener("scroll",C),()=>{document.body.style.backgroundColor="white",cancelAnimationFrame(f.current),window.removeEventListener("scroll",C)}),[]),d(Y,{ref:r,children:[t(F,{fontSize:"70px",children:t(H,{children:"\uC5B4\uC11C\uC624\uC138\uC694 \uC0C8\uB85C\uC6B4 \uC5D0\uC5B4\uD31F \uD504\uB85C"})}),[0,1,2,3,4,5,6,7,8,9].map(e=>t("div",{children:a==e&&t(L,{canvasIdx:e,startY:n[e],endY:n[e+1],children:t(q,{canvasIdx:a})})},e))]})}function J(){return t(I,{})}export{J as default};
