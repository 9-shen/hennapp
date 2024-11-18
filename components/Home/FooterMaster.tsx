import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaLinkedin, FaTelegram, FaTiktok } from "react-icons/fa";


import logo from "@/public/logo/logo-light.png";

export default function FooterMaster() {
  return (
    <div className="bg-pink-500 pt-9">
      <div className="mx-auto w-full max-w-[1166px] px-4 xl:px-0">
        <div className="flex flex-col justify-between sm:px-[18px] md:flex-row md:px-10">
          <div className="md:w-[316px]">
            <h1 className="text-white font-extrabold">
              <span className=""><Image src={logo} alt={"henna app"} width={180} height={60} /></span>
            </h1>
            <p className="mt-[18px] text-[15px] font-normal text-white/[80%]">
            Henna App simplifies wedding planning
            by providing a comprehensive marketplace accessible on the web and smartphones to improve couples’ efficiency throughout the process.
            </p>
            <div className="mt-[18px] flex gap-4">
              <Link href="#" target="_blank"><FaFacebook className="hover:scale-110 text-white" width={36} height={36} /></Link>
              <Link href="#" target="_blank"><FaInstagram className="hover:scale-110 text-white" width={36} height={36} /></Link>
              <Link href="#" target="_blank"><FaLinkedin className="hover:scale-110 text-white" width={36} height={36} /></Link>
              <Link href="#" target="_blank"><FaTelegram className="hover:scale-110 text-white" width={36} height={36} /></Link>
              <Link href="#" target="_blank"><FaTiktok className="hover:scale-110 text-white" width={36} height={36} /></Link>
            </div>
          </div>
          <div className="md:w-[316px]">
            <div className="mt-[23px] flex">
              <div className="flex h-[38px] w-[38px] items-center justify-center rounded-[75%]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.8472 14.8554L16.4306 12.8764L16.4184 12.8707C16.1892 12.7727 15.939 12.7333 15.6907 12.7562C15.4424 12.7792 15.2037 12.8636 14.9963 13.002C14.9718 13.0181 14.9484 13.0357 14.9259 13.0545L12.6441 14.9998C11.1984 14.2976 9.70595 12.8164 9.00376 11.3895L10.9519 9.07294C10.9706 9.0495 10.9884 9.02606 11.0053 9.00075C11.1407 8.79384 11.2229 8.55667 11.2445 8.31035C11.2661 8.06402 11.2264 7.81618 11.1291 7.58887V7.57762L9.14438 3.15356C9.0157 2.85662 8.79444 2.60926 8.51362 2.44841C8.2328 2.28756 7.9075 2.22184 7.58626 2.26106C6.31592 2.42822 5.14986 3.05209 4.30588 4.01615C3.4619 4.98021 2.99771 6.21852 3.00001 7.49981C3.00001 14.9436 9.05626 20.9998 16.5 20.9998C17.7813 21.0021 19.0196 20.5379 19.9837 19.6939C20.9477 18.85 21.5716 17.6839 21.7388 16.4136C21.7781 16.0924 21.7125 15.7672 21.5518 15.4864C21.3911 15.2056 21.144 14.9843 20.8472 14.8554ZM16.5 19.4998C13.3185 19.4963 10.2682 18.2309 8.01856 15.9813C5.76888 13.7316 4.50348 10.6813 4.50001 7.49981C4.49648 6.58433 4.82631 5.69887 5.42789 5.00879C6.02947 4.3187 6.86167 3.87118 7.76907 3.74981C7.7687 3.75355 7.7687 3.75732 7.76907 3.76106L9.73782 8.16731L7.80001 10.4867C7.78034 10.5093 7.76247 10.5335 7.74657 10.5589C7.60549 10.7754 7.52273 11.0246 7.5063 11.2825C7.48988 11.5404 7.54035 11.7981 7.65282 12.0307C8.5022 13.7679 10.2525 15.5051 12.0084 16.3536C12.2428 16.465 12.502 16.5137 12.7608 16.495C13.0196 16.4762 13.2692 16.3907 13.485 16.2467C13.5091 16.2305 13.5322 16.2129 13.5544 16.1942L15.8334 14.2498L20.2397 16.2232C20.2397 16.2232 20.2472 16.2232 20.25 16.2232C20.1301 17.1319 19.6833 17.9658 18.9931 18.5689C18.3028 19.172 17.4166 19.5029 16.5 19.4998Z" fill="white"></path>
                </svg>
              </div>
              <div className="ml-[18px]">
                <a href="tel:+911800123444" className="font-Inter text-[14px] font-medium text-white">+34 611 25 13 02</a>
                <p className="font-Inter text-[12px] font-medium text-white">Support Number</p>
              </div>
            </div>
            <div className="mt-[23px] flex">
              <div className="flex h-[38px] w-[38px] items-center justify-center rounded-[75%]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.8472 14.8554L16.4306 12.8764L16.4184 12.8707C16.1892 12.7727 15.939 12.7333 15.6907 12.7562C15.4424 12.7792 15.2037 12.8636 14.9963 13.002C14.9718 13.0181 14.9484 13.0357 14.9259 13.0545L12.6441 14.9998C11.1984 14.2976 9.70595 12.8164 9.00376 11.3895L10.9519 9.07294C10.9706 9.0495 10.9884 9.02606 11.0053 9.00075C11.1407 8.79384 11.2229 8.55667 11.2445 8.31035C11.2661 8.06402 11.2264 7.81618 11.1291 7.58887V7.57762L9.14438 3.15356C9.0157 2.85662 8.79444 2.60926 8.51362 2.44841C8.2328 2.28756 7.9075 2.22184 7.58626 2.26106C6.31592 2.42822 5.14986 3.05209 4.30588 4.01615C3.4619 4.98021 2.99771 6.21852 3.00001 7.49981C3.00001 14.9436 9.05626 20.9998 16.5 20.9998C17.7813 21.0021 19.0196 20.5379 19.9837 19.6939C20.9477 18.85 21.5716 17.6839 21.7388 16.4136C21.7781 16.0924 21.7125 15.7672 21.5518 15.4864C21.3911 15.2056 21.144 14.9843 20.8472 14.8554ZM16.5 19.4998C13.3185 19.4963 10.2682 18.2309 8.01856 15.9813C5.76888 13.7316 4.50348 10.6813 4.50001 7.49981C4.49648 6.58433 4.82631 5.69887 5.42789 5.00879C6.02947 4.3187 6.86167 3.87118 7.76907 3.74981C7.7687 3.75355 7.7687 3.75732 7.76907 3.76106L9.73782 8.16731L7.80001 10.4867C7.78034 10.5093 7.76247 10.5335 7.74657 10.5589C7.60549 10.7754 7.52273 11.0246 7.5063 11.2825C7.48988 11.5404 7.54035 11.7981 7.65282 12.0307C8.5022 13.7679 10.2525 15.5051 12.0084 16.3536C12.2428 16.465 12.502 16.5137 12.7608 16.495C13.0196 16.4762 13.2692 16.3907 13.485 16.2467C13.5091 16.2305 13.5322 16.2129 13.5544 16.1942L15.8334 14.2498L20.2397 16.2232C20.2397 16.2232 20.2472 16.2232 20.25 16.2232C20.1301 17.1319 19.6833 17.9658 18.9931 18.5689C18.3028 19.172 17.4166 19.5029 16.5 19.4998Z" fill="white"></path>
                </svg>
              </div>
              <div className="ml-[18px]">
                <a href="tel:+911800123444" className="font-Inter text-[14px] font-medium text-white">+212 768 271 961</a>
                <p className="font-Inter text-[12px] font-medium text-white">Contact Number</p>
              </div>
            </div>
            <div className="mt-[23px] flex">
              <div className="flex h-[38px] w-[38px] items-center justify-center rounded-[75%]">
                <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 0H1C0.801088 0 0.610322 0.0790178 0.46967 0.21967C0.329018 0.360322 0.25 0.551088 0.25 0.75V13.5C0.25 13.8978 0.408035 14.2794 0.68934 14.5607C0.970644 14.842 1.35218 15 1.75 15H18.25C18.6478 15 19.0294 14.842 19.3107 14.5607C19.592 14.2794 19.75 13.8978 19.75 13.5V2.25C19.75 1.85108 19.591 1.46967 19.3107 1.18834C19.0294 0.90703 18.6478 0.75 18.25 0.75H18V1.5H18.25H19V0.75C19 0.334 18.664 0 18.25 0H19ZM1.25 2.25H18.75V13.5H1.25V2.25ZM15.5 9.75H12.5V12.75H15.5V9.75ZM11.75 9H9.5C9.22386 9 9 9.22386 9 9.5V13C9 13.2761 9.22386 13.5 9.5 13.5H12.5C12.7761 13.5 13 13.2761 13 13V9.5C13 9.22386 12.7761 9 12.5 9H11.75ZM5 12.75H8V9.75H5V12.75ZM4 1.5H16V2.25H4V1.5ZM5 4.5H8V3.75H5V4.5Z" fill="white" />
                </svg>
              </div>
              <div className="ml-[18px]">
                <Link href="mailto:contacto@hennapp.es" className="font-Inter text-[14px] font-medium text-white">contacto@hennapp.es</Link>
                <p className="font-Inter text-[12px] font-medium text-white">Email</p>
              </div>
            </div>
          </div>
          <div className="mt-8 md:mt-0 md:w-[316px]">
            <h1 className="font-Inter text-[18px] font-medium text-white">Useful Links</h1>
            <div className="mt-8 flex flex-col gap-2">
              <Link href={"/"} className="font-Inter text-[14px] font-medium text-white">Home</Link>
              <Link href={"/about"} className="font-Inter text-[14px] font-medium text-white">About</Link>
              <Link href={"/services"} className="font-Inter text-[14px] font-medium text-white">Services</Link>
              <Link href={"/suppliers"} className="font-Inter text-[14px] font-medium text-white">Suppliers</Link>
              <Link href={"/suppliers/singlesupplier"} className="font-Inter text-[14px] font-medium text-white">Single Supplier</Link>
              <Link href={"/suppliers/profile"} className="font-Inter text-[14px] font-medium text-white">Supplier Profile</Link>
             
              <Link href={"/blog"} className="font-Inter text-[14px] font-medium text-white">blog</Link>
              <Link href={"/contact"} className="font-Inter text-[14px] font-medium text-white">Contact</Link>
              <Link href={"/dashboard"} className="font-Inter text-[14px] font-medium text-white">Dashboard</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/[10%] mt-[45px] pt-[25px] pb-[20px]">
        <div className="mx-auto w-full max-w-[1166px] px-4 xl:px-0">
          <p className="text-center font-Inter text-[14px] font-normal text-white">© {new Date().getFullYear()} CHAARA APP. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
}
