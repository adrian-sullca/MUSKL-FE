import { createCookie } from "@remix-run/node";

export const i18nCookie = createCookie("i18next", {
  path: "/",
  httpOnly: true,
  sameSite: "lax",
  maxAge: 60 * 60 * 24 * 365,
});
