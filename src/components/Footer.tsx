/**
 * Site footer with copyright and links
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p className="copyright">
            © {currentYear} DevBlog. Built with React, TypeScript, and Vite.
          </p>
          <div className="footer-links">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
            <a href="/rss.xml" target="_blank" rel="noopener noreferrer">
              RSS
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
