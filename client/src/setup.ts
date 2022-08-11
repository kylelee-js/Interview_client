// import "@testing-library/react/cleanup-after-each";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import axios from "axios";
import { server } from "./mocks/server";

axios.defaults.baseURL = "http://localhost:8000";

beforeAll(() =>
  server.listen({
    onUnhandledRequest: "warn",
  })
);

afterEach(() => server.resetHandlers());

afterAll(() => server.close());
