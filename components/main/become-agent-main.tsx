import { AnimatedNumber } from "@/components/util/animated-number";
import Image from "next/image";
import { Container } from "@/components/util/container";
import { Heading, Lead } from "@/components/util/text";
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
                Z Nami dołączysz do sieci agentów Western Union i zaczniesz
                zarabiać.
              </Heading>
              <Lead className="mt-12 !text-black">
                {" "}
                Twister Poland od 25 lat ojest ficjalnym partnerem i Master
                Agentem Western Union. Z dumą wspieramy potrzeby przekazów
                pieniężnych naszych klientów, oferując szybki i bezpieczny
                serwis.{" "}
              </Lead>

              {/* <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
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
              </ul> */}

              <div className="mt-8 space-y-6">
                <p className="text-black text-sm leading-relaxed">
                  Firma TWISTER powstała w maju 1999 roku. Główny profil
                  działalności to usługi finansowe oraz międzynarodowe usługi
                  turystyczne. Od ponad dwóch dekad pomagamy ludziom pozostać w
                  kontakcie dzięki szybkim i bezpiecznym przekazom pieniężnym.
                  Jako oficjalny Master Agent Western Union w Polsce z dumą
                  zarządzamy ogólnopolską siecią ponad 200 zaufanych agentów.
                  Nasi partnerzy to m.in. kantory wymiany walut, biura podróży,
                  agencje płatnicze. Wszystkie placówki partnerskie są
                  odpowiednio oznakowane i realizują przekazy pieniężne z
                  zachowaniem najwyższych standardów obsługi Klienta.
                </p>
                <p className="text-black text-sm leading-relaxed">
                  Niezależnie od tego, czy wysyłasz pieniądze bliskim, czy
                  odbierasz wsparcie z zagranicy — jesteśmy tu, by każda
                  transakcja przebiegała sprawnie, bezpiecznie i bez zbędnego
                  stresu. Zapewniamy pełne wsparcie zarówno klientom, jak i
                  partnerom w całej Polsce.
                </p>
                <p className="text-black text-sm font-bold leading-relaxed">
                  Chcesz zostać agentem Western Union? Dołącz do naszej
                  rozwijającej się sieci i skorzystaj z preferencyjnych stawek,
                  profesjonalnego doradztwa i indywidualnego wsparcia na każdym
                  etapie współpracy.
                </p>
                <Button variant="secondary" href={`/${lang}/agent`}>
                  Zostań agentem
                </Button>
                <Button variant="primary" href={`/${lang}/agent`}>
                  Zadzwoń
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
                <AnimatedNumber start={1} end={200} />+
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
