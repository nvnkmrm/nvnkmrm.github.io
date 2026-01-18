import { Link } from "react-router-dom";
import { getAllPosts } from "../lib/posts";
import PostCard from "../components/PostCard";

/**
 * Blog list page - Shows all blog posts
 */
export default function BlogListPage() {
  const posts = getAllPosts();

  return (
    <div className="blog-list-page">
      <header className="page-header">
        <h1>All Blog Posts</h1>
        <p>Exploring web development, one post at a time</p>
      </header>

      {posts.length === 0 ? (
        <div className="empty-state">
          <p>No blog posts yet. Check back soon!</p>
          <Link to="/" className="btn btn-primary">
            Go Home
          </Link>
        </div>
      ) : (
        <div className="posts-list">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}
