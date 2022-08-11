import React from "react";
import {
  render,
  fireEvent,
  screen,
  waitForElementToBeRemoved,
  waitFor,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../src/router/App";
import { Provider } from "react-redux";
import store from "../src/store";

describe("로그인 & 라우팅 테스트", () => {
  const {
    container,
    getByText,
    getByLabelText,
    getByPlaceholderText,
    getByRole,
  } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  // get, query, find도 있지만 container도 활용가능!
  // const emailInput = container.querySelector("#emailInput");
  // expect(emailInput).toBeInTheDocument();

  test("잘못된 로그인 테스트 - 틀린 비밀번호", async () => {
    await waitForElementToBeRemoved(() =>
      screen.queryAllByText("loading fallback suspense")
    );
    const button = getByText("로그인");
    const email = getByLabelText("email");
    const password = getByLabelText("password");
    fireEvent.change(email, { target: { value: "kylelee@danbiedu.co.kr" } });
    fireEvent.change(password, { target: { value: "dlsrks" } });
    userEvent.click(button);

    const alertText = await screen.findAllByText(
      "잘못된 아이디 또는 비밀번호입니다."
    );

    expect(alertText).toHaveLength(1);
  });

  test("잘못된 로그인 테스트 - 빈칸 입력", async () => {
    const button = getByText("로그인");
    const email = getByLabelText("email");
    const password = getByLabelText("password");
    fireEvent.change(email, { target: { value: "" } });
    fireEvent.change(password, { target: { value: "" } });
    userEvent.click(button);

    const alertText = await screen.findAllByText("필수 입력칸입니다.");
    expect(alertText).toHaveLength(2);
  });

  test("로그인 성공 후 메인 페이지 라우팅 테스트", async () => {
    const button = getByText("로그인");
    const email = getByLabelText("email");
    const password = getByLabelText("password");
    fireEvent.change(email, { target: { value: "kylelee@danbiedu.co.kr" } });
    fireEvent.change(password, { target: { value: "dlsrks12" } });
    userEvent.click(button);

    const headerTitle = await screen.findByText("Jobreeting");
    const logoutButton = await screen.findByText("로그아웃");
    expect(headerTitle).toBeInTheDocument();
    expect(logoutButton).toBeInTheDocument();
    expect(location.pathname).toBe("/");
  });

  test("로그아웃 라우팅 테스트", async () => {
    const logoutButton = await screen.findByText("로그아웃");
    expect(logoutButton).toBeInTheDocument();
    userEvent.click(logoutButton!);

    const loginButton = await screen.findByText("로그인");
    expect(loginButton).toBeInTheDocument();
    expect(location.pathname).toBe("/login");
  });
});
