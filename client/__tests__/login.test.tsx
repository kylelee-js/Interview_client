import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import LoginForm from "../src/components/Login/LoginForm";
import { Provider } from "react-redux";
import store from "../src/store";
import { BrowserRouter as Router } from "react-router-dom";

describe("로그인 테스트", () => {
  const { getByText, getByLabelText, getByPlaceholderText, getByRole } = render(
    <Provider store={store}>
      <Router>
        <LoginForm />
      </Router>
    </Provider>
  );

  const button = getByText("로그인");
  const email = getByLabelText("email");
  const password = getByLabelText("password");

  fireEvent.change(email, { target: { value: "kylelee@danbiedu.co.kr" } });
  fireEvent.change(password, { target: { value: "dlsrks12" } });
  fireEvent.click(button);
  test("test", () => {
    expect("1").toEqual("1");
  });
  test("잘못된 비밀번호 로그인 테스트", async () => {
    const alertText = await screen.findAllByText(
      "잘못된 아이디 또는 비밀번호입니다."
    );
    console.log(alertText);
    expect(alertText).toBeTruthy();
  });
});
