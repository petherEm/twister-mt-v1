import { Button } from "@/components/util/button";
import Image from "next/image";

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
  return (
    <div className="relative min-h-screen">
      <div className="max-w-8xl relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between min-h-screen py-16 sm:py-24 md:py-32">
          <div className="md:max-w-[45%] z-10">
            <h1 className="font-display text-5xl font-bold tracking-normal text-balance text-wu-official sm:text-7xl md:text-7xl">
              {dict.hero.title}
            </h1>
            <p className="mt-8 max-w-lg text-lg/7 font-medium text-white sm:text-xl/8">
              {dict.hero.subtitle}
            </p>
            <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
              <Button variant="primary" className="" href="/#wyslij">
                {dict.hero.sendReceiveButton}
              </Button>
              <Button variant="secondary" className="" href="/agent">
                {dict.hero.becomeAgentButton}
              </Button>
            </div>
          </div>

          {/* Image section - takes 45% width on desktop but full height */}
          <div className="hidden md:block absolute top-0 right-0 w-[55%] h-full">
            {/* Gradient overlay - blending from left side of the image */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10"></div>
            <Image
              src="/hero-img.webp"
              alt={dict.hero.imageAlt}
              fill
              className="object-cover object-center"
              priority
              sizes="(max-width: 768px) 100vw, 45vw"
            />
          </div>

          {/* Mobile image - shown only on smaller screens */}
          <div className="md:hidden mt-12 relative w-full min-h-[300px]">
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10"></div>
            <Image
              src="/hero-img.webp"
              alt={dict.hero.imageAlt}
              fill
              className="object-cover object-center"
              priority
              sizes="100vw"
            />
          </div>
        </div>
      </div>

      {/* Background color for the entire hero */}
      <div className="absolute inset-0 bg-black -z-10"></div>
    </div>
  );
}
