import { useTranslation } from "react-i18next";
import BottomNavItem from "./BottomNavItem";
import { Dumbbell, Home, Users } from "lucide-react";

export default function BottomNav() {
  const { t } = useTranslation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-30 border-t border-primary-color-600/50 ">
      <div className="container max-w-md mx-auto flex justify-around items-center px-2">
        <BottomNavItem
          href={"/home"}
          name={t("home")}
          icon={<Home className="h-5 w-5" />}
        />
        <BottomNavItem
          href={"/routines"}
          name={t("routines")}
          icon={<Dumbbell className="h-5 w-5" />}
        />
        <BottomNavItem
          href={"/friends"}
          name={"Amigos"}
          icon={<Users className="h-5 w-5" />}
        />
        <BottomNavItem
          href={"/friends"}
          name={"Amigos"}
          icon={<Users className="h-5 w-5" />}
        />
      </div>
    </nav>
  );
}
