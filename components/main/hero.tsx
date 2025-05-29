"use client";

import { Button } from "@/components/util/button";
import Image from "next/image";
import { useState, useEffect } from "react";

// Container component (assuming you have this)
const Container = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={`lg:max-w-7xl mx-auto px-4 sm:px-4 md:px-4 lg:px-6 ${className}`}
  >
    {children}
  </div>
);

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
  lang: string;
};

export default function Hero({ dict, lang }: HeroProps) {
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

      {/* Main content using grid layout */}
      <Container className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-16 lg:gap-8 lg:items-center min-h-[auto] md:min-h-[90vh]">
          {/* Left content column - takes 7 of 16 columns */}
          <div className="lg:col-span-7 z-10 flex flex-col justify-center h-full">
            <h1 className="font-display text-5xl font-bold tracking-normal text-balance text-wu-official sm:text-7xl md:text-7xl">
              {dict.hero.title}
            </h1>
            <p className="mt-8 max-w-lg text-lg/7 font-medium text-white sm:text-xl/8">
              {dict.hero.subtitle}
            </p>
            <div className="mt-8 mb-6 md:mb-0 md:mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
              <Button
                variant="primary"
                className=""
                href={`/${lang}/wyslij-odbierz`}
              >
                {dict.hero.sendReceiveButton}
              </Button>

              <Button variant="secondary" className="" href={`/${lang}/agent`}>
                {dict.hero.becomeAgentButton}
              </Button>
            </div>
          </div>

          {/* Right image column - takes 9 of 16 columns */}
          <div className="lg:col-span-9 mt-4 lg:mt-0 relative">
            <div className="relative overflow-hidden h-full max-h-[90vh]">
              {/* Gradient overlay - blending from left side of the image */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10"></div>

              {/* Additional vignette effect */}
              <div className="absolute inset-0 bg-radial-gradient z-10 opacity-40"></div>

              <Image
                src={selectedImage || "/placeholder.svg"}
                alt={dict.hero.imageAlt}
                width={900}
                height={1000}
                className={`object-contain lg:object-cover h-auto w-full max-h-[90vh] transition-opacity duration-300 ${
                  isLoaded ? "opacity-100" : "opacity-0"
                }`}
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </Container>

      {/* Mobile image fallback - shown only on smaller screens if needed */}
      {/* <div className="lg:hidden relative w-full min-h-[300px] mx-auto mt-8">
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
      </div> */}
    </div>
  );
}
