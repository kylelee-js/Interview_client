import React, { Suspense, useState, lazy } from "react";
import { useAppDispatch, useAppSelector } from "../store";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { onAfterLogin, reAuthUser } from "../components/Login/authSlice";

import EmailVerificationPage from "../pages/EmailVerificationPage";
import NotFoundPage from "../pages/NotFoundPage";
import useInterval from "../hooks/useInterval";
import useDidMountEffect from "../hooks/useDidMountEffect";
import SocketDocsPage from "../pages/SocketDocsPage";

const LoginPage = lazy(() => import("../pages/LoginPage"));
const MainPage = lazy(() => import("../pages/MainPage"));
const ApplicantPage = lazy(() => import("../pages/ApplicantPage"));
const PoolPage = lazy(() => import("../pages/PoolPage"));
const SignupPage = lazy(() => import("../pages/SignupPage"));
const SearchPage = lazy(() => import("../pages/SearchPage"));
const UploadPage = lazy(() => import("../pages/UploadPage"));
const HeaderLayout = lazy(() => import("../components/Header/HeaderLayout"));
const CanvasPage = lazy(() => import("../pages/CanvasPage"));

function App() {
  const isLogin = useAppSelector((state) => state.auth.user?.isLogin);
  const justLogin = useAppSelector((state) => state.auth.user?.justLogin);
  const dispatch = useAppDispatch();
  const [delay, setDelay] = useState<number | null>(4 * 60 * 1000);

  useInterval(() => {
    if (isLogin) {
      dispatch(reAuthUser());
    }
  }, delay);

  // 최초 로그인시에는 작동하지 않지만 새로고침시에는 작동해야한다
  useDidMountEffect(() => {
    if (!justLogin) {
      dispatch(reAuthUser());
    } else {
      console.log("login success");
      dispatch(onAfterLogin());
    }
  }, [isLogin]);

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
            <Route path="/socket" element={<SocketDocsPage />} />
            <Route path="/canvas" element={<CanvasPage />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
