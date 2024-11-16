import Image, { StaticImageData } from "next/image";
import img_1 from "@/public/About/1.jpg";
import logo from "@/public/logo/logo.png";
import { TbTargetArrow } from "react-icons/tb";
import { RiAndroidFill, RiEye2Line } from "react-icons/ri";
import { FaAppStoreIos, FaHandshake } from "react-icons/fa";
import Link from "next/link";

import oumnia from "@/public/Team/oumnia.jpg";
import nouaman from "@/public/Team/nouaman.jpg";
import ahmed from "@/public/Team/ahmed.jpg";
import karim from "@/public/Team/karim.jpg";
import eslam from "@/public/Team/eslam.jpg";
import nabowy from "@/public/Team/nabowy.jpg";

// import oumnia from "@/public/avatar/3.jpg";
// import nouaman from "@/public/avatar/2.jpg";
// import ahmed from "@/public/avatar/4.jpg";
// import karim from "@/public/avatar/6.jpg";
// import eslam from "@/public/avatar/8.jpg";
// import nabowy from "@/public/avatar/10.jpg";

interface Team {
  name: string;
  role: string;
  imgUrl: StaticImageData;
}

const teams: Team[] = [
  {
    name: "Oumnia Chaara",
    role: "CEO",
    imgUrl: oumnia,
  },
  {
    name: "Nouaman Bentaj",
    role: "Marketing",
    imgUrl: nouaman,
  },
  {
    name: "Eslam Ghazy",
    role: "Android Dev",
    imgUrl: eslam,
  },
  {
    name: "Nabowy Mahmoud",
    role: "FrontEnd Dev",
    imgUrl: nabowy,
  },
  {
    name: "Karim Alaa Hamed",
    role: "BackEnd Dev",
    imgUrl: karim,
  },
  {
    name: "Ahmed Sharaf",
    role: "Ios Dev",
    imgUrl: ahmed,
  },
];

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 pb-10 text-center lg:pt-10 bg-gradient-to-r from-blue-200 to-cyan-200">
        <p className="mx-auto -mt-4 max-w-2xl text-lg tracking-tight text-slate-700 sm:mt-6">
          your ultimate destination for turning dream
          <span className="border-b border-dotted border-slate-300">
            {" "}
            weddings into reality
          </span>
        </p>

        <h1 className="mx-auto max-w-4xl font-display text-2xl font-medium tracking-tight text-slate-900 sm:text-5xl">
          <span className="inline-block">
            Welcome To
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
          <span className="inline-block">App </span>
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-lg tracking-tight text-slate-700 sm:mt-9">
          <span className="inline-block">
            Collaborate with top vendors to design every last detail of your
            celebration
          </span>
        </p>
      </div>
      {/* End Hero Section */}

      {/* About us */}
      <div id="about" className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <svg
              className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100"></polygon>
            </svg>

            <div className="pt-1"></div>

            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h2 className="my-6 text-2xl tracking-tight font-extrabold text-pink-500 sm:text-3xl md:text-4xl">
                  About Henna App
                </h2>

                <p className="">
                  Henna App is dedicated to simplifying and enriching the
                  wedding planning experience, making dream weddings a reality.
                  Our vision is to revolutionize weddings through a centralized,
                  stress-free platform that seamlessly connects couples with
                  trusted suppliers and services. We empower couples with
                  innovative technology, personalized recommendations, and smart
                  planning tools to create unforgettable and unique
                  celebrations, ensuring every detail counts for lasting
                  memories.
                </p>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <Image
            className="h-56 w-full object-cover object-top sm:h-72 md:h-96 lg:w-full lg:h-full"
            src={img_1}
            alt="Henna App"
            width={1920}
            height={350}
          />
        </div>
      </div>
      {/* End About us */}
      {/* Features */}
      <section
        id="features"
        className="container mx-auto px-4 space-y-6 bg-slate-50 py-8 md:py-12 lg:py-20"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-bold text-xl leading-[1.1] sm:text-3xl md:text-2xl">
            Your Path to Effortless Wedding Planning
          </h2>

          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Transforming wedding dreams into reality with innovative tools,
            trusted suppliers, and stress-free solutions for a joyful journey to
            your perfect day.
          </p>
        </div>

        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
          <div className="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-500 p-2">
            <div className="flex  flex-col justify-between rounded-md p-6">
              <TbTargetArrow className="h-12 w-12 text-pink-500" />
              <div className="space-y-2">
                <h3 className="font-bold text-teal-500">Our Goals</h3>
                <p className="text-sm text-muted-foreground">
                  At Henna App, we are dedicated to simplifying and enriching
                  the wedding planning experience. Our goal is to empower
                  couples to plan their special day with ease and joy, creating
                  unforgettable memories. We believe every couple deserves a
                  stress-free journey to their perfect wedding, and we are here
                  to make that happen.
                </p>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-500 p-2">
            <div className="flex flex-col justify-between rounded-md p-6">
              <RiEye2Line className="h-12 w-12 text-pink-500" />

              <div className="space-y-2">
                <h3 className="font-bold text-teal-500">Our Visions</h3>
                <p className="text-sm">
                  Our vision is to revolutionize the way weddings are planned by
                  offering a centralized and stress-free platform. We bring
                  together couples, suppliers, and services in one seamless
                  solution, transforming what can be a complex process into a
                  delightful experience. We strive to make every wedding unique,
                  personal, and effortlessly memorable.
                </p>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-500 p-2">
            <div className="flex flex-col justify-between rounded-md p-6">
              <FaHandshake className="h-12 w-12 text-pink-500" />

              <div className="space-y-2">
                <h3 className="font-bold text-teal-500">Our Mission</h3>
                <p className="text-sm">
                  Henna App facilitmates connections between couples and wedding
                  suppliers through innovative technology and exceptional
                  planning tools. We simplify every step of the process,
                  providing access to trusted vendors, personalized
                  recommendations, and smart tools that help create beautiful
                  memories. we are committed to making every detail count.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Features */}

      {/* Video Section */}

      <div className="bg-gray-50">
        <main className="w-full flex justify-center flex-wrap sm:flex-row-reverse gap-6 p-4 md:pt-10">
          <div className="px-4 max-w-[640px]">
            <Image src={logo} width={200} height={150} alt="henna app" />
            <h1 className="md:text-start text-center pt-2 font-extrabold text-[36px] md:text-[50px] leading-10 md:leading-[54px]">
              Celebrate Love,
              <br />
              Moroccan & Spanish Style!
            </h1>

            <p className="md:text-start text-center py-8 text-xl md:text-2xl font-bold text-gray-600">
              Discover the first-ever app to blend the magic of Moroccan and
              Spanish weddings! Plan your dream wedding with unique cultural
              touches, expert vendors, and everything you need for a perfect
              celebration. Download now!
            </p>
            <div className="mt-12 flex flex-col justify-center gap-y-5 sm:mt-10 sm:flex-row sm:gap-y-0 sm:gap-x-6">
              <Link
                className="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-slate-900 text-white hover:bg-slate-700 hover:text-slate-100 active:bg-slate-800 active:text-slate-300 focus-visible:outline-slate-900"
                href="#"
              >
                <RiAndroidFill className="mr-2" /> Download Android
              </Link>
              <Link
                className="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-white text-slate-900 border border-slate-900 hover:bg-slate-100 active:bg-slate-200"
                href="#"
              >
                <FaAppStoreIos className="mr-2" /> Download IOS Apple
              </Link>
            </div>
          </div>

          <div className="relative max-w-lg flex justify-center items-center">
            <iframe
              width="320"
              height="640"
              className="shadow-[10px_10px_5px_12px_rgb(93, 220, 220)] rounded-xl border-4 border-black"
              src="https://www.youtube.com/embed/_RmLn4ls7wg?si=El3n-R0dGdDvoxWW"
              title="Henna App"
            ></iframe>

            <span className="absolute -right-1 top-28  border-4 border-black h-10 rounded-md"></span>
            <span className="absolute -right-1 top-[220px]  border-4 border-black h-24 rounded-md"></span>
          </div>
        </main>
      </div>

      {/* End Video Section */}
      {/* Team */}
      <section id="our-team" className="py-32">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-primary">
            Meet Our Team
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* <!-- Team Member --> */}
            {teams.map((item, index) => (
              <div className="text-center" key={index}>
                <Image
                  className="mb-3 rounded-xl mx-auto"
                  src={item.imgUrl}
                  height={200}
                  width={200}
                  alt={item.name}
                />

                <h3 className="hover:text-pink-500 text-gray-900 font-semibold">
                  {item.name}
                </h3>
                <p className="text-teal-500 uppercase text-sm">{item.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* End Team */}
    </div>
  );
}
