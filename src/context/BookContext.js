import { createContext, useState } from "react";

const BookContext = createContext();
function Provider({ children }) {
  return (
    <BookContext.Provider value={{}}>{children}</BookContext.Provider>
  );
}

export { Provider };
export default BookContext;
