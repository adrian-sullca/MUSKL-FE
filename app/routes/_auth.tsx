import { Outlet } from "@remix-run/react";
import BottomNav from "~/components/layout/BottomNav";
import Header from "~/components/layout/Header";

export default function AuthLayout() {
  return (
    <>
      <Header />
      <main className="bg-primary-color-800 min-h-screen pt-20 pb-[86px] px-5">
        <Outlet />
      </main>
      <BottomNav />
    </>
  );
}
