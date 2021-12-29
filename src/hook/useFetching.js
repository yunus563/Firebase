import { useState } from "react";

export const useFetching = (Callback) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetching = async (...args) => {
    try {
      setLoading(true);
      await Callback(...args);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  return [ fetching, loading, error ]
};
