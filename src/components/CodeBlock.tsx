import type { ComponentPropsWithoutRef } from "react";

export default function CodeBlock({
  className,
  children,
  ...props
}: ComponentPropsWithoutRef<"code">) {
  const match = /language-(\w+)/.exec(className || "");
  const language = match ? match[1] : "";

  const code = String(children);

  // Inline code does not contain a newline.
  // Fenced code blocks normally contain a newline.
  const isInline = !code.includes("\n") && !language;

  if (isInline) {
    return (
      <code className="inline-code" {...props}>
        {children}
      </code>
    );
  }

  return (
    <div className="code-block">
      {language && <div className="code-language">{language}</div>}

      <pre>
        <code className={className} {...props}>
          {children}
        </code>
      </pre>
    </div>
  );
}
