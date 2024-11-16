"use client";
import React, { useState, ChangeEvent } from "react";
import { CiSquarePlus, CiSquareMinus } from "react-icons/ci";
import { FaStar, FaRegStar } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { StaticImageData } from "next/image";

interface Category {
  name: string;
  CatId: string;
}

const categories: Category[] = [
  { name: "Make-up", CatId: "data-makeup" },
  { name: "Photography", CatId: "data-photography" },
  { name: "Locals", CatId: "data-locals" },
  { name: "Music Group", CatId: "data-music" },
  { name: "Honey Moon", CatId: "data-honey" },
];

// Suppliers

import img_1 from "@/public/SupplierSlider/1.jpg";
import img_2 from "@/public/SupplierSlider/2.jpg";
import img_3 from "@/public/SupplierSlider/3.jpg";
import img_4 from "@/public/SupplierSlider/4.jpg";
import img_5 from "@/public/SupplierSlider/5.jpg";
import img_6 from "@/public/SupplierSlider/6.jpg";

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

const items: SupplierItem[] = [
  {
    id: 1,
    category: "Make Up",
    name: "Jack Bauer",
    city: "Tanger",
    review: 34,
    price: 456,
    imageUrl: img_1,
    href: "/suppliers/singlesupplier",
  },
  {
    id: 2,
    category: "Music",
    name: "Sarah Scott",
    city: "Casablanca",
    review: 45,
    price: 6555,
    imageUrl: img_2,
    href: "/suppliers/singlesupplier",
  },
  {
    id: 3,
    category: "Video",
    name: "Micheal Snow",
    city: "Rabat",
    review: 12,
    price: 887,
    imageUrl: img_3,
    href: "/suppliers/singlesupplier",
  },
  {
    id: 4,
    category: "Tours",
    name: "Ed Bradwey",
    city: "Marrakech",
    review: 78,
    price: 4322,
    imageUrl: img_4,
    href: "/suppliers/singlesupplier",
  },
  {
    id: 5,
    category: "Honey Moon",
    name: "Mariana Lopez",
    city: "Chefchaouen",
    review: 43,
    price: 1500,
    imageUrl: img_5,
    href: "/suppliers/singlesupplier",
  },
  {
    id: 6,
    category: "Locals",
    name: "John Smith",
    city: "Fes",
    review: 98,
    price: 2500,
    imageUrl: img_6,
    href: "/suppliers/singlesupplier",
  },
];

