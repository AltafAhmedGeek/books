import React, { useContext, useState } from "react";
import BookContext from "../context/BookContext";
const BookCreate = () => {
  const { createBook } = useContext(BookContext);
  const [title, setTitle] = useState("");
  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    createBook(title);
  };
  return (
    <div className="book-create">
      <h3>Add a Book</h3>
      <form onSubmit={handleSubmit}>
        <label>Enter Name</label>
        <input type="text" onChange={handleChange} />
        <button className="button">Submit</button>
      </form>
    </div>
  );
};

export default BookCreate;
