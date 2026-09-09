import type { ComponentPropsWithoutRef } from "react";

export default function CodeBlock({
  children,
  ...props
}: ComponentPropsWithoutRef<"pre">) {
  return (
    <div className="code-block">
      <pre {...props}>{children}</pre>
    </div>
  );
}
