import{r,e as f,j as y,s as g}from"./index--5cec4531.js";function A(t){const[h,d]=r.exports.useState(0),[p,i]=r.exports.useState(0);return r.exports.useEffect(()=>{const a=()=>{t.current&&(d(t.current.clientWidth),i(t.current.clientHeight))};return a(),window.addEventListener("resize",a),()=>{window.removeEventListener("resize",a)}},[]),{width:h,height:p}}const $=g.div`
  /* 한 백배로 넣어서 캔버스 전환? */
  height: 14000px;
  /* height: 100vh; */
  width: 100%;
`,E=g.div`
  position: fixed;
  z-index: -10;
  left: 50%;
  top: 50%;
  width: 100vw;
  height: 100vh;
  transform: translate(-50%, -50%);
  max-height: 100vh;
  max-width: 100vw;
`,B=g.canvas`
  width: 100%;
  height: 100%;
`,j=g.div`
  color: white;
  font-size: 40px;
  font-weight: 600;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
`,w="https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large",m=[148,132,89,139,140,177,69,90,235,290],x=["01-hero-lightpass","02-head-bob-turn","03-flip-for-guts","04-explode-tips","05-flip-for-nc","06-transparency-head","07-flip-reveal-guts","08-turn-for-chip","09-scoop-turn","10-fall-into-case"];function T(){const t=r.exports.useRef(null),h=r.exports.useRef(null),d=r.exports.useRef(null),p=r.exports.useRef(null),i=r.exports.useRef(null),{width:a,height:v}=A(d);return r.exports.useEffect(()=>{var R;const c=(R=t.current)==null?void 0:R.getContext("2d");document.body.style.backgroundColor="black";const u=new Image,S=1;u.src=`${w}/${x[0]}/${S.toString().padStart(4,"0")}.jpg`,u.onload=()=>{var e,n,o,s;c==null||c.drawImage(u,((e=t.current)==null?void 0:e.width)/5/2,((n=t.current)==null?void 0:n.height)/5/2,((o=t.current)==null?void 0:o.width)*4/5,((s=t.current)==null?void 0:s.height)*4/5)},t.current&&(t.current.width=a,t.current.height=v);const b=e=>{var n,o,s,l;e==0?u.src=`${w}/${x[0]}/${1 .toString().padStart(4,"0")}.jpg`:u.src=`${w}/${x[0]}/${e.toString().padStart(4,"0")}.jpg`,i.current&&(i.current.style.opacity=(1-Math.abs((74-e)/74)).toString(),i.current.style.top=""+(e+200)+"px"),c==null||c.drawImage(u,((n=t.current)==null?void 0:n.width)/5/2,((o=t.current)==null?void 0:o.height)/5/2,((s=t.current)==null?void 0:s.width)*4/5,((l=t.current)==null?void 0:l.height)*4/5)},C=()=>{var l;const e=window.scrollY,n=((l=h.current)==null?void 0:l.scrollHeight)-window.innerHeight,o=e/n,s=Math.min(m[0]-1,Math.floor(o*m[0]));p.current=requestAnimationFrame(W=>{b(s)}),console.log(e)};return window.addEventListener("scroll",C),()=>{window.removeEventListener("scroll",C),cancelAnimationFrame(p.current),document.body.style.backgroundColor="white"}},[a,v]),f($,{ref:h,children:y(E,{ref:d,children:[f(B,{ref:t}),f(j,{ref:i,id:"FixedText",scrollHeight:m[0],children:"\uC2A4\uD06C\uB864\uC5D0 \uB530\uB77C \uC0AC\uB77C\uC9C0\uB294 \uD14D\uC2A4\uD2B8"})]})})}function z(){return f(T,{})}export{z as default};
