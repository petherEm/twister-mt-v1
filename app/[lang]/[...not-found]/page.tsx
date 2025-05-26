import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/util/container";
import { Button } from "@/components/util/button";
import { ArrowLeft, Home } from "lucide-react";

export default async function CatchAllNotFound({
  params,
}: {
  params: Promise<{ lang: string; "not-found": string[] }>;
}) {
  const { lang } = await params;

  // Translations for the 404 page
  const translations = {
    pl: {
      error: "Błąd 404",
      title: "Strona Nie Znaleziona",
      description:
        "Strona, której szukasz, mogła zostać usunięta, zmieniona lub jest tymczasowo niedostępna.",
      homeButton: "Powrót do strony głównej",
      aboutButton: "Western Union",
    },
    en: {
      error: "404 Error",
      title: "Page Not Found",
      description:
        "The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.",
      homeButton: "Back to Home",
      aboutButton: "About Western Union",
    },
    ua: {
      error: "Помилка 404",
      title: "Сторінку не знайдено",
      description:
        "Сторінка, яку ви шукаєте, могла бути видалена, перейменована або тимчасово недоступна.",
      homeButton: "Повернутися на головну",
      aboutButton: "Про Western Union",
    },
  };

  // Get translations for the current language or fall back to English
  const t = translations[lang as keyof typeof translations] || translations.en;

  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Background image with blend effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90 z-10" />
        <Image
          src="/pex-4.png"
          alt="Background"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex-grow flex items-center">
        <Container>
          <div className="max-w-4xl mx-auto py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* Left side - Error information */}
              <div className="space-y-6">
                <div className="inline-block">
                  <div className="flex items-center space-x-2 mb-6">
                    <div className="h-1 w-12 bg-wu-official"></div>
                    <span className="text-wu-official font-medium">
                      {t.error}
                    </span>
                  </div>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                  {t.title}
                </h1>

                <p className="text-lg text-gray-300 max-w-md">
                  {t.description}
                </p>

                <div className="pt-4 flex flex-col sm:flex-row gap-4">
                  <Button className="bg-wu-official hover:bg-wu-official/90 text-black font-medium">
                    <Link href={`/${lang}`}>{t.homeButton}</Link>
                  </Button>

                  <Button
                    variant="secondary"
                    className="border-wu-official text-wu-official hover:bg-wu-official/10"
                  >
                    <Link href={`/${lang}/western-union`}>{t.aboutButton}</Link>
                  </Button>
                </div>
              </div>

              {/* Right side - Visual element */}
              <div className="flex justify-center">
                <div className="relative w-full max-w-sm aspect-square">
                  <div className="absolute inset-0 bg-gradient-to-br from-wu-official to-yellow-500 rounded-full opacity-20 blur-3xl"></div>
                  <div className="relative h-full w-full flex items-center justify-center">
                    <div className="text-[12rem] font-bold text-wu-official opacity-80">
                      404
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black to-transparent z-10"></div>
      <div className="absolute top-1/4 right-10 w-20 h-20 rounded-full bg-wu-official/20 blur-xl z-5"></div>
      <div className="absolute bottom-1/4 left-10 w-32 h-32 rounded-full bg-wu-official/10 blur-xl z-5"></div>
    </div>
  );
}
