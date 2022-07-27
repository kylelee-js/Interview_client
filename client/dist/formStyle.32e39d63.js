import{R as z,s as q}from"./index--4e0d3e93.js";var ee=e=>e.type==="checkbox",G=e=>e instanceof Date,k=e=>e==null;const He=e=>typeof e=="object";var D=e=>!k(e)&&!Array.isArray(e)&&He(e)&&!G(e),tr=e=>D(e)&&e.target?ee(e.target)?e.target.checked:e.target.value:e,sr=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,ir=(e,s)=>e.has(sr(s)),ue=e=>Array.isArray(e)?e.filter(Boolean):[],A=e=>e===void 0,f=(e,s,r)=>{if(!s||!D(e))return r;const o=ue(s.split(/[,[\].]+?/)).reduce((a,u)=>k(a)?a:a[u],e);return A(o)||o===e?A(e[s])?r:e[s]:o};const Te={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},M={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},I={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};z.createContext(null);var nr=(e,s,r,o=!0)=>{const a={};for(const u in e)Object.defineProperty(a,u,{get:()=>{const g=u;return s[g]!==M.all&&(s[g]=!o||M.all),r&&(r[g]=!0),e[g]}});return a},R=e=>D(e)&&!Object.keys(e).length,ar=(e,s,r)=>{const{name:o,...a}=e;return R(a)||Object.keys(a).length>=Object.keys(s).length||Object.keys(a).find(u=>s[u]===(!r||M.all))},ve=e=>Array.isArray(e)?e:[e];function or(e){const s=z.useRef(e);s.current=e,z.useEffect(()=>{const r=a=>{a&&a.unsubscribe()},o=!e.disabled&&s.current.subject.subscribe({next:s.current.callback});return()=>r(o)},[e.disabled])}var N=e=>typeof e=="string",lr=(e,s,r,o)=>{const a=Array.isArray(e);return N(e)?(o&&s.watch.add(e),f(r,e)):a?e.map(u=>(o&&s.watch.add(u),f(r,u))):(o&&(s.watchAll=!0),r)},ce=e=>typeof e=="function",ze=e=>{for(const s in e)if(ce(e[s]))return!0;return!1},ur=(e,s,r,o,a)=>s?{...r[e],types:{...r[e]&&r[e].types?r[e].types:{},[o]:a||!0}}:{},ke=e=>/^\w*$/.test(e),$e=e=>ue(e.replace(/["|']|\]/g,"").split(/\.|\[/));function p(e,s,r){let o=-1;const a=ke(s)?[s]:$e(s),u=a.length,g=u-1;for(;++o<u;){const b=a[o];let F=r;if(o!==g){const E=e[b];F=D(E)||Array.isArray(E)?E:isNaN(+a[o+1])?{}:[]}e[b]=F,e=e[b]}return e}const _e=(e,s,r)=>{for(const o of r||Object.keys(e)){const a=f(e,o);if(a){const{_f:u,...g}=a;if(u&&s(u.name)){if(u.ref.focus&&A(u.ref.focus()))break;if(u.refs){u.refs[0].focus();break}}else D(g)&&_e(g,s)}}};var Me=(e,s,r)=>!r&&(s.watchAll||s.watch.has(e)||[...s.watch].some(o=>e.startsWith(o)&&/^\.\w+/.test(e.slice(o.length)))),Ae=typeof window!="undefined"&&typeof window.HTMLElement!="undefined"&&typeof document!="undefined";function j(e){let s;const r=Array.isArray(e);if(e instanceof Date)s=new Date(e);else if(e instanceof Set)s=new Set(e);else if(!(Ae&&(e instanceof Blob||e instanceof FileList))&&(r||D(e))){s=r?[]:{};for(const o in e){if(ce(e[o])){s=e;break}s[o]=j(e[o])}}else return e;return s}function cr(e,s){const r=s.slice(0,-1).length;let o=0;for(;o<r;)e=A(e)?o++:e[s[o++]];return e}function S(e,s){const r=ke(s)?[s]:$e(s),o=r.length==1?e:cr(e,r),a=r[r.length-1];let u;o&&delete o[a];for(let g=0;g<r.slice(0,-1).length;g++){let b=-1,F;const E=r.slice(0,-(g+1)),U=E.length-1;for(g>0&&(u=e);++b<E.length;){const w=E[b];F=F?F[w]:e[w],U===b&&(D(F)&&R(F)||Array.isArray(F)&&!F.filter(h=>!A(h)).length)&&(u?delete u[w]:delete e[w]),u=F}}return e}function we(){let e=[];return{get observers(){return e},next:a=>{for(const u of e)u.next(a)},subscribe:a=>(e.push(a),{unsubscribe:()=>{e=e.filter(u=>u!==a)}}),unsubscribe:()=>{e=[]}}}var ne=e=>k(e)||!He(e);function J(e,s){if(ne(e)||ne(s))return e===s;if(G(e)&&G(s))return e.getTime()===s.getTime();const r=Object.keys(e),o=Object.keys(s);if(r.length!==o.length)return!1;for(const a of r){const u=e[a];if(!o.includes(a))return!1;if(a!=="ref"){const g=s[a];if(G(u)&&G(g)||D(u)&&D(g)||Array.isArray(u)&&Array.isArray(g)?!J(u,g):u!==g)return!1}}return!0}var Ue=e=>({isOnSubmit:!e||e===M.onSubmit,isOnBlur:e===M.onBlur,isOnChange:e===M.onChange,isOnAll:e===M.all,isOnTouch:e===M.onTouched}),ae=e=>typeof e=="boolean",De=e=>e.type==="file",Ve=e=>{const s=e?e.ownerDocument:0,r=s&&s.defaultView?s.defaultView.HTMLElement:HTMLElement;return e instanceof r},je=e=>e.type==="select-multiple",Se=e=>e.type==="radio",fr=e=>Se(e)||ee(e),pe=e=>Ve(e)&&e.isConnected;function oe(e,s={}){const r=Array.isArray(e);if(D(e)||r)for(const o in e)Array.isArray(e[o])||D(e[o])&&!ze(e[o])?(s[o]=Array.isArray(e[o])?[]:{},oe(e[o],s[o])):k(e[o])||(s[o]=!0);return s}function Ke(e,s,r){const o=Array.isArray(e);if(D(e)||o)for(const a in e)Array.isArray(e[a])||D(e[a])&&!ze(e[a])?A(s)||ne(r[a])?r[a]=Array.isArray(e[a])?oe(e[a],[]):{...oe(e[a])}:Ke(e[a],k(s)?{}:s[a],r[a]):r[a]=!J(e[a],s[a]);return r}var me=(e,s)=>Ke(e,s,oe(s));const Be={value:!1,isValid:!1},Ne={value:!0,isValid:!0};var Ge=e=>{if(Array.isArray(e)){if(e.length>1){const s=e.filter(r=>r&&r.checked&&!r.disabled).map(r=>r.value);return{value:s,isValid:!!s.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!A(e[0].attributes.value)?A(e[0].value)||e[0].value===""?Ne:{value:e[0].value,isValid:!0}:Ne:Be}return Be},Je=(e,{valueAsNumber:s,valueAsDate:r,setValueAs:o})=>A(e)?e:s?e===""||k(e)?NaN:+e:r&&N(e)?new Date(e):o?o(e):e;const Pe={isValid:!1,value:null};var Qe=e=>Array.isArray(e)?e.reduce((s,r)=>r&&r.checked&&!r.disabled?{isValid:!0,value:r.value}:s,Pe):Pe;function Fe(e){const s=e.ref;if(!(e.refs?e.refs.every(r=>r.disabled):s.disabled))return De(s)?s.files:Se(s)?Qe(e.refs).value:je(s)?[...s.selectedOptions].map(({value:r})=>r):ee(s)?Ge(e.refs).value:Je(A(s.value)?e.ref.value:s.value,e)}var dr=(e,s,r,o)=>{const a={};for(const u of e){const g=f(s,u);g&&p(a,u,g._f)}return{criteriaMode:r,names:[...e],fields:a,shouldUseNativeValidation:o}},le=e=>e instanceof RegExp,Z=e=>A(e)?void 0:le(e)?e.source:D(e)?le(e.value)?e.value.source:e.value:e,yr=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function Ie(e,s,r){const o=f(e,r);if(o||ke(r))return{error:o,name:r};const a=r.split(".");for(;a.length;){const u=a.join("."),g=f(s,u),b=f(e,u);if(g&&!Array.isArray(g)&&r!==u)return{name:r};if(b&&b.type)return{name:u,error:b};a.pop()}return{name:r}}var gr=(e,s,r,o,a)=>a.isOnAll?!1:!r&&a.isOnTouch?!(s||e):(r?o.isOnBlur:a.isOnBlur)?!e:(r?o.isOnChange:a.isOnChange)?e:!0,hr=(e,s)=>!ue(f(e,s)).length&&S(e,s),ie=e=>N(e)||z.isValidElement(e);function qe(e,s,r="validate"){if(ie(e)||Array.isArray(e)&&e.every(ie)||ae(e)&&!e)return{type:r,message:ie(e)?e:"",ref:s}}var K=e=>D(e)&&!le(e)?e:{value:e,message:""},We=async(e,s,r,o)=>{const{ref:a,refs:u,required:g,maxLength:b,minLength:F,min:E,max:U,pattern:w,validate:h,name:T,valueAsNumber:fe,mount:re,disabled:de}=e._f;if(!re||de)return{};const L=u?u[0]:a,P=v=>{o&&L.reportValidity&&(L.setCustomValidity(ae(v)?"":v||" "),L.reportValidity())},V={},Q=Se(a),X=ee(a),ye=Q||X,B=(fe||De(a))&&!a.value||s===""||Array.isArray(s)&&!s.length,$=ur.bind(null,T,r,V),W=(v,x,_,O=I.maxLength,C=I.minLength)=>{const Y=v?x:_;V[T]={type:v?O:C,message:Y,ref:a,...$(v?O:C,Y)}};if(g&&(!ye&&(B||k(s))||ae(s)&&!s||X&&!Ge(u).isValid||Q&&!Qe(u).isValid)){const{value:v,message:x}=ie(g)?{value:!!g,message:g}:K(g);if(v&&(V[T]={type:I.required,message:x,ref:L,...$(I.required,x)},!r))return P(x),V}if(!B&&(!k(E)||!k(U))){let v,x;const _=K(U),O=K(E);if(!k(s)&&!isNaN(s)){const C=a.valueAsNumber||+s;k(_.value)||(v=C>_.value),k(O.value)||(x=C<O.value)}else{const C=a.valueAsDate||new Date(s);N(_.value)&&(v=C>new Date(_.value)),N(O.value)&&(x=C<new Date(O.value))}if((v||x)&&(W(!!v,_.message,O.message,I.max,I.min),!r))return P(V[T].message),V}if((b||F)&&!B&&N(s)){const v=K(b),x=K(F),_=!k(v.value)&&s.length>v.value,O=!k(x.value)&&s.length<x.value;if((_||O)&&(W(_,v.message,x.message),!r))return P(V[T].message),V}if(w&&!B&&N(s)){const{value:v,message:x}=K(w);if(le(v)&&!s.match(v)&&(V[T]={type:I.pattern,message:x,ref:a,...$(I.pattern,x)},!r))return P(x),V}if(h){if(ce(h)){const v=await h(s),x=qe(v,L);if(x&&(V[T]={...x,...$(I.validate,x.message)},!r))return P(x.message),V}else if(D(h)){let v={};for(const x in h){if(!R(v)&&!r)break;const _=qe(await h[x](s),L,x);_&&(v={..._,...$(x,_.message)},P(_.message),r&&(V[T]=v))}if(!R(v)&&(V[T]={ref:L,...v},!r))return V}}return P(!0),V};const br={mode:M.onSubmit,reValidateMode:M.onChange,shouldFocusError:!0};function xr(e={}){let s={...br,...e},r={isDirty:!1,isValidating:!1,dirtyFields:{},isSubmitted:!1,submitCount:0,touchedFields:{},isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,errors:{}},o={},a=j(s.defaultValues)||{},u=s.shouldUnregister?{}:j(a),g={action:!1,mount:!1,watch:!1},b={mount:new Set,unMount:new Set,array:new Set,watch:new Set},F,E=0,U={};const w={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},h={watch:we(),array:we(),state:we()},T=Ue(s.mode),fe=Ue(s.reValidateMode),re=s.criteriaMode===M.all,de=t=>i=>{clearTimeout(E),E=window.setTimeout(t,i)},L=async t=>{let i=!1;return w.isValid&&(i=s.resolver?R((await B()).errors):await W(o,!0),!t&&i!==r.isValid&&(r.isValid=i,h.state.next({isValid:i}))),i},P=(t,i=[],n,c,d=!0,l=!0)=>{if(c&&n){if(g.action=!0,l&&Array.isArray(f(o,t))){const y=n(f(o,t),c.argA,c.argB);d&&p(o,t,y)}if(w.errors&&l&&Array.isArray(f(r.errors,t))){const y=n(f(r.errors,t),c.argA,c.argB);d&&p(r.errors,t,y),hr(r.errors,t)}if(w.touchedFields&&l&&Array.isArray(f(r.touchedFields,t))){const y=n(f(r.touchedFields,t),c.argA,c.argB);d&&p(r.touchedFields,t,y)}w.dirtyFields&&(r.dirtyFields=me(a,u)),h.state.next({isDirty:x(t,i),dirtyFields:r.dirtyFields,errors:r.errors,isValid:r.isValid})}else p(u,t,i)},V=(t,i)=>{p(r.errors,t,i),h.state.next({errors:r.errors})},Q=(t,i,n,c)=>{const d=f(o,t);if(d){const l=f(u,t,A(n)?f(a,t):n);A(l)||c&&c.defaultChecked||i?p(u,t,i?l:Fe(d._f)):C(t,l),g.mount&&L()}},X=(t,i,n,c,d)=>{let l=!1;const y={name:t},m=f(r.touchedFields,t);if(w.isDirty){const H=r.isDirty;r.isDirty=y.isDirty=x(),l=H!==y.isDirty}if(w.dirtyFields&&(!n||c)){const H=f(r.dirtyFields,t);J(f(a,t),i)?S(r.dirtyFields,t):p(r.dirtyFields,t,!0),y.dirtyFields=r.dirtyFields,l=l||H!==f(r.dirtyFields,t)}return n&&!m&&(p(r.touchedFields,t,n),y.touchedFields=r.touchedFields,l=l||w.touchedFields&&m!==n),l&&d&&h.state.next(y),l?y:{}},ye=async(t,i,n,c)=>{const d=f(r.errors,t),l=w.isValid&&r.isValid!==i;if(e.delayError&&n?(F=de(()=>V(t,n)),F(e.delayError)):(clearTimeout(E),F=null,n?p(r.errors,t,n):S(r.errors,t)),(n?!J(d,n):d)||!R(c)||l){const y={...c,...l?{isValid:i}:{},errors:r.errors,name:t};r={...r,...y},h.state.next(y)}U[t]--,w.isValidating&&!Object.values(U).some(y=>y)&&(h.state.next({isValidating:!1}),U={})},B=async t=>s.resolver?await s.resolver({...u},s.context,dr(t||b.mount,o,s.criteriaMode,s.shouldUseNativeValidation)):{},$=async t=>{const{errors:i}=await B();if(t)for(const n of t){const c=f(i,n);c?p(r.errors,n,c):S(r.errors,n)}else r.errors=i;return i},W=async(t,i,n={valid:!0})=>{for(const c in t){const d=t[c];if(d){const{_f:l,...y}=d;if(l){const m=await We(d,f(u,l.name),re,s.shouldUseNativeValidation);if(m[l.name]&&(n.valid=!1,i))break;i||(m[l.name]?p(r.errors,l.name,m[l.name]):S(r.errors,l.name))}y&&await W(y,i,n)}}return n.valid},v=()=>{for(const t of b.unMount){const i=f(o,t);i&&(i._f.refs?i._f.refs.every(n=>!pe(n)):!pe(i._f.ref))&&he(t)}b.unMount=new Set},x=(t,i)=>(t&&i&&p(u,t,i),!J(Le(),a)),_=(t,i,n)=>{const c={...g.mount?u:A(i)?a:N(t)?{[t]:i}:i};return lr(t,b,c,n)},O=t=>ue(f(g.mount?u:a,t,e.shouldUnregister?f(a,t,[]):[])),C=(t,i,n={})=>{const c=f(o,t);let d=i;if(c){const l=c._f;l&&(!l.disabled&&p(u,t,Je(i,l)),d=Ae&&Ve(l.ref)&&k(i)?"":i,je(l.ref)?[...l.ref.options].forEach(y=>y.selected=d.includes(y.value)):l.refs?ee(l.ref)?l.refs.length>1?l.refs.forEach(y=>!y.disabled&&(y.checked=Array.isArray(d)?!!d.find(m=>m===y.value):d===y.value)):l.refs[0]&&(l.refs[0].checked=!!d):l.refs.forEach(y=>y.checked=y.value===d):De(l.ref)?l.ref.value="":(l.ref.value=d,l.ref.type||h.watch.next({name:t})))}(n.shouldDirty||n.shouldTouch)&&X(t,d,n.shouldTouch,n.shouldDirty,!0),n.shouldValidate&&ge(t)},Y=(t,i,n)=>{for(const c in i){const d=i[c],l=`${t}.${c}`,y=f(o,l);(b.array.has(t)||!ne(d)||y&&!y._f)&&!G(d)?Y(l,d,n):C(l,d,n)}},te=(t,i,n={})=>{const c=f(o,t),d=b.array.has(t),l=j(i);p(u,t,l),d?(h.array.next({name:t,values:u}),(w.isDirty||w.dirtyFields)&&n.shouldDirty&&(r.dirtyFields=me(a,u),h.state.next({name:t,dirtyFields:r.dirtyFields,isDirty:x(t,l)}))):c&&!c._f&&!k(l)?Y(t,l,n):C(t,l,n),Me(t,b)&&h.state.next({}),h.watch.next({name:t})},Ee=async t=>{const i=t.target;let n=i.name;const c=f(o,n);if(c){let d,l;const y=i.type?Fe(c._f):tr(t),m=t.type===Te.BLUR||t.type===Te.FOCUS_OUT,H=!yr(c._f)&&!s.resolver&&!f(r.errors,n)&&!c._f.deps||gr(m,f(r.touchedFields,n),r.isSubmitted,fe,T),se=Me(n,b,m);p(u,n,y),m?(c._f.onBlur&&c._f.onBlur(t),F&&F(0)):c._f.onChange&&c._f.onChange(t);const xe=X(n,y,m,!1),er=!R(xe)||se;if(!m&&h.watch.next({name:n,type:t.type}),H)return er&&h.state.next({name:n,...se?{}:xe});if(!m&&se&&h.state.next({}),U[n]=(U[n],1),h.state.next({isValidating:!0}),s.resolver){const{errors:Ce}=await B([n]),rr=Ie(r.errors,o,n),Re=Ie(Ce,o,rr.name||n);d=Re.error,n=Re.name,l=R(Ce)}else d=(await We(c,f(u,n),re,s.shouldUseNativeValidation))[n],l=await L(!0);c._f.deps&&ge(c._f.deps),ye(n,l,d,xe)}},ge=async(t,i={})=>{let n,c;const d=ve(t);if(h.state.next({isValidating:!0}),s.resolver){const l=await $(A(t)?t:d);n=R(l),c=t?!d.some(y=>f(l,y)):n}else t?(c=(await Promise.all(d.map(async l=>{const y=f(o,l);return await W(y&&y._f?{[l]:y}:y)}))).every(Boolean),!(!c&&!r.isValid)&&L()):c=n=await W(o);return h.state.next({...!N(t)||w.isValid&&n!==r.isValid?{}:{name:t},...s.resolver?{isValid:n}:{},errors:r.errors,isValidating:!1}),i.shouldFocus&&!c&&_e(o,l=>f(r.errors,l),t?d:b.mount),c},Le=t=>{const i={...a,...g.mount?u:{}};return A(t)?i:N(t)?f(i,t):t.map(n=>f(i,n))},Oe=(t,i)=>({invalid:!!f((i||r).errors,t),isDirty:!!f((i||r).dirtyFields,t),isTouched:!!f((i||r).touchedFields,t),error:f((i||r).errors,t)}),Xe=t=>{t?ve(t).forEach(i=>S(r.errors,i)):r.errors={},h.state.next({errors:r.errors})},Ye=(t,i,n)=>{const c=(f(o,t,{_f:{}})._f||{}).ref;p(r.errors,t,{...i,ref:c}),h.state.next({name:t,errors:r.errors,isValid:!1}),n&&n.shouldFocus&&c&&c.focus&&c.focus()},Ze=(t,i)=>ce(t)?h.watch.subscribe({next:n=>t(_(void 0,i),n)}):_(t,i,!0),he=(t,i={})=>{for(const n of t?ve(t):b.mount)b.mount.delete(n),b.array.delete(n),f(o,n)&&(i.keepValue||(S(o,n),S(u,n)),!i.keepError&&S(r.errors,n),!i.keepDirty&&S(r.dirtyFields,n),!i.keepTouched&&S(r.touchedFields,n),!s.shouldUnregister&&!i.keepDefaultValue&&S(a,n));h.watch.next({}),h.state.next({...r,...i.keepDirty?{isDirty:x()}:{}}),!i.keepIsValid&&L()},be=(t,i={})=>{let n=f(o,t);const c=ae(i.disabled);return p(o,t,{_f:{...n&&n._f?n._f:{ref:{name:t}},name:t,mount:!0,...i}}),b.mount.add(t),n?c&&p(u,t,i.disabled?void 0:f(u,t,Fe(n._f))):Q(t,!0,i.value),{...c?{disabled:i.disabled}:{},...s.shouldUseNativeValidation?{required:!!i.required,min:Z(i.min),max:Z(i.max),minLength:Z(i.minLength),maxLength:Z(i.maxLength),pattern:Z(i.pattern)}:{},name:t,onChange:Ee,onBlur:Ee,ref:d=>{if(d){be(t,i),n=f(o,t);const l=A(d.value)&&d.querySelectorAll&&d.querySelectorAll("input,select,textarea")[0]||d,y=fr(l),m=n._f.refs||[];if(y?m.find(H=>H===l):l===n._f.ref)return;p(o,t,{_f:{...n._f,...y?{refs:[...m.filter(pe),l,...Array.isArray(f(a,t))?[{}]:[]],ref:{type:l.type,name:t}}:{ref:l}}}),Q(t,!1,void 0,l)}else n=f(o,t,{}),n._f&&(n._f.mount=!1),(s.shouldUnregister||i.shouldUnregister)&&!(ir(b.array,t)&&g.action)&&b.unMount.add(t)}}};return{control:{register:be,unregister:he,getFieldState:Oe,_executeSchema:B,_getWatch:_,_getDirty:x,_updateValid:L,_removeUnmounted:v,_updateFieldArray:P,_getFieldArray:O,_subjects:h,_proxyFormState:w,get _fields(){return o},get _formValues(){return u},get _stateFlags(){return g},set _stateFlags(t){g=t},get _defaultValues(){return a},get _names(){return b},set _names(t){b=t},get _formState(){return r},set _formState(t){r=t},get _options(){return s},set _options(t){s={...s,...t}}},trigger:ge,register:be,handleSubmit:(t,i)=>async n=>{n&&(n.preventDefault&&n.preventDefault(),n.persist&&n.persist());let c=!0,d=j(u);h.state.next({isSubmitting:!0});try{if(s.resolver){const{errors:l,values:y}=await B();r.errors=l,d=y}else await W(o);R(r.errors)?(h.state.next({errors:{},isSubmitting:!0}),await t(d,n)):(i&&await i({...r.errors},n),s.shouldFocusError&&_e(o,l=>f(r.errors,l),b.mount))}catch(l){throw c=!1,l}finally{r.isSubmitted=!0,h.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:R(r.errors)&&c,submitCount:r.submitCount+1,errors:r.errors})}},watch:Ze,setValue:te,getValues:Le,reset:(t,i={})=>{const n=t||a,c=j(n),d=t&&!R(t)?c:a;if(i.keepDefaultValues||(a=n),!i.keepValues){if(i.keepDirtyValues)for(const l of b.mount)f(r.dirtyFields,l)?p(d,l,f(u,l)):te(l,f(d,l));else{if(Ae&&A(t))for(const l of b.mount){const y=f(o,l);if(y&&y._f){const m=Array.isArray(y._f.refs)?y._f.refs[0]:y._f.ref;try{Ve(m)&&m.closest("form").reset();break}catch{}}}o={}}u=e.shouldUnregister?i.keepDefaultValues?j(a):{}:c,h.array.next({values:d}),h.watch.next({values:d})}b={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},g.mount=!w.isValid||!!i.keepIsValid,g.watch=!!e.shouldUnregister,h.state.next({submitCount:i.keepSubmitCount?r.submitCount:0,isDirty:i.keepDirty||i.keepDirtyValues?r.isDirty:!!(i.keepDefaultValues&&!J(t,a)),isSubmitted:i.keepIsSubmitted?r.isSubmitted:!1,dirtyFields:i.keepDirty||i.keepDirtyValues?r.dirtyFields:i.keepDefaultValues&&t?me(a,t):{},touchedFields:i.keepTouched?r.touchedFields:{},errors:i.keepErrors?r.errors:{},isSubmitting:!1,isSubmitSuccessful:!1})},resetField:(t,i={})=>{f(o,t)&&(A(i.defaultValue)?te(t,f(a,t)):(te(t,i.defaultValue),p(a,t,i.defaultValue)),i.keepTouched||S(r.touchedFields,t),i.keepDirty||(S(r.dirtyFields,t),r.isDirty=i.defaultValue?x(t,f(a,t)):x()),i.keepError||(S(r.errors,t),w.isValid&&L()),h.state.next({...r}))},clearErrors:Xe,unregister:he,setError:Ye,setFocus:(t,i={})=>{const n=f(o,t)._f,c=n.refs?n.refs[0]:n.ref;c.focus(),i.shouldSelect&&c.select()},getFieldState:Oe}}function _r(e={}){const s=z.useRef(),[r,o]=z.useState({isDirty:!1,isValidating:!1,dirtyFields:{},isSubmitted:!1,submitCount:0,touchedFields:{},isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,errors:{}});s.current?s.current.control._options=e:s.current={...xr(e),formState:r};const a=s.current.control,u=z.useCallback(g=>{ar(g,a._proxyFormState,!0)&&(a._formState={...a._formState,...g},o({...a._formState}))},[a]);return or({subject:a._subjects.state,callback:u}),z.useEffect(()=>{a._stateFlags.mount||(a._proxyFormState.isValid&&a._updateValid(),a._stateFlags.mount=!0),a._stateFlags.watch&&(a._stateFlags.watch=!1,a._subjects.state.next({})),a._removeUnmounted()}),s.current.formState=nr(r,a._proxyFormState),s.current}const Ar=q.section`
  padding-top: 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`,Vr=q.form`
  margin: 0 auto;
  width: 100%;
  max-width: 414px;
  padding: 1.3rem;
  display: flex;
  gap: 15px;
  flex-direction: column;
  position: relative;
`,kr=q.input`
  margin: 0 auto;
  width: 100%;
  max-width: 414px;
  padding: 11px 13px;
  background: #f9f9fa;
  color: #f03d4e;
  margin-bottom: 0.9rem;
  border-radius: 4px;
  box-sizing: border-box;
  outline: 0;
  border: 1px solid rgba(245, 245, 245, 0.7);
  font-size: 14px;
  transition: all 0.3s ease-out;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.1), 0 1px 1px rgba(0, 0, 0, 0.1);
  :focus,
  :hover {
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.15), 0 1px 5px rgba(0, 0, 0, 0.1);
  }
`,Dr=q.i`
  color: #f03d4e;
  position: absolute;
  top: 20%;
  right: -7%;
  :hover {
    color: #00fcb6;
    cursor: pointer;
  }
`,Sr=q.span`
  position: relative;
  display: flex;
`,Er=q.button`
  margin: 0 auto;
  max-width: 414px;
  width: 100%;
  padding: 11px 13px;
  color: rgb(253, 249, 243);
  font-weight: 600;
  text-transform: uppercase;
  background: #fa922a;
  border: none;
  border-radius: 3px;
  outline: 0;
  cursor: pointer;
  /* margin-top: 0.2rem; */
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-out;
  :hover {
    background: #b56d24;
  }
`,Lr=q.select`
  margin: 0 auto;
  width: 100%;
  box-sizing: border-box;
  /* min-width: 414px; */
  padding: 11px 13px;
  padding-right: 30px;
  background: #f9f9fa;
  color: grey;
  margin-bottom: 0.9rem;
  border-radius: 4px;
  outline: 1;
  border: 1px solid rgba(245, 245, 245, 0.7);
  font-size: 14px;
  transition: all 0.3s ease-out;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.1), 0 1px 1px rgba(0, 0, 0, 0.1);
`,Or=q.input`
  margin: 0 auto;
  max-width: 100%;
  width: 100%;
  padding: 11px 13px;
  color: rgb(253, 249, 243);
  font-weight: 600;
  text-transform: uppercase;
  background: #f03d4e;
  border: none;
  border-radius: 3px;
  outline: 0;
  cursor: pointer;
  margin-top: 0.6rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-out;
  :hover {
    background: rgb(200, 50, 70);
  }
`;q.p`
  background-color: grey;
  color: white;
`;export{Er as B,Dr as E,Ar as F,kr as I,Sr as P,Or as S,Vr as a,Lr as b,_r as u};
