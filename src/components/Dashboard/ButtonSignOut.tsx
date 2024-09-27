"use client";
import { signOut } from "next-auth/react";

function ButtonSignOut() {

  return (
    <div>
      <button onClick={() => signOut()} className="text-lg p-3 bg-red-500 hover:bg-red-300 transition-all rounded-md">Sign out</button>
    </div>
  )
}
export  default ButtonSignOut