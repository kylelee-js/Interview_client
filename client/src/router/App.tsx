import React, { Suspense, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { reAuthUser } from "../components/Login/authSlice";
import EmailVerificationPage from "../pages/EmailVerificationPage";

import NotFoundPage from "../pages/NotFoundPage";

import { useAppDispatch, useAppSelector } from "../store";

const LoginPage = React.lazy(() => import("../pages/LoginPage"));
const MainPage = React.lazy(() => import("../pages/MainPage"));
const ApplicantPage = React.lazy(() => import("../pages/ApplicantPage"));
const PoolPage = React.lazy(() => import("../pages/PoolPage"));
const SignupPage = React.lazy(() => import("../pages/SignupPage"));
const UploadPage = React.lazy(() => import("../pages/UploadPage"));
const HeaderLayout = React.lazy(
  () => import("../components/Header/HeaderLayout")
);

function App() {
  const isLogin = useAppSelector((state) => state.auth.user?.isLogin);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isLogin) {
      dispatch(reAuthUser());
    }
  }, []);

  return (
    <Router>
      {/* TODO: 로딩 폴백 UI 추가하기 */}
      <Suspense fallback={<>loading fallback suspense</>}>
        <Routes>
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/verification" element={<EmailVerificationPage />} />
          <Route element={isLogin ? <HeaderLayout /> : <LoginPage />}>
            <Route path="/" element={<MainPage />} />
            <Route path="/applicant/:applicantId" element={<ApplicantPage />} />
            <Route path="/pool" element={<PoolPage />} />
            <Route path="/upload" element={<UploadPage />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
