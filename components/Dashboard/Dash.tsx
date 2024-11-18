"use client";
import Image from "next/image";
import { useState, Suspense, lazy } from "react";

import CoverPhoto from "@/public/Profile/1.jpg";
import UserPhoto from "@/public/Profile/2.jpg";
// Icons
import { RiAccountCircleLine, RiLockPasswordLine } from "react-icons/ri";
import { GiBigDiamondRing } from "react-icons/gi";
import {
  MdOutlineNotificationsActive,
  MdLogout,
  MdOutlineSettingsSuggest,
} from "react-icons/md";
import { CiCreditCard1 } from "react-icons/ci";
import Link from "next/link";

// Lazy-load components
const Account = lazy(() => import("@/components/Dashboard/Items/Account"));
const Password = lazy(() => import("@/components/Dashboard/Items/Password"));
const Notifications = lazy(
  () => import("@/components/Dashboard/Items/Notifications")
);
const NewServices = lazy(
  () => import("@/components/Dashboard/Items/NewServices")
);
const Services = lazy(
  () => import("@/components/Dashboard/Items/Services")
);
const Billing = lazy(() => import("@/components/Dashboard/Items/Billing"));
const UserProfile = lazy(
  () => import("@/components/Dashboard/Items/UserProfile")
);

// Define the available component keys as a union type
type ComponentName =
  | "Account"
  | "UserProfile"
  | "Password"
  | "Notifications"
  | "NewServices"
  | "Services"
  | "Billing";

export default function Dash() {
  const [selectedComponent, setSelectedComponent] =
    useState<ComponentName>("Account");

  // Components map for easier dynamic rendering
  const componentsMap: Record<ComponentName, JSX.Element> = {
    Account: <Account />,
    UserProfile: <UserProfile />,
    Password: <Password />,
    Notifications: <Notifications />,
    NewServices: <NewServices />,
    Services: <Services />,
    Billing: <Billing />,
  };

  const [showSubMenu, setShowSubMenu] = useState(false);

  return (
    <div>
      {/* User Banner & Logo */}
      <section className="w-full overflow-hidden">
        <div className="flex flex-col">
          {/* Cover Image */}
          <Image
            src={CoverPhoto}
            alt="User Cover"
            width={1080}
            height={500}
            className="w-full xl:h-[20rem] lg:h-[18rem] md:h-[16rem] sm:h-[14rem] xs:h-[11rem] object-cover"
          />

          {/* Profile Image */}
          <div className="sm:w-[80%] xs:w-[90%] mx-auto flex mt-[-50px] sm:mt-0 mb-10">
            <Image
              src={UserPhoto}
              alt="User Profile"
              width={192}
              height={192}
              className="rounded-md lg:w-[12rem] lg:h-[12rem] md:w-[10rem] md:h-[10rem] sm:w-[8rem] sm:h-[8rem] xs:w-[7rem] xs:h-[7rem] outline outline-2 outline-offset-2 outline-pink-500 relative lg:bottom-[5rem] sm:bottom-[4rem] xs:bottom-[3rem] object-cover"
            />

            {/* FullName */}
            <h1 className="w-full text-left my-12 px-3 sm:px-0 sm:mx-4 xs:pl-4 text-teal-700 lg:text-4xl md:text-3xl sm:text-3xl xs:text-xl uppercase">
              
              <Link href={'/suppliers/profile'}>Sarah El Fassi</Link>
            </h1>
          </div>
        </div>
      </section>
      {/* End User Banner & Logo */}

      {/* User Dash */}

      <div className="bg-gray-100">
        <div className="container mx-auto py-8">
          <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
            {/* Side */}
            <div className="col-span-4 sm:col-span-3">
              {/* Info */}
              <div className="bg-white shadow rounded-lg p-6 ">
                <div className="">
                  <h3 className="font-bold">Sarah El Fassi</h3>
                </div>
                <hr className="my-6 border-t border-gray-300" />
                <div className="flex flex-col">
                  <span className="text-gray-700 uppercase font-bold tracking-wider mb-2">
                    Settings
                  </span>

                  <div>
                    <ul className="flex flex-col">
                      <li
                        className="inline-flex gap-2 items-center cursor-pointer mb-2 bg-slate-100 px-2 py-2 hover:bg-teal-100"
                        onClick={() => setSelectedComponent("Account")}
                      >
                        <MdOutlineSettingsSuggest className="text-pink-500" />{" "}
                        Account
                      </li>
                      <li
                        className="inline-flex gap-2 items-center cursor-pointer mb-2 bg-slate-100 px-2 py-2 hover:bg-teal-100"
                        onClick={() => setSelectedComponent("UserProfile")}
                      >
                        <RiAccountCircleLine className="text-pink-500" />{" "}
                        Profile
                      </li>
                      <li
                        className="inline-flex gap-2 items-center cursor-pointer mb-2 bg-slate-100 px-2 py-2 hover:bg-teal-100"
                        onClick={() => setSelectedComponent("Password")}
                      >
                        <RiLockPasswordLine className="text-pink-500" />{" "}
                        Password
                      </li>
                  
                      {/* Main Services Menu */}
                      <li
                        className="relative inline-flex gap-2 items-center cursor-pointer mb-2 bg-slate-100 px-2 py-2 hover:bg-teal-100"
                        onMouseEnter={() => setShowSubMenu(true)}
                        onMouseLeave={() => setShowSubMenu(false)}
                      >
                        <GiBigDiamondRing className="text-pink-500" />
                        Services
                        {/* Sub-menu */}
                        {showSubMenu && (
                          <ul className="absolute left-10 top-0 ml-[-10px] bg-white border border-gray-300 shadow-lg rounded-md">
                            <li
                              className="px-4 py-2 w-[200px] hover:bg-teal-100 cursor-pointer"
                              onClick={() =>
                                setSelectedComponent("NewServices")
                              }
                            >
                              New Services
                            </li>
                            <li
                              className="px-4 py-2 hover:bg-teal-100 cursor-pointer"
                              onClick={() => setSelectedComponent("Services")}
                            >
                              All Services
                            </li>
                          </ul>
                        )}
                      </li>
                      <li
                        className="inline-flex gap-2 items-center cursor-pointer mb-2 bg-slate-100 px-2 py-2 hover:bg-teal-100"
                        onClick={() => setSelectedComponent("Notifications")}
                      >
                        <MdOutlineNotificationsActive className="text-pink-500" />{" "}
                        Notifications
                      </li>
                      <li
                        className="inline-flex gap-2 items-center cursor-pointer mb-2 bg-slate-100 px-2 py-2 hover:bg-teal-100"
                        onClick={() => setSelectedComponent("Billing")}
                      >
                        <CiCreditCard1 className="text-pink-500" /> Billing
                      </li>
                      <li className="inline-flex gap-2 items-center cursor-pointer mb-2 bg-slate-100 px-2 py-2 hover:bg-teal-100">
                        <MdLogout className="text-pink-500" /> Logout
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* End Info */}
            </div>
            {/* End Side */}

            {/* Main */}
            <div className="col-span-4 sm:col-span-9">
              <div className="bg-white shadow rounded-lg p-6">
                <Suspense
                  fallback={<div className="text-center p-4">Loading...</div>}
                >
                  {componentsMap[selectedComponent] || (
                    <div>Component not found.</div>
                  )}
                </Suspense>
              </div>
            </div>
            {/* END Main */}
          </div>
        </div>
      </div>

      {/* End User Dash */}
    </div>
  );
}
