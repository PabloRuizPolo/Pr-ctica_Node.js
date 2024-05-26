const i18n = require("i18n");
const path = require("node:path");

i18n.configure({
  locales: ["en", "es"],
  directory: path.join(__dirname, "..", "locales"),
  defaultLocale: "en",
  cookie: "langCookie",
  autoReload: true,
  syncFiles: true,
});

i18n.setLocale("en");

module.exports = i18n;
