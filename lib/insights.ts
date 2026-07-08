import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const contentDirectory = path.join(process.cwd(), "content/insights");

export type Insight = {
  slug: string;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  category: string;
  readingTime: string;
  featured: boolean;
};

export function getAllInsights(): Insight[] {
  const files = fs.readdirSync(contentDirectory);
  console.log("Markdown files:", files);

  const insights = files.map((file) => {
    const slug = file.replace(".md", "");

    const fullPath = path.join(contentDirectory, file);

    const fileContents = fs.readFileSync(fullPath, "utf8");

    const parsed = matter(fileContents);

console.log(slug, parsed.data);

const { data } = parsed;

    return {
      slug,
      ...(data as Omit<Insight, "slug">),
    };
  });


  console.log("Insights found:", insights);
  return insights.sort(
    (a, b) =>
      new Date(b.date).getTime() -
      new Date(a.date).getTime()
  );
}

export async function getInsight(slug: string) {
  const fullPath = path.join(contentDirectory, `${slug}.md`);

  const fileContents = fs.readFileSync(fullPath, "utf8");

  const { data, content } = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(content);

  return {
    slug,
    ...(data as Omit<Insight, "slug">),
    contentHtml: processedContent.toString(),
  };
}