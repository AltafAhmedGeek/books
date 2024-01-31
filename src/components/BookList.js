import React, { useContext } from "react";
import BookShow from "./BookShow";
import BookContext from "../context/BookContext";

const BookList = () => {
  const { books, onDelete, onEdit } = useContext(BookContext);
  const renderedBooks = books.map((book) => {
    return (
      <div>
        <BookShow
          key={book.id}
          book={book}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      </div>
    );
  });
  return <div className="book-list">{renderedBooks}</div>;
};

export default BookList;
