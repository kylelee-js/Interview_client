// import '../src/index.css';
import React from "react";
import { Provider } from "react-redux";
import { theme } from "../src/styles/theme";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../src/styles/GlobalStyle";
import store from "../src/store";

// 각 stories마다 이 데코레이터로 감싸서 styled-component나 글로벌 스타일, 리덕스를 적용할 수 있게 한다.
export const decorators = [
  (Story) => (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Story />
      </ThemeProvider>
    </Provider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
