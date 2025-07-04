import { BicepsFlexed, Calendar, Ellipsis } from "lucide-react";
import { Card, CardContent } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { Button } from "~/components/ui/button";
import { RoutineItemProps } from "~/interfaces/props";
import { useNavigate } from "@remix-run/react";
import { useRef } from "react";

export default function RoutineListItem({
  id,
  title,
  description,
  frequency,
  muscleGroupsByDay,
  main,
}: RoutineItemProps) {
  const navigate = useNavigate();
  const pointerDown = useRef<number | null>(null);

  const handlePointerDown = () => {
    pointerDown.current = Date.now();
  };

  const handlePointerUp = () => {
    const now = Date.now();
    if (pointerDown.current && now - pointerDown.current < 150) {
      navigate(`${id}/details`);
    }
  };
  return (
    <Card
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      className="max-w-md cursor-pointer mx-auto relative overflow-hidden bg-gradient-to-br from-secondary-color to-primary-color before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-br before:from-cyan-400/10 before:to-cyan-400/5 before:opacity-0 before:transition-opacity before:duration-500 border-secondary-color-800"
    >
      <CardContent className="py-5 relative z-10">
        <div className="flex items-center justify-between mb-1">
          <div className="flex gap-3 items-center">
            <h1 className="text-md font-semibold capitalize text-white">
              {title}
            </h1>
            {main && (
              <Badge className="bg-tertiary-color/20 hover:bg-tertiary-color/20 px-2 border border-tertiary-color/30 text-tertiary-color">
                <BicepsFlexed className="h-4 w-4 mr-1" />
                <span className="text-xs font-medium">Actual</span>
              </Badge>
            )}
          </div>
          <span className="text-tertiary-color/80 text-sm">
            <DropdownMenu>
              <DropdownMenuTrigger className="rounded-full" asChild>
                <Button
                  variant={"ghost"}
                  className="text-primary-color-300 rounded-sm hover:text-primary-color-100 hover:bg-transparency w-10 h-7"
                >
                  <Ellipsis className="w-5 h-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent side="bottom" align="end">
                <DropdownMenuItem>
                  <span className="text-red-500">Eliminar</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Duplicar</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </span>
        </div>
        <p className="text-sm truncate">{description}</p>
        <div className="mt-2 flex items-center gap-1 text-xs">
          <Calendar className="w-4 h-4 text-tertiary-color" />
          <span className="translate-y-[1px]">{frequency} dias/semana</span>
        </div>
        <div className="relative overflow-hidden mt-3 h-7">
          <div className="animate-scroll flex gap-2 whitespace-nowrap w-max will-change-transform">
            {[...muscleGroupsByDay, ...muscleGroupsByDay].map(
              (muscleGroupByDay, i) => (
                <Badge
                  key={`${muscleGroupByDay}-${i}`}
                  variant="outline"
                  className="text-primary-color-300 rounded-full border-primary-color-300/60 bg-secondary-color-700/40 inline-block"
                >
                  {muscleGroupByDay}
                </Badge>
              )
            )}
          </div>
        </div>
        {/* <div className="flex gap-2 mt-3 overflow-x-auto no-scrollbar whitespace-nowrap">
          {muscleGroupsByDay.map((muscleGroupByDay) => (
            <Badge
              key={muscleGroupByDay}
              variant="outline"
              className="text-primary-color-300 rounded-full border-primary-color-300/60 bg-secondary-color-700/40"
            >
              {muscleGroupByDay}
            </Badge>
          ))}
        </div> */}
      </CardContent>
    </Card>
  );
}
