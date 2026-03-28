import { client } from "./lib/client";

export interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt: string;
  mainImage?: { asset: { _ref: string }; alt?: string };
  author?: { name: string } | null;
  body: Array<{
    _type: string;
    _key: string;
    children?: Array<{ text: string; marks?: string[] }>;
    style?: string;
    asset?: { _ref: string };
    alt?: string;
    listItem?: string;
    image?: { asset: { _ref: string }; alt?: string };
    text?: string;
    imageWidth?: "half" | "third";
    imagePosition?: "left" | "right";
  }>;
  publishedAt: string;
  _updatedAt?: string;
}

/** Slug + last modified for sitemap and static generation. */
export interface PostListMeta {
  slug: string;
  lastModified: string;
}

export async function getPosts(): Promise<Post[]> {
  return client.fetch(
    `*[_type == "post"] | order(publishedAt desc) {
      _id, title, slug, excerpt, mainImage, publishedAt
    }`
  );
}

export async function getPost(slug: string): Promise<Post | null> {
  return client.fetch(
    `*[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      excerpt,
      mainImage,
      author->{ name },
      body,
      publishedAt,
      _updatedAt
    }`,
    { slug }
  );
}

export async function getAllPostsMeta(): Promise<PostListMeta[]> {
  return client.fetch(
    `*[_type == "post"] {
      "slug": slug.current,
      "lastModified": coalesce(_updatedAt, publishedAt)
    }`
  );
}
