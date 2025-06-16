import { AnimatedNumber } from "@/components/util/animated-number";
import Image from "next/image";
import { Container } from "@/components/util/container";
import { Heading, Lead } from "@/components/util/text";
import { Button } from "@/components/util/button";
import { Globe, Clock, Users, Banknote, Phone } from "lucide-react";

type BecomeAgentProps = {
  dict: {
    becomeAgent: {
      title: string;
      lead: string;
      description: string[];
      highlights: string;
      stats: {
        yearsOnMarket: string;
        numberOfAgents: string;
        officialPartner: string;
      };
      buttons: {
        becomeAgent: string;
        callUs: string;
      };
      imageAlt: {
        conceptStore: string;
        secondImage: string;
      };
    };
  };
  lang?: string;
};

export default function BecomeAgentMain({
  dict,
  lang = "pl",
}: BecomeAgentProps) {
  return (
    <main className="overflow-hidden">
      <Container className="mt-16 mb-20">
        <div className="relative min-h-[auto] overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Left column - both images, stats, and WU logo */}
            <div className="flex flex-col h-full">
              {/* First image */}
              <div className="relative h-[400px] md:h-[450px] overflow-hidden shadow-md mb-6">
                <Image
                  src="/concept-store-3.webp"
                  alt={dict.becomeAgent.imageAlt.conceptStore}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>

              {/* Second image */}
              <div className="relative h-[280px] overflow-hidden shadow-md mb-6">
                <Image
                  src="/concept-store-4.jpg"
                  alt={dict.becomeAgent.imageAlt.secondImage}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>

              {/* Stats section - all 3 items in one row */}
              <div className="mt-2 grid grid-cols-3 gap-2 mb-6">
                {/* Years on market counter */}
                <div className="flex flex-col gap-y-1 border-t border-b border-dotted border-black py-3 w-full text-center">
                  <dt className="text-xs text-black mt-2">
                    {dict.becomeAgent.stats.yearsOnMarket}
                  </dt>
                  <dd className="order-first text-4xl font-medium tracking-tight text-black">
                    <AnimatedNumber start={0} end={26} />
                  </dd>
                </div>

                {/* Number of agents counter */}
                <div className="flex flex-col gap-y-1 border-t border-b border-dotted border-black py-3 w-full text-center">
                  <dt className="text-xs text-black mt-2">
                    {dict.becomeAgent.stats.numberOfAgents}
                  </dt>
                  <dd className="order-first text-4xl font-medium tracking-tight text-black">
                    <AnimatedNumber start={1} end={200} />+
                  </dd>
                </div>

                {/* Official Partner */}
                <div className="flex flex-col gap-y-1 border-t border-b border-dotted border-black py-3 w-full text-center items-center">
                  <div className="relative h-12 w-36">
                    <Image
                      src="/wu-logo-black.svg"
                      alt="WU logo black"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <dt className="text-xs text-black">
                    {dict.becomeAgent.stats.officialPartner}
                  </dt>
                </div>
              </div>
            </div>

            {/* Right column - all text content */}
            <div className="z-10 flex flex-col h-full justify-between">
              <div>
                <Heading as="h1" className="!font-bold text-black">
                  {dict.becomeAgent.title}
                </Heading>

                <Lead className="mt-6 !text-black">
                  {dict.becomeAgent.lead}
                </Lead>

                <div className="mt-8 space-y-3">
                  {dict.becomeAgent.description.map((paragraph, index) => (
                    <p
                      key={index}
                      className={`text-black text-sm ${
                        index === dict.becomeAgent.description.length - 1
                          ? "font-bold"
                          : ""
                      } leading-relaxed whitespace-pre-line`}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
                <div className="mt-10 flex flex-col sm:flex-row gap-4">
                  <Button variant="secondary" href={`/${lang}/agent`}>
                    {dict.becomeAgent.buttons.becomeAgent}
                  </Button>
                  <Button
                    variant="primary"
                    href={`/${lang}/#footer`}
                    className="flex items-center justify-center !border-2 !border-black"
                  >
                    <Phone className="mr-2 h-4 w-4" />{" "}
                    {dict.becomeAgent.buttons.callUs}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
