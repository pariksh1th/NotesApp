import React from "react";
import ReactDOM from "react-dom";
import { year } from "./Footer";
import header from "./Header";
import Note from "./Note";
import footer from "./Footer";
const d = new Date();

const currentYear = d.getFullYear();

function App() {
  return (
    <>
      <header>
        <h1>Keeper</h1>
      </header>
      <Note>
        <h1>Title</h1>
        <p>write the content</p>
      </Note>
      <footer>
        <p>copyright @ {currentYear}</p>
      </footer>
    </>
  );
}

export default App;
