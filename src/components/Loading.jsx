import React, { useState, useEffect } from "react";
import { useLoadingContext } from "../context/LoadingContext";
import "./Loading.css";

const Loading = () => {
  const { isLoading, isInitialLoading } = useLoadingContext();
  const [show, setShow] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {

    if (isLoading || isInitialLoading) {
      setShow(true);
      setAnimate(true);

      // Safety timeout to prevent loading from getting stuck
      const safetyTimer = setTimeout(() => {
        if (isLoading || isInitialLoading) {
          setAnimate(false);
          setTimeout(() => setShow(false), 500);
        }
      }, 5000); // 5 second safety timeout

      return () => clearTimeout(safetyTimer);
    } else {
      setAnimate(false);
      const timer = setTimeout(() => {
        setShow(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isLoading, isInitialLoading]);

  if (!show) return null;

  return (
    <div className={`loading-overlay ${animate ? "animate" : "fade-out"}`}>
      <div className="loading-container">
        <div className="loading-cookie">
          <img
            src="/images/loading.png"
            alt="Loading..."
            className="cookie-icon"
          />
        </div>
        <div className="loading-text">Loading...</div>
        <div className="loading-dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default Loading;
