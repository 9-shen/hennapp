'use client';
import Link from 'next/link';
import { StaticImageData } from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules'; // Swiper modules for additional functionalities

import img_1 from "@/public/Carousel/1.jpg";
import img_2 from "@/public/Carousel/2.jpg";
import img_3 from "@/public/Carousel/3.jpg";
import img_4 from "@/public/Carousel/4.jpg";
import img_5 from "@/public/Carousel/5.jpg";
import img_6 from "@/public/Carousel/6.jpg";


interface CarouselItem {
  id: number | string;
  title: string;
  imageUrl: StaticImageData;
  href: string;
}

const items: CarouselItem[] = [
  { id: 1, title: 'Make-up', imageUrl: img_1, href: '/makeup' },
  { id: 2, title: 'Photography', imageUrl: img_2, href: '/photograph' },
  { id: 3, title: 'Locals', imageUrl: img_3, href: '/locals' },
  { id: 4, title: 'Music', imageUrl: img_4, href: '/music' },
  { id: 5, title: 'Honey Moon', imageUrl: img_5, href: '/honeymoon' },
  { id: 6, title: 'Catering', imageUrl: img_6, href: '/catering' },
];

const CategorySlider: React.FC = () => {
  return (
    <div className="relative w-full max-w-7xl mx-auto p-5">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        //pagination={{ clickable: true }}
        //autoplay={{ delay: 3000 }}
        breakpoints={{
            1200: {
              slidesPerView: 5,
              slidesPerGroup: 5,
            },
            1024: {
              slidesPerView: 3,
              slidesPerGroup: 3,
            },
            768: {
              slidesPerView: 2,
              slidesPerGroup: 2,
            },
            640: {
              slidesPerView: 1,
              slidesPerGroup: 1,
            },
          }}
        className="h-[250px]" // Adjust the height as needed
      >
        {items.map((item) => (
          <SwiperSlide key={item.id}>
            <div
              className="relative h-64 bg-cover bg-center rounded-lg overflow-hidden shadow-lg"
              style={{ backgroundImage: `url(${item.imageUrl.src})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-40 hover:bg-opacity-50 transition-all duration-300 flex items-end">
                <h3 className="w-full text-center text-white text-xl font-bold p-4 bg-opacity-60 bg-black">
                  <Link href={item.href}>{item.title}</Link>
                </h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CategorySlider;
