"use client";
import { StaticImageData } from "next/image";
import Image from "next/image";
import { useState } from "react";

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

export default function Account() {
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

  //   Account Type

  const [isSupplier, setIsSupplier] = useState(false);
  const [isSupplierOpen, setIsSupplierOpen] = useState(false);

  const handleToggle = () => {
    setIsSupplier((prev) => !prev);
    setIsSupplierOpen(!isSupplierOpen);
  };

  return (
    <div>
      <h3 className="font-bold">Account Details</h3>
      <hr className="my-6 border-t border-gray-300" />
      <form>
        {/* Main */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/***** First Block *****/}
          <div>
            {/* First Name */}

            <div className="flex items-center mb-5">
              <label
                htmlFor="name"
                className="w-20 inline-block text-center mr-4 text-gray-500"
              >
                First Name
              </label>
              <input
                name="name"
                id="name"
                type="text"
                placeholder="First Name"
                className="border-b-2 border-gray-400 flex-1 py-2 placeholder-gray-300 outline-none focus:border-teal-500"
              />
            </div>
            {/* Last Name */}
            <div className="flex items-center mb-10">
              <label
                htmlFor="last name"
                className="w-20 inline-block text-center mr-4 text-gray-500"
              >
                Last Name
              </label>
              <input
                type="text"
                name="last-name"
                id="last-name"
                placeholder="Last Name"
                className="border-b-2 border-gray-400 flex-1 py-2 placeholder-gray-300 outline-none focus:border-teal-500"
              />
            </div>
            {/* Email */}
            <div className="flex items-center mb-10">
              <label
                htmlFor="email"
                className="w-20 inline-block text-center mr-4 text-gray-500"
              >
                Email
              </label>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Email@example.com"
                className="border-b-2 border-gray-400 flex-1 py-2 placeholder-gray-300 outline-none focus:border-teal-500"
              />
            </div>
            {/* Phone */}
            <div className="flex items-center mb-10">
              <label
                htmlFor="Phone"
                className="w-20 inline-block text-center mr-4 text-gray-500"
              >
                Phone
              </label>
              <input
                type="text"
                name="Phone"
                id="Phone"
                placeholder="+212611345987"
                className="border-b-2 border-gray-400 flex-1 py-2 placeholder-gray-300 outline-none focus:border-teal-500"
              />
            </div>
          </div>
          {/***** End First Block *****/}

          {/***** Second Block *****/}
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
            {/* Account Type */}
            <div className="flex justify-around">
              <h3>Account Type:</h3>
              <div className="flex flex-row justify-center toggle">
                <label
                  htmlFor="supplier-toggle"
                  className="flex items-center cursor-pointer"
                >
                  <div className="relative">
                    {/* Checkbox Input */}
                    <input
                      type="checkbox"
                      id="supplier-toggle"
                      checked={isSupplier}
                      onChange={handleToggle}
                      className="checkbox hidden"
                    />
                    {/* Switch Background */}
                    <div
                      className={`block border-[1px] ${
                        isSupplier ? "border-teal-500" : "border-gray-900"
                      } w-14 h-8 rounded-full transition`}
                    ></div>
                    {/* Switch Dot */}
                    <div
                      className={`dot absolute left-1 top-1 w-6 h-6 rounded-full transition ${
                        isSupplier ? "translate-x-6 bg-teal-500" : "bg-gray-800"
                      }`}
                    ></div>
                  </div>
                  {/* Label Text */}
                  {isSupplier ? (
                    <div className="ml-3 text-teal-500 font-medium">
                      Supplier
                    </div>
                  ) : (
                    <div className="ml-3 text-pink-500 font-medium">
                      Regular
                    </div>
                  )}
                </label>
              </div>
            </div>
          </div>

          {/***** End Second Block *****/}
        </div>
        {/* Supplier */}
        {isSupplierOpen && (
          <div>
            <h3 className="font-bold mb-4 mt-6">Supplier Details</h3>
        <hr className="my-6 border-t border-gray-300" />

            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Supplier First Block */}
              <div>
                {/* Company Name */}
                <div className="flex items-center mb-10">
                  <label
                    htmlFor="Company-Name"
                    className="w-20 inline-block text-center mr-4 text-gray-500"
                  >
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="Company-Name"
                    id="Company-Name"
                    placeholder="Henna App SL"
                    className="border-b-2 border-gray-400 flex-1 py-2 placeholder-gray-300 outline-none focus:border-teal-500"
                  />
                </div>
                {/* Company ICE */}
                <div className="flex items-center mb-10">
                  <label
                    htmlFor="Company ICE"
                    className="w-20 inline-block text-center mr-4 text-gray-500"
                  >
                    Company ICE
                  </label>
                  <input
                    type="text"
                    name="Company ICE"
                    id="Company ICE"
                    placeholder="0038645373712347"
                    className="border-b-2 border-gray-400 flex-1 py-2 placeholder-gray-300 outline-none focus:border-teal-500"
                  />
                </div>
                {/* Company Address */}
                <div className="flex items-center mb-10">
                  <label
                    htmlFor="address"
                    className="w-20 inline-block text-center mr-4 text-gray-500"
                  >
                    Company Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    id="address"
                    placeholder="Boulevard MED 5, Bloc 12 ET 1"
                    className="border-b-2 border-gray-400 flex-1 py-2 placeholder-gray-300 outline-none focus:border-teal-500"
                  />
                </div>
              </div>
              {/* End First Block */}
              {/* Supplier Second Block */}
              <div>
                {/* Company RC */}
                <div className="flex items-center mb-10">
                  <label
                    htmlFor="RC"
                    className="w-20 inline-block text-center mr-4 text-gray-500"
                  >
                    RC
                  </label>
                  <input
                    type="text"
                    name="RC"
                    id="RC"
                    placeholder="346758"
                    className="border-b-2 border-gray-400 flex-1 py-2 placeholder-gray-300 outline-none focus:border-teal-500"
                  />
                </div>
                {/* Company IF */}
                <div className="flex items-center mb-10">
                  <label
                    htmlFor="IF"
                    className="w-20 inline-block text-center mr-4 text-gray-500"
                  >
                    IF
                  </label>
                  <input
                    type="text"
                    name="IF"
                    id="IF"
                    placeholder="87653678"
                    className="border-b-2 border-gray-400 flex-1 py-2 placeholder-gray-300 outline-none focus:border-teal-500"
                  />
                </div>
                {/* Company Patente */}
                <div className="flex items-center mb-10">
                  <label
                    htmlFor="patent"
                    className="w-20 inline-block text-center mr-4 text-gray-500"
                  >
                    Patent
                  </label>
                  <input
                    type="text"
                    name="patent"
                    id="patent"
                    placeholder="4787763"
                    className="border-b-2 border-gray-400 flex-1 py-2 placeholder-gray-300 outline-none focus:border-teal-500"
                  />
                </div>
              </div>
              {/* End Second Block */}
            </div>
          </div>
        )}

        {/* End Supplier */}
        <hr className="my-6 border-t border-gray-300" />
        <div className="flex justify-end">
          <button className="font-bold text-white bg-teal-500 hover:bg-teal-800 px-4 py-2 rounded-lg">
            Save Changes
          </button>
        </div>
        {/* End Main */}
      </form>
    </div>
  );
}