export default function ServiceData() {
  // State to manage each checkbox by its CatId
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  // State to manage the visibility of the filter div on mobile
  const [isVisible, setIsVisible] = useState(false);

  // Function to handle checkbox change
  const handleCheckboxChange = (CatId: string) => {
    setCheckedItems((prevCheckedItems) => ({
      ...prevCheckedItems,
      [CatId]: !prevCheckedItems[CatId],
    }));
  };

  // Function to reset all checkboxes
  const handleReset = () => {
    setCheckedItems({});
  };

  // Price Range
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(1000);

  const handleMinChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(Number(e.target.value), maxPrice - 1);
    setMinPrice(value);
  };

  const handleMaxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(Number(e.target.value), minPrice + 1);
    setMaxPrice(value);
  };

  // Cities
  const cities = [
    "Marrakech",
    "Casablanca",
    "Fes",
    "Rabat",
    "Agadir",
    "Tangier",
    "Oujda",
    "Meknes",
    "Tétouan",
    "Essaouira",
    "Kenitra",
    "El Jadida",
    "Nador",
    "Laayoune",
    "Beni Mellal",
    "Safi",
    "Ksar el Kebir",
    "Ouarzazate",
    "Taza",
    "Taroudant",
    "Mohammedia",
    "Berkane",
    "Settat",
    "Salé",
    "Azilal",
  ];

  const [checkedCities, setCheckedCities] = useState(
    new Array(cities.length).fill(false)
  );

  const citiesHandleCheckboxChange = (index: number) => {
    const updatedCheckedCities = [...checkedCities];
    updatedCheckedCities[index] = !updatedCheckedCities[index];
    setCheckedCities(updatedCheckedCities);
  };

  // Function to toggle visibility of filter section on mobile
  const toggleVisibility = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <div id="service-data" className="p-4">
      {/* Container */}
      <section className="flex flex-wrap">
        {/* div1 - Filter section with conditional visibility on mobile */}
        <div className="w-full md:w-1/4 p-4">
          <div className="bg-white border rounded-lg shadow-md py-2">
            <div className="px-4 pb-3">
              <div className="flex justify-between items-center">
                <h5 className="text-xl font-semibold tracking-tight text-teal-500">
                  Filter:
                </h5>
                <div>
                  <p
                    className="text-gray-600 hover:text-red-600 text-sm cursor-pointer hidden sm:block"
                    onClick={handleReset}
                  >
                    RESET
                  </p>
                  <div className="flex justify-around items-center gap-3">
                    {/* Conditionally render icon based on isVisible */}
                    {isVisible ? (
                      <CiSquareMinus
                        className="text-teal-700 text-2xl sm:hidden block"
                        onClick={toggleVisibility}
                      />
                    ) : (
                      <CiSquarePlus
                        className="text-pink-700 text-2xl sm:hidden block"
                        onClick={toggleVisibility}
                      />
                    )}
                  </div>
                </div>
              </div>
              {/* Filter Options (hidden on mobile unless isVisible is true) */}
              <div
                className={`mt-2 transition-all duration-300 ease-in-out overflow-hidden ${
                  isVisible || "hidden sm:block"
                }`}
                id="filter-category"
              >
                {/* Categories */}
                <div className="gap-3 py-2">
                  {categories.map((cat) => (
                    <div
                      key={cat.CatId}
                      className="flex justify-between items-center space-x-2 rounded p-2 hover:bg-gray-100 accent-pink-600"
                    >
                      <label
                        htmlFor={cat.CatId}
                        className="flex w-full space-x-2 text-sm"
                      >
                        {cat.name}
                      </label>
                      <input
                        type="checkbox"
                        id={cat.CatId}
                        name="languageCheckbox"
                        checked={!!checkedItems[cat.CatId]}
                        onChange={() => handleCheckboxChange(cat.CatId)}
                        className="h-4 w-4 rounded border-gray-300 text-teal-600 shadow-sm focus:border-teal-300 focus:ring focus:ring-teal-200 focus:ring-opacity-50"
                      />
                    </div>
                  ))}
                </div>
                {/* Price Range */}
                <div>
                  <h5 className="text-xl font-semibold tracking-tight text-teal-500">
                    Price Range:
                  </h5>
                  <div className="flex flex-col items-center space-y-4 p-4">
                    <div className="flex space-x-4">
                      {/* Min and Max Price Inputs */}
                      <div className="flex flex-col items-center">
                        <label className="text-sm font-medium">Min Price</label>
                        <input
                          type="number"
                          value={minPrice}
                          onChange={handleMinChange}
                          className="border border-gray-300 p-2 rounded w-24"
                        />
                      </div>
                      <div className="flex flex-col items-center">
                        <label className="text-sm font-medium">Max Price</label>
                        <input
                          type="number"
                          value={maxPrice}
                          onChange={handleMaxChange}
                          className="border border-gray-300 p-2 rounded w-24"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col w-full max-w-lg space-y-2">
                      <input
                        type="range"
                        min="0"
                        max="1000"
                        value={minPrice}
                        onChange={handleMinChange}
                        className="w-full accent-teal-600"
                      />
                      <input
                        type="range"
                        min="0"
                        max="1000"
                        value={maxPrice}
                        onChange={handleMaxChange}
                        className="w-full accent-teal-600"
                      />
                    </div>
                    <div className="text-gray-600 flex flex-col items-center">
                      <p>Selected Price Range:</p>
                      <p>
                        ${minPrice} - ${maxPrice}
                      </p>
                    </div>
                  </div>
                </div>
                {/* Cities */}
                <div className="bg-white border rounded-lg shadow-md p-4">
                  <h5 className="text-xl font-semibold mb-3">Select Cities:</h5>
                  <div className="max-h-40 overflow-y-auto accent-pink-600 scrollbar-smooth">
                    {cities.map((city, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          checked={checkedCities[index]}
                          onChange={() => citiesHandleCheckboxChange(index)}
                          id={`city-${index}`}
                          className="h-4 w-4 rounded border-gray-300 text-teal-600"
                        />
                        <label htmlFor={`city-${index}`} className="text-sm">
                          {city}
                        </label>
                      </div>
                    ))}
                  </div>
                  <p
                    className="text-gray-600 text-sm mt-2 cursor-pointer hover:text-red-600"
                    onClick={() =>
                      setCheckedCities(new Array(cities.length).fill(false))
                    }
                  >
                    RESET
                  </p>
                </div>
                <div className="flex justify-around items-center mt-4">
                  <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300">
                    Clear
                  </button>
                  <button className="px-4 py-2 text-sm font-medium text-white bg-pink-500 rounded-lg hover:bg-pink-800">
                    Apply
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* div2 - takes remaining 67% on larger screens and 100% on mobile */}
        <div className="w-full md:w-3/4 p-4">
          {/* Search Form */}
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
          {/* End Search Form */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 place-items-center sm:place-items-stretch">
            {/* Card 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-2xl w-[280px] mb-3">
              <Image
                className="h-48 w-full object-cover object-center mx-auto"
                src={items[0].imageUrl}
                alt={items[0].name}
                width={200}
                height={200}
              />
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <span className="bg-teal-200 text-teal-800 py-1 px-2 text-xs rounded uppercase font-semibold">
                    {items[0].category}
                  </span>
                  <span className="text-gray-500 text-xs">{items[0].city}</span>
                </div>
                <h4 className="mt-2 font-semibold text-lg leading-tight">
                  <Link href={items[0].href}>{items[0].name}</Link>
                </h4>
                <div className="mt-1 text-lg font-semibold">
                  ${items[0].price}
                </div>
                <div className="text-gray-500 text-sm">/ Event</div>
                <div className="mt-3 flex items-center">
                  <div className="flex text-teal-600">
                    {[...Array(4)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                    <FaRegStar />
                  </div>
                  <span className="ml-2 text-gray-600 text-sm">
                    {items[0].review} reviews
                  </span>
                </div>
              </div>
            </div>
            {/* End Card 1 */}
            {/* Card 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-2xl w-[280px] mb-3">
              <Image
                className="h-48 w-full object-cover object-center mx-auto"
                src={items[1].imageUrl}
                alt={items[1].name}
                width={200}
                height={200}
              />
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <span className="bg-teal-200 text-teal-800 py-1 px-2 text-xs rounded uppercase font-semibold">
                    {items[1].category}
                  </span>
                  <span className="text-gray-500 text-xs">{items[1].city}</span>
                </div>
                <h4 className="mt-2 font-semibold text-lg leading-tight">
                  <Link href={items[1].href}>{items[1].name}</Link>
                </h4>
                <div className="mt-1 text-lg font-semibold">
                  ${items[1].price}
                </div>
                <div className="text-gray-500 text-sm">/ Event</div>
                <div className="mt-3 flex items-center">
                  <div className="flex text-teal-600">
                    {[...Array(4)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                    <FaRegStar />
                  </div>
                  <span className="ml-2 text-gray-600 text-sm">
                    {items[1].review} reviews
                  </span>
                </div>
              </div>
            </div>
            {/* End Card 2 */}
            {/* Card 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-2xl w-[280px] mb-3">
              <Image
                className="h-48 w-full object-cover object-center mx-auto"
                src={items[2].imageUrl}
                alt={items[2].name}
                width={200}
                height={200}
              />
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <span className="bg-teal-200 text-teal-800 py-1 px-2 text-xs rounded uppercase font-semibold">
                    {items[2].category}
                  </span>
                  <span className="text-gray-500 text-xs">{items[2].city}</span>
                </div>
                <h4 className="mt-2 font-semibold text-lg leading-tight">
                  <Link href={items[2].href}>{items[2].name}</Link>
                </h4>
                <div className="mt-1 text-lg font-semibold">
                  ${items[2].price}
                </div>
                <div className="text-gray-500 text-sm">/ Event</div>
                <div className="mt-3 flex items-center">
                  <div className="flex text-teal-600">
                    {[...Array(4)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                    <FaRegStar />
                  </div>
                  <span className="ml-2 text-gray-600 text-sm">
                    {items[2].review} reviews
                  </span>
                </div>
              </div>
            </div>
            {/* End Card 3 */}
            {/* Card 4 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-2xl w-[280px] mb-3">
              <Image
                className="h-48 w-full object-cover object-center mx-auto"
                src={items[3].imageUrl}
                alt={items[3].name}
                width={200}
                height={200}
              />
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <span className="bg-teal-200 text-teal-800 py-1 px-2 text-xs rounded uppercase font-semibold">
                    {items[3].category}
                  </span>
                  <span className="text-gray-500 text-xs">{items[3].city}</span>
                </div>
                <h4 className="mt-2 font-semibold text-lg leading-tight">
                  <Link href={items[3].href}>{items[3].name}</Link>
                </h4>
                <div className="mt-1 text-lg font-semibold">
                  ${items[3].price}
                </div>
                <div className="text-gray-500 text-sm">/ Event</div>
                <div className="mt-3 flex items-center">
                  <div className="flex text-teal-600">
                    {[...Array(4)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                    <FaRegStar />
                  </div>
                  <span className="ml-2 text-gray-600 text-sm">
                    {items[3].review} reviews
                  </span>
                </div>
              </div>
            </div>
            {/* End Card 4 */}
            {/* Card 5 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-2xl w-[280px] mb-3">
              <Image
                className="h-48 w-full object-cover object-center mx-auto"
                src={items[4].imageUrl}
                alt={items[4].name}
                width={200}
                height={200}
              />
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <span className="bg-teal-200 text-teal-800 py-1 px-2 text-xs rounded uppercase font-semibold">
                    {items[4].category}
                  </span>
                  <span className="text-gray-500 text-xs">{items[4].city}</span>
                </div>
                <h4 className="mt-2 font-semibold text-lg leading-tight">
                  <Link href={items[4].href}>{items[4].name}</Link>
                </h4>
                <div className="mt-1 text-lg font-semibold">
                  ${items[4].price}
                </div>
                <div className="text-gray-500 text-sm">/ Event</div>
                <div className="mt-3 flex items-center">
                  <div className="flex text-teal-600">
                    {[...Array(4)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                    <FaRegStar />
                  </div>
                  <span className="ml-2 text-gray-600 text-sm">
                    {items[4].review} reviews
                  </span>
                </div>
              </div>
            </div>
            {/* End Card 6 */}
            {/* Card 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-2xl w-[280px] mb-3">
              <Image
                className="h-48 w-full object-cover object-center mx-auto"
                src={items[5].imageUrl}
                alt={items[5].name}
                width={200}
                height={200}
              />
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <span className="bg-teal-200 text-teal-800 py-1 px-2 text-xs rounded uppercase font-semibold">
                    {items[5].category}
                  </span>
                  <span className="text-gray-500 text-xs">{items[5].city}</span>
                </div>
                <h4 className="mt-2 font-semibold text-lg leading-tight">
                  <Link href={items[5].href}>{items[5].name}</Link>
                </h4>
                <div className="mt-1 text-lg font-semibold">
                  ${items[5].price}
                </div>
                <div className="text-gray-500 text-sm">/ Event</div>
                <div className="mt-3 flex items-center">
                  <div className="flex text-teal-600">
                    {[...Array(4)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                    <FaRegStar />
                  </div>
                  <span className="ml-2 text-gray-600 text-sm">
                    {items[5].review} reviews
                  </span>
                </div>
              </div>
            </div>
            {/* End Card 6 */}
          </div>
          {/* Pagination */}

          <div className="flex justify-center sm:justify-end mt-4">
            {/* <!-- Previous Button --> */}
            <Link
              href="#"
              className="flex items-center justify-center px-3 h-8 me-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <svg
                className="w-3.5 h-3.5 me-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  strokeWidth="2"
                  d="M13 5H1m0 0 4 4M1 5l4-4"
                />
              </svg>
              Previous
            </Link>
            <Link
              href="#"
              className="flex items-center justify-center px-3 h-8 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Next
              <svg
                className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
          </div>

          {/* End Pagination */}
        </div>
        {/* end div2 */}
      </section>
    </div>
  );
}
