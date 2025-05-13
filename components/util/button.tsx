import * as Headless from "@headlessui/react";
import { clsx } from "clsx";
import { Link } from "@/components/util/link";

const variants = {
  primary: clsx(
    "inline-flex items-center justify-center px-4 py-[calc(--spacing(2)-1px)]",
    "rounded-full border border-transparent bg-wu-official shadow-md",
    "text-base font-medium whitespace-nowrap text-black",
    "data-disabled:bg-wu-official data-disabled:opacity-40 data-hover:bg-wu-official/90 cursor-pointer"
  ),
  secondary: clsx(
    "cursor-pointer relative inline-flex items-center justify-center px-4 py-[calc(--spacing(2)-1px)]",
    "rounded-full border border-wu-official bg-black shadow-md ring-1 ring-wu-official",
    "after:absolute after:inset-0 after:rounded-full after:shadow-[inset_0_0_2px_1px_#ffffff1a]",
    "text-base font-medium whitespace-nowrap text-white",
    "data-disabled:bg-black data-disabled:opacity-40 data-hover:bg-gray-900 data-hover:ring-wu-official/90",
    "transition-colors duration-150"
  ),
  outline: clsx(
    "cursor-pointer inline-flex items-center justify-center px-2 py-[calc(--spacing(1.5)-1px)]",
    "rounded-lg border border-transparent shadow-sm ring-1 ring-black/10",
    "text-sm font-medium whitespace-nowrap text-gray-950",
    "data-disabled:bg-transparent data-disabled:opacity-40 data-hover:bg-gray-50"
  ),
};

type ButtonProps = {
  variant?: keyof typeof variants;
} & (
  | React.ComponentPropsWithoutRef<typeof Link>
  | (Headless.ButtonProps & { href?: undefined })
);

export function Button({
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  className = clsx(className, variants[variant]);

  if (typeof props.href === "undefined") {
    return <Headless.Button {...props} className={className} />;
  }

  return <Link {...props} className={className} />;
}
