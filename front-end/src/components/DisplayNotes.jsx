import React, { useState } from "react";
import {Redirect} from "react-router-dom";
import axios from "axios";
import CreateArea from "./CreateArea";
import Note from "./Note";

function DisplayNotes(props) {

  const [redirect, setRedirect] = useState(false);
  
  const [notes, setNotes] = useState(() => {
    let initNote = [];
    axios.get("http://localhost:5000/note/" + props.user_id)
    .then(res => {
      initNote = setNotes(res.data);
      return initNote;
    })
    .catch(err => {
      console.log(err);
      setRedirect(true);
    });
    return initNote;
  });
  
  function addNote(newNote) {
    axios.post("http://localhost:5000/note/add/" + props.user_id, newNote)
        .then(res => setNotes(res.data))
        .catch(err => console.log(err));
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem) => {
        return noteItem._id !== id;
      });
    });
    console.log(id);
    axios.delete("http://localhost:5000/note/"+ props.user_id + "/" + id)
      .then(res => console.log(res.data));
  }

  function renderRedirect() {
    if (redirect) {
        return <Redirect to='/' />;
    }
  }

  return (
    <div>
      {renderRedirect()}
      <CreateArea onAdd={addNote} />
      <div className="row">
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
    </div>
  );
}

export default DisplayNotes;