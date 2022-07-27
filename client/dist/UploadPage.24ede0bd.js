import{u as f}from"./index.esm.e7e76d5a.js";import{ak as y,u as D,b as F,d as u,F as b,j as a,c as E,I as l,at as v,S as A}from"./index--b7ec3016.js";const x=async o=>{console.log(o);try{return(await y.post("/applicant/register/",o,{headers:{"Content-Type":"multipart/form-data",Accept:"application/json"}})).data}catch(i){console.log(i)}};function P(){var s,p,c,B,d;let o=D(C=>{var t;return(t=C.auth.user)==null?void 0:t.isLogin});console.log(o);const i=D(C=>C.auth.access);console.log(i);const h=F(),{register:r,handleSubmit:m,setError:n,formState:{errors:e},watch:j}=f(),g=async C=>{if(console.log(C),C.filePath[0].type!="application/pdf"){n("filePath",{type:"filetype",message:"PDF \uD30C\uC77C\uB9CC \uC81C\uCD9C \uAC00\uB2A5\uD569\uB2C8\uB2E4."});return}const t=new FormData;if(t.append("applicantName",C.applicantName),t.append("birth",C.birth),t.append("department",C.department),t.append("job",C.job),t.append("filePath",C.filePath[0]),await x(t))h("/pool");else{n("filePath",{type:"validate",message:"\uC5C5\uB85C\uB4DC \uACFC\uC815\uC5D0\uC11C \uBB38\uC81C\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4. \uC0C8\uB85C\uACE0\uCE68\uD558\uAC70\uB098 \uB2E4\uC2DC \uC2DC\uB3C4\uD574\uC8FC\uC138\uC694"});return}};return console.log(e),u(b,{children:a(E,{onSubmit:m(g),children:[u(l,{type:"text",placeholder:"\uC9C0\uC6D0\uC790 \uC774\uB984\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694",...r("applicantName",{required:"\uD544\uC218 \uC785\uB825 \uCE78\uC785\uB2C8\uB2E4.",maxLength:100})}),e.applicantName&&a("div",{style:{color:"red"},children:[" ",(s=e.applicantName)==null?void 0:s.message]}),u(l,{type:"text",placeholder:"\uC0DD\uB144\uC6D4\uC77C(YYMMDD)\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694 - 6\uC790\uB9AC",...r("birth",{required:"\uD544\uC218 \uC785\uB825 \uCE78\uC785\uB2C8\uB2E4.",maxLength:100,pattern:{value:/^(?:[0-9]{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[1,2][0-9]|3[0,1]))$/i,message:"YYMMDD \uC591\uC2DD\uC774 \uC544\uB2D9\uB2C8\uB2E4."}})}),e.birth&&a("div",{style:{color:"red"},children:[" ",(p=e.birth)==null?void 0:p.message]}),a(v,{...r("department",{required:"\uD544\uC218 \uC785\uB825 \uCE78\uC785\uB2C8\uB2E4."}),children:[u("option",{style:{display:"none"},value:"",disabled:!0,selected:!0,children:"\uC9C1\uAD70\uC744 \uC120\uD0DD\uD574\uC8FC\uC138\uC694."}),u("option",{value:"\uAC1C\uBC1C",children:"\uAC1C\uBC1C"}),u("option",{value:"\uACBD\uC601\uC9C0\uC6D0",children:"\uACBD\uC601\uC9C0\uC6D0"}),u("option",{value:"\uB9C8\uCF00\uD305",children:"\uB9C8\uCF00\uD305"}),u("option",{value:"\uB514\uC790\uC778",children:"\uB514\uC790\uC778"})]}),e.department&&a("div",{style:{color:"red"},children:[" ",(c=e.department)==null?void 0:c.message]}),u(l,{type:"text",placeholder:"\uC9C0\uC6D0\uC790 \uC9C1\uBB34\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694",...r("job",{required:"\uD544\uC218 \uC785\uB825 \uCE78\uC785\uB2C8\uB2E4.",maxLength:100})}),e.job&&a("div",{style:{color:"red"},children:[" ",(B=e.job)==null?void 0:B.message]}),u("input",{...r("filePath",{required:"\uD544\uC218 \uC785\uB825 \uCE78\uC785\uB2C8\uB2E4."}),type:"file",id:"applicantFile",accept:"pdf/*"}),e.filePath&&a("div",{style:{color:"red"},children:[" ",(d=e.filePath)==null?void 0:d.message]}),u(A,{type:"submit",value:"\uC9C0\uC6D0\uC790 \uB4F1\uB85D"})]})})}function L(){return u(P,{})}export{L as default};
