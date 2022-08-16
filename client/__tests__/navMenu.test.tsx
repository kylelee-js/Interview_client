import React, { Suspense, lazy } from "react";
import {
  render,
  fireEvent,
  screen,
  waitForElementToBeRemoved,
  waitFor,
} from "@testing-library/react";
import { Provider } from "react-redux";
import userEvent from "@testing-library/user-event";
import store from "../src/store";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

const MainPage = lazy(() => import("../src/pages/MainPage"));
const ApplicantPage = lazy(() => import("../src/pages/ApplicantPage"));
const PoolPage = lazy(() => import("../src/pages/PoolPage"));
const SearchPage = lazy(() => import("../src/pages/SearchPage"));
const UploadPage = lazy(() => import("../src/pages/UploadPage"));
const HeaderLayout = lazy(
  () => import("../src/components/Header/HeaderLayout")
);
const CanvasPage = lazy(() => import("../src/pages/CanvasPage"));

describe("라우팅 메뉴 테스트", () => {
  const {
    container,
    getByText,
    getByLabelText,
    getByPlaceholderText,
    getByRole,
  } = render(
    <Provider store={store}>
      <Router>
        {/* TODO: 로딩 폴백 UI <스켈레론 뷰> 추가하기 */}
        <Suspense fallback={<>loading fallback suspense</>}>
          <Routes>
            <Route element={<HeaderLayout />}>
              <Route path="/" element={<MainPage />} />
              <Route
                path="/applicant/:applicantId"
                element={<ApplicantPage />}
              />
              <Route path="/pool" element={<PoolPage />} />
              <Route path="/upload" element={<UploadPage />} />
            </Route>
          </Routes>
        </Suspense>
      </Router>
    </Provider>
  );

  // get, query, find도 있지만 container도 활용가능!
  // const emailInput = container.querySelector("#emailInput");
  // expect(emailInput).toBeInTheDocument();

  test("헤더 네브 바가 정상적으로 존재하는지 테스트", async () => {
    await waitForElementToBeRemoved(() =>
      screen.queryAllByText("loading fallback suspense")
    );

    const headerTitle = await screen.findByText("Jobreeting");
    const logoutButton = await screen.findByText("로그아웃");
    expect(headerTitle).toBeInTheDocument();
    expect(logoutButton).toBeInTheDocument();
    expect(location.pathname).toBe("/");
  });

  test("메뉴버튼 클릭 시 메뉴 모달이 정상적으로 등장하는지 테스트", async () => {
    const button = getByLabelText("menu");
    userEvent.click(button);

    const poolText = await screen.findAllByText("지원자 풀 보러가기");
    const uploadText = await screen.findAllByText("지원자 신규 등록하기");

    expect(poolText).toHaveLength(1);
    expect(uploadText).toHaveLength(1);
  });

  test("지원자 등록 버튼 클릭 시 정상적으로 라우팅되는지 테스트", async () => {
    const uploadText = await screen.findByText("지원자 신규 등록하기");
    userEvent.click(uploadText);

    const uploadButton = await screen.findByText("지원자 등록");

    expect(uploadButton).toBeInTheDocument();
    expect(location.pathname).toBe("/upload");
  });

  test("업로드 페이지에서 메뉴버튼 클릭 시 변경된 메뉴 모달이 정상적으로 등장하는지 테스트", async () => {
    const button = getByLabelText("menu");
    userEvent.click(button);

    const mainText = await screen.findAllByText("내 지원자 보러가기");
    const poolText = await screen.findAllByText("지원자 풀 보러가기");

    expect(mainText).toHaveLength(1);
    expect(poolText).toHaveLength(1);
  });

  test("지원자 풀 버튼 클릭 시 정상적으로 라우팅되는지 테스트", async () => {
    const poolText = await screen.findByText("지원자 풀 보러가기");
    userEvent.click(poolText);

    const devTitle = await screen.findByText("개발");
    const marketingTitle = await screen.findByText("마케팅");
    const operTitle = await screen.findByText("경영지원");
    const designTitle = await screen.findByText("디자인");

    expect(devTitle).toBeInTheDocument();
    expect(marketingTitle).toBeInTheDocument();
    expect(operTitle).toBeInTheDocument();
    expect(designTitle).toBeInTheDocument();

    await new Promise((r) => setTimeout(r, 200));
    expect(location.pathname).toBe("/pool");
  });
});
