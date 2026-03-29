import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getPosts } from "@/sanity/queries";
import { urlFor } from "@/sanity/image";
import Navbar from "@/components/Navbar";

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
      <Navbar />
      {/* Intestazione pagina — stile privacy */}
      <div className="h-16 sm:h-20" />
      <main className="bg-sand pt-12 pb-24">
        <div className="max-w-6xl mx-auto px-6 mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-primary font-medium mb-4">
            Idee, tendenze e consigli
          </p>
          <h1 className="font-script text-4xl md:text-5xl text-dark mb-8">
            Articoli & Ispirazione
          </h1>
          <div className="w-12 h-[1px] bg-primary" />
        </div>

        {/* Posts grid */}
        <div className="mx-auto max-w-6xl px-6">
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
        </div>
      </main>
    </div>
  );
}
