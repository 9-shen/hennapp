import Image, { StaticImageData } from "next/image";
import { AiFillLike } from "react-icons/ai";
import { FaCommentDots } from "react-icons/fa6";

import img_1 from "@/public/Blog/1.jpg";
import img_2 from "@/public/Blog/2.jpg";
import img_3 from "@/public/Blog/3.jpg";
import img_4 from "@/public/Blog/4.jpg";
import img_5 from "@/public/Blog/5.jpg";
import img_6 from "@/public/Blog/6.jpg";
import avatar_1 from "@/public/Avatar/1.jpg";
import avatar_2 from "@/public/Avatar/2.jpg";
import avatar_3 from "@/public/Avatar/3.jpg";
import avatar_4 from "@/public/Avatar/4.jpg";
import avatar_5 from "@/public/Avatar/5.jpg";
import avatar_6 from "@/public/Avatar/6.jpg";
import Link from "next/link";

interface BlogItems {
  id: number | string;
  category: string;
  name: string;
  description: string;
  imageUrl: StaticImageData;
  href: string;
  avatar: StaticImageData;
}

const items: BlogItems[] = [
  {
    id: 1,
    category: "Make Up",
    name: "Jack Bauer",
    description:
      "Experience the magic of a Moroccan wedding, where tradition meets vibrant celebration in every detail",
    imageUrl: img_1,
    href: "/blog/singleblog",
    avatar: avatar_1,
  },
  {
    id: 2,
    category: "Music",
    name: "Sarah Scott",
    description:
      "From intricate henna designs to lively drumbeats, Moroccan weddings are a cultural symphony",
    imageUrl: img_2,
    href: "/blog/singleblog",
    avatar: avatar_2,
  },
  {
    id: 3,
    category: "Video",
    name: "Micheal Snow",
    description:
      "Witness the elegance of Moroccan bridal attire, with stunning kaftans and dazzling jewelry.",
    imageUrl: img_3,
    href: "/blog/singleblog",
    avatar: avatar_3,
  },
  {
    id: 4,
    category: "Tours",
    name: "Ed Bradwey",
    description:
      "A Moroccan wedding is a feast for the senses, with colorful decor, fragrant dishes, and joyous music",
    imageUrl: img_4,
    href: "/blog/singleblog",
    avatar: avatar_4,
  },
  {
    id: 5,
    category: "Honey Moon",
    name: "Mariana Lopez",
    description:
      "Celebrate love the Moroccan way – with family, friends, and a night full of unforgettable moments",
    imageUrl: img_5,
    href: "/blog/singleblog",
    avatar: avatar_5,
  },
  {
    id: 6,
    category: "Locals",
    name: "John Smith",
    description:
      "Step into a Moroccan wedding and feel the warmth of hospitality, tradition, and timeless beauty.",
    imageUrl: img_6,
    href: "/blog/singleblog",
    avatar: avatar_6,
  },
];

export default function Blog() {
  return (
    <div>
      {/* Hero Section */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 pb-10 text-center lg:pt-10 bg-gradient-to-r from-blue-200 to-cyan-200">
        <p className="mx-auto -mt-4 max-w-2xl text-lg tracking-tight text-slate-700 sm:mt-6">
          Welcome to
          <span className="border-b border-dotted border-slate-300">
            {" "}
            HENNA BLOG
          </span>
        </p>

        <h1 className="mx-auto max-w-4xl font-display text-2xl font-medium tracking-tight text-slate-900 sm:text-5xl">
          <span className="inline-block">
            A Journey into the
            <span className="relative whitespace-nowrap text-pink-500">
              <svg
                aria-hidden="true"
                viewBox="0 0 418 42"
                className="absolute top-2/3 left-0 h-[0.58em] w-full fill-pink-300/70 animate-bounce"
                preserveAspectRatio="none"
              >
                <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
              </svg>
              <span className="relative">Heart</span>
            </span>
          </span>
          <span className="inline-block">of Tradition </span>
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-lg tracking-tight text-slate-700 sm:mt-9">
          <span className="inline-block">
            Explore the vibrant traditions, music, and elegance of a Moroccan
            wedding celebration.
          </span>
        </p>
      </div>
      {/* End Hero Section */}

      {/* Blog */}

      <div className="max-w-screen-xl mx-auto p-16">
        <div className="sm:grid lg:grid-cols-3 sm:grid-cols-2 gap-10">
          {items.map((item) => (
            <div
              key={item.id}
              className="hover:bg-pink-300 hover:text-white transition duration-300 max-w-sm rounded overflow-hidden shadow-lg"
            >
              <div className="py-4 px-8">
                <Image
                  src={item.avatar}
                  width={50}
                  height={50}
                  alt="#"
                  className="rounded-full h-12 w-12 mb-4"
                />
                <Link href={item.href}>
                  <h4 className="text-lg mb-3 font-semibold">{item.name}</h4>
                </Link>
                <p className="mb-2 text-sm text-gray-600 line-clamp-3">
                  {item.description}
                </p>
                <Link href={item.href}>
                  <Image
                    src={item.imageUrl}
                    width={300}
                    height={300}
                    alt={item.name}
                    className="w-100"
                  />
                </Link>
                <hr className="mt-4" />
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <span className="text-xs">Category</span>
                    <span className="text-xs text-gray-500">
                      {item.category}
                    </span>
                  </div>
                  <div className="flex space-x-4">
                    <div className="flex items-center">
                     <small>12K</small><AiFillLike className="text-blue-500" />
                    </div>
                    <div className="flex items-center">
                      <small>3K</small><FaCommentDots className="text-stone-500"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* End Blog */}

      {/* Load more */}
      <div className="fter:h-px my-24 flex items-center before:h-px before:flex-1  before:bg-gray-300 before:content-[''] after:h-px after:flex-1 after:bg-gray-300  after:content-['']">
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
              fill-rule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clip-rule="evenodd"
            />
          </svg>
          View More
        </button>
      </div>
      {/* End Load More */}
    </div>
  );
}
