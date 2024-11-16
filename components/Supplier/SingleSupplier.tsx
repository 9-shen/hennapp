"use client";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import { CiSquarePlus } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import CategorySlider from "@/components/Home/CategorySlider"; // import cetegory slider from home
import RecentSuppliersSlider from "@/components/Home/RecentSuppliersSlider"; // import recent slider from home
import SingleStyle from "@/_css/SingleSupplier.module.css"; // custom css for chat modal

import img_1 from "@/public/SingleSupplier/1.jpg";
import img_2 from "@/public/SingleSupplier/2.jpg";
import img_3 from "@/public/SingleSupplier/3.jpg";
import img_4 from "@/public/SingleSupplier/4.jpg";
import img_5 from "@/public/SingleSupplier/5.jpg";

import avatar_1 from "@/public/Avatar/1.jpg";
import avatar_2 from "@/public/Avatar/2.jpg";

export default function ProductPage() {
  // Images
  // Initial main image state
  const [mainImage, setMainImage] = useState<StaticImageData>(img_1);

  // Function to handle image change
  const changeImage = (src: StaticImageData) => {
    setMainImage(src);
  };

  //   Modal - See More

  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle modal visibility
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  // Modal - Chat Online

  const [isChatOpen, setIsChatOpen] = useState(false);
  // Function to toggle modal visibility
  const chatToggleModel = () => {
    setIsChatOpen(!isChatOpen);
  };

  // Modal - Contact
  const [isContactOpen, setIsContatOpen] = useState(false);
  // function to toggle the modal visibility
  const contactToggleModal = () => {
    setIsContatOpen(!isContactOpen);
  };

  // Modal - Add Review

  const [isReviewOpen, setIsReviewOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const handleRating = (value: number) => {
    setRating(value);
  };

  const openReviewModal = () => {
    setIsReviewOpen(!isReviewOpen);
  };

  return (
    <div className="">
      <div className="container mx-auto px-4 py-8 bg-gray-100">
        <div className="flex flex-wrap -mx-4">
          {/* Product Images */}
          <div className="w-full md:w-1/2 px-4 mb-8">
            <div className="relative w-full h-80">
              <Image
                src={mainImage}
                alt="Product"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-md"
              />
            </div>
            <div className="flex gap-4 py-4 justify-center overflow-x-auto">
              <div
                className="relative w-16 sm:w-20 h-16 sm:h-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                onClick={() => changeImage(img_1)}
              >
                <Image
                  src={img_1}
                  alt="Thumbnail 1"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
              </div>
              <div
                className="relative w-16 sm:w-20 h-16 sm:h-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                onClick={() => changeImage(img_2)}
              >
                <Image
                  src={img_2}
                  alt="Thumbnail 2"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
              </div>
              <div
                className="relative w-16 sm:w-20 h-16 sm:h-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                onClick={() => changeImage(img_3)}
              >
                <Image
                  src={img_3}
                  alt="Thumbnail 3"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
              </div>
              <div
                className="relative w-16 sm:w-20 h-16 sm:h-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                onClick={() => changeImage(img_4)}
              >
                <Image
                  src={img_4}
                  alt="Thumbnail 4"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
              </div>
              <div
                className="relative w-16 sm:w-20 h-16 sm:h-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                onClick={() => changeImage(img_5)}
              >
                <Image
                  src={img_5}
                  alt="Thumbnail 5"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div className="w-full md:w-1/2 px-4">
            <div className="flex justify-between">
              <div>
                <h2 className="text-3xl font-bold mb-2"><Link href={"/suppliers/profile"}>Nawal Signature</Link></h2>
                <p className="text-gray-600 mb-4">
                  Category : Wedding Dressing
                </p>
              </div>
              <div>
                <Link href={"/suppliers/profile"}><CgProfile className="text-4xl text-pink-700" /></Link>
              </div>
            </div>
            <div className="mb-4">
              <span className="text-2xl font-bold mr-2">$1000</span>
              <span className="text-gray-500">$2000</span>
            </div>
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-pink-500"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005z"
                    clipRule="evenodd"
                  />
                </svg>
              ))}
              <span className="ml-2 text-gray-600">
                4.5{" "}
                <Link
                  className="text-teal-500 cursor-pointer"
                  href="#review-section"
                >
                  (120 reviews)
                </Link>
              </span>{" "}
              <span>
                <CiSquarePlus
                  className="text-2xl ml-3 cursor-pointer hover:text-pink-600 animate-bounce"
                  onClick={openReviewModal}
                />
              </span>
            </div>
            <p className="text-gray-700 mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
              adipisci aut iure debitis sint illo impedit quasi placeat quis
              quod consectetur at odio a cum, itaque, quos, officia soluta
              architecto Lorem ipsum dolor sit amet consectetur adipisicing
              elit.{" "}
              <span
                onClick={toggleModal}
                className="text-pink-500 cursor-pointer"
              >
                See More
              </span>
            </p>

            <div className="flex space-x-4">
              <button
                className="bg-teal-600 hover:bg-teal-800 text-white font-semibold py-2 px-4 rounded shadow-lg transition duration-300"
                onClick={chatToggleModel}
              >
                Chat Online
              </button>
              <button
                className="bg-pink-500 border border-pink-400 hover:bg-pink-800 text-white font-semibold py-2 px-4 rounded shadow-lg transition duration-300"
                onClick={contactToggleModal}
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Modal - See More */}
      {isOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity">
              <div
                className="absolute inset-0 bg-gray-500 opacity-75"
                onClick={toggleModal} // Close modal when clicking outside
              ></div>
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
            <div
              className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <h3
                    className="text-lg leading-6 font-medium text-gray-900"
                    id="modal-headline"
                  >
                    Nawal Signature
                  </h3>
                  <div className="mt-2">
                    <p className="text-sm leading-5 text-gray-500">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Magnam a voluptate animi iste ab? Nisi dicta alias, minus
                      dolorum laudantium, amet labore, asperiores animi a hic
                      ducimus distinctio id libero? Lorem ipsum, dolor sit amet
                      consectetur adipisicing elit. Modi dolor quisquam tempora
                      et, quidem culpa, ut molestiae ipsum obcaecati assumenda
                      iure tenetur, iusto vel iste sit cupiditate facilis
                      voluptatum sequi? Lorem ipsum dolor sit amet consectetur
                      adipisicing elit. Dolor maxime fugit dolorem obcaecati
                      accusantium cum similique temporibus a aliquam enim,
                      saepe, quis sunt porro distinctio qui culpa consequuntur
                      impedit inventore.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                <span className="mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto">
                  <button
                    type="button"
                    onClick={toggleModal}
                    className="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                  >
                    Cancel
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* End Modal - See More */}
      {/* Chat Online */}
      {isChatOpen && (
        <div className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-30">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg relative">
            <span>Nawal Signature</span>
            {/* Close Button */}
            <button
              className="absolute top-1 right-2 bg-red-500 text-white px-2 py-1 rounded-full"
              onClick={chatToggleModel}
            >
              &times;
            </button>

            {/* Chat Box Content */}
            <div className="py-4 flex flex-col space-y-4 mt-2">
              <div className="max-h-80 overflow-x-hidden overflow-y-auto scrollbar-smooth">
                {/* Chat bubbles */}
                <div
                  className={`ml-auto rounded-lg rounded-tr-none p-2 text-sm bg-green-300 flex flex-col relative ${SingleStyle["speech-bubble-right"]}`}
                >
                  <p>
                    Do you still have that car from gone in 60 seconds? Can I
                    borrow it please.
                  </p>
                  <p className="text-gray-600 text-xs text-right leading-none">
                    8:00 AM
                  </p>
                </div>
                <div
                  className={`mr-auto rounded-lg rounded-tl-none p-2 text-sm bg-white flex flex-col relative ${SingleStyle["speech-bubble-left"]}`}
                >
                  <p>Yeah dude for sure</p>
                  <p className="text-gray-600 text-xs text-right leading-none">
                    8:45 AM
                  </p>
                </div>
                <div
                  className={`ml-auto rounded-lg rounded-tr-none p-2 text-sm bg-green-300 flex flex-col relative ${SingleStyle["speech-bubble-right"]}`}
                >
                  <p>Dude WTF was up with that plane you were on!!!?</p>
                  <p className="text-gray-600 text-xs text-right leading-none">
                    8:00 AM
                  </p>
                </div>
                <div
                  className={`mr-auto rounded-lg rounded-tl-none p-2 text-sm bg-white flex flex-col relative ${SingleStyle["speech-bubble-left"]}`}
                >
                  <p>LOL I Know right</p>
                  <p className="text-gray-600 text-xs text-right leading-none">
                    8:45 AM
                  </p>
                </div>
                <div
                  className={`ml-auto rounded-lg rounded-tr-none p-2 text-sm bg-green-300 flex flex-col relative ${SingleStyle["speech-bubble-right"]}`}
                >
                  <p>Hey man what should we do this weekend?</p>
                  <p className="text-gray-600 text-xs text-right leading-none">
                    8:00 AM
                  </p>
                </div>
                <div
                  className={`mr-auto rounded-lg rounded-tl-none p-2 text-sm bg-white flex flex-col relative ${SingleStyle["speech-bubble-left"]}`}
                >
                  <p>Steal the declaration of independence?...</p>
                  <p className="text-gray-600 text-xs text-right leading-none">
                    8:45 AM
                  </p>
                </div>
                <div
                  className={`ml-auto rounded-lg rounded-tr-none p-2 text-sm bg-green-300 flex flex-col relative ${SingleStyle["speech-bubble-right"]}`}
                >
                  <p>Hey man what should we do this weekend?</p>
                  <p className="text-gray-600 text-xs text-right leading-none">
                    8:00 AM
                  </p>
                </div>
                <div
                  className={`mr-auto rounded-lg rounded-tl-none p-2 text-sm bg-white flex flex-col relative ${SingleStyle["speech-bubble-left"]}`}
                >
                  <p>Steal the declaration of independence?...</p>
                  <p className="text-gray-600 text-xs text-right leading-none">
                    8:45 AM
                  </p>
                </div>
                <div
                  className={`ml-auto rounded-lg rounded-tr-none p-2 text-sm bg-green-300 flex flex-col relative ${SingleStyle["speech-bubble-right"]}`}
                >
                  <p>Hey man what should we do this weekend?</p>
                  <p className="text-gray-600 text-xs text-right leading-none">
                    8:00 AM
                  </p>
                </div>
                <div
                  className={`mr-auto rounded-lg rounded-tl-none p-2 text-sm bg-white flex flex-col relative ${SingleStyle["speech-bubble-left"]}`}
                >
                  <p>Steal the declaration of independence?...</p>
                  <p className="text-gray-600 text-xs text-right leading-none">
                    8:45 AM
                  </p>
                </div>
              </div>
              <div className="px-4 py-2">
                <div className="flex items-center">
                  <input
                    className="w-full border rounded-full py-2 px-4 mr-2"
                    type="text"
                    placeholder="Type your message..."
                  />
                  <button className="bg-pink-500 hover:bg-pink-800 text-white font-medium py-2 px-4 rounded-full">
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* End Chat Online */}

      {/* Modal Contact */}
      {isContactOpen && (
        <div
          id="contactFormModal"
          className="fixed z-10 inset-0 overflow-y-auto"
        >
          <div className="flex items-center justify-center min-h-screen">
            <div className="bg-white w-3/4 p-6 rounded shadow-md">
              <div className="flex justify-end">
                {/* <!-- Close Button --> */}
                <button
                  id="closeContactForm"
                  className="text-gray-700 hover:text-red-500"
                  onClick={contactToggleModal}
                >
                  <svg
                    className="w-6 h-6 text-red-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </button>
              </div>
              <h2 className="text-2xl font-bold mb-4 text-teal-500">
                Contact Nawal Signature
              </h2>

              <form>
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full p-2 border rounded-md focus:outline-none focus:border-pink-500"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="subject"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="subject"
                    id="subject"
                    name="subject"
                    className="w-full p-2 border rounded-md focus:outline-none focus:border-pink-500"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full p-2 border rounded-md focus:outline-none focus:border-pink-500"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-pink-500 text-white font-bold py-2 px-4 rounded hover:bg-pink-800"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
      {/* End Contact Modal */}

      {/* Review Modal */}
      {isReviewOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg max-w-xl w-full p-4 sm:p-6">
            {/* Modal Header */}
            <div className="flex justify-between items-center border-b pb-3">
              <h2 className="text-2xl font-semibold text-gray-700">
                Write a Review
              </h2>
              <button
                onClick={openReviewModal}
                className="text-gray-500 hover:text-gray-700 focus:outline-none"
              >
                ✖
              </button>
            </div>

            {/* Form Section */}
            <form method="POST" className="space-y-4 mt-4">
              {/* Star Rating */}
              <div className="flex justify-start items-center space-x-1 mb-4">
                {[1, 2, 3, 4, 5].map((value) => (
                  <label
                    key={value}
                    className={`text-2xl cursor-pointer hover:scale-110 ${
                      (hoverRating || rating) >= value
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }`}
                    onMouseEnter={() => setHoverRating(value)}
                    onMouseLeave={() => setHoverRating(0)}
                    onClick={() => handleRating(value)}
                  >
                    ★
                  </label>
                ))}
              </div>
              <textarea
                id="review"
                name="review"
                rows={4}
                required
                className="block w-full p-3 text-sm text-gray-900 bg-gray-50 rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Write your review"
              ></textarea>
              <div className="text-right py-4">
                <a
                  href="/user"
                  className="text-white bg-pink-600 hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-lg text-sm px-5 py-3"
                >
                  Submit Review
                </a>
              </div>
            </form>

            {/* Modal Footer */}
            <div className="flex justify-end border-t pt-3 mt-4">
              <button
                onClick={openReviewModal}
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 focus:ring-4 focus:ring-gray-200"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      {/* End Review Modal */}
      {/* Review Feedback */}
      <div id="review-section"></div>
      <div className="flex items-start bg-slate-200 p-8 mb-2">
        <div className="flex-shrink-0">
          <div className="inline-block relative">
            <div className="relative w-16 h-16 rounded-full overflow-hidden">
              <Image
                className="absolute top-0 left-0 w-full h-full bg-cover object-fit object-cover"
                src={avatar_1}
                width={100}
                height={100}
                alt="Profile picture"
              />
              <div className="absolute top-0 left-0 w-full h-full rounded-full shadow-inner"></div>
            </div>
            <svg
              className="fill-current text-white bg-green-600 rounded-full p-1 absolute bottom-0 right-0 w-6 h-6 -mx-1 -my-1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M19 11a7.5 7.5 0 0 1-3.5 5.94L10 20l-5.5-3.06A7.5 7.5 0 0 1 1 11V3c3.38 0 6.5-1.12 9-3 2.5 1.89 5.62 3 9 3v8zm-9 1.08l2.92 2.04-1.03-3.41 2.84-2.15-3.56-.08L10 5.12 8.83 8.48l-3.56.08L8.1 10.7l-1.03 3.4L10 12.09z" />
            </svg>
          </div>
        </div>
        <div className="ml-6">
          <p className="flex items-baseline">
            <span className="text-gray-600 font-bold">Sarah N.</span>
            <span className="ml-2 text-teal-600 text-xs">Verified Client</span>
          </p>
          <div className="flex items-center mt-1">
            <svg
              className="w-4 h-4 fill-current text-yellow-600"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
            <svg
              className="w-4 h-4 fill-current text-yellow-600"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
            <svg
              className="w-4 h-4 fill-current text-yellow-600"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
            <svg
              className="w-4 h-4 fill-current text-yellow-600"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
            <svg
              className="w-4 h-4 fill-current text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
          </div>

          <div className="mt-3">
            <span className="font-bold">Sapien consequat eleifend!</span>
            <p className="mt-1">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-start bg-slate-200 p-8">
        <div className="flex-shrink-0">
          <div className="inline-block relative">
            <div className="relative w-16 h-16 rounded-full overflow-hidden">
              <Image
                className="absolute top-0 left-0 w-full h-full bg-cover object-fit object-cover"
                src={avatar_2}
                width={100}
                height={100}
                alt="Profile picture"
              />
              <div className="absolute top-0 left-0 w-full h-full rounded-full shadow-inner"></div>
            </div>
            <svg
              className="fill-current text-white bg-green-600 rounded-full p-1 absolute bottom-0 right-0 w-6 h-6 -mx-1 -my-1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M19 11a7.5 7.5 0 0 1-3.5 5.94L10 20l-5.5-3.06A7.5 7.5 0 0 1 1 11V3c3.38 0 6.5-1.12 9-3 2.5 1.89 5.62 3 9 3v8zm-9 1.08l2.92 2.04-1.03-3.41 2.84-2.15-3.56-.08L10 5.12 8.83 8.48l-3.56.08L8.1 10.7l-1.03 3.4L10 12.09z" />
            </svg>
          </div>
        </div>
        <div className="ml-6">
          <p className="flex items-baseline">
            <span className="text-gray-600 font-bold">Mary T.</span>
            <span className="ml-2 text-teal-600 text-xs">Verified Client</span>
          </p>
          <div className="flex items-center mt-1">
            <svg
              className="w-4 h-4 fill-current text-yellow-600"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
            <svg
              className="w-4 h-4 fill-current text-yellow-600"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
            <svg
              className="w-4 h-4 fill-current text-yellow-600"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
            <svg
              className="w-4 h-4 fill-current text-yellow-600"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
            <svg
              className="w-4 h-4 fill-current text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
          </div>

          <div className="mt-3">
            <span className="font-bold">Sapien lorem satisfied!</span>
            <p className="mt-1">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
        </div>
      </div>

      {/* End Review Feedback */}
      {/* Load more */}
      <div className="after:h-px my-14 flex items-center before:h-px before:flex-1  before:bg-gray-300 before:content-['']  after:flex-1 after:bg-gray-300  after:content-['']">
        <button
          type="button"
          className="flex items-center rounded-full border border-gray-300 bg-secondary-50 px-3 py-2 text-center text-sm font-medium text-gray-900 hover:bg-teal-500"
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

      {/* Category Slider Componenet */}
      <CategorySlider />
      {/* End Category Slider Component */}
      {/* Recent Suppliers */}
      <RecentSuppliersSlider />
      {/* End Recent Suppliers */}
    </div>
  );
}
