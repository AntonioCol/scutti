import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getPost, getPostSlugs } from "@/sanity/queries";
import { urlFor } from "@/sanity/image";
import { ArrowLeft } from "lucide-react";
import ShareButtons from "@/components/ShareButtons";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = await getPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
      ...(post.mainImage && {
        images: [{ url: urlFor(post.mainImage).width(1200).height(630).url() }],
      }),
    },
  };
}

export const revalidate = 60;

// Render portable text blocks as simple HTML
function renderBody(
  body: Array<{
    _type: string;
    _key: string;
    children?: Array<{ text: string; marks?: string[] }>;
    style?: string;
    asset?: { _ref: string };
    image?: { asset: { _ref: string }; alt?: string };
    text?: string;
    imagePosition?: "left" | "right";
  }>
) {
  return body.map((block) => {
    // Blocco immagine + testo affiancati
    if (block._type === "imageText" && block.image?.asset) {
      const isLeft = block.imagePosition !== "right";
      return (
        <div
          key={block._key}
          className={`my-10 flex flex-col md:flex-row gap-6 items-center ${
            !isLeft ? "md:flex-row-reverse" : ""
          }`}
        >
          <div className="w-full md:w-1/2 shrink-0">
            <Image
              src={urlFor({ asset: { _ref: block.image.asset._ref } })
                .width(600)
                .url()}
              alt={block.image.alt || ""}
              width={600}
              height={400}
              className="rounded-lg object-cover w-full"
            />
          </div>
          <div className="w-full md:w-1/2">
            <p className="leading-relaxed text-dark/80">{block.text}</p>
          </div>
        </div>
      );
    }

    // Immagine a piena larghezza
    if (block._type === "image" && block.asset) {
      return (
        <div key={block._key} className="my-8">
          <Image
            src={urlFor({ asset: { _ref: block.asset._ref } })
              .width(900)
              .url()}
            alt=""
            width={900}
            height={500}
            className="rounded-lg"
          />
        </div>
      );
    }

    if (block._type !== "block" || !block.children) return null;

    const text = block.children.map((child, i) => {
      let el: React.ReactNode = child.text;
      if (child.marks?.includes("strong"))
        el = <strong key={i}>{el}</strong>;
      if (child.marks?.includes("em")) el = <em key={i}>{el}</em>;
      return el;
    });

    switch (block.style) {
      case "h2":
        return (
          <h2 key={block._key} className="mb-4 mt-10 font-logo text-2xl text-dark">
            {text}
          </h2>
        );
      case "h3":
        return (
          <h3 key={block._key} className="mb-3 mt-8 font-logo text-xl text-dark">
            {text}
          </h3>
        );
      case "blockquote":
        return (
          <blockquote
            key={block._key}
            className="my-6 border-l-4 border-[#EF8C00] pl-4 italic text-midgray"
          >
            {text}
          </blockquote>
        );
      default:
        return (
          <p key={block._key} className="mb-4 leading-relaxed text-dark/80">
            {text}
          </p>
        );
    }
  });
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  return (
    <div className="min-h-screen bg-sand">
      {/* Header */}
      <header className="bg-darkbg text-white">
        <div className="mx-auto max-w-3xl px-6 py-8">
          <Link
            href="/blog"
            className="mb-6 inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Tutti gli articoli
          </Link>
          {post.publishedAt && (
            <time className="block text-sm text-white/50">
              {new Date(post.publishedAt).toLocaleDateString("it-IT", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </time>
          )}
          <h1 className="mt-2 font-logo text-3xl md:text-4xl">{post.title}</h1>
        </div>
      </header>

      {/* Cover image */}
      {post.mainImage && (
        <div className="mx-auto max-w-4xl px-6">
          <div className="relative -mt-4 aspect-[16/9] overflow-hidden rounded-lg shadow-lg">
            <Image
              src={urlFor(post.mainImage).width(1200).height(675).url()}
              alt={post.title}
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      )}

      {/* Content */}
      <article className="mx-auto max-w-3xl px-6 py-12 font-serif text-lg">
        {post.body && renderBody(post.body)}
      </article>

      {/* Share + Back link */}
      <div className="mx-auto max-w-3xl px-6 pb-16 space-y-8">
        <div className="border-t border-[#e0dbd3] pt-8">
          <ShareButtons
            url={`https://www.scutti.it/blog/${slug}`}
            title={post.title}
            excerpt={post.excerpt}
          />
        </div>
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-midgray transition-colors hover:text-dark"
        >
          <ArrowLeft className="h-4 w-4" />
          Torna al blog
        </Link>
      </div>
    </div>
  );
}
