import { Calendar, Clock, Flame, TrendingUp } from "lucide-react";
import { Card, CardContent } from "~/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import StatsOverviewItem from "./StatsOverviewItem";
import { useTranslation } from "react-i18next";

export default function StatsOverview() {
  const { t } = useTranslation();

  return (
    <Card className="max-w-md mx-auto relative overflow-hidden bg-gradient-to-br from-secondary-color to-primary-color hover:before:opacity-100 before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-br before:from-cyan-400/10 before:to-cyan-400/5 before:opacity-0 before:transition-opacity before:duration-500 border-secondary-color-800">
      <CardContent className="py-5">
        <h1 className="text-md font-semibold text-white relative z-10 mb-3">
          {t("stats-overview")}
        </h1>
        <Tabs defaultValue="week" className="relative z-10">
          <TabsList className="grid w-full grid-cols-3 mb-4">
            <TabsTrigger value="week">{t("week")}</TabsTrigger>
            <TabsTrigger value="month">{t("month")}</TabsTrigger>
            <TabsTrigger value="year">{t("year")}</TabsTrigger>
          </TabsList>
          <TabsContent value="week" className="grid grid-cols-2 gap-3">
            <StatsOverviewItem
              title="Sesiones"
              digit="4"
              text="De 5 sesiones"
              icon={<Flame className="w-5 h-5 text-orange-500" />}
            />
            <StatsOverviewItem
              title="Disciplina"
              digit="80%"
              text="Esta semana"
              icon={<Calendar className="w-5 h-5 text-tertiary-color" />}
            />
            <StatsOverviewItem
              title="Progreso"
              digit="+ 5%"
              text="Peso levantado"
              icon={<TrendingUp className="w-5 h-5 text-green-500" />}
            />
            <StatsOverviewItem
              title="Tiempo"
              digit="4h 30m"
              text="Tiempo total"
              icon={<Clock className="w-5 h-5 text-purple-500" />}
            />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
