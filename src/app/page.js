"use client";
import { signOut, useSession } from "next-auth/react";

import HomeComponent from "./components/HomeComponent";

export default function Home() {
  const session = useSession();
  return (
    <div>
      <HomeComponent />
      <div>{session?.data?.user?.name}</div>
      <button onClick={() => signOut()}>Logout</button>0
    </div>
  );
}
