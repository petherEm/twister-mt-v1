"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

type MidBannerLogoProps = {
  className?: string;
  dict: {
    midBanner: {
      partnerText: string;
      becomeAgent: string;
    };
  };
};

export function MidBannerLogo({ className, dict }: MidBannerLogoProps) {
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    // Set initial screen width
    setScreenWidth(window.innerWidth);

    // Update screen width on resize
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const bannerVariants = {
    animate: {
      x: [0, screenWidth ? -screenWidth : -1000],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 15,
          ease: "linear",
        },
      },
    },
  };

  return (
    <div className={`${className} bg-black py-6 px-0 overflow-hidden w-full`}>
      <motion.div
        variants={bannerVariants}
        animate="animate"
        className="flex items-center whitespace-nowrap"
      >
        {/* Duplicate content for seamless loop */}
        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex items-center min-w-max">
            <Image
              alt="Western Union"
              src="/logo-wu-big.svg"
              width={160}
              height={60}
              className="mx-4"
            />
            <p className="text-white text-md font-medium mx-4 whitespace-nowrap">
              {dict.midBanner.partnerText}
              <span className="font-bold">{dict.midBanner.becomeAgent}</span>
            </p>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
