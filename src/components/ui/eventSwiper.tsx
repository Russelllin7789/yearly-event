"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// 引入 Swiper 樣式
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const EventHeader = () => {
  const slides = [
    {
      subtitle: "2024.10 韓式烤肉",
      image: "/images/slide1.jpg",
    },
    {
      subtitle: "2024.11 室內露營",
      image: "/images/slide2.jpg",
    },
    {
      subtitle: "2024.12 交換禮物",
      image: "/images/slide3.jpg",
    },
  ];

  return (
    <header className="pt-16">
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="h-[500px] w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="w-full h-full">
            <div className="relative w-full h-full">
              <div className="absolute inset-0">
                <Image
                  src={slide.image}
                  alt={slide.subtitle}
                  fill
                  style={{ objectFit: "cover" }}
                  priority={index === 0}
                  sizes="100vw"
                  quality={75} // 可以調整圖片品質，75 是個好的平衡點
                  loading={index === 0 ? "eager" : "lazy"}
                />
                {/* 暗色遮罩 */}
                <div className="absolute inset-0 bg-black/50" />
              </div>
              <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-white">
                <h1 className="text-2xl md:text-4xl font-bold mb-6 text-center">
                  ✧蛇來好彩頭，福氣好年冬✧
                </h1>
                <p className="text-xl mb-8 text-center">{slide.subtitle}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </header>
  );
};

export default EventHeader;
