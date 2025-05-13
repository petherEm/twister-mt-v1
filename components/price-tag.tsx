"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface PriceTagProps {
  price: string;
  currency?: string;
  label?: string;
  color?: string;
}

export default function PriceTag({
  price = "6,999",
  currency = "PLN",
  label = "SALE",
  color = "#ffcc33",
}: PriceTagProps) {
  const [animate, setAnimate] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setAnimate(true);

    // Reset animation after 3 seconds
    const timer = setTimeout(() => {
      setAnimate(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleTagClick = () => {
    // Trigger animation again
    setAnimate(true);

    // Reset animation after 3 seconds
    setTimeout(() => {
      setAnimate(false);
    }, 3000);
  };

  if (!visible) return null;

  return (
    <div className="fixed right-1/8 top-0 -translate-x-1/2 z-50">
      {/* String */}
      <div className="w-[2px] h-28 bg-gray-300 mx-auto relative">
        {/* Shadow for string */}
        <div className="absolute w-[1px] h-full bg-gray-400 left-[2px]"></div>
      </div>

      {/* Price Tag */}
      <motion.div
        initial={{ y: -150 }}
        animate={{
          y: 0,
          rotate: animate ? [0, 15, -15, 10, -10, 5, -5, 0] : 0,
        }}
        transition={{
          y: { duration: 0.5, ease: "easeOut" },
          rotate: { duration: 3, ease: "easeInOut" },
        }}
        className="relative"
      >
        {/* Close button */}
        <button
          onClick={() => setVisible(false)}
          className="absolute -top-2 -right-2 bg-red-500 text-white w-6 h-6 rounded-full z-10 flex items-center justify-center shadow-md hover:bg-red-600 transition-colors duration-200"
          aria-label="Remove price tag"
        >
          ×
        </button>

        {/* Tag shape */}
        <div
          className="w-42 h-52 rounded-b-lg relative shadow-lg cursor-pointer"
          style={{ backgroundColor: color }}
          onClick={handleTagClick}
        >
          {/* Hole for string */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-white border-2 border-gray-200 shadow-inner"></div>

          {/* Price content */}
          <div className="absolute top-8 left-0 w-full flex flex-col items-center justify-center text-black">
            <span className="text-sm font-bold">{label}</span>
            <div className="mt-2 flex items-start">
              <span className="text-4xl font-bold">{price}</span>
            </div>
            {currency}
            {/* Tag details */}
            <div className="mt-4 w-full px-4">
              <div className="border-t border-white/30 pt-2 text-xs text-center">
                Oferta limitowana
              </div>
            </div>
          </div>
        </div>

        {/* Tag corner fold */}
        <div className="absolute top-0 right-0 w-0 h-0 border-t-[15px] border-r-[15px] border-t-white/20 border-r-transparent"></div>
      </motion.div>
    </div>
  );
}
