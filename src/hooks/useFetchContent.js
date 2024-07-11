import { useState, useEffect, useCallback } from "react";
import { useMainContext } from "../contexts/MainContext";

const useFetchContent = (url, state, setState) => {
  const [loadingStatus, setLoadingStatus] = useState(
    state.length !== 0 ? "success" : "idle"
  ); // idle | pending | success | failed

  const fetchData = useCallback(async () => {
    try {
      setLoadingStatus("pending");
      const res = await fetch(url);
      const data = await res.json();
      setState(data.data);
      setLoadingStatus("success");
    } catch (error) {
      alert(`There was an error loading data: ${error.message}`);
      setLoadingStatus("failed");
    }
  }, [setState, url]);

  useEffect(() => {
    if (loadingStatus !== "success") {
      fetchData();
    }
  }, [loadingStatus, fetchData]);

  return { loadingStatus };
};

export const useBooks = () => {
  const { books = [], setBooks } = useMainContext();

  const { loadingStatus } = useFetchContent(
    `https://stephen-king-api.onrender.com/api/books`,
    books,
    setBooks
  );

  return { books, loadingStatus };
};

export const useVillains = () => {
  const { villains = [], setVillains } = useMainContext();

  const { loadingStatus } = useFetchContent(
    `https://stephen-king-api.onrender.com/api/villains`,
    villains,
    setVillains
  );

  return { villains, loadingStatus };
};
