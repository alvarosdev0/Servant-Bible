"use client";

import { Menu, UserRound } from "lucide-react";
import MenuList from "./menu-list";
import { useRouter } from "next/navigation";
import Link from "next/link";

const NavBar = () => {
  const router = useRouter();
  return (
    <nav className="flex sticky justify-between py-4 px-6 z-10">
      <Link className="flex justify-center items-center" href="/">
        <strong className="text-2xl">SERVANT BIBLE</strong>
      </Link>
      <div className="flex items-center">
        <MenuList />
      </div>
      <div className="flex gap-5 items-center">
        <div
          className="flex items-center gap-2 cursor-pointer hover:bg-gray-200 rounded-full p-1"
          onClick={() => router.push("/dashboard")}
        >
          <Menu strokeWidth="2" size={20} className="cursor-pointer" />
          <div className="rounded-full bg-[#731963] p-1">
            <UserRound
              strokeWidth="1"
              size={25}
              color="white"
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
