import { Form } from "@remix-run/react";
import { AtSign, Eye, EyeClosed, Lock } from "lucide-react";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Button } from "../ui/button";
import { useState } from "react";
import { Separator } from "../ui/separator";
import { FcGoogle } from "react-icons/fc";
import { useTranslation } from "react-i18next";

export default function RegisterForm() {
  const { t } = useTranslation();
  const [showPassword, setShowPassword] = useState(false);
  
  return (
    <Form>
      <div className="grid cols-3 gap-3">
        <div className="space-y-1">
          <Label>{t("email")}</Label>
          <div className="relative">
            <AtSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-500 h-4 w-4" />
            <Input
              id="email"
              type="email"
              placeholder="adrian@email.com"
              className="pl-10  border-borderSecondaryColor"
              required
            />
          </div>
        </div>
        <div className="space-y-1">
          <Label>{t("password")}</Label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-500 h-4 w-4" />
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              className="px-10 border-borderSecondaryColor"
              required
            />
            {showPassword ? (
              <EyeClosed
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-tertiaryColor h-4 w-4 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              />
            ) : (
              <Eye
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-zinc-500 h-4 w-4 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              />
            )}
          </div>
        </div>
        <div className="space-y-1">
          <Label>{t("confirm-password")}</Label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-500 h-4 w-4" />
            <Input
              id="confirm-password"
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              className="px-10 border-borderSecondaryColor"
              required
            />
            {showPassword ? (
              <EyeClosed
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-tertiaryColor h-4 w-4 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              />
            ) : (
              <Eye
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-zinc-500 h-4 w-4 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              />
            )}
          </div>
        </div>
      </div>
      <div className="space-y-4 mt-5">
        <Button className="w-full">{t("register")}</Button>
        <Separator text={t("continue-with")} />
        <Button className="w-full bg-primaryColor hover:bg-primaryColor/80">
          <FcGoogle className="h-5 w-5" />
          Google
        </Button>
      </div>
    </Form>
  );
}
