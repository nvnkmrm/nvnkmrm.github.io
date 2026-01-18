import { Link } from "react-router-dom";
import type { BlogPostPreview } from "../types/blog";
import { formatDate } from "../utils/formatDate";
import TagList from "./TagList";

interface Props {
  post: BlogPostPreview;
}

/**
 * Blog post card component for list views
 */
export default function PostCard({ post }: Props) {
  return (
    <article className="post-card">
      <div className="post-card-header">
        <h2>
          <Link to={`/blog/${post.slug}`}>{post.title}</Link>
        </h2>
        <div className="post-meta">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span className="separator">•</span>
          <span className="reading-time">{post.readingTime} min read</span>
        </div>
      </div>

      <p className="post-description">{post.description}</p>

      <div className="post-card-footer">
        <TagList tags={post.tags} />
        <Link to={`/blog/${post.slug}`} className="read-more">
          Read more →
        </Link>
      </div>
    </article>
  );
}
