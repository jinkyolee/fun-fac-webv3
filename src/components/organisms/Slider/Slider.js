import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwipereCore, { Pagination, Navigation, Autoplay } from "swiper";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";

SwipereCore.use([Pagination, Navigation, Autoplay]);

export const Slider = ({ style, slides, navigation, pagination }) => {
  const processedSlides = slides.map((element, index) => {
    return (
      <SwiperSlide key={index} tag="li">
        {element}
      </SwiperSlide>
    );
  });

  return (
    <Swiper
      navigation={navigation}
      pagination={(true, { clickable: true })}
      style={style}
      spaceBetween={0}
      slidesPerView={1}
      wrapperTag="ul"
      tag="section"
      autoplay={(true, { delay: 4000 })}
      loop
    >
      {processedSlides}
    </Swiper>
  );
};

export default Slider;
