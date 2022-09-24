import { useState, useEffect, useCallback } from "react";

export const useFetch = (url, request) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [hasError, setHasError] = useState(false);

    const getApi = useCallback(async () => {
        setLoading(true);

      try {
          const res = await fetch(url, request);
          const data = await res.json();

          setData(data);
          setLoading(false);
      } catch {
          setHasError(true);
          setLoading(false);
      }
    }, [url, request]);

  useEffect(() => {
    getApi();
  }, [url, getApi]);

  return { data, loading, hasError };
};