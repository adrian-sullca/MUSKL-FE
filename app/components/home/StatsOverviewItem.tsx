import { Card, CardContent } from "~/components/ui/card";
import { StatsOverviewItemProps } from "~/interfaces/props";

export default function StatsOverviewItem({
  title,
  digit,
  text,
  icon,
}: StatsOverviewItemProps) {
  return (
    <Card className="border border-primary-color-700/40 bg-primary-color-800/40 cursor-pointer relative z-5">
      <CardContent className="pt-5">
        <div>
          <div className="flex justify-between gap-2 items-center">
            <div className="bg-tertiary-color/20 p-2 border border-tertiary-color/30 rounded-lg">
              {icon}
            </div>
            <span className="uppercase text-xs font-semibold">{title}</span>
          </div>
          <div className="mt-2">
            <h1 className="text-xl font-bold text-primary-color-200">
              {digit}
            </h1>
            <p className="text-xs text-primary-color-400">{text}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
