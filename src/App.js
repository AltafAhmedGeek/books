import { useEffect } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import useBooksContext from "./hooks/useBooksContext";
function App() {
  const { fetchBooks } = useBooksContext();
  // DO NOT DO THIS
  // fetchBooks();
  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="App">
      <h1>ReadingList</h1>
      <BookList />
      <BookCreate />
    </div>
  );
}

export default App;
