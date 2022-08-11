import { createBrowserHistory, createMemoryHistory } from "history";
// import { Urls } from "../types/urls";

const isTest = process.env.NODE_ENV === "test";

// 테스트를 위해 히스토리 오브젝트를 만들어 MemoryRouter에 활용한다.
export const customHistory = isTest
  ? createMemoryHistory({ initialEntries: ["/"] })
  : createBrowserHistory();
