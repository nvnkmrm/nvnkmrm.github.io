import type { BlogPost, BlogPostPreview } from "../types/blog";
import { parseMarkdown } from "./markdown";
import { createSlug } from "../utils/slug";
import { calculateReadingTime } from "../utils/readingTime";

/**
 * Load all blog posts at build time using Vite's glob import
 * This creates a static index of all markdown files
 */
const blogModules = import.meta.glob<string>("../content/blog/**/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
});

/**
 * Get all blog posts as previews (without full content)
 * Posts are sorted by date (newest first)
 */
export function getAllPosts(): BlogPostPreview[] {
  const posts: BlogPostPreview[] = [];

  for (const [path, content] of Object.entries(blogModules)) {
    const filename = path.split("/").pop() || "";
    const slug = createSlug(filename);
    const { frontmatter, content: markdownContent } = parseMarkdown(content);

    posts.push({
      ...frontmatter,
      slug,
      readingTime: calculateReadingTime(markdownContent),
    });
  }

  // Sort by date, newest first
  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

/**
 * Get a single blog post by slug
 * Returns null if post not found
 */
export function getPostBySlug(slug: string): BlogPost | null {
  for (const [path, content] of Object.entries(blogModules)) {
    const filename = path.split("/").pop() || "";
    const postSlug = createSlug(filename);

    if (postSlug === slug) {
      const { frontmatter, content: markdownContent } = parseMarkdown(content);

      return {
        ...frontmatter,
        slug: postSlug,
        content: markdownContent,
        readingTime: calculateReadingTime(markdownContent),
      };
    }
  }

  return null;
}

/**
 * Get all unique tags from all blog posts
 */
export function getAllTags(): string[] {
  const tagSet = new Set<string>();

  for (const content of Object.values(blogModules)) {
    const { frontmatter } = parseMarkdown(content);
    frontmatter.tags.forEach((tag) => tagSet.add(tag));
  }

  return Array.from(tagSet).sort();
}
