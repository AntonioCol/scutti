import { client } from "./lib/client";

export interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt: string;
  mainImage?: { asset: { _ref: string }; alt?: string };
  body: Array<{
    _type: string;
    _key: string;
    children?: Array<{ text: string; marks?: string[] }>;
    style?: string;
    asset?: { _ref: string };
    listItem?: string;
    image?: { asset: { _ref: string }; alt?: string };
    text?: string;
    imagePosition?: "left" | "right";
  }>;
  publishedAt: string;
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
      _id, title, slug, excerpt, mainImage, body, publishedAt
    }`,
    { slug }
  );
}

export async function getPostSlugs(): Promise<string[]> {
  return client.fetch(`*[_type == "post"].slug.current`);
}
