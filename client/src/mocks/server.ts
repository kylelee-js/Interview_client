import { setupServer, SetupServerApi } from "msw/node";
import { handlers } from "./handlers/index";

export const server: SetupServerApi = setupServer(...handlers);
