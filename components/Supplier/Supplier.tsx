"use client";
import Link from "next/link";
import Image from "next/image";
import { StaticImageData } from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaStar, FaRegStar } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules"; // Swiper modules for additional functionalities

// Categories
import img_1 from "@/public/Carousel/1.jpg";
import img_2 from "@/public/Carousel/2.jpg";
import img_3 from "@/public/Carousel/3.jpg";
import img_4 from "@/public/Carousel/4.jpg";
import img_5 from "@/public/Carousel/5.jpg";
import img_6 from "@/public/Carousel/6.jpg";

interface CarouselItem {
  id: number | string;
  title: string;
  imageUrl: StaticImageData;
  href: string;
}

const items: CarouselItem[] = [
  { id: 1, title: "Make-up", imageUrl: img_1, href: "/makeup" },
  { id: 2, title: "Photography", imageUrl: img_2, href: "/photograph" },
  { id: 3, title: "Locals", imageUrl: img_3, href: "/locals" },
  { id: 4, title: "Music", imageUrl: img_4, href: "/music" },
  { id: 5, title: "Honey Moon", imageUrl: img_5, href: "/honeymoon" },
  { id: 6, title: "Catering", imageUrl: img_6, href: "/catering" },
];

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
  {
    id: 7,
    category: "Ngafa",
    name: "Nazal Signature",
    city: "Asilah",
    review: 88,
    price: 3600,
    imageUrl: sup_4,
    href: "/suppliers/singlesupplier",
  },
  {
    id: 8,
    category: "Video",
    name: "Souad",
    city: "Oujdq",
    review: 38,
    price: 700,
    imageUrl: sup_1,
    href: "/suppliers/singlesupplier",
  },
];

export default function Supplier() {
  return (
    <div>
      {/* Hero Section */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 pb-10 text-center lg:pt-10 bg-gradient-to-r from-blue-200 to-cyan-200">
        <p className="mx-auto -mt-4 max-w-2xl text-sm md:text-lg tracking-tight text-slate-700 sm:mt-6">
          Discover High-Quality Henna and Trusted
          <span className="border-b border-dotted border-slate-300">
            {" "}
            Suppliers for Your Special Events
          </span>
        </p>

        <h1 className="mx-auto max-w-4xl font-display text-2xl font-medium tracking-tight text-slate-900 sm:text-5xl">
          <span className="inline-block">
            Connect with the Best
            <span className="relative whitespace-nowrap text-pink-500">
              <svg
                aria-hidden="true"
                viewBox="0 0 418 42"
                className="absolute top-2/3 left-0 h-[0.58em] w-full fill-pink-300/70 animate-bounce"
                preserveAspectRatio="none"
              >
                <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
              </svg>
              <span className="relative">Henna</span>
            </span>
          </span>
          <span className="inline-block">Suppliers </span>
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-lg tracking-tight text-slate-700 sm:mt-9">
          <span className="inline-block">
            Find top-rated henna suppliers tailored to your unique needs. Access
            a network of experienced professionals who provide premium henna
            products and exceptional service
          </span>
        </p>
      </div>
      {/* End Hero Section */}
      {/* Categories */}
      <div className="relative w-full max-w-7xl mx-auto p-5">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          //pagination={{ clickable: true }}
          //autoplay={{ delay: 3000 }}
          breakpoints={{
            1200: {
              slidesPerView: 5,
              slidesPerGroup: 5,
            },
            1024: {
              slidesPerView: 3,
              slidesPerGroup: 3,
            },
            768: {
              slidesPerView: 2,
              slidesPerGroup: 2,
            },
            640: {
              slidesPerView: 1,
              slidesPerGroup: 1,
            },
          }}
          className="h-[250px]" // Adjust the height as needed
        >
          {items.map((item) => (
            <SwiperSlide key={item.id}>
              <div
                className="relative h-64 bg-cover bg-center rounded-lg overflow-hidden shadow-lg"
                style={{ backgroundImage: `url(${item.imageUrl.src})` }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-40 hover:bg-opacity-50 transition-all duration-300 flex items-end">
                  <h3 className="w-full text-center text-white text-xl font-bold p-4 bg-opacity-60 bg-black">
                    <Link href={item.href}>{item.title}</Link>
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* End Categories */}

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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-5 gap-4 place-items-center">
        {SupplierItems.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg overflow-hidden shadow-2xl w-[280px] mb-3 hover:shadow-pink-200"
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
                <span className="bg-teal-200 text-teal-800 py-1 px-2 text-xs rounded uppercase font-semibold">
                  {item.category}
                </span>
                <span className="text-gray-500 text-xs">{item.city}</span>
              </div>
              <h4 className="mt-2 font-semibold text-lg leading-tight hover:text-teal-500">
                <Link href={item.href}>{item.name}</Link>
              </h4>
              <div className="mt-3 flex items-center">
                <div className="flex text-teal-600">
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
      {/* Pagination */}
      <div className="flex justify-center">
        <nav className="inline-flex items-center p-1 mt-5 mb-10 rounded bg-white space-x-2">
          <a
            className="p-1 rounded border text-black bg-white hover:text-white hover:bg-pink-600 hover:border-pink-600"
            href="#"
          >
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
              />
            </svg>
          </a>
          <p className="text-gray-500">Page 1 of 10</p>
          <a
            className="p-1 rounded border text-black bg-white hover:text-white hover:bg-pink-600 hover:border-pink-600"
            href="#"
          >
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </a>
        </nav>
      </div>
      {/* End pagination */}
    </div>
  );
}
