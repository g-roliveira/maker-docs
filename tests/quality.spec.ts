import { expect, test } from "@playwright/test";

const pages = [
  { path: "/", name: "home" },
  { path: "/maker-ai/index", name: "maker-ai" },
  { path: "/maker-ai/docs/intro", name: "maker-ai-intro" },
  { path: "/maker-studio/index", name: "maker-studio" },
  { path: "/maker-functions/funcoes/sql/sql-soma", name: "sql-soma" },
];

for (const item of pages) {
  test(`${item.name} renders without visual errors`, async ({ page }) => {
    const consoleErrors: string[] = [];
    page.on("console", (message) => {
      if (message.type() === "error") consoleErrors.push(message.text());
    });
    page.on("pageerror", (error) => consoleErrors.push(error.message));

    let response = await page.goto(item.path, { waitUntil: "domcontentloaded" });
    if (response?.status() !== 200) {
      await page.waitForTimeout(1000);
      response = await page.goto(item.path, { waitUntil: "domcontentloaded" });
    }
    expect(response?.status()).toBe(200);
    await expect(page.locator("h1").first()).toBeVisible();

    const failedImages = await page.evaluate(() =>
      Array.from(document.images)
        .filter(
          (image) =>
            !image.src.toLowerCase().endsWith(".svg") &&
            (!image.complete || image.naturalWidth === 0),
        )
        .map((image) => image.currentSrc || image.src),
    );
    expect(failedImages).toEqual([]);

    const hasHorizontalOverflow = await page.evaluate(
      () => document.documentElement.scrollWidth > document.documentElement.clientWidth + 2,
    );
    expect(hasHorizontalOverflow).toBeFalsy();
    expect(consoleErrors).toEqual([]);
    await page.evaluate(() => document.fonts.ready);
    await page.waitForTimeout(500);

    await expect(page).toHaveScreenshot(`${item.name}.png`, {
      fullPage: false,
      animations: "disabled",
      caret: "hide",
    });
  });
}
