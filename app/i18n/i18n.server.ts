let Backend;

if (import.meta.env.SSR) {
  Backend = (await import("i18next-fs-backend")).default;
}

import { resolve } from "node:path";
import { RemixI18Next } from "remix-i18next/server";
import i18nConfig from "./i18n.config";
import { i18nCookie } from "../cookies/cookies";

const i18next = new RemixI18Next({
  detection: {
    supportedLanguages: i18nConfig.supportedLngs,
    fallbackLanguage: i18nConfig.fallbackLng,
    cookie: i18nCookie,
  },
  i18next: {
    ...i18nConfig,
    backend: {
      loadPath: resolve("./public/locales/{{lng}}/{{ns}}.json"),
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  plugins: [Backend].filter(Boolean) as any[],
});

export default i18next;
