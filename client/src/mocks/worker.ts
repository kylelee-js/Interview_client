import { setupWorker, SetupWorkerApi } from "msw";
import { handlers } from "./handlers/index";

// 개발모드 시 브라우저에서 작동하는 MSW 서버
export const worker: SetupWorkerApi = setupWorker(...handlers);
