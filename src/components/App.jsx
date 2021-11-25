import React from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import notes from "../notes";

function App() {
  return (
    <>
      <Header />
      {notes.map((note) => (
        <Note title={note.title} content={note.content} key={note.key} />
      ))}

      <Footer />
    </>
  );
}

export default App;
