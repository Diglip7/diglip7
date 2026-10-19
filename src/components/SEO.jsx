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
  ogLocale = "en_US",
  ogImage = "https://diglip7.com/favicon-32x32.png",
  ogImageAlt,
  ogDescription,
  twitterCard = "summary_large_image",
  twitterSite = "@diglip7",
  twitterCreator = "@diglip7",
  twitterTitle,
  twitterDescription,
  twitterImage,
  twitterImageAlt,
  robots,
  hreflangs,
  schema,
  noindex = false,
  exactTitle = false,
}) => {
  const location = useLocation();
  const siteTitle = "DigLip7 – Leading Digital Marketing & Web Development Agency";
  const fullTitle = exactTitle
    ? title
    : title
    ? (title.includes("DigLip7") ? title : `${title} | DigLip7`)
    : siteTitle;
  const defaultDescription =
    "DigLip7 is a results-driven Digital Marketing and Web Development Agency helping businesses boost online visibility, traffic, and revenue through expert SEO, PPC, ORM, and custom software.";
  const metaDescription = description || defaultDescription;
  const ogDesc = ogDescription || metaDescription;
  const twDesc = twitterDescription || metaDescription;
  const twTitle = twitterTitle || fullTitle;
  const defaultKeywords =
    "digital marketing agency, SEO services, PPC advertising, ORM, web development, UI UX design, custom software, Noida, India, DigLip7";
  const metaKeywords =
    keywords === false || keywords === null || keywords === ""
      ? null
      : keywords !== undefined
      ? keywords
      : defaultKeywords;
  const imageAltText = ogImageAlt || (exactTitle ? title : `${fullTitle} - DigLip7`);
  const twImage = twitterImage || ogImage;
  const twImageAlt = twitterImageAlt || imageAltText;

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

    // Helper to remove <meta> tags
    const removeMetaTag = (attribute, attrValue) => {
      const element = document.querySelector(`meta[${attribute}="${attrValue}"]`);
      if (element) element.remove();
    };

    // 2. Standard Meta Tags
    setMetaTag("name", "description", metaDescription);
    if (metaKeywords) {
      setMetaTag("name", "keywords", metaKeywords);
    } else {
      removeMetaTag("name", "keywords");
    }
    setMetaTag(
      "name",
      "robots",
      noindex
        ? "noindex, nofollow"
        : robots || "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
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

    const hreflangArray =
      hreflangs && Array.isArray(hreflangs) && hreflangs.length > 0
        ? hreflangs
        : [
            { hreflang: "en", href: currentUrl },
            { hreflang: "x-default", href: currentUrl },
          ];

    hreflangArray.forEach((item) => {
      setAlternateLink(item.hreflang, item.href);
    });

    // 4. OpenGraph Meta Tags
    setMetaTag("property", "og:title", fullTitle);
    setMetaTag("property", "og:description", ogDesc);
    setMetaTag("property", "og:url", currentUrl);
    setMetaTag("property", "og:type", ogType);
    setMetaTag("property", "og:site_name", "DigLip7");
    setMetaTag("property", "og:locale", ogLocale);
    setMetaTag("property", "og:image", ogImage);
    setMetaTag("property", "og:image:secure_url", ogImage);
    const imageMimeType = ogImage?.endsWith(".webp")
      ? "image/webp"
      : ogImage?.endsWith(".png")
      ? "image/png"
      : "image/jpeg";
    setMetaTag("property", "og:image:type", imageMimeType);
    setMetaTag("property", "og:image:width", "1200");
    setMetaTag("property", "og:image:height", "630");
    setMetaTag("property", "og:image:alt", imageAltText);

    // 5. Twitter Card Meta Tags
    setMetaTag("name", "twitter:card", twitterCard);
    if (twitterSite) {
      setMetaTag("name", "twitter:site", twitterSite);
    } else {
      removeMetaTag("name", "twitter:site");
    }
    if (twitterCreator) {
      setMetaTag("name", "twitter:creator", twitterCreator);
    } else {
      removeMetaTag("name", "twitter:creator");
    }
    setMetaTag("name", "twitter:title", twTitle);
    setMetaTag("name", "twitter:description", twDesc);
    setMetaTag("name", "twitter:image", twImage);
    setMetaTag("name", "twitter:image:alt", twImageAlt);

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
      removeMetaTag("name", "keywords");
      removeMetaTag("name", "twitter:site");
      removeMetaTag("name", "twitter:creator");
      document.title = "DigLip7";
    };
  }, [
    location.pathname,
    fullTitle,
    metaDescription,
    ogDesc,
    twDesc,
    twTitle,
    metaKeywords,
    currentUrl,
    ogType,
    ogLocale,
    ogImage,
    imageAltText,
    twitterCard,
    twitterSite,
    twitterCreator,
    twImage,
    twImageAlt,
    robots,
    JSON.stringify(hreflangs),
    JSON.stringify(schema),
    noindex,
    exactTitle,
  ]);

  return null;
};

export default SEO;
