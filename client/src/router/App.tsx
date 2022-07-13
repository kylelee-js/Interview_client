import React, { Suspense, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { onSilentRefresh } from "../api/loginChecker";
import { onAuth } from "../components/Login/authSlice";

import NotFoundPage from "../pages/NotFoundPage";
import { useAppDispatch, useAppSelector } from "../store";

const LoginPage = React.lazy(() => import("../pages/LoginPage"));
const MainPage = React.lazy(() => import("../pages/MainPage"));
const ApplicantPage = React.lazy(() => import("../pages/ApplicantPage"));
const PoolPage = React.lazy(() => import("../pages/PoolPage"));
const SignupPage = React.lazy(() => import("../pages/SignupPage"));
const UploadPage = React.lazy(() => import("../pages/UploadPage"));

type RouteType = {
  isLogin: boolean;
  outlet: JSX.Element;
};

// PrivateRoute 구현
const ProtectedRoute = ({ isLogin = false, outlet }: RouteType) => {
  if (!isLogin) {
    return <Navigate to="/login" replace />;
  }
  return outlet;
};

function App() {
  let isLogin = useAppSelector((state) => state.auth.authenticated);
  const dispatch = useAppDispatch();

  // FIXME: useLayoutEffect를 대신 사용하나?
  useEffect(() => {
    if (isLogin) {
      const reAuth = async () => {
        const res = await onSilentRefresh();
        dispatch(onAuth(res));
      };
      reAuth();
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
          <Route path="/" element={isLogin ? <MainPage /> : <LoginPage />} />
          <Route
            path="/applicant"
            element={isLogin ? <ApplicantPage /> : <LoginPage />}
          />
          <Route
            path="/pool"
            element={isLogin ? <PoolPage /> : <LoginPage />}
          />
          <Route
            path="/upload"
            element={isLogin ? <UploadPage /> : <LoginPage />}
          />

          {/* FIXME: 페이지 리로드시 isLogin 업데이트 보다 먼저 렌더링이 됨 */}
          {/* <Route
            path="/"
            element={<ProtectedRoute isLogin={isLogin} outlet={<MainPage />} />}
          />
          <Route
            path="/applicant"
            element={
              <ProtectedRoute isLogin={isLogin} outlet={<ApplicantPage />} />
            }
          />
          <Route
            path="/pool"
            element={<ProtectedRoute isLogin={isLogin} outlet={<PoolPage />} />}
          />
          <Route
            path="/upload"
            element={
              <ProtectedRoute isLogin={isLogin} outlet={<UploadPage />} />
            }
          /> */}
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
