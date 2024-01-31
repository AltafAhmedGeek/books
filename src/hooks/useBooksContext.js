import { useContext } from "react";
import BookContext from "../context/BookContext";

function useBooksContext() {
  return useContext(BookContext);
}
export default useBooksContext;
