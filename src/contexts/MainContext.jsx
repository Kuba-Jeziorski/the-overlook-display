import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const MainContext = createContext();

function MainProvider({ children }) {
  const [books, setBooks] = useState([]);
  const [villains, setVillains] = useState([]);

  return (
    <MainContext.Provider
      value={{
        books,
        setBooks,
        villains,
        setVillains,
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
