import PropTypes from "prop-types";
import { useMemo, useState } from "react";

import { useBooks } from "../hooks/useFetchContent";
import Title from "../components/Title";
import HeaderDescription from "../components/HeaderDescription";
import Button from "../components/Button";
import BooksListing from "../components/BooksListing";
import AnimatedPage from "../components/AnimatedPage";

function Books() {
  const [booksAmount, setBooksAmount] = useState(3);

  const { books, loadingStatus } = useBooks();

  const handleAmountIncrease = () => {
    setBooksAmount((amount) => amount + 3);
  };

  const booksListing = useMemo(() => {
    return books.slice(0, booksAmount);
  }, [books, booksAmount]);

  if (loadingStatus === "pending") {
    return <div>Loading...</div>;
  }
  if (loadingStatus === "failed") {
    return <div>Failed to load</div>;
  }

  return (
    <AnimatedPage>
      <div className="wrapper-medium">
        <div className="container">
          <Title tag="h1">Books</Title>
          <HeaderDescription>
            Welcome to the Books page of The Overlook Display. Immerse yourself
            in the extensive and captivating world of Stephen King&apos;s
            literary works. This section offers comprehensive information on all
            of King&apos;s novels, from his most iconic classics to his latest
            releases. Each book entry provides a detailed overview of the plot,
            key characters, and central themes, giving you a deeper
            understanding of what makes these stories so compelling. Whether you
            are a long-time fan or new to King&apos;s universe, our curated
            pages will guide you through the spellbinding tales that have
            cemented Stephen King&apos;s place as a master of horror and
            storytelling. Dive in and discover the magic and terror that lie
            within each book.
          </HeaderDescription>
          <BooksListing booksListing={booksListing} />
          <div className="button-wrapper">
            <Button type="tertiary" onPress={handleAmountIncrease}>
              SEE MORE
            </Button>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
}

Books.propTypes = {
  url: PropTypes.string,
  books: PropTypes.object,
  setBooks: PropTypes.func,
};

export default Books;
