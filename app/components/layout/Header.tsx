import { Bell, LogOut, Settings, User, User2 } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { Button } from "~/components/ui/button";
import { Badge } from "~/components/ui/badge";
import LanguageSwitcher from "~/components/utils/LanguageSwitcher";

export default function Header() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-30 border-b border-primary-color-600/50 ">
      <div className="container max-w-md mx-auto flex justify-between items-center p-2 px-7">
        <User className="text-white"></User>
        <div className="flex gap-4 items-center">
          <LanguageSwitcher />

          <div className="">
            <Button
              variant="ghost"
              size="icon"
              className=" text-primary-color-300 hover:text-primary-color-100 hover:bg-primary-color-700"
            >
              <Bell className="!h-5 !w-5" />
              <span className="sr-only">Notificaciones</span>
            </Button>
            <Badge
              className="absolute h-4 min-w-4 rounded-full px-1 font-mono tabular-nums -translate-x-5"
              variant="destructive"
            >
              1
            </Badge>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger className="rounded-full" asChild>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent side="bottom" align="end">
              <DropdownMenuItem>
                <>
                  <User2 />
                  Perfil
                </>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <>
                  <Settings />
                  Configuración
                </>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <>
                  <LogOut />
                  Cerrar sesión
                </>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
}
