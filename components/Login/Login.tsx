import Image from "next/image";
import logo from "@/public/logo/logo.png";
import img_bg from "@/public/LoginSignup/2.jpg";
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";

export default function Login() {
 

  return (
    <div>
      <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
        <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
          <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
            <div>
              <Image
                src={logo}
                width={250}
                height={150}
                alt="Henna App"
                className="w-32 mx-auto"
              />
            </div>
            <div className="mt-12 flex flex-col items-center">
              <h1 className="text-2xl xl:text-3xl font-extrabold">Login</h1>
              <div className="w-full flex-1 mt-8">
                <div className="flex flex-col items-center">
                 
                <div className="mx-auto max-w-xs">
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="email"
                    placeholder="Email"
                  />
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    type="password"
                    placeholder="Password"
                  />
                  <button className="mt-5 tracking-wide font-semibold bg-teal-500 text-gray-100 w-full py-4 rounded-lg hover:bg-teal-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                    <svg
                      className="w-6 h-6 -ml-2"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                      <circle cx="8.5" cy="7" r="4" />
                      <path d="M20 8v6M23 11h-6" />
                    </svg>
                    <span className="ml-3">Login</span>
                  </button>
               
                </div>
                <div className="my-12 border-b text-center">
                  <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                    Or Login with Social Media
                  </div>
                </div>


                <button className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline hover:text-pink-500">
                    <div className="bg-white p-2 rounded-full">
                      <FaGoogle />
                    </div>
                    <span className="ml-4">Login with Google</span>
                  </button>

                  <button className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline mt-5 hover:text-pink-500">
                    <div className="bg-white p-2 rounded-full">
                      <FaFacebook />
                    </div>
                    <span className="ml-4">Login with Facebook</span>
                  </button>
                </div>



              </div>
            </div>
          </div>

          <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
            <div className="relative w-full h-full">
              <Image
                src={img_bg}
                alt="Background Image"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
