import React from "react";
import BookShow from "./BookShow";
import useBooksContext from "../hooks/useBooksContext";

const BookList = () => {
  const { books, onDelete, onEdit } = useBooksContext();
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
