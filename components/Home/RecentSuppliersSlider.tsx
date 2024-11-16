'use client';
import Link from "next/link";
import Image from "next/image";
import {StaticImageData} from "next/image";
// Import necessary modules from React and Swiper
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';

// import css as module
import styles from '@/_css/RecentSuppliersSlider.module.css';


import img_1 from "@/public/RecentSuppliersSlider/1.jpg";
import img_2 from "@/public/RecentSuppliersSlider/2.jpg";
import img_3 from "@/public/RecentSuppliersSlider/3.jpg";
import img_4 from "@/public/RecentSuppliersSlider/4.jpg";
import img_5 from "@/public/RecentSuppliersSlider/5.jpg";
import img_6 from "@/public/RecentSuppliersSlider/6.jpg";
import img_7 from "@/public/RecentSuppliersSlider/7.jpg";
import img_8 from "@/public/RecentSuppliersSlider/8.jpg";
import img_9 from "@/public/RecentSuppliersSlider/9.jpg";
import img_10 from "@/public/RecentSuppliersSlider/10.jpg";

import { FaExternalLinkAlt } from "react-icons/fa";

interface RecentItem {
    id: number | string;
    name: string;
    city: string;
    price: number;
    imageUrl: StaticImageData;
    href: string;
}

const items: RecentItem[] = [
    { id: 1, name: 'Dj Rafik', city:'Nador', price:456, imageUrl: img_1, href: '/suppliers' },
    { id: 2, name: 'Nagafa Bidaouia', city:'Tetouan',  price:765, imageUrl: img_2, href: '/suppliers' },
    { id: 3, name: 'Traiteur Naoufal', city:'Asilah', price:887, imageUrl: img_3, href: '/suppliers' },
    { id: 4, name: 'Salle Amrani', city:'Kenitra', price:998, imageUrl: img_4, href: '/suppliers' },
    { id: 5, name: 'Seloua Mrakchia', city:'Chefchaouen', price:1500, imageUrl: img_5, href: '/suppliers' },
    { id: 6, name: 'Issawa Style', city:'Fes', price:146, imageUrl: img_6, href: '/suppliers' },
    { id: 7, name: 'Mourabit Lms', city:'Agadir', price:1654, imageUrl: img_7, href: '/suppliers' },
    { id: 8, name: 'Said Houat', city:'Ouarzazate', price:2500, imageUrl: img_8, href: '/suppliers' },
    { id: 9, name: 'Majda Jebli', city:'Tanger', price:657, imageUrl: img_9, href: '/suppliers' },
    { id: 10, name: 'Fatiha Sadii', city:'Mohamedia', price:4880, imageUrl: img_10, href: '/suppliers' },
];

export default function RecentSuppliersSlider(){

    return (
        <div className="bg-gradient-to-tl from-pink-100 via-pink-300 to-pink-500 p-8">

            <div className="py-4 mt-10 mb-4 px-10 flex flex-col sm:flex-row justify-between items-center">
                <h1 className="text-3xl font-bold uppercase mb-2 sm:mb-0">Recent Providers</h1>
                <Link className="bg-pink-500 hover:bg-pink-800 py-2 px-3 text-white rounded-md" href={'/services'}>
                    View All Provider
                </Link>
             </div>

           
          
    <div id="app" className={styles.app}>
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination]}
        className={styles.swiper}
      >
        {items.map((item) => (
            <SwiperSlide key={item.id} className={styles['swiper-slide']}>
            <div className="w-72 bg-white shadow-md">
            <Image width={300} height={300} src={item.imageUrl}
            alt="Product" className="object-cover  cursor-move" />
            <div className="px-4 py-3 w-72">
            <span className="mr-3 uppercase text-xs text-teal-500">{item.city}</span>
            <p className="text-lg font-bold text-black truncate block capitalize">{item.name}</p>
            <div className="flex items-center">
            <p className="text-lg font-semibold text-black cursor-auto my-3">${item.price}</p>
            
            <div className="ml-auto"><Link href={item.href}><FaExternalLinkAlt/></Link></div>
            </div>
            </div>
            </div>
            </SwiperSlide>
        ))}
        
        
        
      </Swiper>
    </div>



        </div>
    );



}