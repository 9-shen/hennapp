'use client'
import React from 'react';
import Image from 'next/image';
import { StaticImageData } from 'next/image';
import Link from 'next/link';

// Import Swiper components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import the images for the slider
import img_1 from '@/public/HomeSlider/1.jpg';
import img_2 from '@/public/HomeSlider/2.jpg';
import img_3 from '@/public/HomeSlider/3.jpg';

interface Slide {
  id: number;
  title: string;
  caption: string;
  imageUrl: StaticImageData;
  buttonText: string;
  buttonLink: string;
}

const slides: Slide[] = [
  {
    id: 1,
    title: 'Explore the Henna App',
    caption: 'Experience the beauty of the Wedding Planing with our guided Tips.',
    imageUrl: img_1,
    buttonText: 'Learn More',
    buttonLink: '#',
  },
  {
    id: 2,
    title: 'Discover Our Provider',
    caption: 'Join Hennapp to expand your business.',
    imageUrl: img_2,
    buttonText: 'Get Started',
    buttonLink: '#',
  },
  {
    id: 3,
    title: 'Relax with Henna',
    caption: 'Discover Hennapp\'s comprehensive wedding services.',
    imageUrl: img_3,
    buttonText: 'Book Now',
    buttonLink: '#',
  },
];

const HomeSlider: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden h-[500px]">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
        className="w-full h-[450px]"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full">
              <Image
                src={slide.imageUrl}
                alt={slide.title}
                className="w-full h-full object-cover"
                layout="fill"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white">
                <h2 className="text-4xl md:text-6xl font-bold mb-4">{slide.title}</h2>
                <p className="text-lg md:text-2xl mb-8">{slide.caption}</p>
                <Link
                  href={slide.buttonLink}
                  className="bg-pink-600 hover:bg-pink-700 text-white py-3 px-6 rounded-full text-lg"
                >
                  {slide.buttonText}
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeSlider;
