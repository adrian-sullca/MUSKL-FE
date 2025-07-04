"use client";

import { useState, useEffect } from "react";
import { UserLevel } from "~/components/home/UserLevel";
import { Card, CardContent } from "~/components/ui/card";
import { Sparkles } from "lucide-react";
import { useTranslation } from "react-i18next";

export function UserGreeting() {
  const { t, i18n } = useTranslation();

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  const getGreeting = () => {
    const hour = currentTime.getHours();
    if (hour < 12) return t("good-morning");
    if (hour < 18) return t("good-afternoon");
    return t("good-evening");
  };

  const formatDate = () => {
    return currentTime.toLocaleDateString(i18n.language, {
      weekday: "long",
      day: "numeric",
      month: "long",
    });
  };

  return (
    <Card className="max-w-md mx-auto relative overflow-hidden bg-gradient-to-br from-secondary-color to-primary-color hover:before:opacity-100 before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-br before:from-cyan-400/10 before:to-cyan-400/5 before:opacity-0 before:transition-opacity before:duration-500 border-secondary-color-800">
      <CardContent className="py-5">
        <div className="relative flex justify-between items-center">
          <div className="">
            <div className="flex items-center gap-2 mb-1">
              <Sparkles className="h-4 w-4 text-tertiary-color" />
              <span className="text-sm text-primary-color-300 font-medium capitalize">
                {formatDate()}
              </span>
            </div>
            <h1 className="text-2xl font-semibold text-white mb-2">
              {getGreeting()}, Carlos
            </h1>
            <p className="text-primary-color-200 text-sm">
              {t("ready-for-today")}
            </p>
          </div>
          <UserLevel level={5} range="Principiante" />
        </div>
      </CardContent>
    </Card>
  );
}
