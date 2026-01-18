/**
 * Blog post frontmatter metadata
 */
export interface BlogFrontmatter {
  title: string;
  description: string;
  date: string;
  tags: string[];
  author: string;
}

/**
 * Complete blog post with metadata and content
 */
export interface BlogPost extends BlogFrontmatter {
  slug: string;
  content: string;
  readingTime: number;
}

/**
 * Blog post preview (without full content)
 */
export interface BlogPostPreview extends BlogFrontmatter {
  slug: string;
  readingTime: number;
}
