// /** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
// module.exports = {
//   preset: "ts-jest",
//   testEnvironment: "node",
// };

import type { Config } from "@jest/types";
// Sync object
const config: Config.InitialOptions = {
  verbose: true,
  roots: ["<rootDir>/__tests__/"],
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/src/setup.ts"],
  setupFiles: ["@testing-library/react/dont-cleanup-after-each"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
};
export default config;
