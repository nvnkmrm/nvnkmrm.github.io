import type { ComponentPropsWithoutRef } from "react";

/**
 * Custom code block component for syntax highlighting
 * Used by ReactMarkdown to render code blocks
 */
export default function CodeBlock({
  inline,
  className,
  children,
  ...props
}: ComponentPropsWithoutRef<"code"> & { inline?: boolean }) {
  // Inline code (like `const x = 1`)
  if (inline) {
    return (
      <code className="inline-code" {...props}>
        {children}
      </code>
    );
  }

  // Code blocks with language (like ```typescript)
  const match = /language-(\w+)/.exec(className || "");
  const language = match ? match[1] : "";

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
