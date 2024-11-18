'use client';
import Image from "next/image";
import { StaticImageData } from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

// import images
import img_1 from "@/public/ServiceSlider/1.jpg";
import img_2 from "@/public/ServiceSlider/2.jpg";
import img_3 from "@/public/ServiceSlider/3.jpg";
interface slide{
    imageUrl : StaticImageData,
    title: string,
    caption : string
}
const slides:slide[] = [
    {
      imageUrl: img_1,
      title: 'Make Every Moment Magical',
      caption: 'Discover trusted local vendors, music, and catering for a celebration tailored to your dreams',
    },
    {
      imageUrl: img_2,
      title: 'Your Perfect Day, Simplified',
      caption: 'From venues to music, find all you need to plan a wedding that reflects your unique love story',
    },
    {
      imageUrl: img_3,
      title: 'Celebrate with Confidence',
      caption: 'Connect with top local providers and let us handle the details for a stress-free, unforgettable event',
    },
  ];

export default function App() {

  return (
    <Swiper
      pagination={{ clickable: true }}
      modules={[Pagination, Autoplay]}
      autoplay={{ delay: 5000 }}
      className="mySwiper max-h-[500px] overflow-hidden"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index} className="relative">
          <Image src={slide.imageUrl} alt={`Slide ${index + 1}`} width={1920} height={500} className="object-cover" />
          
          {/* Title and Caption with Animation */}
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-center p-4">
            <h2 className="text-white text-xl md:text-3xl font-bold animate-fade-in-down">{slide.title}</h2>
            <p className="text-white text-md md:text-lg mt-2 animate-fade-in-up">{slide.caption}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
