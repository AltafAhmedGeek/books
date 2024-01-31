import { createContext, useState } from "react";
import axios from "axios";

const BookContext = createContext();
function Provider({ children }) {
  const [books, setBooks] = useState([]);
  const fetchBooks = async () => {
    const res = await axios.get("http://localhost:3001/books");
    setBooks(res.data);
  };
  const editBookById = async (id, newTitle) => {
    const res = await axios.put(
      `http://localhost:3001/books/${id}`,

      {
        title: newTitle,
      }
    );
    //console.log(res.data);
    const updatedBookList = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...res.data };
      }
      return book;
    });
    setBooks(updatedBookList);
  };
  const deleteBookById = async (id) => {
    const res = await axios.delete(`http://localhost:3001/books/${id}`);
    const updatedBookList = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updatedBookList);
  };
  const createBook = async (title) => {
    const res = await axios.post(
      "http://localhost:3001/books",

      {
        title,
      }
    );
    //console.log(res, "ss");
    setBooks([...books, res.data]);
  };
  const valueToShare = {
    books,
    deleteBookById,
    editBookById,
    createBook,
    fetchBooks,
  };
  return (
    <BookContext.Provider value={valueToShare}>{children}</BookContext.Provider>
  );
}

export { Provider };
export default BookContext;
