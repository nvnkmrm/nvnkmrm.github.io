/**
 * Convert a filename to a URL-safe slug
 * Example: "My Blog Post.md" -> "my-blog-post"
 */
export function createSlug(filename: string): string {
  return filename
    .replace(/\.md$/, "") // Remove .md extension
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-") // Replace non-alphanumeric with hyphens
    .replace(/^-+|-+$/g, ""); // Remove leading/trailing hyphens
}
