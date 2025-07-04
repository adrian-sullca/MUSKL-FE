import { Calendar, Clock, TrendingUp } from "lucide-react";
import { Card, CardContent } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import { useTranslation } from "react-i18next";

export default function RecentTrainingItem() {
  const { t } = useTranslation();

  return (
    <Card className="border border-primary-color-700/40 bg-primary-color-800/40 cursor-pointer relative z-5">
      <CardContent className="py-3">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <h1 className="text-sm font-semibold">Push Day</h1>
            <div className="flex gap-3 text-xs items-center">
              <span className="flex items-center gap-1">
                <Calendar
                  size={12}
                  className="text-tertiary-color"
                  strokeWidth={1.6}
                />
                {t("yesterday")}
              </span>
              <span className="flex items-center gap-1">
                <Clock
                  size={12}
                  className="text-tertiary-color"
                  strokeWidth={1.6}
                />
                1:59
              </span>
            </div>
          </div>
          <div>
            <Badge
              className="h-5 min-w-8 rounded-full px-1 font-mono tabular-nums"
              variant="destructive"
            >
              <TrendingUp className="h-3 w-3 mr-1" />
              +5%
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
