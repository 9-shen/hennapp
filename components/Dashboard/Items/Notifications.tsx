import Image from "next/image";

import avatar_1 from "@/public/Avatar/5.jpg";
import avatar_2 from "@/public/Avatar/6.jpg";
import avatar_3 from "@/public/Avatar/7.jpg";
import avatar_4 from "@/public/Avatar/8.jpg";
import Link from "next/link";

export default function Notifications() {
  return (
    <div className="overflow-x-auto scrollbar-smooth">
      <h3 className="font-bold">Notifications</h3>
      <hr className="my-6 border-t border-gray-300" />
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Name
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Status
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Category
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Chat Snap
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          <tr>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="flex items-center">
                <div className="flex-shrink-0 h-10 w-10">
                  <Image
                    className="h-10 w-10 rounded-full"
                    width={24}
                    height={24}
                    src={avatar_4}
                    alt="user"
                  />
                </div>
                <div className="ml-4">
                  <div className="text-sm font-medium text-gray-900">
                   Nouaman Signature
                  </div>
                </div>
              </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                Offline
              </span>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              Make Up
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              Lorem Ipsum dollr set ...
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
              <Link href="#" className="text-teal-600 hover:text-teal-900">
                Show
              </Link>
              <Link href="#" className="ml-2 text-red-600 hover:text-red-900">
                Delete
              </Link>
            </td>
          </tr>

          <tr>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="flex items-center">
                <div className="flex-shrink-0 h-10 w-10">
                  <Image
                    className="h-10 w-10 rounded-full"
                    width={24}
                    height={24}
                    src={avatar_1}
                    alt="user"
                  />
                </div>
                <div className="ml-4">
                  <div className="text-sm font-medium text-gray-900">
                    Sarah El Fassi
                  </div>
                </div>
              </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                Active
              </span>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              Catering
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              lorem ipsum dolar set ...
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
              <Link href="#" className="text-teal-600 hover:text-teal-900">
                Show
              </Link>
              <Link href="#" className="ml-2 text-red-600 hover:text-red-900">
                Delete
              </Link>
            </td>
          </tr>

          <tr>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="flex items-center">
                <div className="flex-shrink-0 h-10 w-10">
                  <Image
                    className="h-10 w-10 rounded-full"
                    width={24}
                    height={24}
                    src={avatar_2}
                    alt="user"
                  />
                </div>
                <div className="ml-4">
                  <div className="text-sm font-medium text-gray-900">
                    Oumnia Tangier
                  </div>
                </div>
              </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                Active
              </span>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              Locals
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              lorem ipsum dolar set ...
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
              <Link href="#" className="text-teal-600 hover:text-teal-900">
                Show
              </Link>
              <Link href="#" className="ml-2 text-red-600 hover:text-red-900">
                Delete
              </Link>
            </td>
          </tr>

          <tr>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="flex items-center">
                <div className="flex-shrink-0 h-10 w-10">
                  <Image
                    className="h-10 w-10 rounded-full"
                    width={24}
                    height={24}
                    src={avatar_3}
                    alt="user"
                  />
                </div>
                <div className="ml-4">
                  <div className="text-sm font-medium text-gray-900">
                    Naila Tetouane
                  </div>
                </div>
              </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                Offline
              </span>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              Music
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              lorem ipsum dolar set ...
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
              <Link href="#" className="text-teal-600 hover:text-teal-900">
                Show
              </Link>
              <Link href="#" className="ml-2 text-red-600 hover:text-red-900">
                Delete
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
