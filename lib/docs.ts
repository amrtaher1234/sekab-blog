import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
export interface DocMetada {
  description: string;
  title: string;
  image?: string;
}
export interface Doc {
  meta: DocMetada;
  content: string;
  slug: string;
}
const DEFAULT_DOCS_DIRECTORY_NAME = "posts";

export function getDocBySlug(
  slug: string,
  docsDirectoryName: string = DEFAULT_DOCS_DIRECTORY_NAME,
): Doc {
  const docsDirectory = join(process.cwd(), docsDirectoryName);
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(docsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const postObject = matter(fileContents);
  const data = postObject.data as DocMetada;
  const content = postObject.content;
  return { slug: realSlug, meta: data, content };
}

export function getAllDocs(
  docsDirectoryName: string = DEFAULT_DOCS_DIRECTORY_NAME,
): Doc[] {
  const docsDirectory = join(process.cwd(), docsDirectoryName);
  const slugs = fs.readdirSync(docsDirectory);
  const docs = slugs.map((slug) => getDocBySlug(slug));
  return docs;
}
