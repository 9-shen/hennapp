"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import CoverPhoto from "@/public/Profile/1.jpg";
import UserPhoto from "@/public/Profile/2.jpg";

import { FaUser } from "react-icons/fa";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquarePinterest } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

import { StaticImageData } from "next/image";
import { FaStar, FaRegStar } from "react-icons/fa";

// Suppliers

import sup_1 from "@/public/SupplierSlider/1.jpg";
import sup_2 from "@/public/SupplierSlider/2.jpg";
import sup_3 from "@/public/SupplierSlider/3.jpg";
import sup_4 from "@/public/SupplierSlider/4.jpg";
import sup_5 from "@/public/SupplierSlider/5.jpg";
import sup_6 from "@/public/SupplierSlider/6.jpg";

interface SupplierItem {
  id: number | string;
  category: string;
  name: string;
  city: string;
  review: number;
  price: number;
  imageUrl: StaticImageData;
  href: string;
}

const SupplierItems: SupplierItem[] = [
  {
    id: 1,
    category: "Make Up",
    name: "Jack Bauer",
    city: "Tanger",
    review: 34,
    price: 456,
    imageUrl: sup_1,
    href: "/suppliers/singlesupplier",
  },
  {
    id: 2,
    category: "Music",
    name: "Sarah Scott",
    city: "Casablanca",
    review: 45,
    price: 6555,
    imageUrl: sup_2,
    href: "/suppliers/singlesupplier",
  },
  {
    id: 3,
    category: "Video",
    name: "Micheal Snow",
    city: "Rabat",
    review: 12,
    price: 887,
    imageUrl: sup_3,
    href: "/suppliers/singlesupplier",
  },
  {
    id: 4,
    category: "Tours",
    name: "Ed Bradwey",
    city: "Marrakech",
    review: 78,
    price: 4322,
    imageUrl: sup_4,
    href: "/suppliers/singlesupplier",
  },
  {
    id: 5,
    category: "Honey Moon",
    name: "Mariana Lopez",
    city: "Chefchaouen",
    review: 43,
    price: 1500,
    imageUrl: sup_5,
    href: "/suppliers/singlesupplier",
  },
  {
    id: 6,
    category: "Locals",
    name: "John Smith",
    city: "Fes",
    review: 98,
    price: 2500,
    imageUrl: sup_6,
    href: "/suppliers/singlesupplier",
  },
];

