import React, { Suspense } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NotFoundPage from "../pages/NotFoundPage";
import { useAppSelector } from "../store";

const LoginPage = React.lazy(() => import("../pages/LoginPage"));
const MainPage = React.lazy(() => import("../pages/MainPage"));
const ApplicantPage = React.lazy(() => import("../pages/ApplicantPage"));
const PoolPage = React.lazy(() => import("../pages/PoolPage"));
const SignupPage = React.lazy(() => import("../pages/SignupPage"));
const UploadPage = React.lazy(() => import("../pages/UploadPage"));

function App() {
  let isLogin = useAppSelector((state) => state.auth.authenticated);
  return (
    <Router>
      {/* TODO: 로딩 폴백 UI */}
      <Suspense fallback={<>loading fallback suspense</>}>
        <Routes>
          <Route path="*" element={<NotFoundPage />} />
          {/* FIXME: uri에 /login 넣어줘야할까? */}
          <Route path="/" element={isLogin ? <MainPage /> : <LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          {/* TODO: PrivitaeRoute ; 모든 페이지에 들어갈 때마다 authenticated를 확인! -> props로 넘겨? */}
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
