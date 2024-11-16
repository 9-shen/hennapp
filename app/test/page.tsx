'use client';
// Import necessary modules from React and Swiper
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';

// Import Swiper styles and custom CSS module
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import styles from '@/app/test/styles.module.css';

export default function App() {
  return (
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
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className={styles.swiper}
      >
        <SwiperSlide className={styles['swiper-slide']}>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" alt="Nature 1" />
        </SwiperSlide>
        <SwiperSlide className={styles['swiper-slide']}>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" alt="Nature 2" />
        </SwiperSlide>
        <SwiperSlide className={styles['swiper-slide']}>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" alt="Nature 3" />
        </SwiperSlide>
        <SwiperSlide className={styles['swiper-slide']}>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" alt="Nature 4" />
        </SwiperSlide>
        <SwiperSlide className={styles['swiper-slide']}>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" alt="Nature 5" />
        </SwiperSlide>
        <SwiperSlide className={styles['swiper-slide']}>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" alt="Nature 6" />
        </SwiperSlide>
        <SwiperSlide className={styles['swiper-slide']}>
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" alt="Nature 7" />
        </SwiperSlide>
        <SwiperSlide className={styles['swiper-slide']}>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" alt="Nature 8" />
        </SwiperSlide>
        <SwiperSlide className={styles['swiper-slide']}>
          <img src="https://swiperjs.com/demos/images/nature-9.jpg" alt="Nature 9" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
