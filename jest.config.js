/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

module.exports = {
  clearMocks: true,
  collectCoverageFrom: ["lib/**/*.js"],
  coverageDirectory: "coverage",
  coveragePathIgnorePatterns: [
    "/node_modules/",
    "lib/index.js",
  ],
  coverageProvider: "v8",
  coverageReporters: ["text", "lcov", "html"],
  coverageThreshold: {
    global: {
      lines: 100,
    }
  },
}
