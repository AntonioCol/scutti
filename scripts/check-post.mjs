import { createClient } from "@sanity/client";
import { readFileSync } from "fs";

const envFile = readFileSync(".env.local", "utf-8");
const env = Object.fromEntries(
  envFile.split("\n").filter(l => l.includes("=") && !l.startsWith("#")).map(l => {
    const [k, ...v] = l.split("=");
    return [k.trim(), v.join("=").trim().replace(/^["']|["']$/g, "")];
  })
);

const client = createClient({
  projectId: env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2026-03-25",
  useCdn: false,
});

const post = await client.fetch(
  `*[_type == "post" && slug.current == "come-scegliere-pavimento-perfetto-casa"][0] {
    _id, title, mainImage, publishedAt
  }`
);

console.log("Post trovato:", JSON.stringify(post, null, 2));
