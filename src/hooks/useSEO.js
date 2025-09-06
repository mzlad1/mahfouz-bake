import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { applyPageSEO } from "../utils/seo";

const useSEO = (pageKey) => {
  const location = useLocation();

  useEffect(() => {
    // Apply SEO for the current page
    applyPageSEO(pageKey, location.pathname);
  }, [pageKey, location.pathname]);
};

export default useSEO;
