'use client'
import Link from 'next/link';
import Image from 'next/image';
import { StaticImageData } from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { FaStar, FaRegStar } from 'react-icons/fa';

import img_1 from "@/public/SupplierSlider/1.jpg";
import img_2 from "@/public/SupplierSlider/2.jpg";
import img_3 from "@/public/SupplierSlider/3.jpg";
import img_4 from "@/public/SupplierSlider/4.jpg";
import img_5 from "@/public/SupplierSlider/5.jpg";
import img_6 from "@/public/SupplierSlider/6.jpg";

interface SupplierItem {
    id: number | string;
    category: string;
    name: string;
    city: string;
    review: number;
    price: number;
    imageUrl: StaticImageData;
    href: string;
}

const items: SupplierItem[] = [
    { id: 1, category: 'Make Up', name: 'Jack Bauer', city:'Tanger', review: 34, price:456, imageUrl: img_1, href: '/suppliers/singlesupplier' },
    { id: 2, category: 'Music', name: 'Sarah Scott', city:'Casablanca', review: 45, price:6555, imageUrl: img_2, href: '/suppliers/singlesupplier' },
    { id: 3, category: 'Video', name: 'Micheal Snow', city:'Rabat', review: 12, price:887, imageUrl: img_3, href: '/suppliers/singlesupplier' },
    { id: 4, category: 'Tours', name: 'Ed Bradwey', city:'Marrakech', review: 78, price:4322, imageUrl: img_4, href: '/suppliers/singlesupplier' },
    { id: 5, category: 'Honey Moon', name: 'Mariana Lopez', city:'Chefchaouen', review: 43, price:1500, imageUrl: img_5, href: '/suppliers/singlesupplier' },
    { id: 6, category: 'Locals', name: 'John Smith', city:'Fes', review: 98, price:2500, imageUrl: img_6, href: '/suppliers/singlesupplier' },
];

export default function SupplierSlider() {
    return (
        <div className="p-8">
            <div className="py-4 mt-10 mb-4 px-10 flex flex-col sm:flex-row justify-between items-center">
                <h1 className="text-3xl font-bold uppercase mb-2 sm:mb-0">Suppliers</h1>
                <Link className="bg-pink-500 hover:bg-pink-800 py-2 px-3 text-white rounded-md" href={'/suppliers'}>
                    View All Suppliers
                </Link>
            </div>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                navigation
                autoplay={{ delay: 3000, pauseOnMouseEnter: true }}
                breakpoints={{
                    1200: { slidesPerView: 4, slidesPerGroup: 4 },
                    1024: { slidesPerView: 3, slidesPerGroup: 3 },
                    768: { slidesPerView: 2, slidesPerGroup: 2 },
                    640: { slidesPerView: 1, slidesPerGroup: 1 },
                }}
                className="h-[400px]"
            >
                {items.map((item) => (
                    <SwiperSlide key={item.id}>
                        
                        <div className="flex items-center justify-center">
                        
                        <div className="bg-white rounded-lg overflow-hidden shadow-2xl w-[300px]">
                            <Image
                                className="h-48 w-full object-cover object-center mx-auto"
                                src={item.imageUrl}
                                alt={item.name}
                                width={200}
                                height={200}
                            />
                            <div className="p-4">
                                <div className="flex items-center justify-between">
                                    <span className="bg-teal-200 text-teal-800 py-1 px-2 text-xs rounded uppercase font-semibold">
                                        {item.category}
                                    </span>
                                    <span className="text-gray-500 text-xs">{item.city}</span>
                                </div>
                                <h4 className="mt-2 font-semibold text-lg leading-tight">
                                    <Link href={item.href}>
                                        {item.name}
                                    </Link>
                                </h4>
                                <div className="mt-1 text-lg font-semibold">${item.price}</div>
                                <div className="text-gray-500 text-sm">/ Event</div>
                                <div className="mt-3 flex items-center">
                                    <div className="flex text-teal-600">
                                        {[...Array(4)].map((_, i) => (
                                            <FaStar key={i} />
                                        ))}
                                        <FaRegStar />
                                    </div>
                                    <span className="ml-2 text-gray-600 text-sm">{item.review} reviews</span>
                                </div>
                            </div>
                            </div>
                        </div>

                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
