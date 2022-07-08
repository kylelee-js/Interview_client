import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NotFoundPage from "../pages/NotFoundPage";

const LoginPage = React.lazy(() => import("../pages/LoginPage"));
const MainPage = React.lazy(() => import("../pages/MainPage"));
const ApplicantPage = React.lazy(() => import("../pages/ApplicantPage"));
const PoolPage = React.lazy(() => import("../pages/PoolPage"));
const SignupPage = React.lazy(() => import("../pages/SignupPage"));
const UploadPage = React.lazy(() => import("../pages/UploadPage"));

// TODO: user 인증 상태 받아오기

// let user = false;
let user = true;

function App() {
  return (
    <Router>
      {/* TODO: 로딩 폴백 UI */}
      <Suspense fallback={<>loading fallback suspense</>}>
        <Routes>
          <Route path="*" element={<NotFoundPage />} />
          {/* FIXME: uri에 /login 넣어줘야할까? */}
          <Route path="/" element={user ? <MainPage /> : <LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/applicant" element={<ApplicantPage />} />
          <Route path="/pool" element={<PoolPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/upload" element={<UploadPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
