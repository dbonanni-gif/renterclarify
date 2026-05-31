import Link from "next/link";
import { notFound } from "next/navigation";
import { BLOG_POSTS } from "../../../lib/blogPosts";

function escapeHtml(text) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function renderInline(text) {
  return escapeHtml(text)
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, "<a href=\"$2\">$1</a>");
}

function markdownToHtml(markdown) {
  const lines = markdown.replace(/\r\n/g, "\n").split("\n");
  let html = "";
  let inList = false;
  let inParagraph = false;

  const closeParagraph = () => {
    if (inParagraph) {
      html += "</p>";
      inParagraph = false;
    }
  };

  const closeList = () => {
    if (inList) {
      html += "</ul>";
      inList = false;
    }
  };

  for (const rawLine of lines) {
    const line = rawLine.trim();
    if (!line) {
      closeList();
      closeParagraph();
      continue;
    }
    if (line.startsWith("## ")) {
      closeList();
      closeParagraph();
      html += `<h2>${renderInline(line.slice(3))}</h2>`;
      continue;
    }
    if (line.startsWith("### ")) {
      closeList();
      closeParagraph();
      html += `<h3>${renderInline(line.slice(4))}</h3>`;
      continue;
    }
    if (line.startsWith("- ")) {
      closeParagraph();
      if (!inList) {
        html += "<ul>";
        inList = true;
      }
      html += `<li>${renderInline(line.slice(2))}</li>`;
      continue;
    }
    closeList();
    if (!inParagraph) {
      html += "<p>";
      inParagraph = true;
    }
    html += `${renderInline(line)} `;
  }

  closeList();
  closeParagraph();
  return html;
}

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const post = BLOG_POSTS.find((item) => item.slug === params.slug);
  if (!post) return { title: "Blog post not found" };
  return {
    title: post.metaTitle,
    description: post.metaDescription,
  };
}

export default function BlogPostPage({ params }) {
  const post = BLOG_POSTS.find((item) => item.slug === params.slug);
  if (!post) return notFound();

  return (
    <main style={{ minHeight: "100vh", background: "var(--retro-cream)", padding: "3rem 1.5rem" }}>
      <div className="max-w-5xl mx-auto" style={{ background: "white", border: "3px solid var(--retro-navy)", borderRadius: "4px", boxShadow: "var(--retro-shadow)", padding: "2.5rem" }}>
        <Link href="/blog" style={{ display: "inline-block", marginBottom: "1.5rem", color: "var(--retro-navy)", textDecoration: "underline" }}>
          ← Back to blog
        </Link>
        <p style={{ margin: 0, color: "var(--retro-red)", fontFamily: "var(--font-oswald), Impact, sans-serif", letterSpacing: "0.12em", textTransform: "uppercase", fontSize: "0.8rem" }}>
          {post.category}
        </p>
        <h1 style={{ margin: "0.75rem 0 1rem", color: "var(--retro-navy)", fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: "1.05" }}>
          {post.title}
        </h1>
        <p style={{ margin: 0, color: "var(--retro-ink)", opacity: 0.8, fontSize: "0.95rem" }}>
          {post.date}
        </p>

        <div style={{ marginTop: "2rem", color: "var(--retro-ink)", lineHeight: "1.85", fontFamily: "Georgia, serif" }} dangerouslySetInnerHTML={{ __html: markdownToHtml(post.content) }} />

        {post.sources?.length ? (
          <section style={{ marginTop: "2rem" }}>
            <h2 style={{ margin: "0 0 1rem", fontSize: "1.2rem", color: "var(--retro-navy)" }}>Sources</h2>
            <ul style={{ paddingLeft: "1.2rem", margin: 0, color: "var(--retro-ink)", lineHeight: "1.75" }}>
              {post.sources.map((source) => (
                <li key={source.url}>
                  <a href={source.url} target="_blank" rel="noreferrer" style={{ color: "var(--retro-navy)", textDecoration: "underline" }}>
                    {source.label}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        ) : null}
      </div>
    </main>
  );
}
