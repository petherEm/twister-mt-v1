"use client";

import { useState } from "react";
import PriceTag from "./price-tag";
import { Button } from "@/components/ui/button";

export default function DemoPage() {
  const [showTag, setShowTag] = useState(true);
  const [tagKey, setTagKey] = useState(0);

  // const resetAnimation = () => {
  //   setShowTag(false);
  //   setTimeout(() => {
  //     setTagKey((prev) => prev + 1);
  //     setShowTag(true);
  //   }, 100);
  // };

  return (
    <div className="h-4 w-full bg-wu-official flex items-center justify-center relative">
      {/* {showTag && <PriceTag key={tagKey} price="6 999" label="Promocja" />} */}
      {/* <div className="text-md font-bold text-black  px-2 py-1 rounded-md">
        🚧 Wersja 2 🚧
      </div> */}
    </div>
  );
}
