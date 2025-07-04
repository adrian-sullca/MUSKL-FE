export interface BottomNavItemProps {
  href: string;
  name: string;
  icon: JSX.Element;
}

export interface StatsOverviewItemProps {
  title: string;
  digit: string;
  text: string;
  icon: JSX.Element;
}

export interface RoutineItemProps {
  id: number;
  title: string;
  description: string;
  frequency: number;
  muscleGroupsByDay: string[];
  main: boolean;
}
