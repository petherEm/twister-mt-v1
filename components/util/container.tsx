import { clsx } from "clsx";

export function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={clsx(className, "px-6 lg:px-8")}>
      <div className="mx-auto  lg:max-w-7xl">{children}</div>
    </div>
  );
}
