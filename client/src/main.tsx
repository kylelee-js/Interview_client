import ReactDOM from "react-dom/client";
import App from "./router/App";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import { theme } from "./styles/theme";
import { Provider } from "react-redux";
import store from "./store";
import axios from "axios";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

// sessionStorage에 redux state 저장
const persistor = persistStore(store);

axios.defaults.withCredentials = true;
axios.defaults.baseURL = "http://3.39.22.167:8080";
// axios.defaults.baseURL = "http://localhost:8000";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // dnd 라이브러리와 충돌이 있어 React.StrictMode를 제거함
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </PersistGate>
  </Provider>
);
