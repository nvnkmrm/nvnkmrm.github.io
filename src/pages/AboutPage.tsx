/**
 * About page - Information about the blog/author
 */
export default function AboutPage() {
  return (
    <div className="about-page">
      <header className="page-header">
        <h1>About This Blog</h1>
      </header>

      <div className="about-content">
        <section className="about-section">
          <h2>Hello! 👋</h2>
          <p>
            Welcome to my developer blog. I'm passionate about building modern
            web applications and sharing what I learn along the way.
          </p>
        </section>

        <section className="about-section">
          <h2>What I Write About</h2>
          <ul>
            <li>React and modern JavaScript frameworks</li>
            <li>TypeScript best practices</li>
            <li>Build tools and development workflows</li>
            <li>Clean code and software architecture</li>
            <li>Performance optimization</li>
          </ul>
        </section>

        <section className="about-section">
          <h2>Tech Stack</h2>
          <p>This blog is built with:</p>
          <ul>
            <li>
              <strong>React 18</strong> - UI framework
            </li>
            <li>
              <strong>TypeScript</strong> - Type safety
            </li>
            <li>
              <strong>Vite</strong> - Build tool
            </li>
            <li>
              <strong>React Router</strong> - Routing
            </li>
            <li>
              <strong>React Markdown</strong> - Content rendering
            </li>
          </ul>
        </section>

        <section className="about-section">
          <h2>Connect</h2>
          <p>
            Feel free to reach out if you have questions, suggestions, or just
            want to chat about web development!
          </p>
          <div className="social-links">
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
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
