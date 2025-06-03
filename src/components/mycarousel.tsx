"use client";

import * as React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

// Import your images
import t1 from "../images/t1.jpg";
import t2 from "../images/t2.jpg";
import t3 from "../images/t3.jpg";
import t4 from "../images/t4.jpg";
import t5 from "../images/t5.png";
import t6 from "../images/t6.jpg";
import t7 from "../images/t7.jpg";
import t8 from "../images/t8.jpeg";
import t9 from "../images/t9.png";
import t10 from "../images/t10.png";
import nature from "../images/nature.jpg";
import nature1 from "../images/nature1.jpg";
import nature2 from "../images/nature2.jpg";
import nature3 from "../images/nature3.jpg";
import nature4 from "../images/nature4.jpg";
import nature5 from "../images/nature5.jpg";
import nature6 from "../images/nature6.jpg";
import nature7 from "../images/nature7.jpg";
import nature8 from "../images/nature8.jpg";
import nature9 from "../images/nature9.jpg";
import c1 from "../images/c1.jpg";
import c2 from "../images/c2.jpg";
import c3 from "../images/c3.jpg";
import c4 from "../images/c4.jpeg";
import c5 from "../images/c5.jpg";
import c6 from "../images/c6.jpg";
import c7 from "../images/c7.jpg";
import c8 from "../images/c8.jpg";
import c9 from "../images/c9.jpg";
import c10 from "../images/c10.jpg";
import a1 from "../images/a1.jpg";
import a2 from "../images/a2.jpg";
import a3 from "../images/a3.jpg";
import a4 from "../images/a4.jpg";
import a5 from "../images/a5.jpg";
import a6 from "../images/a6.jpg";
import a7 from "../images/a7.jpg";
import a8 from "../images/a8.jpg";
import a9 from "../images/a9.jpg";
import a10 from "../images/a10.jpg";
import s1 from "../images/s1.jpg";
import s2 from "../images/s2.jpg";
import s3 from "../images/s3.jpg";
import s4 from "../images/s4.jpg";
import s5 from "../images/s5.jpg";
import s6 from "../images/s6.jpg";
import s7 from "../images/s7.jpg";

export function CarouselDApiDemo() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(1);
  const [count, setCount] = React.useState(0);

  const images = [
    t1,
    t2,
    t3,
    t4,
    t5,
    t6,
    t7,
    t8,
    t9,
    t10,
    c1,
    c2,
    c3,
    c4,
    c5,
    c6,
    c7,
    c8,
    c9,
    c10,
    nature,
    nature1,
    nature2,
    nature3,
    nature4,
    nature5,
    nature6,
    nature7,
    nature8,
    nature9,
    a1,
    a2,
    a3,
    a4,
    a5,
    a6,
    a7,
    a8,
    a9,
    a10,
    s1,
    s2,
    s3,
    s4,
    s5,
    s6,
    s7,
  ];

  React.useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => setCurrent(api.selectedScrollSnap() + 1));
  }, [api]);

  return (
    <div className="w-full max-w-7xl mx-auto">
      <Carousel
        setApi={setApi}
        className="min-w-full"
        opts={{ align: "center", loop: true }}
      >
        <CarouselContent className="gap-6">
          {images.map((img, index) => (
            <CarouselItem
              key={index}
              className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
            >
              <Card className="relative h-64 sm:h-72 md:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-xl transition-transform hover:scale-105">
                <div className="absolute inset-0 z-0">
                  <Image
                    src={img}
                    alt={`Blur background ${index + 1}`}
                    className="w-full h-full object-cover blur-2xl scale-110"
                    placeholder="blur"
                    aria-hidden
                  />
                </div>
                <CardContent className="relative z-10 flex items-center justify-center h-full bg-white/10 backdrop-blur-sm">
                  <Image
                    src={img}
                    alt={`Image ${index + 1}`}
                    className="max-h-full max-w-full object-contain rounded-lg border-2 border-white shadow-md"
                    placeholder="blur"
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="w-6 h-6 sm:w-10 sm:h-10 bg-white/80 backdrop-blur-md border rounded-full shadow hover:bg-white left-0 sm:left-0" />
        <CarouselNext className="w-6 h-6 sm:w-10 sm:h-10 bg-white/80 backdrop-blur-md border rounded-full shadow hover:bg-white right-0 sm:right-0" />
      </Carousel>

      <div className="text-center mt-4 text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-gray-200 via-gray-100 to-white drop-shadow">
        Slide {current} of {count}
      </div>
    </div>
  );
}
