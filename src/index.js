import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import BookContext from "./context/BookContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BookContext.Provider value={5}>
      <App />
    </BookContext.Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(//console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
