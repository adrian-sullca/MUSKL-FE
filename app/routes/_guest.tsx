import { Outlet } from "@remix-run/react";
import Header from "~/components/layout/Header";

export default function GuestLayout() {
  return (
    <>
      {/* pt-28 pb-14 px-4 min-h-screen */}
      <Header></Header>
      <main className="bg-primaryColor min-h-screen pt-28 px-5">
        <Outlet />
      </main>
    </>
  );
}
