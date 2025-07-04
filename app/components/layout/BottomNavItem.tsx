import { NavLink } from "@remix-run/react";
import { BottomNavItemProps } from "~/interfaces/props";

export default function BottomNavItem({
  href,
  name,
  icon,
}: BottomNavItemProps) {
  return (
    <NavLink to={href}>
      {({ isActive }) => (
        <div
          className={`flex flex-col items-center justify-center w-full h-full transition-all duration-300 relative ${
            isActive ? "text-tertiary-color" : "text-primary-color-300"
          }`}
        >
          {isActive && (
            <div className="w-8 h-1 bg-gradient-to-r from-tertiary-color to-tertiary-color-600 rounded-full absolute top-0 -translate-y-[1.2px] z-5"></div>
          )}
          {isActive ? (
            <div className="bg-tertiary-color/20 p-2 border border-tertiary-color/30 rounded-lg">
              {icon}
            </div>
          ) : (
            <div className="p-2">{icon}</div>
          )}
          <span className="text-xs font-medium mt-1">{name}</span>
        </div>
      )}
    </NavLink>
  );
}
