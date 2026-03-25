import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getPosts } from "@/sanity/queries";
import { urlFor } from "@/sanity/image";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Novità, tendenze e consigli dal mondo dell'arredo e del design d'interni. Il blog di Scutti Gilberto S.r.l.",
};

export const revalidate = 60;

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div className="min-h-screen bg-sand">
      {/* Header */}
      <header className="bg-darkbg text-white">
        <div className="mx-auto max-w-6xl px-6 py-8">
          <Link
            href="/"
            className="mb-6 inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Torna al sito
          </Link>
          <h1 className="font-logo text-4xl md:text-5xl">Blog</h1>
          <p className="mt-2 font-serif text-lg text-white/70">
            Novità, tendenze e consigli dal mondo dell&apos;arredo
          </p>
        </div>
      </header>

      {/* Posts grid */}
      <main className="mx-auto max-w-6xl px-6 py-16">
        {posts.length === 0 ? (
          <p className="text-center text-midgray">
            Nessun articolo pubblicato ancora. Torna presto!
          </p>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Link
                key={post._id}
                href={`/blog/${post.slug.current}`}
                className="group overflow-hidden rounded-lg bg-white shadow-sm transition-shadow hover:shadow-md"
              >
                {post.mainImage && (
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={urlFor(post.mainImage).width(600).height(375).url()}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                )}
                <div className="p-5">
                  {post.publishedAt && (
                    <time className="text-xs text-midgray">
                      {new Date(post.publishedAt).toLocaleDateString("it-IT", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </time>
                  )}
                  <h2 className="mt-1 font-logo text-xl text-dark group-hover:text-[#EF8C00] transition-colors">
                    {post.title}
                  </h2>
                  {post.excerpt && (
                    <p className="mt-2 line-clamp-3 text-sm text-midgray">
                      {post.excerpt}
                    </p>
                  )}
                </div>
              </Link>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
