import React from "react";
import ReactDOM from "react-dom/client";
import App from "./router/App";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import { theme } from "./styles/theme";
import { Provider } from "react-redux";
import store from "./store";
import axios from "axios";

// refresh token cookie를 주고 받기 위한 설정 + BaseUrl 설정 : 8000포트
axios.defaults.withCredentials = true;
axios.defaults.baseURL = "http://127.0.0.1:8000";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // dnd 라이브러리와 충돌이 있어 React.StrictMode를 제거함
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </Provider>
);
