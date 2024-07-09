import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const MainContext = createContext();

function MainProvider({ children }) {
  const [books, setBooks] = useState({});
  const [villains, setVillains] = useState({});

  const [villainsAmount, setVillainsAmount] = useState(3);
  const [villainsListing, setVillainsListing] = useState([]);

  const [booksAmount, setBooksAmount] = useState(3);
  const [booksListing, setBooksListing] = useState([]);

  return (
    <MainContext.Provider
      value={{
        books,
        setBooks,
        villains,
        setVillains,
        villainsAmount,
        setVillainsAmount,
        villainsListing,
        setVillainsListing,
        booksAmount,
        setBooksAmount,
        booksListing,
        setBooksListing,
      }}
    >
      {children}
    </MainContext.Provider>
  );
}

function useMainContext() {
  const context = useContext(MainContext);
  return context;
}

export { MainProvider, useMainContext };

MainProvider.propTypes = {
  children: PropTypes.node,
};
