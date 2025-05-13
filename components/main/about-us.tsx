import { AnimatedNumber } from "@/components/util/animated-number";
import Image from "next/image";
import { Container } from "@/components/util/container";
import { GradientBackground } from "@/components/util/gradient";
import { Heading, Lead } from "@/components/util/text";
import { MapPin } from "lucide-react";
import { Button } from "../util/button";

function Header({ dict, lang }: { dict: any; lang: string }) {
  return (
    <Container className="mt-16">
      <Heading as="h1" className="!font-bold">
        {dict.aboutUs.title}
      </Heading>
      <Lead className="mt-6 max-w-3xl !text-black">{dict.aboutUs.lead}</Lead>
      <section className="mt-16 grid grid-cols-1 lg:grid-cols-2 lg:gap-12 mb-20">
        {/* Left column */}

        <div className="max-w-lg">
          {/* Stats section */}
          <div className="text-black">
            <hr className="border-t border-gray-800" />
            <dl className="mt-6 grid grid-cols-2 gap-x-4 gap-y-4">
              <div className="flex flex-col gap-y-2 border-b border-dotted border-gray-800 pb-4">
                <dt className="text-sm/6 text-black">
                  {dict.aboutUs.stats.yearsWithWU}
                </dt>
                <dd className="order-first text-6xl font-medium tracking-tight">
                  <AnimatedNumber start={0} end={22} />
                </dd>
              </div>
              <div className="flex flex-col gap-y-2 border-b border-dotted border-gray-800 pb-4">
                <dt className="text-sm/6 text-black">
                  {dict.aboutUs.stats.agents}
                </dt>
                <dd className="order-first text-6xl font-medium tracking-tight">
                  <AnimatedNumber start={1} end={120} />+
                </dd>
              </div>
            </dl>
          </div>
          {/* <h2 className="text-2xl font-medium tracking-tight text-black">
            {dict.aboutUs.mission.title}
          </h2> */}
          <p className="mt-6 text-sm/6 text-black">
            {dict.aboutUs.mission.paragraph1}
          </p>
          <p className="mt-8 text-sm/6 text-black font-semibold">
            {dict.aboutUs.mission.paragraph2}
          </p>
          <p className="mt-8 text-sm/6 text-black"></p>
          <Button variant="secondary" className="" href={`/${lang}/agent`}>
            <span>{dict.hero.becomeAgentButton}</span>
          </Button>
        </div>

        {/* Right column */}
        <div className="mt-12 lg:mt-0">
          {/* Map image */}
          <div className="relative aspect-[16/9] overflow-hidden mb-6">
            <Image
              alt={dict.aboutUs.images.map}
              src="/company/6.png"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
          {/* Address section */}
          <div className="mb-8">
            <h2 className="text-2xl font-medium tracking-tight text-black">
              {dict.aboutUs.location.title}
            </h2>
            <div className="mt-6 flex items-start">
              <MapPin className="h-5 w-5 text-black mr-3 flex-shrink-0 mt-1" />
              <div>
                <p className="text-black font-medium">
                  {dict.aboutUs.location.company}
                </p>
                <p className="text-black">{dict.aboutUs.location.street}</p>
                <p className="text-black">{dict.aboutUs.location.city}</p>
                <p className="text-black">{dict.aboutUs.location.country}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Full width image section below the two columns */}
        <div className="col-span-1 lg:col-span-2 mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* First image */}
            <div className="relative aspect-[16/9] overflow-hidden">
              <Image
                alt={dict.aboutUs.images.office}
                src="/twister-outside-03.jpg"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            {/* Second image */}
            <div className="relative aspect-[16/9] overflow-hidden">
              <Image
                alt={dict.aboutUs.images.team}
                src="/twister-inside-02.jpg"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}

export default function AboutUs({
  dict = {},
  lang = "pl",
}: {
  dict?: any;
  lang?: string;
}) {
  return (
    <main className="overflow-hidden">
      <Header dict={dict} lang={lang} />
    </main>
  );
}
