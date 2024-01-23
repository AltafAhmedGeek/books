import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
function App() {
  const [books, setBooks] = useState([]);
  const createBook = (title) => {
    setBooks([
      ...books,
      {
        id: Math.floor(Math.random() * 99),
        title,
      },
    ]);
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
