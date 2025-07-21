/* eslint strict: 0, global-require: 0 */

import test from "tape";

test("all entry points parse", async (t) => {
  try {
    await import("../index.js");
    t.pass("index does not throw");
  } catch (e) {
    t.fail(`index throws: ${e.message}`);
  }

  try {
    await import("../whitespace.js");
    t.pass("whitespace does not throw");
  } catch (e) {
    t.fail(`whitespace throws: ${e.message}`);
  }

  t.end();
});
