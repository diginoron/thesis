import Link from "next/link";

interface Post {
  slug: string;
  emoji: string;
  date: string;
  category: string;
  title: string;
  desc: string;
}

export default function BlogList({ posts }: { posts: Post[] }) {
  return (
    <div className="blog-list-grid">
      {posts.map((post) => (
        <Link
          key={post.slug}
          href={`/blog/${post.slug}`}
          className="card blog-card"
          id={`blog-${post.slug}`}
        >
          <div className="blog-card-image">{post.emoji}</div>
          <div className="blog-card-content">
            <div style={{ display: "flex", gap: "0.5rem", alignItems: "center", marginBottom: "0.5rem" }}>
              <span
                style={{
                  fontSize: "0.75rem",
                  background: "rgba(124,58,237,0.12)",
                  border: "1px solid rgba(124,58,237,0.2)",
                  borderRadius: "999px",
                  padding: "0.2rem 0.7rem",
                  color: "var(--color-primary-light)",
                }}
              >
                {post.category}
              </span>
              <span className="blog-card-date">{post.date}</span>
            </div>
            <h3>{post.title}</h3>
            <p>{post.desc}</p>
            <span className="read-more">ادامه مطلب ←</span>
          </div>
        </Link>
      ))}
    </div>
  );
}
