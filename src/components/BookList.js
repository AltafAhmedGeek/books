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
  const {count,incrementCount} = useContext(BookContext);
  return (
    <div className="book-list">
      <div>{count}</div>
      <button onClick={incrementCount}>incrementCount</button>
      {renderedBooks}
    </div>
  );
};

export default BookList;
