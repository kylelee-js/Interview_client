import React from "react";
import {
  render,
  fireEvent,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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

  test("잘못된 로그인 테스트", async () => {
    fireEvent.change(email, { target: { value: "kylelee@danbiedu.co.kr" } });
    fireEvent.change(password, { target: { value: "dlsrks12" } });
    userEvent.click(button);
    const alertText = await screen.findAllByText(
      "잘못된 아이디 또는 비밀번호입니다."
    );
    expect(alertText).toHaveLength(1);
    expect(alertText).toBeTruthy();
  });

  test("로그인 성공 후 라우팅 테스트", async () => {
    fireEvent.change(email, { target: { value: "kylelee@danbiedu.co.kr" } });
    fireEvent.change(password, { target: { value: "dlsrks12" } });
    userEvent.click(button);

    // await waitForElementToBeRemoved(() =>
    //   screen.queryAllByText("loading fallback suspense")
    // );
    // const header = await screen.findByRole("heading");
    // expect(header.textContent).toBe("Jobreeting");
    // expect(header).toBeTruthy();
  });
});
