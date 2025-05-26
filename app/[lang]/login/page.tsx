import { Button } from "@/components/util/button";
import Image from "next/image";
import { GradientBackground } from "@/components/util/gradient";
import { Link } from "@/components/util/link";

import { Checkbox, Field, Input, Label } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/16/solid";
import { clsx } from "clsx";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
  description: "Sign in to your account to continue.",
};

export default function Login() {
  return (
    <main className="overflow-hidden bg-black text-black">
      <div className="isolate flex min-h-dvh items-center justify-center p-6 lg:p-8">
        <div className="w-full max-w-md rounded-xl bg-wu-official shadow-md ring-1 ring-black/5">
          <form action="#" method="POST" className="p-7 sm:p-11">
            <div className="flex items-center justify-center">
              <Image
                src="/logo-black-nobg-3.png"
                alt="Twister MT Logo"
                width={200}
                height={80}
                className="object-contain"
              />
            </div>
            <h1 className="mt-8 text-base/6 font-medium">
              Zaloguj się do strefy agenta
            </h1>

            <Field className="mt-8 space-y-3">
              <Label className="text-sm/5 font-medium">Email</Label>
              <Input
                required
                autoFocus
                type="email"
                name="email"
                className={clsx(
                  "block w-full bg-black text-wu-official rounded-lg border border-transparent shadow-sm ring-1 ring-black/10",
                  "px-[calc(--spacing(2)-1px)] py-[calc(--spacing(1.5)-1px)] text-base/6 sm:text-sm/6",
                  "data-focus:outline data-focus:outline-2 data-focus:-outline-offset-1 data-focus:outline-black"
                )}
              />
            </Field>
            <Field className="mt-8 space-y-3">
              <Label className="text-sm/5 font-medium">Hasło</Label>
              <Input
                required
                type="password"
                name="password"
                className={clsx(
                  "block w-full bg-black text-wu-official rounded-lg border border-transparent shadow-sm ring-1 ring-black/10",
                  "px-[calc(--spacing(2)-1px)] py-[calc(--spacing(1.5)-1px)] text-base/6 sm:text-sm/6",
                  "data-focus:outline data-focus:outline-2 data-focus:-outline-offset-1 data-focus:outline-black"
                )}
              />
            </Field>
            <div className="mt-8 flex items-center justify-between text-sm/5">
              <Field className="flex items-center gap-3">
                <Checkbox
                  name="remember-me"
                  className={clsx(
                    "group block size-4 rounded-sm border border-transparent shadow-sm ring-1 ring-black/10 focus:outline-hidden",
                    "data-checked:bg-black data-checked:ring-black",
                    "data-focus:outline data-focus:outline-2 data-focus:outline-offset-2 data-focus:outline-black"
                  )}
                >
                  <CheckIcon className="fill-white opacity-0 group-data-checked:opacity-100" />
                </Checkbox>
                <Label>Pamiętaj mnie</Label>
              </Field>
              <Link href="#" className="font-medium hover:text-gray-600">
                Zapomniałeś hasła?
              </Link>
            </div>
            <div className="mt-8">
              <Button type="submit" variant="secondary" className="w-full">
                Zaloguj się
              </Button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
