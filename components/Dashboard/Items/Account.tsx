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
    { name: "Casablanca" },
    { name: "Rabat" },
    { name: "Tangier" },
    { name: "Marrakech" },
  ];

  return (
    <div>
      <h3 className="font-bold">Account Details</h3>
      <hr className="my-6 border-t border-gray-300" />
      <form>
        {/* Main */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* First Block */}
          <div>
            {/* Form Details */}

            <div className="flex items-center mb-5">
              <label
                htmlFor="name"
                className="w-20 inline-block text-right mr-4 text-gray-500"
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

            <div className="flex items-center mb-10">
              <label
                htmlFor="last name"
                className="w-20 inline-block text-right mr-4 text-gray-500"
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
            <div className="flex items-center mb-10">
              <label
                htmlFor="email"
                className="w-20 inline-block text-right mr-4 text-gray-500"
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
            <div className="flex items-center mb-10">
              <label
                htmlFor="Phone"
                className="w-20 inline-block text-right mr-4 text-gray-500"
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
            {/* End Form Details */}
          </div>
          {/* End First Block */}

          {/* Second Block */}
          <div>
            <div className="inline-flex justify-between gap-2 items-center">
              <label
                htmlFor="country-select"
                className="w-20 inline-block text-right mr-4 text-gray-500"
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
          </div>
          {/* End Second Block */}
        </div>
        {/* End Main */}
      </form>
    </div>
  );
}
