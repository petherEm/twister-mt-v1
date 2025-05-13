"use client";

import { usePathname } from "next/navigation";
import { Navbar } from "./navbar";

export function NavbarWithPath({
  banner,
  dict = {},
  lang = "pl",
}: {
  banner?: React.ReactNode;
  dict?: any;
  lang?: string;
}) {
  const pathname = usePathname();

  return (
    <Navbar banner={banner} dict={dict} lang={lang} currentPath={pathname} />
  );
}