export default function Profile() {
  const [isNumberOpen, setIsNumberOpen] = useState(false);
  // Function to toggle modal visibility
  const numberToggleModel = () => {
    setIsNumberOpen(!isNumberOpen);
  };

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
              <Link href={"/dashboard"}>Sarah El Fassi</Link>
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
            <div className="col-span-4 sm:col-span-4">
              {/* Bio */}
              <div className="bg-white shadow rounded-lg p-6 mb-4">
                <div className="flex flex-col items-center">
                  <div className="mt-6 flex flex-wrap gap-4 justify-center">
                    <h4>Bio</h4>
                  </div>
                </div>
                <hr className="my-6 border-t border-gray-300" />
                <div className="flex flex-col">
                 <div className="text-justify p-3 max-h-60 overflow-y-auto accent-pink-600 scrollbar-smooth ">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit cum distinctio quos, similique, possimus quas earum officiis alias ut labore nihil repudiandae voluptatem vitae placeat fugit excepturi quod itaque tenetur.</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit cum distinctio quos, similique, possimus quas earum officiis alias ut labore nihil repudiandae voluptatem vitae placeat fugit excepturi quod itaque tenetur.</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit cum distinctio quos, similique, possimus quas earum officiis alias ut labore nihil repudiandae voluptatem vitae placeat fugit excepturi quod itaque tenetur.</p>
                 </div>
                  
                </div>
              </div>
              {/* End Bio */}
              {/* Info */}
              <div className="bg-white shadow rounded-lg p-6">
                <div className="flex flex-col items-center">
                  <div className="mt-6 flex flex-wrap gap-4 justify-center">
                    <Link
                      href="#"
                      className="bg-teal-500 hover:bg-teal-700 text-white py-2 px-4 rounded"
                    >
                      Chat Online
                    </Link>
                    <Link
                      href="#"
                      className="bg-pink-500 hover:bg-pink-800 text-white py-2 px-4 rounded"
                    >
                      Contact
                    </Link>
                  </div>
                </div>
                <hr className="my-6 border-t border-gray-300" />
                <div className="flex flex-col">
                  <span className="text-gray-700 uppercase font-bold tracking-wider mb-2">
                    Information
                  </span>
                  <ul>
                    <li className="mb-2">
                      <span className="inline-flex gap-2 items-center">
                        <FaUser className="text-teal-700" /> Sarah El Fassi
                      </span>
                    </li>
                    <li className="mb-2">
                      <span className="inline-flex gap-2 items-center">
                        <BiSolidCategoryAlt className="text-teal-700" />
                        <span className="bg-pink-500 py-1 px-2 text-sm text-white rounded-md">
                          Make-up Artist
                        </span>
                      </span>
                    </li>
                    <li className="mb-2">
                      <span className="inline-flex gap-2 items-center">
                        <FaPhoneSquareAlt className="text-teal-700" />
                        <span
                          className="cursor-pointer hover:text-pink-600"
                          onClick={numberToggleModel}
                        >
                          +212 661 XXX XXX
                        </span>
                      </span>
                    </li>
                    <li className="mb-2">
                      <span className="inline-flex gap-2 items-center">
                        <MdEmail className="text-teal-700" />
                        sarahelfassi@gmail.com
                      </span>
                    </li>
                    <li className="mb-2">
                      <span className="inline-flex gap-2 items-center">
                        <FaMapMarkerAlt className="text-teal-700" />
                        Cite Bab Ftouh, Fez Morocco
                      </span>
                    </li>
                  </ul>
                  <div>
                    <ul className="inline-flex gap-2">
                      <li>
                        <Link href={"#"} className="text-3xl">
                          <FaFacebookSquare />
                        </Link>
                      </li>
                      <li>
                        <Link href={"#"} className="text-3xl">
                          <FaSquareInstagram />
                        </Link>
                      </li>
                      <li>
                        <Link href={"#"} className="text-3xl">
                          <FaSquarePinterest />
                        </Link>
                      </li>
                      <li>
                        <Link href={"#"} className="text-3xl">
                          <FaLinkedin />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* End Info */}
            </div>
            {/* End Side */}

            {/* Main */}
            <div className="col-span-4 sm:col-span-8">
              <div className="bg-white shadow rounded-lg p-6">
                {/* Search Form */}
                <div id="search-form" className="py-8">
                  <label
                    className="mx-auto mb-8 relative bg-white min-w-sm max-w-2xl flex flex-col md:flex-row items-center justify-center border py-2 px-2 rounded-2xl gap-2 shadow-2xl focus-within:border-gray-300"
                    htmlFor="search-bar"
                  >
                    <input
                      id="search-bar"
                      placeholder="your keyword here"
                      className="px-6 py-2 w-full rounded-md flex-1 outline-none bg-white"
                    />
                    <button className="w-full md:w-auto px-6 py-3 bg-black border-black text-white fill-white active:scale-95 duration-100 border will-change-transform overflow-hidden relative rounded-xl transition-all disabled:opacity-70">
                      <div className="relative">
                        {/* <!-- Loading animation change opacity to display --> */}
                        <div className="flex items-center justify-center h-3 w-3 absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 transition-all">
                          <svg
                            className="opacity-0 animate-spin w-full h-full"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                        </div>

                        <div className="flex items-center transition-all opacity-1 valid:">
                          <span className="text-sm font-semibold whitespace-nowrap truncate mx-auto">
                            Search
                          </span>
                        </div>
                      </div>
                    </button>
                  </label>
                </div>
                {/* End Search Form */}
                {/* Suppliers */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 px-2 gap-4 place-items-center">
                  {SupplierItems.map((item) => (
                    <div
                      key={item.id}
                      className="bg-white rounded-lg overflow-hidden shadow-2xl w-full  mb-3 hover:shadow-teal-200"
                    >
                      <Link href={item.href}>
                        <Image
                          className="h-48 w-full object-cover object-center mx-auto"
                          src={item.imageUrl}
                          alt={item.name}
                          width={200}
                          height={200}
                        />
                      </Link>
                      <div className="p-4">
                        <div className="flex items-center justify-between">
                          <span className="bg-pink-200 text-pink-800 py-1 px-2 text-xs rounded uppercase font-semibold">
                            {item.category}
                          </span>
                          <span className="text-gray-500 text-xs">
                            {item.city}
                          </span>
                        </div>
                        <h4 className="mt-2 font-semibold text-lg leading-tight hover:text-pink-500">
                          <Link href={item.href}>{item.name}</Link>
                        </h4>
                        <div className="mt-3 flex items-center">
                          <div className="flex text-pink-600">
                            {[...Array(4)].map((_, i) => (
                              <FaStar key={i} />
                            ))}
                            <FaRegStar />
                          </div>
                          <span className="ml-2 text-gray-600 text-sm">
                            {item.review} reviews
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* End Suppliers */}
                {/* Load more */}
      <div className="fter:h-px my-8 flex items-center before:h-px before:flex-1  before:bg-gray-300 before:content-[''] after:h-px after:flex-1 after:bg-gray-300  after:content-['']">
        <button
          type="button"
          className="flex items-center rounded-full border border-gray-300 bg-secondary-50 px-3 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="mr-1 h-4 w-4"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
          View More
        </button>
      </div>
      {/* End Load More */}
              </div>
            </div>
            {/* END Main */}
          </div>
        </div>
      </div>

      {/* End User Dash */}

      {/* Discover The Number */}

      {isNumberOpen && (
        <div className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-30">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg relative">
            <span className="text-teal-500">Sarah El Fassi</span>
            {/* Close Button */}
            <button
              className="absolute top-1 right-2 bg-red-500 text-white px-2 py-1 rounded-full"
              onClick={numberToggleModel}
            >
              &times;
            </button>

            <div className="py-4 flex flex-col space-y-4 mt-2">
              <div className="max-h-80 overflow-x-hidden overflow-y-auto scrollbar-smooth">
                Access to supplier numbers is available exclusively to premium
                members. Please contact us to unlock the full experience and
                enjoy all the benefits
              </div>
              <Link href={"/contact"} className="flex justify-end">
                <button className="bg-teal-500 hover:bg-teal-700  py-2 px-4 text-white rounded-md">
                  Contact us
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* End Discover The Number */}
    </div>
  );
}
