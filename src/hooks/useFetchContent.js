import { useState, useEffect } from "react";

const useFetchContent = (url) => {
  const [fetchedContent, setFetchedContent] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    async function fetchBooks() {
      try {
        setIsLoading(true);
        const res = await fetch(url);
        const data = await res.json();
        setFetchedContent(data.data);
      } catch (error) {
        alert(`There was an error loading data: ${error.message}`);
      } finally {
        setIsLoading(false);
        setIsLoaded(true);
      }
    }
    fetchBooks();
  }, [url]);

  return { fetchedContent, isLoading, isLoaded };
};

export default useFetchContent;
