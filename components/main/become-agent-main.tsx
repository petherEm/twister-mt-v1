import { AnimatedNumber } from "@/components/util/animated-number";
import Image from "next/image";
import { Container } from "@/components/util/container";
import { Heading } from "@/components/util/text";
import { Button } from "@/components/util/button";

import { Globe, Clock, Users, Banknote } from "lucide-react";

type BecomeAgentProps = {
  dict: {
    becomeAgent: {
      title: string;
      bulletPoints: string[];
      buttonText: string;
      stats: {
        yearsOnMarket: string;
        numberOfAgents: string;
      };
      imageAlt: string;
    };
  };
  lang?: string;
};

export default function BecomeAgentMain({
  dict,
  lang = "pl",
}: BecomeAgentProps) {
  // Array of agent images
  const agentImages = ["/agent-1.jpg", "/agent-2.jpg", "/agent-3.jpg"];

  // Select a random image on the server during component render
  const randomIndex = Math.floor(Math.random() * agentImages.length);
  const selectedImage = agentImages[randomIndex];

  return (
    <main className="overflow-hidden">
      <Container className="mt-16 mb-20">
        <div className="relative min-h-[auto] overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
            {/* Left image */}
            <div className="relative h-full overflow-hidden">
              <Image
                src="/concept-store.webp"
                alt="Become an agent"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>

            {/* Right content */}
            <div className="z-10">
              <Heading as="h1" className="!font-bold text-black">
                Do you want become an agent? Join our network!
              </Heading>

              <ul className="mt-8 space-y-4">
                <li className="flex items-start">
                  <Banknote className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-black">Real earnings every month</span>
                </li>
                <li className="flex items-start">
                  <Globe className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-black">A strong global presence</span>
                </li>
                <li className="flex items-start">
                  <Clock className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-black">Innovative money transfer</span>
                </li>
                <li className="flex items-start">
                  <Users className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-black">
                    Attract new and more customers
                  </span>
                </li>
              </ul>

              <div className="mt-8 space-y-6">
                <p className="text-black text-sm leading-relaxed">
                  Twister is a well-established travel agency with over 30 years
                  of experience on the market—and for more than 20 of those
                  years, we've also been helping people stay connected through
                  fast and secure money transfers. As the official Master Agent
                  for Western Union in Poland, we proudly manage a nationwide
                  network of over 120 trusted agents. Whether you're sending
                  money to loved ones or receiving support from abroad, we're
                  here to make every transaction easy, reliable, and
                  stress-free. We offer full support to both customers and
                  agents across the country.
                </p>
                <p className="text-black text-sm leading-relaxed">
                  Interested in becoming a Western Union agent? Partner with us
                  to join our growing network and enjoy preferred rates, expert
                  guidance, and personalized support.
                </p>
                <Button variant="secondary" href={`/${lang}/agent`}>
                  Become an agent
                </Button>
              </div>
            </div>
          </div>

          {/* Bottom section with counters and logo */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-items-center">
            {/* Years on market counter */}
            <div className="flex flex-col gap-y-2 border-t border-b border-dotted border-gray-800 py-4 w-full text-center">
              <dt className="text-md text-black">Years on market</dt>
              <dd className="order-first text-7xl font-medium tracking-tight text-black">
                <AnimatedNumber start={0} end={30} />
              </dd>
            </div>

            {/* Number of agents counter */}
            <div className="flex flex-col gap-y-2 border-t border-b border-dotted border-gray-800 py-4 w-full text-center">
              <dt className="text-md text-black">Number of agents</dt>
              <dd className="order-first text-7xl font-medium tracking-tight text-black">
                <AnimatedNumber start={1} end={123} />+
              </dd>
            </div>

            {/* Logo */}
            <div className="flex flex-col items-center border-t border-b border-dotted border-gray-800 py-4 w-full">
              <div className="relative h-20 w-56">
                <Image
                  src="/wu-logo-black.svg"
                  alt="WU logo black"
                  fill
                  className="object-contain"
                />
              </div>
              <dt className="text-md text-black">
                Official partner from 22 years
              </dt>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
