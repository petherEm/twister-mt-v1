import Image from "next/image";
import { Button } from "@/components/util/button";
import { Container } from "@/components/util/container";
import { GradientBackground } from "@/components/util/gradient";
import { Heading, Lead } from "@/components/util/text";
import { getDictionary } from "@/lib/dictionary";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { lang: string };
}): Promise<Metadata> {
  const dict = await getDictionary(params.lang as "en" | "pl" | "ua");
  return {
    title: dict.trackTransfer.metadata.title,
    description: dict.trackTransfer.metadata.description,
  };
}

type HeaderProps = {
  dict: {
    trackTransfer: {
      title: string;
      lead: string;
      howItWorks: {
        title: string;
        description1: string;
        description2: string;
      };
      trackButton: string;
      redirectNotice: string;
      image: {
        alt: string;
      };
    };
  };
};

function Header({ dict }: HeaderProps) {
  return (
    <Container className="mt-16 relative">
      <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-8 lg:items-start">
        {/* Left content column - takes 6 of 12 columns */}
        <div className="lg:col-span-6 z-10">
          <Heading as="h1" className="text-white">
            {dict.trackTransfer.title}
          </Heading>
          <Lead className="mt-6 max-w-3xl text-white">
            {dict.trackTransfer.lead}
          </Lead>

          <div className="mt-16 max-w-lg">
            <h2 className="text-2xl font-medium tracking-tight">
              {dict.trackTransfer.howItWorks.title}
            </h2>
            <p className="mt-6 text-sm/6 text-white">
              {dict.trackTransfer.howItWorks.description1}
            </p>
            <p className="mt-8 text-sm/6 text-white">
              {dict.trackTransfer.howItWorks.description2}
            </p>
            <div className="mt-10">
              <Button
                as="a"
                href="https://www.westernunion.com/web/global-service/track-transfer"
                target="_blank"
                rel="noopener noreferrer"
              >
                {dict.trackTransfer.trackButton}
              </Button>
              <p className="mt-4 text-xs text-white/70">
                {dict.trackTransfer.redirectNotice}
              </p>
            </div>
          </div>
        </div>

        {/* Right image column - takes 6 of 12 columns and extends to edge */}
        <div className="lg:col-span-6 mt-16 lg:mt-0 relative lg:-mr-[calc(((100vw-1280px)/2))]">
          <div className="relative overflow-hidden h-full">
            {/* Gradient overlay - stronger gradient from left */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/10 z-10"></div>

            {/* Additional vignette effect for better blending */}
            <div className="absolute inset-0 bg-radial-gradient z-10 opacity-40"></div>

            <Image
              alt={dict.trackTransfer.image.alt}
              src="/track-a-transfer.webp"
              width={700}
              height={900}
              className="object-contain lg:object-cover h-auto w-full"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </div>
    </Container>
  );
}

export default async function TrackTransfer({
  params,
}: {
  params: { lang: string };
}) {
  const dict = await getDictionary(params.lang as "en" | "pl" | "ua");

  return (
    <main className="overflow-hidden">
      <GradientBackground />

      <Header dict={dict} />
    </main>
  );
}
