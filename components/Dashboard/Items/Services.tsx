import Image from "next/image";
import { StaticImageData } from "next/image";
import Link from "next/link";
import React, { useState, ChangeEvent } from "react";
import { GiBigDiamondRing } from "react-icons/gi";
// Default Flag
import flag from "@/public/Dashboard/flag.png";

interface countryType {
  name: string;
  flagUrl: string | StaticImageData;
}
interface cityType {
  name: string;
}
interface stateType {
  name: string;
}
interface categoryType {
  name: string;
}
export default function Services() {
  // Specify types for state arrays
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      const newFiles = files.slice(0, 5 - selectedFiles.length); // Ensure a max of 5 files

      const newPreviews = newFiles.map((file) => {
        if (file.type.startsWith("image/")) {
          return URL.createObjectURL(file);
        }
        return null;
      });

      setSelectedFiles((prev) => [...prev, ...newFiles]);
      setPreviews((prev) => [
        ...prev,
        ...newPreviews.filter((url): url is string => url !== null),
      ]);
    }
  };

  const handleRemoveFile = (index: number) => {
    setSelectedFiles((prev) => prev.filter((_, i) => i !== index));
    setPreviews((prev) => prev.filter((_, i) => i !== index));
  };

  const [isLoading, setIsLoading] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<string>("");

  const countries: countryType[] = [
    {
      name: "Morocco",
      flagUrl:
        "https://upload.wikimedia.org/wikipedia/commons/2/2c/Flag_of_Morocco.svg",
    },
    {
      name: "United States",
      flagUrl:
        "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg",
    },
    {
      name: "France",
      flagUrl:
        "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg",
    },
    {
      name: "Spain",
      flagUrl:
        "https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg",
    },
  ];

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountry(event.target.value);
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 200); // 0.2second delay
  };

  const cities: cityType[] = [
    { name: "Tangier" },
    { name: "Casablanca" },
    { name: "Rabat" },
    { name: "Tangier" },
    { name: "Marrakech" },
  ];

  const states: stateType[] = [
    { name: "Grand Casablanca" },
    { name: "Tangier - Tetouane" },
    { name: "Marrakech Lhouez" },
    { name: "Draa Tafilalt" },
    { name: "Souss Massa" },
  ];

  const categories: categoryType[] = [
    { name: "Make-up" },
    { name: "Photography" },
    { name: "Locals" },
    { name: "Music" },
    { name: "Honey Moon" },
    { name: "Catering" },
  ];

  return (
    <div>
      {/* Main Area */}
      <div className="flex justify-between">
        <h3 className="font-bold">Services</h3>
        <Link
          href={""}
          className="px-2 py-2 bg-pink-500 hover:bg-pink-700 flex items-center rounded-md text-white gap-2"
        >
          <GiBigDiamondRing className="text-xl" /> <span>My Service</span>
        </Link>
      </div>
      <hr className="my-6 border-t border-gray-300" />
      {/* Service Name */}

      <div className="flex items-center mb-10 ">
        <label
          htmlFor="name"
          className="w-20 inline-block text-center mr-4 text-gray-500"
        >
          Service Name
        </label>
        <input
          name="name"
          id="name"
          type="text"
          placeholder="Service Name"
          className="border-b-2 border-gray-400 flex-1 py-2 placeholder-gray-300 outline-none focus:border-teal-500"
        />
      </div>
      {/* Description */}
      <div className="flex items-center mb-10">
        <label
          htmlFor="Service-Description "
          className="w-20 inline-block text-center mr-4 text-gray-500"
        >
          Description
        </label>
        <textarea
          name=""
          id=""
          rows={5}
          placeholder="Service Description  ..."
          className="scrollbar-smooth border-b-2 border-gray-400 flex-1 py-2 placeholder-gray-300 outline-none focus:border-teal-500"
        ></textarea>
      </div>
      {/* Details */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* 1st block */}
        <div>
          {/* Price min */}

          <div className="flex items-center mb-10">
            <label
              htmlFor="pricemin"
              className="w-20 inline-block text-center mr-4 text-gray-500"
            >
              Price <small className="text-pink-500">Min</small>
            </label>
            <input
              name="pricemin"
              id="pricemin"
              type="number"
              placeholder="100"
              className="border-b-2 border-gray-400 flex-1 py-2 placeholder-gray-300 outline-none focus:border-teal-500"
            />
          </div>
          {/* Price min */}

          <div className="flex items-center mb-10">
            <label
              htmlFor="pricemax"
              className="w-20 inline-block text-center mr-4 text-gray-500"
            >
              Price <small className="text-pink-500">Max</small>
            </label>
            <input
              name="pricemax"
              id="pricemax"
              type="number"
              placeholder="10000"
              className="border-b-2 border-gray-400 flex-1 py-2 placeholder-gray-300 outline-none focus:border-teal-500"
            />
          </div>
          {/* Categories */}
          <div className="mb-10">
            <label
              htmlFor="Categories"
              className="w-20 inline-block text-center mr-4 text-gray-500"
            >
              Categories
            </label>
            <select
              id="Categories"
              className="w-[75%] p-2 border-b-2 border-gray-400 flex-1 py-2 placeholder-gray-300 outline-none focus:border-teal-500 sm:text-sm"
            >
              <option value="" disabled>
                Select a category
              </option>
              {categories.map((category) => (
                <option key={category.name} value={category.name}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        {/* End 1st block */}
        {/* 2st block */}
        <div>
          {/* Countries */}
          <div className="inline-flex justify-between gap-2 items-center mb-10">
            <label
              htmlFor="country-select"
              className="w-20 inline-block text-center mr-4 text-gray-500"
            >
              Country
            </label>
            <select
              id="country-select"
              value={selectedCountry}
              onChange={handleSelectChange}
              className="p-2 border-b-2 border-gray-400 flex-1 py-2 placeholder-gray-300 outline-none focus:border-teal-500 sm:text-sm"
            >
              <option value="" disabled>
                Select a country
              </option>
              {countries.map((country) => (
                <option key={country.name} value={country.name}>
                  {country.name}
                </option>
              ))}
            </select>
            {/* Change Flag */}
            {selectedCountry && (
              <div className="inline-flex">
                {isLoading ? (
                  <div className="w-6 h-6 border-4 border-t-transparent border-indigo-600 rounded-full animate-spin"></div>
                ) : (
                  <Image
                    src={
                      countries.find(
                        (country) => country.name === selectedCountry
                      )?.flagUrl || flag
                    }
                    alt={`${selectedCountry} Flag`}
                    height={40}
                    width={24}
                    className="w-10 h-6 mr-2"
                  />
                )}
                <span className="font-medium">{selectedCountry}</span>
              </div>
            )}
            {/* End Change Flag */}
          </div>
          {/* Cities */}
          <div className="mb-10">
            <label
              htmlFor="city"
              className="w-20 inline-block text-center mr-4 text-gray-500"
            >
              City
            </label>
            <select
              id="city"
              className="w-[70%] p-2 border-b-2 border-gray-400 flex-1 py-2 placeholder-gray-300 outline-none focus:border-teal-500 sm:text-sm"
            >
              <option value="" disabled>
                Select a city
              </option>
              {cities.map((city) => (
                <option key={city.name} value={city.name}>
                  {city.name}
                </option>
              ))}
            </select>
          </div>
          {/* State */}
          <div className="mb-10">
            <label
              htmlFor="state"
              className="w-20 inline-block text-center mr-4 text-gray-500"
            >
              State
            </label>
            <select
              id="state"
              className="w-[70%] p-2 border-b-2 border-gray-400 flex-1 py-2 placeholder-gray-300 outline-none focus:border-teal-500 sm:text-sm"
            >
              <option value="" disabled>
                Select a state
              </option>
              {states.map((state) => (
                <option key={state.name} value={state.name}>
                  {state.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        {/* End 2st block */}
      </div>
      {/* End Details */}

      {/* Images */}
      {/* <div className="grid grid-cols-1 md:grid-cols-2"> */}
        {/* Image Upload */}

        <div className="flex items-center justify-center">
          <div className="mx-auto w-full bg-white">
            <h3 className="font-bold">Images</h3>
          <hr className="my-6 border-t border-gray-300" />
            <div className="mb-2 p-4">
              

              <div className="mb-2">
                <input
                  type="file"
                  name="file"
                  id="file"
                  className="sr-only"
                  multiple
                  accept="image/*"
                  onChange={handleFileChange}
                  disabled={selectedFiles.length >= 5}
                />
                <label
                  htmlFor="file"
                  className={`relative flex min-h-[200px] items-center justify-center rounded-md border border-dashed border-[teal] p-12 text-center ${
                    selectedFiles.length >= 5 ? "opacity-50" : ""
                  }`}
                >
                  <div>
                    <span className="mb-2 block text-xl font-semibold text-[#07074D]">
                      Drop files here
                    </span>
                    <span className="mb-2 block text-base font-medium text-[#6B7280]">
                      Or
                    </span>
                    <span className="inline-flex rounded border border-teal-500 py-2 px-7 text-base font-medium text-dark">
                      Browse
                    </span>
                    {selectedFiles.length >= 5 && (
                      <p className="mt-3 text-sm text-red-500">
                        Maximum 5 images allowed.
                      </p>
                    )}
                  </div>
                </label>
              </div>
            </div>

            <div>
              
            </div>
          </div>
        </div>

        {/* End Image Upload */}

        {/* Image Preview */}
        <div>
        <div className="mx-auto w-full  bg-white">
          <h3 className="font-bold">Preview</h3>
          <hr className="my-6 border-t border-gray-300" />
          <div>
          {previews.length > 0 && (
            <div className="grid grid-cols-5 gap-2">
              {previews.map((preview, index) => (
                <div key={index} className="relative w-40 h-24 overflow-hidden rounded-md border border-[#e0e0e0]">
                  <Image
                    src={preview}
                    objectFit="contain"
                    layout="fill"
                    alt={`Uploaded Preview ${index + 1}`}
                    className="object-center rounded-md border  border-[#e0e0e0]"
                  />
                  <button
                    onClick={() => handleRemoveFile(index)}
                    className="absolute top-2 right-2 mt-[-5px] mr-[-5px] h-5 w-5 rounded-full bg-red-500 text-white flex items-center justify-center"
                  >
                    &times;
                  </button>
                </div>
              ))}
            </div>
          )}
          </div>
          
        </div>
        </div>
        {/* End Image Preview */}
      {/* </div> */}
      {/* End Images */}

      {/* End Main Area */}
    </div>
  );
}
