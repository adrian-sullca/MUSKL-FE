import { Calendar, Clock, Zap } from "lucide-react";
import { Card, CardContent } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import { useTranslation } from "react-i18next";
import { Button } from "../ui/button";

export default function UpcomingTraining() {
  const { t } = useTranslation();

  return (
    <Card className="max-w-md mx-auto relative overflow-hidden bg-gradient-to-br from-secondary-color to-primary-color before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-br before:from-cyan-400/10 before:to-cyan-400/5 before:opacity-100 before:transition-opacity before:duration-500 border-secondary-color-800">
      <CardContent className="py-5 relative z-5">
        <div className="flex items-center justify-between mb-3">
          <Badge className="bg-tertiary-color/20 hover:!bg-tertiary-color/20 px-2 border border-tertiary-color/30 text-tertiary-color">
            <Zap className="h-4 w-4 mr-1" />
            <span className="text-sm font-medium">{t("next-training")}</span>
          </Badge>
          <Badge className="bg-secondary-color hover:!bg-secondary-color px-2 border border-tertiary-color/30 text-tertiary-color h-[24px]">
            {t("today")}
          </Badge>
        </div>
        <div>
          <h1 className="text-md font-semibold text-white">Push Day</h1>
          <span className="text-primary-color-400 text-sm">
            Pecho, Hombro y Triceps
          </span>
          <div className="flex gap-3 mt-1">
            <div className="flex text-xs items-center">
              <Calendar
                size={12}
                className="text-tertiary-color mr-1"
                strokeWidth={1.6}
              />
              <span>{t("programmed")}</span>
            </div>
            <div className="flex text-xs items-center">
              <Clock
                size={12}
                className="text-tertiary-color mr-1"
                strokeWidth={1.6}
              />
              <span>~ 1h 30m</span>
            </div>
          </div>
        </div>
        <div className="space-y-3 mt-3">
          <Card className="border border-primary-color-700/40 bg-primary-color-800/40 cursor-pointer relative z-5">
            <CardContent className="py-3">
              <div className="flex items-center justify-between">
                <div className="flex flex-col gap-1">
                  <h1 className="text-sm ">Press banca</h1>
                </div>
                <Badge className="h-5 min-w-8 rounded-lg px-3 border border-primary-color-600/20 hover:!bg-primary-color-700 bg-primary-color-700 font-mono tabular-nums">
                  3 x 8
                </Badge>
              </div>
            </CardContent>
          </Card>
          <Card className="border border-primary-color-700/40 bg-primary-color-800/40 cursor-pointer relative z-5">
            <CardContent className="py-3">
              <div className="flex items-center justify-between">
                <div className="flex flex-col gap-1">
                  <h1 className="text-sm ">Press banca</h1>
                </div>
                <Badge className="h-5 min-w-8 rounded-lg px-3 border border-primary-color-600/20 hover:!bg-primary-color-700 bg-primary-color-700 font-mono tabular-nums">
                  3 x 8
                </Badge>
              </div>
            </CardContent>
          </Card>
          <Card className="border border-primary-color-700/40 bg-primary-color-800/40 cursor-pointer relative z-5">
            <CardContent className="py-3">
              <div className="flex items-center justify-between">
                <div className="flex flex-col gap-1">
                  <h1 className="text-sm ">Press banca</h1>
                </div>
                <Badge className="h-5 min-w-8 rounded-lg px-3 border border-primary-color-600/20 hover:!bg-primary-color-700 bg-primary-color-700 font-mono tabular-nums">
                  3 x 8
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
        <p className="text-xs text-center my-3 text-primary-color-400">
          5 {t("more-exercises")}
        </p>
        <div className="relative flex items-center justify-center">
          <span className="absolute inset-0 bg-gradient-to-br from-[#38bdf8] via-[#60a5fa] to-[#0ea5e9] blur-md opacity-20 animate-pulse pointer-events-none transition duration-500" />
          <Button className="relative z-10 w-full bg-[#38bdf8] text-white text-sm shadow-lg transition duration-300">
            {t("start")}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
