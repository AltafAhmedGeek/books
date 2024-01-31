import React, { useContext, useState } from "react";
import BookContext from "../context/BookContext";
const BookEdit = ({ book, onSubmit }) => {
  const { editBookById } = useContext(BookContext);
  const [title, setTitle] = useState(book.title);
  const handleChange = (event) => {
    setTitle(event.target.value);
  };
  const handlerClick = (event) => {
    event.preventDefault();
    onSubmit();
    editBookById(book.id, title);
  };
  return (
    <div>
      <form>
        <label>Title</label>
        <input className="input" value={title} onChange={handleChange} />
        <button className="button is-primary" onClick={handlerClick}>
          Save
        </button>
      </form>
    </div>
  );
};

export default BookEdit;
