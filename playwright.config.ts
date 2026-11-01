import { defineConfig, devices } from "@playwright/test";

const docsBaseURL = process.env.DOCS_BASE_URL || "http://localhost:3000";

export default defineConfig({
  testDir: "./tests",
  testMatch: "**/*.spec.ts",
  timeout: 90_000,
  workers: 1,
  retries: 1,
  expect: {
    timeout: 10_000,
    toHaveScreenshot: {
      maxDiffPixelRatio: 0.05,
      animations: "disabled",
      caret: "hide",
    },
  },
  reporter: [
    ["list"],
    ["html", { outputFolder: "reports/playwright-report", open: "never" }],
    ["json", { outputFile: "reports/playwright-results.json" }],
  ],
  use: {
    baseURL: docsBaseURL,
    trace: "retain-on-failure",
  },
  projects: [
    {
      name: "desktop",
      use: { viewport: { width: 1440, height: 900 } },
    },
    {
      name: "mobile",
      use: { ...devices["iPhone 13"], browserName: "chromium" },
    },
  ],
  webServer: {
    command: "mint dev --open=false",
    url: docsBaseURL,
    reuseExistingServer: true,
    timeout: 120_000,
  },
});
