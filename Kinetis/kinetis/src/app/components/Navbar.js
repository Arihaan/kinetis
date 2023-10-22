"use client";

import Link from "next/link";
import ConnectWallet from "./ConnectWallet";

export default function Navbar({ userSession, userData, setUserData }) {
  return (
    
    <header className="p-4">
    <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
            <a href="/"><img src="logo.png" alt="Kinetis Logo" className="w-10"/></a>
            <span className="text-white text-xl font-semibold ml-2">Kinetis</span> 
        </div>
        <nav className="space-x-4">
            <a href="/fund-project" className="hover:text-green-700">Fund Projects</a>
            <a href="/project-upload" className="hover:text-green-700">Upload your Project</a>
            {userData ? (
        <ConnectWallet
          userSession={userSession}
          userData={userData}
          setUserData={setUserData}
        />
      ) : (
        ""
      )}
        </nav>
    </div>
</header>
  );
}
