import React from "react";
import { Navigate } from "react-router-dom";

/**
 * @deprecated This blog route has been removed. All traffic redirects to the dedicated service page:
 * /uae/dubai/automotive-seo/
 */
export default function DubaiAutomotiveSEO() {
  return <Navigate to="/uae/dubai/automotive-seo/" replace />;
}
