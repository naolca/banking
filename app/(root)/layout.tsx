import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import { Inter, IBM_Plex_Serif } from "@next/font/google";
import SideBar from "@/components/SideBar";
import Image from "next/image";
import MobileNavBar from "@/components/MobileNavBar";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import { redirect } from "next/navigation";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = await getLoggedInUser();
  if (!loggedIn) {
    redirect("/sign-in");
  }

  return (
    <main className="flex h-screen w-full font-inter">
      <SideBar user={loggedIn} />
      <div className="flex size-full flex-col">
        <div className="root-layout ">
          <Image
            src="/icons/logo.svg"
            alt="Horizon logo"
            width={30}
            height={30}
          />
          <div>
            <MobileNavBar user={loggedIn} />
          </div>
        </div>
        {children}
      </div>
    </main>
  );
}
