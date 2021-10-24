import React, { useState } from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

function Createnote(props) {
  const [note, updatenote] = useState({
    title: "",
    content: "",
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;
    updatenote((pre) => {
      return {
        ...pre,
        [name]: value,
      };
    });
  };
  return (
    <>
      <div className="main-note">
        <form>
          <input
            type="text"
            name="title"
            value={note.title}
            onChange={InputEvent}
            placeholder="Title"
            autoComplete="off"
          />
          <textarea
            name="content"
            value={note.content}
            onChange={InputEvent}
            placeholder="Write a note"
            cols="30"
            rows="10"
          ></textarea>
          <Button
            className="Multibutton-root"
            onClick={() => {
              props.passnote(note);
              updatenote({ title: "", content: "" });
            }}
          >
            <AddIcon className="plus-sign"></AddIcon>
          </Button>
        </form>
      </div>
    </>
  );
}

export default Createnote;
