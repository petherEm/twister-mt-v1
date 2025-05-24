"use client";

import { clsx } from "clsx";
import {
  MotionValue,
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  type HTMLMotionProps,
} from "framer-motion";
import { useCallback, useLayoutEffect, useRef, useState } from "react";
import useMeasure, { type RectReadOnly } from "react-use-measure";
import { Container } from "./util/container";
import { Heading, Lead } from "./util/text";
import Image from "next/image";
import { HISTORICAL_EVENTS } from "@/lib/constants";

type WUHistoryProps = {
  dict: {
    westernUnion: {
      history?: {
        title?: string;
        lead?: string;
        paragraphs?: string[];
        images?: {
          headquarters?: string;
          telegraphEquipment?: string;
          telegraphStation?: string;
          telegraphOperator?: string;
        };
      };
    };
  };
};

function HistoryCard({
  year,
  title,
  description,
  image,
  imageAlt,
  dict,
  bounds,
  scrollX,
  ...props
}: {
  year: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  dict: any;
  bounds: RectReadOnly;
  scrollX: MotionValue<number>;
} & HTMLMotionProps<"div">) {
  const ref = useRef<HTMLDivElement | null>(null);

  const computeOpacity = useCallback(() => {
    const element = ref.current;
    if (!element || bounds.width === 0) return 1;

    const rect = element.getBoundingClientRect();

    if (rect.left < bounds.left) {
      const diff = bounds.left - rect.left;
      const percent = diff / rect.width;
      return Math.max(0.5, 1 - percent);
    } else if (rect.right > bounds.right) {
      const diff = rect.right - bounds.right;
      const percent = diff / rect.width;
      return Math.max(0.5, 1 - percent);
    } else {
      return 1;
    }
  }, [ref, bounds.width, bounds.left, bounds.right]);

  const opacity = useSpring(computeOpacity(), {
    stiffness: 154,
    damping: 23,
  });

  useLayoutEffect(() => {
    opacity.set(computeOpacity());
  }, [computeOpacity, opacity]);

  useMotionValueEvent(scrollX, "change", () => {
    opacity.set(computeOpacity());
  });

  return (
    <motion.div
      ref={ref}
      style={{ opacity }}
      {...props}
      className="relative flex aspect-9/16 w-72 shrink-0 snap-start scroll-ml-(--scroll-padding) flex-col justify-end overflow-hidden sm:aspect-3/4 sm:w-96"
    >
      <img
        alt={imageAlt}
        src={image}
        className="absolute inset-x-0 top-0 aspect-square w-full object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-3xl bg-linear-to-t from-black from-[calc(7/16*100%)] ring-1 ring-gray-950/10 ring-inset sm:from-25%"
      />
      <figure className="relative p-10">
        <div className="mb-4">
          <span className="inline-block px-3 py-1 text-sm font-bold text-black bg-wu-official rounded-full">
            {year}
          </span>
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-sm/6 text-white/80">{description}</p>
      </figure>
    </motion.div>
  );
}

export function WUHistory({ dict }: WUHistoryProps) {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const { scrollX } = useScroll({ container: scrollRef });
  const [setReferenceWindowRef, bounds] = useMeasure();
  const [activeIndex, setActiveIndex] = useState(0);

  useMotionValueEvent(scrollX, "change", (x) => {
    if (scrollRef.current?.children[0]) {
      setActiveIndex(Math.floor(x / scrollRef.current.children[0].clientWidth));
    }
  });

  function scrollTo(index: number) {
    const gap = 32;
    const width = (scrollRef.current!.children[0] as HTMLElement).offsetWidth;
    scrollRef.current!.scrollTo({ left: (width + gap) * index });
  }

  return (
    <div className="overflow-hidden py-24 bg-black">
      <Container>
        <div ref={setReferenceWindowRef}>
          <Heading as="h2" className="mt-2 text-white">
            {dict.westernUnion?.history?.title || "Western Union Timeline"}
          </Heading>
          <Lead className="text-white/80">
            {dict.westernUnion?.history?.lead ||
              "From telegraph company to global financial services leader"}
          </Lead>
        </div>
      </Container>
      <div
        ref={scrollRef}
        className={clsx([
          "mt-16 flex gap-8 px-(--scroll-padding)",
          "[scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
          "snap-x snap-mandatory overflow-x-auto overscroll-x-contain scroll-smooth",
          "[--scroll-padding:max(--spacing(6),calc((100vw-(var(--container-2xl)))/2))] lg:[--scroll-padding:max(--spacing(8),calc((100vw-(var(--container-7xl)))/2))]",
        ])}
      >
        {HISTORICAL_EVENTS.map((event, index) => {
          // Get the appropriate alt text from dictionary if available
          const imageAlt =
            event.imageAltKey &&
            dict.westernUnion?.history?.images?.[
              event.imageAltKey as keyof typeof dict.westernUnion.history.images
            ]
              ? dict.westernUnion.history.images[
                  event.imageAltKey as keyof typeof dict.westernUnion.history.images
                ]
              : event.defaultAlt;

          return (
            <HistoryCard
              key={index}
              year={event.year}
              title={event.title}
              description={event.description}
              image={event.image}
              imageAlt={imageAlt || "Western Union historical image"}
              dict={dict}
              bounds={bounds}
              scrollX={scrollX}
              onClick={() => scrollTo(index)}
            />
          );
        })}
        <div className="w-2xl shrink-0 sm:w-[54rem]" />
      </div>

      {/* Timeline dots for navigation */}
      <Container className="mt-8">
        <div className="flex justify-center gap-2">
          {HISTORICAL_EVENTS.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                activeIndex === index ? "bg-wu-official" : "bg-gray-700"
              }`}
              aria-label={`Navigate to timeline item ${index + 1}`}
            />
          ))}
        </div>
      </Container>
    </div>
  );
}

// Keep the HistoryPage component for backward compatibility
export function HistoryPage({
  dict = {},
  lang = "pl",
}: {
  dict?: any;
  lang?: string;
}) {
  return <WUHistory dict={dict} />;
}
