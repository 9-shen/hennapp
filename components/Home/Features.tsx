import { TbTargetArrow } from 'react-icons/tb';
import { RiEye2Line } from "react-icons/ri";
import { FaHandshake } from "react-icons/fa";



export default function Features()  {
  return (
    <div className="h-full w-full bg-gray-800 p-12">
      <div className="grid gap-14 md:grid-cols-3 md:gap-5">
        <div className="rounded-xl bg-white p-10 text-center shadow-xl">
          <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-teal-400 shadow-lg shadow-teal-500/40">
            <TbTargetArrow className="h-6 w-6 text-white" />
          </div>
          <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">GOALS</h1>
          <p className="px-4 text-gray-500">
          Hennapp simplifies, enriches planning, makes dream weddings come true.
          </p>
        </div>
        <div className="rounded-xl bg-white p-6 text-center shadow-xl" data-aos-delay="150">
          <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full shadow-lg bg-rose-500 shadow-rose-500/40">
            <RiEye2Line className="h-6 w-6 text-white" />
          </div>
          <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">VISIONS</h1>
          <p className="px-4 text-gray-500">
          Revolutionize weddings with a centralized, stress-free platform.
          </p>
        </div>
        <div className="rounded-xl bg-white p-6 text-center shadow-xl" data-aos-delay="300">
          <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full shadow-lg bg-sky-500 shadow-sky-500/40">
            <FaHandshake className="h-6 w-6 text-white" />
          </div>
          <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">MISSIONS</h1>
          <p className="px-4 text-gray-500">
          We facilitate couples, suppliers: technology, planning, lasting memories.
          </p>
        </div>
      </div>
    </div>
  );
};

