import Link from "next/link";
import Image from "next/image";
import { MdOutlineLocalPhone } from "react-icons/md";
import { FaMapSigns } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { MdEmail } from "react-icons/md";


import img_1 from "@/public/Branch/1.jpg";
import img_2 from "@/public/Branch/2.jpg";
import img_3 from "@/public/Branch/3.jpg";
import img_4 from "@/public/Branch/4.jpg";

export default function Contact() {
  return (
    <div>
      {/* Hero Section */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 pb-10 text-center lg:pt-10 bg-gradient-to-r from-blue-200 to-cyan-200">
        <p className="mx-auto -mt-4 max-w-2xl text-lg tracking-tight text-slate-700 sm:mt-6">
          We are Here to Listen
        </p>

        <h1 className="mx-auto max-w-4xl font-display text-2xl font-medium tracking-tight text-slate-900 sm:text-5xl">
          <span className="inline-block">
            Contat{" "}
            <span className="relative whitespace-nowrap text-pink-500">
              <svg
                aria-hidden="true"
                viewBox="0 0 418 42"
                className="absolute top-2/3 left-0 h-[0.58em] w-full fill-pink-300/70 animate-bounce"
                preserveAspectRatio="none"
              >
                <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
              </svg>
              <span className="relative">Henna </span>
            </span>
          </span>
          <span className="inline-block">App </span>
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-lg tracking-tight text-slate-700 sm:mt-9">
          <span className="inline-block">
            We are here to help! Reach out to us with any questions, feedback,
            or requests. Your thoughts are important to us, and we will get back
            to you as soon as we can
          </span>
        </p>
      </div>
      {/* End Hero Section */}
      {/* Contact From & Map */}

      <section className="mb-20">
        <div
          id="map"
          className="relative h-[400px] overflow-hidden bg-cover bg-[50%] bg-no-repeat"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4300.91661734637!2d-5.318568248271683!3d35.88882268736802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0ca3f0ca6830c7%3A0x8b0dc9d2fc3d556e!2sHenna%20App!5e0!3m2!1sen!2sma!4v1731349618720!5m2!1sen!2sma"
            width="100%"
            height={480}
            loading={"lazy"}
          ></iframe>
        </div>
        <div className="container px-6 md:px-12">
          <div className="block rounded-lg bg-[hsla(0,0%,100%,0.8)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px] border border-gray-300">
            <div className="flex flex-wrap">
              <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6">
                <form>
                  <div className="relative mb-6" data-te-input-wrapper-init>
                    <input
                      type="text"
                      className="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none "
                      id="exampleInput90"
                    />
                    <label
                      className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none "
                      htmlFor="exampleInput90"
                    >
                      Name
                    </label>
                  </div>
                  <div className="relative mb-6" data-te-input-wrapper-init>
                    <input
                      type="email"
                      className="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none "
                      id="exampleInput91"
                    />
                    <label
                      className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none "
                      htmlFor="exampleInput91"
                    >
                      Email address
                    </label>
                  </div>
                  <div className="relative mb-6" data-te-input-wrapper-init>
                    <textarea
                      className="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none "
                      id="exampleFormControlTextarea1"
                      rows={3}
                    ></textarea>
                    <label
                      htmlFor="exampleFormControlTextarea1"
                      className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none "
                    >
                      Message
                    </label>
                  </div>
                  <div className="mb-6 inline-block min-h-[1.5rem] justify-center pl-[1.5rem] md:flex">
                    <input
                      className="relative float-left mt-[0.15rem] mr-[6px] -ml-[1.5rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:ml-[0.25rem] checked:after:-mt-px checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-t-0 checked:after:border-l-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:ml-[0.25rem] checked:focus:after:-mt-px checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-t-0 checked:focus:after:border-l-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent "
                      type="checkbox"
                      value=""
                      id="exampleCheck96"
                      checked
                    />
                    <label
                      className="inline-block pl-[0.15rem] hover:cursor-pointer"
                      htmlFor="exampleCheck96"
                    >
                      Send me a copy of this message
                    </label>
                  </div>
                  <button
                    type="button"
                    className="mb-6 w-full rounded bg-teal-500 text-white px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal   lg:mb-0"
                  >
                    Send
                  </button>
                </form>
              </div>
              <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
                <div className="flex flex-wrap">
                  <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12">
                    <div className="flex items-start">
                      <div className="shrink-0">
                        <div className="inline-block rounded-md bg-pink-500 p-4 text-primary hover:bg-pink-800">
                          <MdOutlineLocalPhone className="w-7 h-7 text-white" />
                        </div>
                      </div>
                      <div className="ml-6 grow">
                        <p className="mb-2 font-bold ">Technical Support</p>
                        <p className="text-sm text-neutral-500">
                          <Link href="mailto:contacto@hennapp.es">
                            contacto@hennapp.es
                          </Link>
                        </p>
                        <p className="text-sm text-neutral-500">
                          <Link href="tel:+34611251302">+34 611 25 13 02</Link>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12">
                    <div className="flex items-start">
                      <div className="srink-0">
                        <div className="inline-block rounded-md bg-pink-500 hover:bg-pink-800 p-4 text-primary">
                          <FaMapMarkerAlt className="w-7 h-7 text-white" />
                        </div>
                      </div>
                      <div className="ml-6 grow">
                        <p className="mb-2 font-bold ">Address</p>
                        <p className="text-sm text-neutral-500">
                          Revellin Del Angulo, Av. San Francisco Javier, 51001
                          Ceuta, Spain
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:px-3 lg:mb-12 lg:w-full lg:px-6 xl:w-6/12">
                    <div className="align-start flex">
                      <div className="shrink-0">
                        <div className="inline-block rounded-md bg-pink-500 hover:bg-pink-800 p-4 text-primary">
                          <BsWhatsapp className="w-7 h-7 text-white" />
                        </div>
                      </div>
                      <div className="ml-6 grow">
                        <p className="mb-2 font-bold ">WhatsApp</p>
                        <p className="text-neutral-500">
                          <Link href="tel:+212768271961">+212 768 271 961</Link>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:mb-12 xl:w-6/12">
                    <div className="align-start flex">
                      <div className="shrink-0">
                        <div className="inline-block rounded-md bg-pink-500 hover:bg-pink-800 p-4 text-primary">
                          <FaMapSigns className="w-7 h-7 text-white" />
                        </div>
                      </div>
                      <div className="ml-6 grow">
                        <p className="mb-2 font-bold ">Location</p>
                        <p className="text-neutral-500">
                          Ceuta, Tanger, Tetouan, Alexandria
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* End Contact & MAP */}
      {/* Our Branch */}
      <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
      {/* Header Section */}
      <div className="border-b mb-10 flex justify-center text-sm">
        <div className="text-pink-600 flex items-center pb-2 pr-2 border-b-2 border-pink-600 uppercase">
          
          <h2 className="font-semibold inline-block">
           Our Branch
          </h2>
        </div>
        
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Card 1 */}
        <div className="rounded overflow-hidden shadow-lg flex flex-col">
          <div className="relative">
            <a href="#">
              <Image
                src={img_2}
                alt="Sunset in the mountains"
                layout="responsive"
                width={500}
                height={300}
                className="w-full"
              />
              <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
            </a>
            <a href="#!">
              <div className="text-xs absolute top-0 right-0 bg-teal-500 px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-teal-800 transition duration-500 ease-in-out">
                Ceuta
              </div>
            </a>
          </div>
          <div className="px-6 py-4 mb-auto">
            <a
              href="#"
              className="font-medium text-lg  hover:text-teal-600 transition duration-500 ease-in-out inline-block mb-2"
            >
              Ceuta, Spain
            </a>
            <p className="text-gray-500 text-sm">
                <div className="flex gap-2 items-center"><MdEmail /> contacto@hennapp.es</div>
                <div className="flex gap-2 items-center"><BsWhatsapp /> +212 768 271 961</div>
            
            </p>
          </div>
          
        </div>
        <div className="rounded overflow-hidden shadow-lg flex flex-col">
          <div className="relative">
            <a href="#">
              <Image
                src={img_1}
                alt="Sunset in the mountains"
                layout="responsive"
                width={500}
                height={300}
                className="w-full"
              />
              <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
            </a>
            <a href="#!">
              <div className="text-xs absolute top-0 right-0 bg-teal-500 px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-teal-800 transition duration-500 ease-in-out">
                Tetouan
              </div>
            </a>
          </div>
          <div className="px-6 py-4 mb-auto">
            <a
              href="#"
              className="font-medium text-lg  hover:text-teal-600 transition duration-500 ease-in-out inline-block mb-2"
            >
              Tetouan, Morocco
            </a>
            <p className="text-gray-500 text-sm">
                <div className="flex gap-2 items-center"><MdEmail /> contacto@hennapp.es</div>
                <div className="flex gap-2 items-center"><BsWhatsapp /> +212 768 271 961</div>
            
            </p>
          </div>
          
        </div>
        <div className="rounded overflow-hidden shadow-lg flex flex-col">
          <div className="relative">
            <a href="#">
              <Image
                src={img_4}
                alt="Sunset in the mountains"
                layout="responsive"
                width={500}
                height={300}
                className="w-full"
              />
              <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
            </a>
            <a href="#!">
              <div className="text-xs absolute top-0 right-0 bg-teal-500 px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-teal-800 transition duration-500 ease-in-out">
                Tanger
              </div>
            </a>
          </div>
          <div className="px-6 py-4 mb-auto">
            <a
              href="#"
              className="font-medium text-lg hover:text-teal-600 transition duration-500 ease-in-out inline-block mb-2"
            >
              Tanger, Morocco
            </a>
            <p className="text-gray-500 text-sm">
                <div className="flex gap-2 items-center"><MdEmail /> contacto@hennapp.es</div>
                <div className="flex gap-2 items-center"><BsWhatsapp /> +212 768 271 961</div>
            
            </p>
          </div>
          
        </div>
        <div className="rounded overflow-hidden shadow-lg flex flex-col">
          <div className="relative">
            <a href="#">
              <Image
                src={img_3}
                alt="Sunset in the mountains"
                layout="responsive"
                width={500}
                height={300}
                className="w-full"
              />
              <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
            </a>
            <a href="#!">
              <div className="text-xs absolute top-0 right-0 bg-teal-500 px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-teal-800 transition duration-500 ease-in-out">
                Alexandria
              </div>
            </a>
          </div>
          <div className="px-6 py-4 mb-auto">
            <a
              href="#"
              className="font-medium text-lg  hover:text-teal-600 transition duration-500 ease-in-out inline-block mb-2"
            >
              Alexandria, Egypt
            </a>
            <p className="text-gray-500 text-sm">
                <div className="flex gap-2 items-center"><MdEmail /> contacto@hennapp.es</div>
                <div className="flex gap-2 items-center"><BsWhatsapp /> +212 768 271 961</div>
            
            </p>
          </div>
          
        </div>
        
      </div>
    </div>
      {/* End Our Branch */}
    </div>
  );
}
