import { Badge } from "~/components/ui/badge";
import { Trophy } from "lucide-react";
import { useTranslation } from "react-i18next";

interface UserLevelProps {
  level: number;
  range: string;
}

export function UserLevel({ level, range }: UserLevelProps) {
  const { t } = useTranslation();

  return (
    <div className="text-center">
      <div className="relative">
        <Badge className="bg-tertiary-color/20 text-tertiary-color/90 border-tertiary-color/30 font-medium mb-2">
          <Trophy className="h-3 w-3 mr-1" />
          {t("level")} {level}
        </Badge>
      </div>
      <p className="text-xs text-primary-color-300 mb-2">{range}</p>
      <div className="w-18">
        <div className="h-1 rounded-full overflow-hidden bg-primary-color-700">
          <div className="h-full w-3/4 bg-gradient-to-r from-tertiary-color to-tertiary-color-800 rounded-full"></div>
        </div>
        <p className="text-xs text-secondary-color-500 mt-1">75/100</p>
      </div>
    </div>
  );
}
