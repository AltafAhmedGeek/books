import React, { useState } from "react";
import BookEdit from "./BookEdit";

const BookShow = ({ book, onDelete, onEdit }) => {
  const [showEdit, setShowEdit] = useState(false);
  const handleEdit = (id, title) => {
    setShowEdit(!showEdit);
  };
  const handleDelete = () => {
    onDelete(book.id);
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
        <button className="edit" onClick={handleEdit}>
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
