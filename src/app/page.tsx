"use client"

import Link from "next/link";
import { useEffect, useState } from "react";

const imageList = [
  "https://placehold.co/600x400",
  "https://placehold.co/400",
  "https://placehold.co/600x400",
  "https://placehold.co/400"
];

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isZooming, setIsZooming] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsZooming(true);
      setTimeout(() => {
        setCurrentImage((prevImage) => (prevImage + 1) % imageList.length);
        setIsZooming(false);
      }, 3000);
    }, 5000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`bg-primary min-w-screen min h-screen max-w-screen max-h-screen text-secondary flex flex-col overflow-hidden gap-8 bg-cover bg-center transition-transform duration-800 ${
        isZooming ? "animate-zoom" : ""
      }`}
    style={{ backgroundImage: `url(${imageList[currentImage]})` }}
    >
      <div className="w-full h-1/2 flex justify-center items-end bg-opacity-50">
        <h1 className="font-bold lg:text-8xl">PHOTOGRAPHY</h1>
      </div>
      <div className="w-full h-1/2 flex flex-col justify-evenly items-start lg:pl-14 lg:text-xl">
        <p className="block w-1/3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio natus
          illum libero saepe dolores! Possimus reiciendis sint, incidunt dolor,
          cumque ex natus impedit dignissimos nihil, atque error fuga similique
          architecto!
        </p>
        <Link href={""} className="capitalize underline">
          Explore Our Portfolio
        </Link>
      </div>
    </div>
  );
}
