import{h as P,i as j,k as S,l as h,_ as l,r as v,q as D,t as m,v as A,d as e,w as y,a as O,ay as Q,az as X,f as Y,b as N,R as F,j as d,s as U,u as E,N as Z,T as B,aA as w,aB as oo,aC as to,aD as eo,aE as L,aF as ro}from"./index--9c8d4173.js";import{P as ao,c as no}from"./Modal.f0fc0fd1.js";import{a as $,i as I,r as _,B as G}from"./jsx-runtime_commonjs-proxy.8dbca415.js";import{u as so}from"./useDidMountEffect.4c9ce36e.js";import{I as R}from"./IconButton.f763a0f2.js";import{u as io,f as lo,g as co,N as uo,A as po,I as Co,M as vo,a as k,F as go,T as fo}from"./TextField.d7e6286b.js";import{u as xo}from"./index.esm.68abde28.js";import"./_commonjsHelpers.6312ac27.js";function bo(o){return P("MuiAppBar",o)}j("MuiAppBar",["root","positionFixed","positionAbsolute","positionSticky","positionStatic","positionRelative","colorDefault","colorPrimary","colorSecondary","colorInherit","colorTransparent"]);const ho=["className","color","enableColorOnDark","position"],mo=o=>{const{color:t,position:r,classes:a}=o,s={root:["root",`color${h(t)}`,`position${h(r)}`]};return A(s,bo,a)},b=(o,t)=>`${o==null?void 0:o.replace(")","")}, ${t})`,Bo=S(ao,{name:"MuiAppBar",slot:"Root",overridesResolver:(o,t)=>{const{ownerState:r}=o;return[t.root,t[`position${h(r.position)}`],t[`color${h(r.color)}`]]}})(({theme:o,ownerState:t})=>{const r=o.palette.mode==="light"?o.palette.grey[100]:o.palette.grey[900];return l({display:"flex",flexDirection:"column",width:"100%",boxSizing:"border-box",flexShrink:0},t.position==="fixed"&&{position:"fixed",zIndex:(o.vars||o).zIndex.appBar,top:0,left:"auto",right:0,"@media print":{position:"absolute"}},t.position==="absolute"&&{position:"absolute",zIndex:(o.vars||o).zIndex.appBar,top:0,left:"auto",right:0},t.position==="sticky"&&{position:"sticky",zIndex:(o.vars||o).zIndex.appBar,top:0,left:"auto",right:0},t.position==="static"&&{position:"static"},t.position==="relative"&&{position:"relative"},!o.vars&&l({},t.color==="default"&&{backgroundColor:r,color:o.palette.getContrastText(r)},t.color&&t.color!=="default"&&t.color!=="inherit"&&t.color!=="transparent"&&{backgroundColor:o.palette[t.color].main,color:o.palette[t.color].contrastText},t.color==="inherit"&&{color:"inherit"},o.palette.mode==="dark"&&!t.enableColorOnDark&&{backgroundColor:null,color:null},t.color==="transparent"&&l({backgroundColor:"transparent",color:"inherit"},o.palette.mode==="dark"&&{backgroundImage:"none"})),o.vars&&l({},t.color==="default"&&{"--AppBar-background":t.enableColorOnDark?o.vars.palette.AppBar.defaultBg:b(o.vars.palette.AppBar.darkBg,o.vars.palette.AppBar.defaultBg),"--AppBar-color":t.enableColorOnDark?o.vars.palette.text.primary:b(o.vars.palette.AppBar.darkColor,o.vars.palette.text.primary)},t.color&&!t.color.match(/^(default|inherit|transparent)$/)&&{"--AppBar-background":t.enableColorOnDark?o.vars.palette[t.color].main:b(o.vars.palette.AppBar.darkBg,o.vars.palette[t.color].main),"--AppBar-color":t.enableColorOnDark?o.vars.palette[t.color].contrastText:b(o.vars.palette.AppBar.darkColor,o.vars.palette[t.color].contrastText)},{backgroundColor:"var(--AppBar-background)",color:t.color==="inherit"?"inherit":"var(--AppBar-color)"},t.color==="transparent"&&{backgroundImage:"none",backgroundColor:"transparent",color:"inherit"}))}),ko=v.exports.forwardRef(function(t,r){const a=D({props:t,name:"MuiAppBar"}),{className:s,color:u="primary",enableColorOnDark:i=!1,position:n="fixed"}=a,c=m(a,ho),p=l({},a,{color:u,position:n,enableColorOnDark:i}),C=mo(p);return e(Bo,l({square:!0,component:"header",ownerState:p,elevation:4,className:y(C.root,s,n==="fixed"&&"mui-fixed"),ref:r},c))});var Do=ko;const Ao=["className","children","classes","IconComponent","input","inputProps","variant"],yo=["root"],No=o=>{const{classes:t}=o;return A({root:["root"]},co,t)},$o=e(Co,{}),q=v.exports.forwardRef(function(t,r){const a=D({name:"MuiNativeSelect",props:t}),{className:s,children:u,classes:i={},IconComponent:n=po,input:c=$o,inputProps:p}=a,C=m(a,Ao),x=io(),g=lo({props:a,muiFormControl:x,states:["variant"]}),f=l({},a,{classes:i}),W=No(f),J=m(i,yo);return v.exports.cloneElement(c,l({inputComponent:uo,inputProps:l({children:u,classes:J,IconComponent:n,variant:g.variant,type:void 0},p,c?c.props.inputProps:{}),ref:r},C,{className:y(W.root,c.props.className,s)}))});q.muiName="Select";var Io=q;function _o(o){return P("MuiToolbar",o)}j("MuiToolbar",["root","gutters","regular","dense"]);const Ro=["className","component","disableGutters","variant"],Mo=o=>{const{classes:t,disableGutters:r,variant:a}=o;return A({root:["root",!r&&"gutters",a]},_o,t)},To=S("div",{name:"MuiToolbar",slot:"Root",overridesResolver:(o,t)=>{const{ownerState:r}=o;return[t.root,!r.disableGutters&&t.gutters,t[r.variant]]}})(({theme:o,ownerState:t})=>l({position:"relative",display:"flex",alignItems:"center"},!t.disableGutters&&{paddingLeft:o.spacing(2),paddingRight:o.spacing(2),[o.breakpoints.up("sm")]:{paddingLeft:o.spacing(3),paddingRight:o.spacing(3)}},t.variant==="dense"&&{minHeight:48}),({theme:o,ownerState:t})=>t.variant==="regular"&&o.mixins.toolbar),zo=v.exports.forwardRef(function(t,r){const a=D({props:t,name:"MuiToolbar"}),{className:s,component:u="div",disableGutters:i=!1,variant:n="regular"}=a,c=m(a,Ro),p=l({},a,{component:u,disableGutters:i,variant:n}),C=Mo(p);return e(To,l({as:u,className:y(C.root,s),ref:r,ownerState:p},c))});var Fo=zo;function Eo(){const o=O();return e(no,{style:{backgroundColor:"#54aceb",color:"whitesmoke"},onClick:r=>{o(Q()),console.log("logout"),X()},children:"\uB85C\uADF8\uC544\uC6C3"})}var M={},Lo=I.exports;Object.defineProperty(M,"__esModule",{value:!0});var H=M.default=void 0,Po=Lo($),jo=_,So=(0,Po.default)((0,jo.jsx)("path",{d:"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"}),"Menu");H=M.default=So;function Oo(){const{pathname:o}=Y(),t=N(),r=v.exports.useRef(null),[a,s]=F.useState(null),[u,i]=F.useState(o),n=Boolean(a),[c,p]=v.exports.useTransition(),C=f=>{s(f.currentTarget)},x=()=>{s(null)},g=f=>{x(),i(f)};return so(()=>{a==null&&p(()=>{t(`/${u}`)})},[u]),d("div",{children:[e(R,{size:"large",edge:"start",color:"inherit","aria-label":"menu",sx:{mr:2},id:"basic-button","aria-controls":n?"basic-menu":void 0,"aria-haspopup":"true","aria-expanded":n?"true":void 0,onClick:C,children:e(H,{})}),d(vo,{ref:r,id:"basic-menu",anchorEl:a,open:n,onClose:x,MenuListProps:{"aria-labelledby":"basic-button"},children:[o!=="/"&&e(k,{onClick:()=>g(""),children:"\uB0B4 \uC9C0\uC6D0\uC790 \uBCF4\uB7EC\uAC00\uAE30"}),o!=="/pool"&&e(k,{onClick:()=>g("pool"),children:"\uC9C0\uC6D0\uC790 \uD480 \uBCF4\uB7EC\uAC00\uAE30"}),o!=="/upload"&&e(k,{onClick:()=>g("upload"),children:"\uC9C0\uC6D0\uC790 \uC2E0\uADDC \uB4F1\uB85D\uD558\uAE30"})]})]})}var T={},Uo=I.exports;Object.defineProperty(T,"__esModule",{value:!0});var K=T.default=void 0,Go=Uo($),qo=_,Ho=(0,Go.default)((0,qo.jsx)("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel");K=T.default=Ho;var z={},Ko=I.exports;Object.defineProperty(z,"__esModule",{value:!0});var V=z.default=void 0,Vo=Ko($),Wo=_,Jo=(0,Vo.default)((0,Wo.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),"Search");V=z.default=Jo;function Qo(){return e(R,{type:"submit","aria-label":"delete",children:e(V,{style:{position:"absolute",color:"#1876d1",top:"-3px",left:"-50px"}})})}const Xo=U.form`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;function Yo(){const{register:o,handleSubmit:t}=xo(),r=N();return d(Xo,{onSubmit:t(async s=>{r(`./search/?option=${s.option}&searchKeyword=${s.searchKeyword}`)}),children:[e(G,{sx:{marginRight:"10px"},children:e(go,{children:d(Io,{id:"demo-simple-select",sx:{fontSize:"15px",textAlign:"center",color:"black"},disableUnderline:!0,defaultValue:"applicant",...o("option"),children:[e("option",{value:"applicant",children:"\uC9C0\uC6D0\uC790"}),e("option",{value:"tag",children:"\uD0DC\uADF8"})]})})}),e(fo,{...o("searchKeyword"),required:!0,style:{backgroundColor:"white",marginRight:"20px",borderRadius:"5px"},InputProps:{sx:{height:30}},placeholder:"\uAC80\uC0C9",size:"small"}),e(Qo,{})]})}const Zo=U.button`
  cursor: pointer;
  border: none;
  text-decoration: underline;
  background-color: transparent;
  color: blue;
  font-size: 16px;
  padding-right: 5px;
  transition: all ease-in-out 0.3s;
  border-radius: 3px;
  &:hover {
    background-color: rgba(39, 168, 245, 0.44);
    color: whitesmoke;
    text-decoration: none;
  }
`;function it(){const o=N(),t=O(),r=E(i=>{var n;return(n=i.auth.user)==null?void 0:n.isChanged}),a=E(i=>{var n;return(n=i.auth.user)==null?void 0:n.onLoginChange});return v.exports.useEffect(()=>{if(!a){const i=async()=>{const c=await oo();t(to(c))};i();const n=setInterval(i,1e4);return()=>{clearInterval(n)}}},[]),d(Z,{children:[d("header",{style:{marginBottom:"30px"},children:[" ",e(G,{sx:{flexGrow:1},children:e(Do,{position:"static",children:d(Fo,{children:[e(Oo,{}),e(B,{variant:"h6",component:"div",sx:{flexGrow:1},children:"Jobreeting"}),r&&!a&&d(B,{sx:{flexGrow:1},children:["\uB098\uC758 \uC9C0\uC6D0\uC790 \uC0C1\uD0DC\uC5D0 \uBCC0\uACBD\uC774 \uC788\uC2B5\uB2C8\uB2E4.",e(Zo,{onClick:()=>{t(eo()),t(L()),o("/")},children:"\uC5EC\uAE30"}),"\uB97C \uB20C\uB7EC \uD655\uC778\uD558\uC138\uC694."]}),a&&d(B,{style:{position:"relative"},sx:{flexGrow:1},children:["\uB098\uC758 \uC9C0\uC6D0\uC790 \uC0C1\uD0DC\uC5D0 \uBCC0\uACBD\uC774 \uC788\uC5C8\uC2B5\uB2C8\uB2E4."," ",e(R,{onClick:()=>{t(L()),t(ro())},"aria-label":"delete",children:e(K,{style:{position:"absolute",color:"whitesmoke",top:"-5px",left:"5px"}})})]}),e(Yo,{}),e(Eo,{})]})})})]}),e("main",{children:e(w,{})})]})}export{it as default};
