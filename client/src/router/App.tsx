import React, { Suspense, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { onDeauth, onReload, reAuthUser } from "../components/Login/authSlice";

import EmailVerificationPage from "../pages/EmailVerificationPage";
import NotFoundPage from "../pages/NotFoundPage";
import { onLogout } from "../api/loginChecker";

const LoginPage = React.lazy(() => import("../pages/LoginPage"));
const MainPage = React.lazy(() => import("../pages/MainPage"));
const ApplicantPage = React.lazy(() => import("../pages/ApplicantPage"));
const PoolPage = React.lazy(() => import("../pages/PoolPage"));
const SignupPage = React.lazy(() => import("../pages/SignupPage"));
const SearchPage = React.lazy(() => import("../pages/SearchPage"));
const UploadPage = React.lazy(() => import("../pages/UploadPage"));
const HeaderLayout = React.lazy(
  () => import("../components/Header/HeaderLayout")
);

function App() {
  const isLogin = useAppSelector((state) => state.auth.user?.isLogin);
  const dispatch = useAppDispatch();

  // TODO: 창 나갈 시 로그아웃 기능?
  const onBeforeCloseWindow = (e: BeforeUnloadEvent) => {
    e.preventDefault();
    if (sessionStorage.getItem("reloaded") != "") {
      console.log("page was reloaded");
    } else {
      onLogout();
      dispatch(onDeauth());

      console.log("page closed");
    }
    e.returnValue = "창을 닫으시겠습니까?";
  };

  useEffect(() => {
    window.addEventListener("beforeunload", onBeforeCloseWindow);

    return () => {
      window.removeEventListener("beforeunload", onBeforeCloseWindow);
    };
  }, []);

  useEffect(() => {
    if (isLogin) {
      sessionStorage.setItem("reloaded", "yes");
      dispatch(reAuthUser());
    } else {
      sessionStorage.setItem("reloaded", "");
    }
  }, []);

  return (
    <Router>
      {/* TODO: 로딩 폴백 UI <스켈레론 뷰> 추가하기 */}
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
            <Route path="/search" element={<SearchPage />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
