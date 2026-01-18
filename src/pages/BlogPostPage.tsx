import { useParams, Navigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import rehypeRaw from "rehype-raw";
import { getPostBySlug } from "../lib/posts";
import { formatDate } from "../utils/formatDate";
import TagList from "../components/TagList.tsx";
import CodeBlock from "../components/CodeBlock.tsx";

/**
 * Individual blog post page
 * Renders markdown content with syntax highlighting
 */
export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();

  if (!slug) {
    return <Navigate to="/blog" replace />;
  }

  const post = getPostBySlug(slug);

  if (!post) {
    return <Navigate to="/404" replace />;
  }

  return (
    <article className="blog-post-page">
      <header className="post-header">
        <h1>{post.title}</h1>
        <div className="post-meta">
          <span className="author">By {post.author}</span>
          <span className="separator">•</span>
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span className="separator">•</span>
          <span className="reading-time">{post.readingTime} min read</span>
        </div>
        <p className="post-description">{post.description}</p>
        <TagList tags={post.tags} />
      </header>

      <div className="post-content">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeHighlight, rehypeRaw]}
          components={{
            code: CodeBlock,
          }}
        >
          {post.content}
        </ReactMarkdown>
      </div>

      <footer className="post-footer">
        <div className="post-tags">
          <span className="tags-label">Tags:</span>
          <TagList tags={post.tags} />
        </div>
      </footer>
    </article>
  );
}
