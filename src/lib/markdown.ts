import matter from "gray-matter";
import type { BlogFrontmatter } from "../types/blog";

/**
 * Parse markdown content with frontmatter
 * Returns the parsed frontmatter and content separately
 */
export function parseMarkdown(markdownContent: string): {
  frontmatter: BlogFrontmatter;
  content: string;
} {
  const { data, content } = matter(markdownContent);

  return {
    frontmatter: data as BlogFrontmatter,
    content,
  };
}
