import { Card, CardContent } from "~/components/ui/card";
import RecentTrainingItem from "./RecentTrainingItem";
import { useTranslation } from "react-i18next";

export default function RecentTrainings() {
  const { t } = useTranslation();

  return (
    <Card className="max-w-md mx-auto relative overflow-hidden bg-gradient-to-br from-secondary-color to-primary-color hover:before:opacity-100 before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-br before:from-cyan-400/10 before:to-cyan-400/5 before:opacity-0 before:transition-opacity before:duration-500 border-secondary-color-800">
      <CardContent className="py-5">
        <div className="flex items-center justify-between mb-3 relative z-10">
          <h1 className="text-md font-semibold text-white">
            {t("recent-trainings")}
          </h1>
          <span className="text-tertiary-color/80 text-sm">
            {t("view-more")}
          </span>
        </div>
        <div className="space-y-3">
          <RecentTrainingItem />
          <RecentTrainingItem />
          <RecentTrainingItem />
        </div>
      </CardContent>
    </Card>
  );
}
