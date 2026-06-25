import { cn } from "@/lib/utils";

/** Centered max-width wrapper with responsive gutters. */
export default function Container({ as: Tag = "div", className, children }) {
  return (
    <Tag
      className={cn(
        "mx-auto w-full max-w-[80rem] px-5 sm:px-6 lg:px-10",
        className
      )}
    >
      {children}
    </Tag>
  );
}
