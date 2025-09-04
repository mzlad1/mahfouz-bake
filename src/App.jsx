import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useEffect, useRef } from "react";
import { LoadingProvider, useLoadingContext } from "./context/LoadingContext";
import useScrollToTop from "./hooks/useScrollToTop";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Clients from "./pages/Clients";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import "./App.css";

function AppContent() {
  const location = useLocation();
  const { startLoading, stopLoading, startInitialLoading, stopInitialLoading } =
    useLoadingContext();
  const prevPathRef = useRef(location.pathname);

  // Use scroll to top hook for iOS compatibility
  useScrollToTop();

  // Initial loading when app first loads
  useEffect(() => {
    const timer = setTimeout(() => {
      stopInitialLoading();
    }, 2000); // Show initial loading for 2 seconds

    return () => clearTimeout(timer);
  }, [stopInitialLoading]);

  // Page transition loading
  useEffect(() => {
    // Only trigger loading if navigating to a different page
    if (prevPathRef.current !== location.pathname) {
      startLoading();

      // Simulate loading time for page transitions
      const timer = setTimeout(() => {
        stopLoading();
      }, 1200);

      return () => clearTimeout(timer);
    }

    // Update the previous path reference
    prevPathRef.current = location.pathname;
  }, [location.pathname, startLoading, stopLoading]);

  return (
    <div className="App">
      <Loading />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <LoadingProvider>
        <AppContent />
      </LoadingProvider>
    </Router>
  );
}

export default App;
