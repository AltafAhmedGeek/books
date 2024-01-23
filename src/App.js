import { useState } from "react";
import BookCreate from "./components/BookCreate";

function App() {
  const [books, setBooks] = useState([]);
  const createBook = (title) => {
    setBooks([...books,title])
  };
  console.log(books);

  return (
    <div className="App">
      <h1>ReadingList</h1>
      <BookCreate createBook={createBook} />
    </div>
  );
}

export default App;
