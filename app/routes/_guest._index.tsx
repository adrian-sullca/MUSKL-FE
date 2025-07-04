import { type MetaFunction } from "@remix-run/node";
import { useTranslation } from "react-i18next";
import LoginForm from "~/components/auth/LoginForm";
import RegisterForm from "~/components/auth/RegisterForm";
import {
  Card,
  CardContent,
} from "~/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";

export const meta: MetaFunction = () => {
  return [
    { title: "Inicia sesión" },
    { name: "description", content: "Inicia sesión" },
  ];
};

export default function AuthGuestPage() {
  const { t } = useTranslation();
  return (
    <>
      <Card className="max-w-md mx-auto">
        <CardContent>
          <Tabs defaultValue="login">
            <TabsList className="grid w-full grid-cols-2 mt-5 mb-4">
              <TabsTrigger value="login">{t("login")}</TabsTrigger>
              <TabsTrigger value="register">{t("register")}</TabsTrigger>
            </TabsList>
            <TabsContent value="login">
              <LoginForm />
            </TabsContent>
            <TabsContent value="register">
              <RegisterForm />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </>
  );
}
