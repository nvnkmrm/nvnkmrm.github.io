import { Link } from "react-router-dom";

/**
 * 404 Not Found page
 */
export default function NotFoundPage() {
  return (
    <div className="not-found-page">
      <div className="not-found-content">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>
          Oops! The page you're looking for doesn't exist. It might have been
          moved or deleted.
        </p>
        <div className="not-found-actions">
          <Link to="/" className="btn btn-primary">
            Go Home
          </Link>
          <Link to="/blog" className="btn btn-secondary">
            Browse Blog
          </Link>
        </div>
      </div>
    </div>
  );
}
