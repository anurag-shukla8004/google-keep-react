import Header from "./header";
import Footer from "./footer";
import Createnote from "./createnote";
import Note from "./note";
import { useState } from "react";

function App() {
  const [create, updatecreate] = useState([]);
  const addNote = (note) => {
    updatecreate((prevData) => {
      return [...prevData, note];
    });
  };

  const onDelete = (id) => {
    updatecreate((pre) =>
      pre.filter((elm, index) => {
        return index !== id;
      })
    );
  };
  return (
    <>
      <Header />
      <Createnote passnote={addNote} />
      {create.map((val, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={val.title}
            content={val.content}
            deleteItem={onDelete}
          />
        );
      })}
      <Footer />
    </>
  );
}

export default App;
