import React, { useContext, useState } from "react";
import BookEdit from "./BookEdit";
import BookContext from "../context/BookContext";
const BookShow = ({ book }) => {
  const { deleteBookById } = useContext(BookContext);
  const [showEdit, setShowEdit] = useState(false);
  const handleEdit = () => {
    setShowEdit(!showEdit);
  };
  const handleEditButton = () => {
    setShowEdit(!showEdit);
  };
  const handleDelete = () => {
    deleteBookById(book.id);
  };
  const content = showEdit ? (
    <BookEdit book={book} onSubmit={handleEdit} />
  ) : (
    book.title
  );
  return (
    <div className="book-show">
      <img src={`https://picsum.photos/seed/${book.title}/500/500`} />
      {content}
      <div className="actions">
        <button className="edit" onClick={handleEditButton}>
          Edit
        </button>
        <button className="delete" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default BookShow;
