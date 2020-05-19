import React, { useState } from "react";
import axios from "axios";
import CreateArea from "./CreateArea";
import Note from "./Note";

function DisplayNotes() {
  const [notes, setNotes] = useState(() => {
    let initNote = [];
    axios.get("http://localhost:5000/note/")
    .then(res => {
      initNote = setNotes(res.data);
      return initNote;
    })
    .catch(err => {
      console.log(err);
    });
    return initNote;
  });
  
  function addNote(newNote) {
    axios.post("http://localhost:5000/note/add", newNote)
        .then(res => console.log(res.data));
    axios.get("http://localhost:5000/note/")
      .then(res => {
        setNotes(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem) => {
        return noteItem._id !== id;
      });
    });
    console.log(id);
    axios.delete("http://localhost:5000/note/" + id)
      .then(res => console.log(res.data));
  }

  return (
    <div>
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={noteItem._id}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
    </div>
  );
}

export default DisplayNotes;