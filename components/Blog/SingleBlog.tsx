import img_1 from "@/public/Blog/1.jpg";
import Link from "next/link";
import Image from "next/image";

import avatar_1 from "@/public/Avatar/1.jpg";
import avatar_2 from "@/public/Avatar/2.jpg";

export default function SingleBlog() {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 relative">
        <div
          className="bg-cover bg-center text-center overflow-hidden min-h-[500px]"
          style={{ backgroundImage: `url(${img_1.src})` }}
          title="Blog Post"
        ></div>
        <div className="max-w-3xl mx-auto">
          <div className="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
            <div className="bg-white shadow-md relative top-0 -mt-32 p-5 sm:p-10">
              <h1 className="text-gray-900 font-bold text-3xl mb-2">
                Revenge of the Never Trumpers
              </h1>
              <p className="text-gray-700 text-xs mt-2">
                Written By:{" "}
                <Link
                  href="/suppliers/singlesupplier"
                  className="text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out"
                >
                  Nouaman Sultani
                </Link>{" "}
                In{" "}
                <Link
                  href="#"
                  className="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out"
                >
                  Wedding
                </Link>
                ,
                <a
                  href="#"
                  className="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out"
                >
                  Event
                </a>
              </p>
              <p className="text-base leading-8 my-5">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
              <h3 className="text-2xl font-bold my-5">
                #1. What is Lorem Ipsum?
              </h3>
              <p className="text-base leading-8 my-5">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
              <blockquote className="border-l-4 text-base italic leading-8 my-5 p-5 text-indigo-600">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since the 1500s
              </blockquote>
              <p className="text-base leading-8 my-5">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
              <Link
                href="#"
                className="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out"
              >
                #Henna
              </Link>
              ,
              <Link
                href="#"
                className="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out"
              >
                #App
              </Link>
              ,
              <Link
                href="#"
                className="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out"
              >
                #Wedding
              </Link>
              ,
              <Link
                href="#"
                className="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out"
              >
                #Ceuta
              </Link>
              ,
              <Link
                href="#"
                className="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out"
              >
                #Tangier
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Comments Section */}

      <section className="bg-gray-100 py-8">
        <div className="container  mx-auto w-[800px] px-4">
          <h2 className="text-2xl font-bold mb-4">Comments</h2>

          <div className="space-y-4">
            {/* <!-- Comment 1 --> */}
            <div className="bg-white p-4 rounded-lg shadow">
              <div className="flex items-center mb-2">
                <Image
                  src={avatar_1}
                  height={40}
                  width={40}
                  alt="User Avatar"
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <h3 className="font-semibold">John Doe</h3>
                  <p className="text-sm text-gray-500">
                    Posted on March 15, 2024
                  </p>
                </div>
              </div>
              <p className="text-gray-700">
                Great product! Ive been using it for a week now and Im very
                satisfied with its performance.
              </p>
              <div className="flex items-center mt-2">
                <button className="text-blue-500 hover:text-blue-600 mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 inline"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                  </svg>
                  Like
                </button>
                <button className="text-gray-500 hover:text-gray-600">
                  Reply
                </button>
              </div>
            </div>

            {/* <!-- Comment 2 --> */}
            <div className="bg-white p-4 rounded-lg shadow">
              <div className="flex items-center mb-2">
                <Image
                  src={avatar_2}
                  alt="User Avatar"
                  height={40}
                  width={40}
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <h3 className="font-semibold">Jane Smith</h3>
                  <p className="text-sm text-gray-500">
                    Posted on March 10, 2024
                  </p>
                </div>
              </div>
              <p className="text-gray-700">
                The shipping was fast and the product arrived in perfect
                condition. Highly recommended!
              </p>
              <div className="flex items-center mt-2">
                <button className="text-blue-500 hover:text-blue-600 mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 inline"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                  </svg>
                  Like
                </button>
                <button className="text-gray-500 hover:text-gray-600">
                  Reply
                </button>
              </div>
            </div>
          </div>

          {/* <!-- Add Comment Form --> */}
          <form className="mt-8 bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-2">Add a Comment</h3>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 font-medium mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="comment"
                className="block text-gray-700 font-medium mb-2"
              >
                Comment
              </label>
              <textarea
                id="comment"
                name="comment"
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Post Comment
            </button>
          </form>
        </div>
      </section>

      {/* End Comments Section */}

      {/* Next & Previous Post */}
      <nav
        className="mt-6 mb-10 flex items-center justify-around border-t border-gray-200 px-4 pt-6 sm:px-6 w-full"
        aria-label="Pagination"
      >
        <div className="flex flex-1 justify-between">
          <Link
            className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            rel="prev"
            href="#"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 448 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"></path>
            </svg>{" "}
            &nbsp; Previous
          </Link>
          <Link
            className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            rel="prev"
            href="/blog"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 576 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"></path>
            </svg>{" "}
            &nbsp; Blog
          </Link>
          <Link
            href="/blog"
            className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            rel="next"
          >
            Next Page &nbsp;{" "}
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 448 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
            </svg>
          </Link>
        </div>
      </nav>
      {/* End Next and Previous */}
    </div>
  );
}
