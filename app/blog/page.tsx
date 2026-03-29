import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getPosts, getPostsCount, POSTS_PER_PAGE } from "@/sanity/queries";
import { urlFor } from "@/sanity/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Novità, tendenze e consigli dal mondo dell'arredo e del design d'interni. Il blog di Scutti Gilberto S.r.l.",
};

export const revalidate = 60;

interface Props {
  searchParams: Promise<{ page?: string }>;
}

export default async function BlogPage({ searchParams }: Props) {
  const { page: pageParam } = await searchParams;
  const page = Math.max(1, parseInt(pageParam ?? "1", 10) || 1);

  const [posts, total] = await Promise.all([getPosts(page), getPostsCount()]);
  const totalPages = Math.ceil(total / POSTS_PER_PAGE);
  const safePage = Math.min(page, Math.max(1, totalPages));

  return (
    <div className="min-h-screen bg-sand">
      <Navbar />
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

          {/* Pagination */}
          {totalPages > 1 && (
            <nav
              aria-label="Paginazione articoli"
              className="mt-16 flex items-center justify-center gap-2"
            >
              {safePage > 1 ? (
                <Link
                  href={safePage === 2 ? "/blog" : `/blog?page=${safePage - 1}`}
                  className="flex items-center gap-1 px-3 py-2 text-sm text-midgray rounded-md border border-[#e0dbd3] bg-white hover:border-primary hover:text-dark transition-colors"
                  aria-label="Pagina precedente"
                >
                  <ChevronLeft className="h-4 w-4" />
                  Precedente
                </Link>
              ) : (
                <span className="flex items-center gap-1 px-3 py-2 text-sm text-[#c8c3bc] rounded-md border border-[#e0dbd3] bg-white cursor-not-allowed">
                  <ChevronLeft className="h-4 w-4" />
                  Precedente
                </span>
              )}

              <div className="flex items-center gap-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                  <Link
                    key={p}
                    href={p === 1 ? "/blog" : `/blog?page=${p}`}
                    className={`w-9 h-9 flex items-center justify-center text-sm rounded-md border transition-colors ${
                      p === safePage
                        ? "border-primary bg-primary text-white font-medium"
                        : "border-[#e0dbd3] bg-white text-midgray hover:border-primary hover:text-dark"
                    }`}
                    aria-current={p === safePage ? "page" : undefined}
                  >
                    {p}
                  </Link>
                ))}
              </div>

              {safePage < totalPages ? (
                <Link
                  href={`/blog?page=${safePage + 1}`}
                  className="flex items-center gap-1 px-3 py-2 text-sm text-midgray rounded-md border border-[#e0dbd3] bg-white hover:border-primary hover:text-dark transition-colors"
                  aria-label="Pagina successiva"
                >
                  Successiva
                  <ChevronRight className="h-4 w-4" />
                </Link>
              ) : (
                <span className="flex items-center gap-1 px-3 py-2 text-sm text-[#c8c3bc] rounded-md border border-[#e0dbd3] bg-white cursor-not-allowed">
                  Successiva
                  <ChevronRight className="h-4 w-4" />
                </span>
              )}
            </nav>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
