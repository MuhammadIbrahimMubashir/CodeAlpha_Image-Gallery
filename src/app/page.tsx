"use client";

import { useState } from "react";
import Image from "next/image";
import { CarouselDApiDemo } from "@/components/mycarousel";
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

const categories = ["All", "Nature", "Technology", "Animals", "Cars", "Sports"];

const allImages = [
  { src: t1, category: "Technology", alt: "CodeAlpha Logo" },
  { src: t2, category: "Technology", alt: "Language" },
  { src: t3, category: "Technology", alt: "Robot" },
  { src: t4, category: "Technology", alt: "Robot" },
  { src: t5, category: "Technology", alt: "Robot" },
  { src: t6, category: "Technology", alt: "Robot" },
  { src: t7, category: "Technology", alt: "Robot" },
  { src: t8, category: "Technology", alt: "Robot" },
  { src: t9, category: "Technology", alt: "Robot" },
  { src: t10, category: "Technology", alt: "Robot" },
  { src: nature, category: "Nature", alt: "Nature" },
  { src: nature1, category: "Nature", alt: "Background" },
  { src: nature2, category: "Nature", alt: "Land" },
  { src: nature3, category: "Nature", alt: "Mountains" },
  { src: nature4, category: "Nature", alt: "Mountains" },
  { src: nature5, category: "Nature", alt: "Mountains" },
  { src: nature6, category: "Nature", alt: "Mountains" },
  { src: nature7, category: "Nature", alt: "Mountains" },
  { src: nature8, category: "Nature", alt: "Mountains" },
  { src: nature9, category: "Nature", alt: "Mountains" },
  { src: c1, category: "Cars", alt: "Car" },
  { src: c2, category: "Cars", alt: "Car" },
  { src: c3, category: "Cars", alt: "Car" },
  { src: c4, category: "Cars", alt: "Car" },
  { src: c5, category: "Cars", alt: "Car" },
  { src: c6, category: "Cars", alt: "Car" },
  { src: c7, category: "Cars", alt: "Car" },
  { src: c8, category: "Cars", alt: "Car" },
  { src: c9, category: "Cars", alt: "Car" },
  { src: c10, category: "Cars", alt: "Car" },
  { src: a1, category: "Animals", alt: "Animals" },
  { src: a2, category: "Animals", alt: "Animals" },
  { src: a3, category: "Animals", alt: "Animals" },
  { src: a4, category: "Animals", alt: "Animals" },
  { src: a5, category: "Animals", alt: "Animals" },
  { src: a6, category: "Animals", alt: "Animals" },
  { src: a7, category: "Animals", alt: "Animals" },
  { src: a8, category: "Animals", alt: "Animals" },
  { src: a9, category: "Animals", alt: "Animals" },
  { src: a10, category: "Animals", alt: "Animals" },
  { src: s1, category: "Sports", alt: "Sports" },
  { src: s2, category: "Sports", alt: "Sports" },
  { src: s3, category: "Sports", alt: "Sports" },
  { src: s4, category: "Sports", alt: "Sports" },
  { src: s5, category: "Sports", alt: "Sports" },
  { src: s6, category: "Sports", alt: "Sports" },
  { src: s7, category: "Sports", alt: "Sports" },
];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState("");

  const filteredImages =
    selectedCategory === "All"
      ? allImages
      : allImages.filter((img) => img.category === selectedCategory);

  const openLightbox = (src: any) => {
    setLightboxImage(src);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  return (
    <div className="min-h-screen max-w-screen bg-gradient-to-br from-[#1f1f1f] via-[#2c3e50] to-[#2a2a2a] flex flex-col items-center px-4 py-6">
      <title>Image Gallery</title>
      <div className="absolute min-w-fit h-72 bg-gradient-to-br from-[#434343] to-[#1f1f1f] opacity-60 rounded-full -top-20 -left-20 blur-3xl z-0" />
      <div className="absolute min-w-fit h-72 bg-gradient-to-br from-[#0f2027] to-[#203a43] opacity-60 rounded-full -bottom-20 -right-20 blur-3xl z-0" />
      <div className="relative z-10 w-full max-w-7xl bg-white/30 backdrop-blur-md rounded-3xl p-4 sm:p-6 md:p-10 shadow-2xl border border-white/50">
        <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-200 via-gray-100 to-white drop-shadow-lg mb-10 text-center tracking-tight uppercase">
          Image Gallery
        </h1>

        <div className="mb-12">
          <CarouselDApiDemo />
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 shadow backdrop-blur-sm ${
                selectedCategory === cat
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white scale-105"
                  : "bg-white/70 text-gray-800 hover:bg-blue-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
          {filteredImages.map((img, i) => (
            <div
              key={i}
              onClick={() => openLightbox(img.src)}
              className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={300}
                height={200}
                className="object-cover w-full h-44 sm:h-48 md:h-52"
                placeholder="blur"
              />
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>

      {lightboxOpen && (
        <div
          onClick={closeLightbox}
          className="fixed inset-0 backdrop-blur-md bg-black/80 flex items-center justify-center z-50"
        >
          <Image
            src={lightboxImage}
            alt="Large view"
            width={900}
            height={600}
            className="max-w-[90vw] max-h-[90vh] rounded-xl shadow-xl"
            onClick={(e) => e.stopPropagation()}
            priority
          />
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white text-4xl font-bold hover:text-red-400 transition duration-200"
            aria-label="Close lightbox"
          >
            &times;
          </button>
        </div>
      )}
    </div>
  );
}
