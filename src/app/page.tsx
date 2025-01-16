"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import dummyImage from '@/assets/dummyImage.jpeg';
import GuestLayout from "@/components/layouts/GuestLayout";

const imageList = [
  "https://placehold.co/600x400",
  dummyImage.src,
];

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true); // Start fading out
      setTimeout(() => {
        setCurrentImage((prevImage) => (prevImage + 1) % imageList.length); // Change image
        setIsFading(false); // Remove fading state
      }, 1500); // Match CSS opacity transition
    }, 5000); // Interval between images
    return () => clearInterval(interval);
  }, []);

  return (
    <GuestLayout>
    <div className="relative min-w-screen h-screen max-w-screen max-h-screen overflow-hidden">
      {/* Background Layer */}
      <div
        className={`fade-background ${isFading ? "hidden-opacity" : ""}`}
        style={{
          backgroundImage: `url(${imageList[currentImage]})`,
        }}
      ></div>

      {/* Static Content */}
      <div className="static-content flex flex-col text-secondary gap-8 h-full relative">
        {/* Heading Section */}
        <div className="w-full h-1/2 flex justify-center items-end bg-opacity-50">
          <h1 className="font-bold lg:text-8xl"><span>BAP</span>{"  "}<span>PHOTOGRAPHY</span></h1>
        </div>

        {/* Text Section */}
        <div className="absolute bottom-8 left-8">
          <Link href={""} className="capitalize underline text-xl lg:text-2xl">
            Explore Our Portfolio
          </Link>
        </div>
      </div>
    </div>
    </GuestLayout>
  );
}
