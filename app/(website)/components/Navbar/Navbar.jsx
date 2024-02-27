"use client";
import { useIsAuthenticated } from "@/app/hooks/useIsAuthenticated";
import { logout } from "@/app/lib/auth";
import logo from "@/public/assets/logo.jpeg";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import Sidebar from "../Sidebar/Sidebar";

import NavAction from "./NavAction";
import useToast from "@/app/components/ui/toast";
import Onboarding from "../Auth/Onboarding";

const Navbar = () => {
  // Local State
  const [loading, setLoading] = useState(true);

  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
   //toast state 
   const { Toast, showToast } = useToast();

  const isAuthenticated = useIsAuthenticated();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const logoutHandler = async () => {
    const isLoggedOut = await logout();
    if (isLoggedOut) {
  
      showToast("Logout successful", "success");
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      setLoading(false);
    }
  }, []);

  return (
    <div className="">
      <Toast/>
      <nav className="w-full fixed top-0 right-0 z-10 min-h-20 flex justify-between bg-secondary items-center border-b border-slate-800 lg:px-10 md:px-4">
        <div className="md:w-1/2 flex items-center">
          <Image
            height="100"
            width="100"
            src={logo}
            alt="logo"
            className="h-20 w-20"
          />
          <ul className="md:flex items-center text-[#7e7e81] gap-5 text-lg lg:ml-32 md:ml-10 hidden">
            <li className="hover:text-white cursor-pointer">
              <Link
                className={`link ${pathname === "/home" ? "text-[#ffffff]" : ""}`}
                href="/home"
              >
                Home
              </Link>
            </li>
            <li className="hover:text-white cursor-pointer">
              <Link
                className={`link ${pathname === "/job-post" ? "text-[#ffffff]" : ""}`}
                href="/job-post"
              >
                Job Post
              </Link>
            </li>
            <li className="hover:text-white cursor-pointer">
              <Link
                className={`link ${pathname === "/job-search" ? "text-[#ffffff]" : ""}`}
                href="/job-search"
              >
                Candidate Profile
              </Link>
            </li>
          </ul>
          {isOpen ? (
            <RxCross2
              onClick={toggleSidebar}
              className="text-white text-3xl block md:hidden"
            />
          ) : (
            <GiHamburgerMenu
              onClick={toggleSidebar}
              className="text-white text-3xl block md:hidden"
            />
          )}
        </div>
        <div className="flex items-center gap-3 md:gap-0 justify-between md:w-1/2 w-2/3">
          <div className="flex items-center justify-end bg-[#1B2E46] text-[#6A7482] w-full text-lg h-10 px-3 rounded-2xl">
            {/* <input
              type="text"
              name=""
              id=""
              className="border-none outline-none bg-transparent placeholder:text-[#6A7482] w-full"
              placeholder="Search"
            /> */}
            {/* <CiSearch className="" /> */}
          </div>

          <div className="w-full flex items-center lg:ml-24 md:ml-10 gap-5">
            {loading ? (
              <div className="w-full h-10 bg-slate-800 rounded animate-pulse"></div>
            ) : (
              <>
                {!isAuthenticated && <Onboarding />}
                {isAuthenticated && <NavAction onLogout={logoutHandler} />}
              </>
            )}
          </div>
        </div>
      </nav>
      <Sidebar toggleSidebar={toggleSidebar} isOpen={isOpen} />
    </div>
  );
};

export default Navbar;
