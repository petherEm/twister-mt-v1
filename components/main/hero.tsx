"use client";

import { Button } from "@/components/util/button";
import Image from "next/image";
import { useState, useEffect } from "react";

type HeroProps = {
  dict: {
    hero: {
      title: string;
      subtitle: string;
      sendReceiveButton: string;
      becomeAgentButton: string;
      imageAlt: string;
    };
  };
};

export default function Hero({ dict }: HeroProps) {
  // Array of hero images
  const heroImages = ["/hero-1.jpg", "/hero-2.jpg", "/hero-3.jpg"];

  const [selectedImage, setSelectedImage] = useState(heroImages[0]); // Default to first image
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Select random image on client side
    const randomIndex = Math.floor(Math.random() * heroImages.length);
    setSelectedImage(heroImages[randomIndex]);
    setIsLoaded(true);
  }, []);

  return (
    <div className="relative min-h-[90vh] md:min-h-[90vh] overflow-hidden">
      {/* Background color for the entire hero */}
      <div className="absolute inset-0 bg-black -z-10"></div>

      {/* Main content container with proper alignment */}
      <div className="lg:max-w-7xl mx-auto px-4 sm:px-4 md:px-4 lg:px-6 relative z-10 h-full">
        <div className="flex flex-col md:flex-row md:items-center min-h-[auto] md:min-h-[90vh] py-16 sm:py-24 md:py-32">
          {/* Left content - aligned with container */}
          <div className="md:max-w-[45%] z-10">
            <h1 className="font-display text-5xl font-bold tracking-normal text-balance text-wu-official sm:text-7xl md:text-7xl">
              {dict.hero.title}
            </h1>
            <p className="mt-8 max-w-lg text-lg/7 font-medium text-white sm:text-xl/8">
              {dict.hero.subtitle}
            </p>
            <div className="mt-8 mb-6 md:mb-0 md:mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
              <Button variant="primary" className="" href="/wyslij-odbierz">
                {dict.hero.sendReceiveButton}
              </Button>
              <Button variant="secondary" className="" href="/agent">
                {dict.hero.becomeAgentButton}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Image section - positioned absolutely relative to the viewport */}
      <div className="hidden md:block absolute top-0 right-0 w-[55%] h-full">
        {/* Gradient overlay - blending from left side of the image */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10"></div>
        <Image
          src={selectedImage || "/placeholder.svg"}
          alt={dict.hero.imageAlt}
          fill
          className={`object-contain transition-opacity duration-300 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          priority
          sizes="(max-width: 768px) 100vw, 55vw"
        />
      </div>

      {/* Mobile image - shown only on smaller screens */}
      <div className="md:hidden relative w-full min-h-[300px] mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10"></div>
        <Image
          src={selectedImage || "/placeholder.svg"}
          alt={dict.hero.imageAlt}
          fill
          className={`object-cover object-center transition-opacity duration-300 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          priority
          sizes="100vw"
        />
      </div>
    </div>
  );
}
