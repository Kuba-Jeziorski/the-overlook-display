import { useState, useEffect } from "react";

const useFetchContent = (url, state) => {
  const [fetchedContent, setFetchedContent] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const isStateEmpty = Object.keys(state).length === 0;

  useEffect(() => {
    if (isStateEmpty) {
      const fetchData = async () => {
        try {
          setIsLoading(true);
          const res = await fetch(url);
          const data = await res.json();
          console.log(`fetching`);
          setFetchedContent(data.data);
        } catch (error) {
          alert(`There was an error loading data: ${error.message}`);
        } finally {
          setIsLoading(false);
          setIsLoaded(true);
        }
      };
      fetchData();
    } else {
      setFetchedContent(state);
      setIsLoaded(true);
    }
  }, [url, isStateEmpty, state]);

  return { fetchedContent, isLoading, isLoaded };
};

export default useFetchContent;
