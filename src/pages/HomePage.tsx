import { Link } from "react-router-dom";
import { getAllPosts } from "../lib/posts";
import { formatDate } from "../utils/formatDate";

/**
 * Home page - Landing page with featured content
 */
export default function HomePage() {
  const recentPosts = getAllPosts().slice(0, 3);

  return (
    <div className="home-page">
      <section className="hero">
        <h1>Welcome to My Developer Blog</h1>
        <p className="hero-subtitle">
          Insights on React, TypeScript, and Modern Web Development
        </p>
        <div className="hero-actions">
          <Link to="/blog" className="btn btn-primary">
            Read Blog
          </Link>
          <Link to="/about" className="btn btn-secondary">
            About Me
          </Link>
        </div>
      </section>

      <section className="recent-posts">
        <h2>Recent Posts</h2>
        <div className="post-grid">
          {recentPosts.map((post) => (
            <article key={post.slug} className="post-card">
              <div className="post-meta">
                <time dateTime={post.date}>{formatDate(post.date)}</time>
                <span className="reading-time">
                  {post.readingTime} min read
                </span>
              </div>
              <h3>
                <Link to={`/blog/${post.slug}`}>{post.title}</Link>
              </h3>
              <p>{post.description}</p>
              <div className="post-tags">
                {post.tags.slice(0, 3).map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
              <Link to={`/blog/${post.slug}`} className="read-more">
                Read more →
              </Link>
            </article>
          ))}
        </div>
        <div className="view-all">
          <Link to="/blog" className="btn btn-outline">
            View All Posts
          </Link>
        </div>
      </section>
    </div>
  );
}
