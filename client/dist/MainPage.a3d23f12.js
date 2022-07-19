import{d as s,e as u,u as a,b as o,f as e,j as c,F as r,L as i,s as l}from"./index--d9e8ec65.js";import{K as p}from"./KanBanContainer.fcdf6485.js";import"./jsx-runtime_commonjs-proxy.5f93fea9.js";const g=async()=>{try{return await s.post("/user/logout/")}catch(t){console.log(t)}};function d(){u(n=>n.auth.access);const t=a();return o("button",{onClick:n=>{t(e()),console.log("logout"),g()},children:"\uB85C\uADF8\uC544\uC6C3"})}const C=l.div`
  padding: 5px;
  display: flex;
  gap: 20px;
  background-color: whitesmoke;
`;function h(){return c(r,{children:[o(d,{}),o(C,{children:o(i,{to:"/pool",children:"\uC778\uC7AC \uD480 \uBCF4\uB7EC\uAC00\uAE30"})}),o(p,{})]})}function A(){return o(h,{})}export{A as default};
