"use client";
import React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const Slider = () => {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 1500,
        }),
      ]}
    >
      <CarouselContent className=" slider w-90 h-90 md:w-80 md:h-80 ">
        <CarouselItem>
          <img src="./profile1.jpg" alt="profile1" />
        </CarouselItem>
        <CarouselItem>
          <img src="./profile.jpg" alt="profile" />
        </CarouselItem>
        <CarouselItem>
          <img src="./profile2.jpg" alt="profile2" />
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
};

export default Slider;
