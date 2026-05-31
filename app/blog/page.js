import Link from "next/link";
import { BLOG_POSTS_META } from "../../lib/blogPostsMeta";

export const metadata = {
  title: "Blog — RenterClarify",
  description: "Tenant rights articles, guides, and updates from RenterClarify.",
};

export default function BlogPage() {
  return (
    <main style={{ minHeight: "100vh", background: "var(--retro-cream)", padding: "3rem 1.5rem" }}>
      <div className="max-w-5xl mx-auto">
        <header style={{ marginBottom: "2.5rem" }}>
          <p style={{ color: "var(--retro-red)", fontFamily: "var(--font-oswald), Impact, sans-serif", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "1rem" }}>
            Blog
          </p>
          <h1 style={{ fontSize: "clamp(2.5rem, 5vw, 3.5rem)", lineHeight: "1.05", color: "var(--retro-navy)", margin: 0 }}>
            Tenant rights stories and housing advice.
          </h1>
          <p style={{ marginTop: "1rem", maxWidth: "680px", color: "var(--retro-ink)", lineHeight: "1.8", fontFamily: "Georgia, serif" }}>
            Read the latest updates on renter protections, leases, and housing law. These posts are written for renters who want practical guidance without legalese.
          </p>
        </header>

        <div className="grid gap-6" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
          {BLOG_POSTS_META.map((post) => (
            <article
              key={post.slug}
              style={{
                padding: "1.8rem",
                background: "white",
                border: "3px solid var(--retro-navy)",
                borderRadius: "4px",
                boxShadow: "var(--retro-shadow)",
              }}
            >
              <p style={{ margin: 0, color: "var(--retro-red)", fontFamily: "var(--font-oswald), Impact, sans-serif", letterSpacing: "0.08em", textTransform: "uppercase", fontSize: "0.8rem" }}>
                {post.category}
              </p>
              <h2 style={{ margin: "0.75rem 0 1rem", fontSize: "1.5rem", lineHeight: "1.2", color: "var(--retro-navy)" }}>
                <Link href={`/blog/${post.slug}`} style={{ color: "inherit", textDecoration: "none" }}>
                  {post.title}
                </Link>
              </h2>
              <p style={{ margin: "0 0 1.25rem", color: "var(--retro-ink)", lineHeight: "1.7", fontFamily: "Georgia, serif" }}>
                {post.excerpt}
              </p>
              <p style={{ margin: 0, fontSize: "0.9rem", color: "var(--retro-ink)", opacity: 0.75 }}>
                {post.date}
              </p>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
