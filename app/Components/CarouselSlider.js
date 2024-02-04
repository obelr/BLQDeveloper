import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useEffect, useState } from "react";

const CarouselSlider = ({ images }) => {
  return (
    <Swiper
    modules={[Navigation, Pagination]}
    slidesPerView={3}
    centeredSlides={true} // Center the active slide
    spaceBetween={30}
    pagination={{ clickable: true }}
    navigation={true}
    loop={true} // Enable infinite loop
    autoplay={{ delay: 5000 }} // Optional: autoplay
      
    >
      {images.map((imageUrl, index) => (
        <SwiperSlide key={index}>
          <img src={imageUrl} alt={`Slide ${index + 1}`} className="w-full h-auto" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CarouselSlider;
