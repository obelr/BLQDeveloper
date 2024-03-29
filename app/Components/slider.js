import React, { useState, useEffect } from "react";

import "swiper/swiper-bundle.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import CarouselSlider from "./CarouselSlider";

const ImageSlider = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch("https://api.testvalley.kr/main-banner/all");
        const data = await response.json();
        setImages(data.map((banner) => banner.pcImageUrl));
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);

  return (
     <div className="flex justify-center items-center">
     <CarouselSlider images={images}/>
    </div>
  );
};

export default ImageSlider;
