import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDir = path.join(process.cwd(), "content");

export interface ContentFrontmatter {
  title: string;
  description: string;
  date: string;
  keywords?: string[];
  image?: string;
  icon?: string;
}

export interface ContentItem {
  slug: string;
  frontmatter: ContentFrontmatter;
  content: string;
}

/**
 * Get a single content item by type and slug
 */
export function getContentBySlug(
  type: "blog" | "services",
  slug: string
): ContentItem {
  const filePath = path.join(contentDir, type, `${slug}.mdx`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  return {
    slug,
    frontmatter: data as ContentFrontmatter,
    content,
  };
}

/**
 * Get all content items of a given type, sorted by date (newest first)
 */
export function getAllContent(
  type: "blog" | "services"
): Omit<ContentItem, "content">[] {
  const dir = path.join(contentDir, type);

  if (!fs.existsSync(dir)) {
    return [];
  }

  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".mdx"));

  const items = files.map((file) => {
    const slug = file.replace(/\.mdx$/, "");
    const filePath = path.join(dir, file);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(fileContent);

    return {
      slug,
      frontmatter: data as ContentFrontmatter,
    };
  });

  // Sort by date, newest first
  return items.sort(
    (a, b) =>
      new Date(b.frontmatter.date).getTime() -
      new Date(a.frontmatter.date).getTime()
  );
}

/**
 * Get all slugs for static params generation
 */
export function getAllSlugs(type: "blog" | "services"): string[] {
  const dir = path.join(contentDir, type);

  if (!fs.existsSync(dir)) {
    return [];
  }

  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}
