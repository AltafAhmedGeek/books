import React, { useContext } from "react";
import BookShow from "./BookShow";
import BookContext from "../context/BookContext";

const BookList = ({ books, onDelete, onEdit }) => {
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
  const number = useContext(BookContext);
  return (
    <div className="book-list">
      <div>{number}</div>
      {renderedBooks}
    </div>
  );
};

export default BookList;
