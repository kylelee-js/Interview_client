import{d as u,e as s,u as a,b as o,f as e,j as r,F as i,L as c,s as l}from"./index.b7c720e0.js";import{K as p}from"./KanBanContainer.22612e07.js";import"./Modal.ee0f44c2.js";const g=async()=>{try{return await u.post("/user/logout/")}catch(t){console.log(t)}};function d(){s(n=>n.auth.token);const t=a();return o("button",{onClick:n=>{t(e()),console.log("logout"),g()},children:"\uB85C\uADF8\uC544\uC6C3"})}const C=l.div`
  padding: 5px;
  display: flex;
  gap: 20px;
  background-color: whitesmoke;
`;function h(){return r(i,{children:[o(d,{}),o(C,{children:o(c,{to:"/pool",children:"\uC778\uC7AC \uD480 \uBCF4\uB7EC\uAC00\uAE30"})}),o(p,{})]})}function x(){return o(h,{})}export{x as default};
