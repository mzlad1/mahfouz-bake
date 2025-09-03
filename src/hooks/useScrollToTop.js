import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    // iOS Safari compatible scroll to top
    const scrollToTop = () => {
      // Method 1: Modern browsers with smooth behavior
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

      // Method 2: Direct DOM manipulation for iOS Safari
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;

      // Method 3: Force scroll for stubborn iOS Safari
      setTimeout(() => {
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      }, 50);
    };

    // Scroll to top on route change
    scrollToTop();
  }, [location.pathname]);
};

export default useScrollToTop;
