'use client';
import Link from "next/link";
import Image from "next/image";
import img_1 from "@/public/ServicesGrid/1.jpg";
import img_2 from "@/public/ServicesGrid/2.jpg";
import img_3 from "@/public/ServicesGrid/3.jpg";
import img_4 from "@/public/ServicesGrid/4.jpg";
import img_5 from "@/public/ServicesGrid/5.jpg";
import img_6 from "@/public/ServicesGrid/6.jpg";
import img_7 from "@/public/ServicesGrid/7.jpg";
export default function Services (){

    return (
    <div className="bg-light-green p-8">

            <div className="py-4 mt-10 mb-4 px-10 flex flex-col sm:flex-row justify-between items-center">
                <h1 className="text-3xl font-bold uppercase mb-2 sm:mb-0">Services</h1>
                <Link className="bg-pink-500 hover:bg-pink-800 py-2 px-3 text-white rounded-md" href={'/services'}>
                    View All Suppliers
                </Link>
          </div>


            <div className="relative overflow-hidden">
                <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
                <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
                    <div className="sm:max-w-lg">
                    <h1 className="font text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Henna App</h1>
                    <p className="mt-4 text-xl text-gray-500">Join Henna App today and start planning your dream wedding with us! From inspiring ideas to personalized services, we’re here to make every detail of your special day truly unforgettable. Dive into a world of creativity and ease, tailored just for you.</p>
                    </div>
                    <div>
                    <div className="mt-10">
                       
                        <div aria-hidden="true" className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl">
                        <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                            <div className="flex items-center space-x-6 lg:space-x-8">
                            <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                                <Image src={img_1} alt={""} width={200} height={300} className="h-full w-full object-cover object-center" />
                                </div>
                                <div className="h-64 w-44 overflow-hidden rounded-lg">
                                <Image src={img_2} alt={""} width={200} height={300} className="h-full w-full object-cover object-center" />
                                </div>
                            </div>
                            <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                <div className="h-64 w-44 overflow-hidden rounded-lg">
                                <Image src={img_3} alt={""} width={200} height={300} className="h-full w-full object-cover object-center" />
                                </div>
                                <div className="h-64 w-44 overflow-hidden rounded-lg">
                                <Image src={img_4} alt={""} width={200} height={300} className="h-full w-full object-cover object-center" />
                                </div>
                                <div className="h-64 w-44 overflow-hidden rounded-lg">
                                <Image src={img_5} alt={""} width={200} height={300} className="h-full w-full object-cover object-center" />
                                </div>
                            </div>
                            <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                <div className="h-64 w-44 overflow-hidden rounded-lg">
                                <Image src={img_6} alt={""} width={200} height={300} className="h-full w-full object-cover object-center" />
                                </div>
                                <div className="h-64 w-44 overflow-hidden rounded-lg">
                                <Image src={img_7} alt={""} width={200} height={300} className="h-full w-full object-cover object-center" />
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>

                        <Link href={"#"} className="inline-block rounded-md border border-transparent bg-pink-600 py-3 px-8 text-center font-medium text-white hover:bg-pink-700">Sing up now</Link>
                    </div>
                    </div>
                </div>
                </div>
            </div>

        </div>
    );
}