import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * ScrollToTop component automatically scrolls the window to the top (0,0)
 * on any route/pathname change.
 */
const ScrollToTop = () => {
  const { pathname, search, hash } = useLocation();

  useEffect(() => {
    // If there's an anchor hash (e.g. #section-id), scroll to it safely if found
    if (hash && hash.length > 1) {
      try {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          return;
        }
      } catch (err) {
        // Ignore invalid CSS selector in hash
      }
    }

    // Default: instantly reset scroll to top of page
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname, search, hash]);

  return null;
};

export default ScrollToTop;
