import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Reusable SEO Component for DigLip7
 * Dynamically updates document.title, meta descriptions, canonical URLs,
 * OpenGraph, Twitter Cards, and Schema.org JSON-LD structured data.
 */
const SEO = ({
  title,
  description,
  keywords,
  canonical,
  ogType = "website",
  ogImage = "https://diglip7.com/favicon-32x32.png",
  ogImageAlt,
  schema,
  noindex = false,
}) => {
  const location = useLocation();
  const siteTitle = "DigLip7 – Leading Digital Marketing & Web Development Agency";
  const fullTitle = title ? (title.includes("DigLip7") ? title : `${title} | DigLip7`) : siteTitle;
  const defaultDescription =
    "DigLip7 is a results-driven Digital Marketing and Web Development Agency helping businesses boost online visibility, traffic, and revenue through expert SEO, PPC, ORM, and custom software.";
  const metaDescription = description || defaultDescription;
  const defaultKeywords =
    "digital marketing agency, SEO services, PPC advertising, ORM, web development, UI UX design, custom software, Noida, India, DigLip7";
  const metaKeywords = keywords || defaultKeywords;
  const imageAltText = ogImageAlt || `${fullTitle} - DigLip7`;

  // Dynamically compute exact current page URL for canonical & social tags
  const currentUrl =
    canonical ||
    (typeof window !== "undefined"
      ? `${window.location.origin}${location.pathname}`
      : `https://diglip7.com${location.pathname}`);

  useEffect(() => {
    // 1. Update Title
    document.title = fullTitle;

    // Helper to update or create <meta> tags
    const setMetaTag = (attribute, attrValue, content) => {
      if (!content) return;
      let element = document.querySelector(`meta[${attribute}="${attrValue}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, attrValue);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    // 2. Standard Meta Tags
    setMetaTag("name", "description", metaDescription);
    setMetaTag("name", "keywords", metaKeywords);
    setMetaTag(
      "name",
      "robots",
      noindex
        ? "noindex, nofollow"
        : "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
    );
    setMetaTag("name", "author", "DigLip7 Tech Private Limited");
    setMetaTag("name", "theme-color", "#115e59");
    setMetaTag("http-equiv", "content-language", "en");

    // 3. Canonical & Hreflang Links
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute("href", currentUrl);

    // Hreflang alternates
    const setAlternateLink = (hreflang, href) => {
      let altLink = document.querySelector(`link[rel="alternate"][hreflang="${hreflang}"]`);
      if (!altLink) {
        altLink = document.createElement("link");
        altLink.setAttribute("rel", "alternate");
        altLink.setAttribute("hreflang", hreflang);
        document.head.appendChild(altLink);
      }
      altLink.setAttribute("href", href);
    };
    setAlternateLink("en", currentUrl);
    setAlternateLink("x-default", currentUrl);

    // 4. OpenGraph Meta Tags
    setMetaTag("property", "og:title", fullTitle);
    setMetaTag("property", "og:description", metaDescription);
    setMetaTag("property", "og:url", currentUrl);
    setMetaTag("property", "og:type", ogType);
    setMetaTag("property", "og:site_name", "DigLip7");
    setMetaTag("property", "og:locale", "en_US");
    setMetaTag("property", "og:image", ogImage);
    setMetaTag("property", "og:image:secure_url", ogImage);
    setMetaTag("property", "og:image:type", "image/jpeg");
    setMetaTag("property", "og:image:width", "1200");
    setMetaTag("property", "og:image:height", "630");
    setMetaTag("property", "og:image:alt", imageAltText);

    // 5. Twitter Card Meta Tags
    setMetaTag("name", "twitter:card", "summary_large_image");
    setMetaTag("name", "twitter:site", "@diglip7");
    setMetaTag("name", "twitter:creator", "@diglip7");
    setMetaTag("name", "twitter:title", fullTitle);
    setMetaTag("name", "twitter:description", metaDescription);
    setMetaTag("name", "twitter:image", ogImage);
    setMetaTag("name", "twitter:image:alt", imageAltText);

    // 6. Structured Data (JSON-LD Schema)
    // Clean up any previously injected dynamic schema scripts
    document.querySelectorAll("script[data-dynamic-seo]").forEach((s) => s.remove());

    if (schema) {
      const schemasToInject = Array.isArray(schema) ? schema : [schema];
      schemasToInject.forEach((schemaObj, i) => {
        if (!schemaObj) return;
        const script = document.createElement("script");
        script.type = "application/ld+json";
        script.setAttribute("data-dynamic-seo", "true");
        script.id = `dynamic-json-ld-${i}`;
        script.textContent = JSON.stringify(schemaObj, null, 2);
        document.head.appendChild(script);
      });
    }

    return () => {
      document.querySelectorAll("script[data-dynamic-seo]").forEach((s) => s.remove());
      const canonicalLink = document.querySelector('link[rel="canonical"]');
      if (canonicalLink) canonicalLink.remove();
      document.querySelectorAll('link[rel="alternate"][hreflang]').forEach((l) => l.remove());
      document.title = "DigLip7";
    };
  }, [location.pathname, fullTitle, metaDescription, metaKeywords, currentUrl, ogType, ogImage, JSON.stringify(schema), noindex]);

  return null;
};

export default SEO;
