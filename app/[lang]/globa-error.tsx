"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/util/button";
import { Home, RefreshCcw } from "lucide-react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  // We can't access params in global-error.tsx, so we'll extract the language from the URL
  const lang =
    typeof window !== "undefined"
      ? window.location.pathname.split("/")[1] || "pl"
      : "pl";

  // Simple translations for the error page
  const translations = {
    pl: {
      title: "Coś poszło nie tak",
      description:
        "Przepraszamy za niedogodności. Spróbuj ponownie lub wróć do strony głównej.",
      tryAgain: "Spróbuj ponownie",
      backToHome: "Powrót do strony głównej",
    },
    en: {
      title: "Something went wrong",
      description:
        "We apologize for the inconvenience. Please try again or return to the homepage.",
      tryAgain: "Try Again",
      backToHome: "Back to Home",
    },
    ua: {
      title: "Щось пішло не так",
      description:
        "Перепрошуємо за незручності. Будь ласка, спробуйте ще раз або поверніться на головну сторінку.",
      tryAgain: "Спробувати знову",
      backToHome: "Повернутися на головну",
    },
  };

  // Get translations for the current language or fall back to English
  const t = translations[lang as keyof typeof translations] || translations.en;

  return (
    <html lang={lang}>
      <body>
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
          <div className="relative z-10 flex-grow flex items-center justify-center">
            <div className="max-w-md mx-auto px-4 py-16 text-center">
              <div className="inline-block mb-8">
                <div className="relative w-24 h-24 mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-wu-official to-yellow-500 rounded-full opacity-20 blur-xl"></div>
                  <div className="relative h-full w-full flex items-center justify-center">
                    <span className="text-5xl font-bold text-wu-official">
                      !
                    </span>
                  </div>
                </div>
              </div>

              <h1 className="text-3xl font-bold text-white mb-4">{t.title}</h1>

              <p className="text-gray-300 mb-8">{t.description}</p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={() => reset()}
                  className="bg-wu-official hover:bg-wu-official/90 text-black font-medium"
                >
                  <RefreshCcw className="mr-2 h-4 w-4" />
                  {t.tryAgain}
                </Button>

                <Button
                  variant="outline"
                  className="border-wu-official text-wu-official hover:bg-wu-official/10"
                >
                  <Link href={`/${lang}`}>
                    <Home className="mr-2 h-4 w-4" />
                    {t.backToHome}
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black to-transparent z-10"></div>
        </div>
      </body>
    </html>
  );
}
