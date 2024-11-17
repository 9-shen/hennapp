export default function UserProfile() {
  return (
    <div>
      <h3 className="font-bold">Profile</h3>
      <hr className="my-6 border-t border-gray-300" />
      <form>
         {/* Bio */}

         <div className="flex items-center mb-5">
              <label
                htmlFor="bio"
                className="w-20 inline-block text-center mr-4 text-gray-500"
              >
                Bio
              </label>
              <textarea
                name=""
                id=""
                rows={5}
                placeholder="Bio ..."
                className="border-b-2 border-gray-400 flex-1 py-2 placeholder-gray-300 outline-none focus:border-teal-500"
              ></textarea>
            </div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* First Block */}
          <div>
          <div className="max-w-sm mx-auto p-6 rounded-md shadow-lg">
              <h2 className="text-xl font-semibold text-center mb-6">
                Profile Photo
              </h2>
              <div className="relative border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-md px-6 py-8 text-center">
                <input type="file" className="hidden" id="fileInput" />
                <svg
                  className="mx-auto h-16 w-16 text-gray-400 dark:text-gray-300 mb-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 17l-4 4m0 0l-4-4m4 4V3"
                  ></path>
                </svg>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Drag & Drop your files here or{" "}
                  <label
                    htmlFor="fileInput"
                    className="cursor-pointer text-teal-500 hover:underline"
                  >
                    browse
                  </label>{" "}
                  to upload.
                </p>
              </div>
              <button className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-6 rounded-md w-full mt-6 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50 dark:bg-teal-500 dark:hover:bg-teal-600 dark:focus:ring-teal-500 dark:focus:ring-opacity-50">
                Upload
              </button>
            </div>
          </div>
          {/* End First Block */}

          {/* Second Block */}
          <div>
            <div className="max-w-sm mx-auto p-6 rounded-md shadow-lg">
              <h2 className="text-xl font-semibold text-center mb-6">
                Profile Cover
              </h2>
              <div className="relative border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-md px-6 py-8 text-center">
                <input type="file" className="hidden" id="fileInput" />
                <svg
                  className="mx-auto h-16 w-16 text-gray-400 dark:text-gray-300 mb-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 17l-4 4m0 0l-4-4m4 4V3"
                  ></path>
                </svg>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Drag & Drop your files here or{" "}
                  <label
                    htmlFor="fileInput"
                    className="cursor-pointer text-teal-500 hover:underline"
                  >
                    browse
                  </label>{" "}
                  to upload.
                </p>
              </div>
              <button className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-6 rounded-md w-full mt-6 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50 dark:bg-teal-500 dark:hover:bg-teal-600 dark:focus:ring-teal-500 dark:focus:ring-opacity-50">
                Upload
              </button>
            </div>
          </div>
          {/* End Second Block */}
        </div>
      <hr className="my-6 border-t border-gray-300" />
      <div className="flex justify-end">
          <button className="font-bold text-white bg-teal-500 hover:bg-teal-800 px-4 py-2 rounded-lg">
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}
