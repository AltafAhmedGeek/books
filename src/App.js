import { useEffect, useContext } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import BookContext from "./context/BookContext";
function App() {
  const { fetchBooks } = useContext(BookContext);
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
