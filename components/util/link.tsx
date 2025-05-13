import * as Headless from "@headlessui/react";
import NextLink, { type LinkProps } from "next/link";
import { forwardRef } from "react";

export const Link = forwardRef(function Link(
  { children, ...props }: LinkProps & React.ComponentPropsWithoutRef<"a">,
  ref: React.ForwardedRef<HTMLAnchorElement>
) {
  return (
    <Headless.DataInteractive as="span" className="contents">
      <NextLink ref={ref} {...props}>
        {typeof children === "string" ? <span>{children}</span> : children}
      </NextLink>
    </Headless.DataInteractive>
  );
});
