"use client";

import { useState } from "react";
import { Facebook, Twitter, Linkedin, MessageCircle, Send, Mail, Link2, Check } from "lucide-react";

interface ShareButtonsProps {
  url: string;
  title: string;
  excerpt?: string;
}

const platforms = [
  {
    name: "Facebook",
    icon: Facebook,
    getUrl: (url: string) =>
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    color: "hover:text-[#1877F2]",
  },
  {
    name: "X",
    icon: Twitter,
    getUrl: (url: string, title: string) =>
      `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
    color: "hover:text-[#000]",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    getUrl: (url: string) =>
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    color: "hover:text-[#0A66C2]",
  },
  {
    name: "WhatsApp",
    icon: MessageCircle,
    getUrl: (url: string, title: string) =>
      `https://wa.me/?text=${encodeURIComponent(`${title} ${url}`)}`,
    color: "hover:text-[#25D366]",
  },
  {
    name: "Telegram",
    icon: Send,
    getUrl: (url: string, title: string) =>
      `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
    color: "hover:text-[#0088cc]",
  },
  {
    name: "Email",
    icon: Mail,
    getUrl: (url: string, title: string, excerpt?: string) =>
      `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(`${excerpt || title}\n\n${url}`)}`,
    color: "hover:text-primary",
    noWindow: true,
  },
];

export default function ShareButtons({ url, title, excerpt }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-wrap items-center gap-3">
      <span className="text-xs tracking-[0.15em] uppercase text-midgray font-medium">
        Condividi
      </span>
      {platforms.map((p) => (
        <a
          key={p.name}
          href={p.getUrl(url, title, excerpt)}
          {...(p.noWindow ? {} : { target: "_blank", rel: "noopener noreferrer" })}
          title={`Condividi su ${p.name}`}
          className={`w-9 h-9 flex items-center justify-center border border-[#e0dbd3] text-midgray transition-all duration-200 ${p.color} hover:border-current`}
        >
          <p.icon size={16} />
        </a>
      ))}
      <button
        type="button"
        onClick={handleCopy}
        title="Copia link"
        className={`w-9 h-9 flex items-center justify-center border border-[#e0dbd3] transition-all duration-200 cursor-pointer ${
          copied
            ? "text-primary border-primary"
            : "text-midgray hover:text-primary hover:border-primary"
        }`}
      >
        {copied ? <Check size={16} /> : <Link2 size={16} />}
      </button>
    </div>
  );
}
