import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const SITE_NAME = "Supun Group of Companies";
export const SITE_URL = "https://supuncompanies.com";
export const DEFAULT_IMAGE = `${SITE_URL}/supun-group-of-companies-logo.png`;
const JSONLD_ID = "seo-jsonld";

interface SeoProps { title: string; description?: string; keywords?: string; path?: string; image?: string; type?: string; noindex?: boolean; jsonLd?: Record<string, unknown> | null; }

function upsertMeta(attr: "name" | "property", key: string, content?: string) { const existing = document.head.querySelector(`meta[${attr}="${key}"]`); if (!content) { existing?.remove(); return; } if (existing) existing.setAttribute("content", content); else { const meta = document.createElement("meta"); meta.setAttribute(attr, key); meta.setAttribute("content", content); document.head.appendChild(meta); } }
function upsertLink(rel: string, href: string) { let link = document.head.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null; if (!link) { link = document.createElement("link"); link.rel = rel; document.head.appendChild(link); } link.href = href; }
function upsertJsonLd(data?: Record<string, unknown> | null) { document.getElementById(JSONLD_ID)?.remove(); if (!data) return; const script = document.createElement("script"); script.type = "application/ld+json"; script.id = JSONLD_ID; script.textContent = JSON.stringify(data); document.head.appendChild(script); }

const Seo = ({ title, description, keywords, path, image = DEFAULT_IMAGE, type = "website", noindex = false, jsonLd }: SeoProps) => {
  const location = useLocation();
  const rawPath = path ?? location.pathname;
  const cleanPath = rawPath === "/" ? "/" : rawPath.replace(/\/$/, "");
  const canonicalUrl = `${SITE_URL}${cleanPath}`;
  const jsonLdString = jsonLd ? JSON.stringify(jsonLd) : "";

  useEffect(() => {
    const hostname = window.location.hostname.toLowerCase();
    const isProductionHost = hostname === "supuncompanies.com" || hostname === "www.supuncompanies.com";
    const shouldNoIndex = noindex || !isProductionHost;
    document.documentElement.lang = "en";
    document.title = title;
    upsertMeta("name", "title", title); upsertMeta("name", "description", description); upsertMeta("name", "keywords", keywords); upsertMeta("name", "robots", shouldNoIndex ? "noindex, nofollow" : "index, follow, max-image-preview:large"); upsertMeta("name", "googlebot", shouldNoIndex ? "noindex, nofollow" : "index, follow, max-image-preview:large"); upsertLink("canonical", canonicalUrl);
    upsertMeta("property", "og:type", type); upsertMeta("property", "og:url", canonicalUrl); upsertMeta("property", "og:title", title); upsertMeta("property", "og:description", description); upsertMeta("property", "og:image", image); upsertMeta("property", "og:site_name", SITE_NAME); upsertMeta("property", "og:locale", "en_LK");
    upsertMeta("name", "twitter:card", "summary_large_image"); upsertMeta("name", "twitter:title", title); upsertMeta("name", "twitter:description", description); upsertMeta("name", "twitter:image", image);
    upsertJsonLd(jsonLdString ? JSON.parse(jsonLdString) : null);
  }, [title, description, keywords, canonicalUrl, image, type, noindex, jsonLdString]);
  return null;
};

export default Seo;
