import React, { createContext, useContext, useState, useCallback } from "react";

const LoadingContext = createContext();

export const useLoadingContext = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error("useLoadingContext must be used within a LoadingProvider");
  }
  return context;
};

export const LoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isInitialLoading, setIsInitialLoading] = useState(true);

  const startLoading = useCallback(() => {
    setIsLoading(true);
  }, []);

  const stopLoading = useCallback(() => {
    setIsLoading(false);
  }, []);

  const startInitialLoading = useCallback(() => {
    setIsInitialLoading(true);
  }, []);

  const stopInitialLoading = useCallback(() => {
    setIsInitialLoading(false);
  }, []);

  const withLoading = useCallback(
    async (asyncFunction) => {
      startLoading();
      try {
        await asyncFunction();
      } finally {
        stopLoading();
      }
    },
    [startLoading, stopLoading]
  );

  const value = {
    isLoading,
    isInitialLoading,
    startLoading,
    stopLoading,
    startInitialLoading,
    stopInitialLoading,
    withLoading,
  };

  return (
    <LoadingContext.Provider value={value}>{children}</LoadingContext.Provider>
  );
};
