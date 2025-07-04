// app/routes/actions/change-language.tsx
import { json, redirect } from "@remix-run/node";
import { i18nCookie } from "~/cookies/cookies"; // 👈 importar

export async function action({ request }: { request: Request }) {
  const body = await request.formData();
  const locale = body.get("locale");

  if (typeof locale !== "string") {
    return json({ error: "Invalid locale" }, { status: 400 });
  }

  const cookieHeader = await i18nCookie.serialize(locale);

  const referer = request.headers.get("Referer") || "/";
  return redirect(referer, {
    headers: {
      "Set-Cookie": cookieHeader,
    },
  });
}
