import assert from "node:assert/strict";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { createServer } from "vite";
import { afterAll, it } from "vitest";

const vite = await createServer({
  appType: "custom",
  server: { middlewareMode: true },
});

afterAll(async () => {
  await vite.close();
});

it("renders all open positions with FAQs closed", async () => {
  const { CareersPage } = await vite.ssrLoadModule("/src/pages/careers-page.tsx");
  const markup = renderToStaticMarkup(createElement(CareersPage));

  assert.match(markup, /B2B Sales Manager/);
  assert.match(markup, /Business Development Manager/);
  assert.match(markup, /Business Development Associate/);
  assert.match(markup, /careers-application-illustration/);
  const faqButtons = markup.match(/<button\b[^>]*aria-controls="careers-faq-\d+"[^>]*>/g) ?? [];
  assert.equal(faqButtons.length, 5);
  assert.ok(faqButtons.every((button) => button.includes('aria-expanded="false"')));
  assert.doesNotMatch(markup, /This form is disabled/);
  assert.match(markup, /mailto:info@asetechnologies\.in/);
  assert.match(markup, /Submit application/);
  assert.doesNotMatch(markup, /<button\b[^>]*type="submit"[^>]*disabled=""/);
  assert.doesNotMatch(markup, /<input\b[^>]*id="career-email"[^>]*disabled=""/);
  assert.match(markup, /<input\b[^>]*id="career-resume"[^>]*required=""/);
  assert.doesNotMatch(markup, /saved to our recruitment Drive and Sheet/i);
});
