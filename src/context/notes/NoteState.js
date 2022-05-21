import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const host = "http://localhost:5000"
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);


  //Get all Notes
  const getNotes = async () => {
    //API call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI4NDcxNDI0ZGIyYTFhNjFlNDIxN2Q0In0sImlhdCI6MTY1Mjg0ODQ4NX0.EvX4rktV2U43K51pWHK5Ht4Hu1z-FCA44UkeoQNBi5s'
      }
    });
    const json = await response.json();
    console.log(json);
    setNotes(json);
  }

  //Add a Note
  const addNote = async (title, description, tag) => {
    //API call
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI4NDcxNDI0ZGIyYTFhNjFlNDIxN2Q0In0sImlhdCI6MTY1Mjg0ODQ4NX0.EvX4rktV2U43K51pWHK5Ht4Hu1z-FCA44UkeoQNBi5s'
      },
      body: JSON.stringify({ title, description, tag })
    });
    const json = response.json();

    //Logic to addnote in client
    console.log('Adding a note');
    const note = {
      "_id": "62848fed4e445ksjkdc8dsds9bb514e",
      "user": "628471424db2a1a61e4217d4",
      "title": title,
      "description": description,
      "tag": tag,
      "date": "2022-05-18T06:19:25.240Z",
      "__v": 0
    };
    setNotes(notes.concat(note));
  }
  // Delete a Note
  const deleteNote = async (id) => {
    console.log('Deleting a Note' + id);
    //API call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI4NDcxNDI0ZGIyYTFhNjFlNDIxN2Q0In0sImlhdCI6MTY1Mjg0ODQ4NX0.EvX4rktV2U43K51pWHK5Ht4Hu1z-FCA44UkeoQNBi5s'
      },
    });
    const json = response.json();
    console.log(json);
    let newNotes = notes.filter((note) => { return note._id !== id })
    setNotes(newNotes);
  }
  //Edit a Note
  const editNote = async (id, title, description, tag) => {
    //API call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI4NDcxNDI0ZGIyYTFhNjFlNDIxN2Q0In0sImlhdCI6MTY1Mjg0ODQ4NX0.EvX4rktV2U43K51pWHK5Ht4Hu1z-FCA44UkeoQNBi5s'
      },
      body: JSON.stringify({ title, description, tag })
    });
    const json = response.json();

    //Logic to edit in client
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  }

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState;