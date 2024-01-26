import { useState, useEffect } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import axios from "axios";
function App() {
  const [books, setBooks] = useState([]);
  const fetchBooks = async () => {
    const res = await axios.get("http://localhost:3001/books");
    setBooks(res.data);
  };
  // DO NOT DO THIS
  // fetchBooks();
  useEffect(() => {
    fetchBooks();
  }, []);

  const createBook = async (title) => {
    const res = await axios.post(
      "http://localhost:3001/books",

      {
        title,
      }
    );
    console.log(res.data);
    setBooks([...books, res.data]);
  };
  const editBookById = (id, newTitle) => {
    const updatedBookList = books.map((book) => {
      if (book.id === id) {
        return { ...book, title: newTitle };
      }
      return book;
    });
    setBooks(updatedBookList);
  };
  const deleteBookById = (id) => {
    const updatedBookList = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updatedBookList);
  };
  return (
    <div className="App">
      <h1>ReadingList</h1>
      <BookList books={books} onDelete={deleteBookById} onEdit={editBookById} />
      <BookCreate createBook={createBook} />
    </div>
  );
}

export default App;
