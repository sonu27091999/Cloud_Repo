import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
    const notesInitial=[
        {
          "_id": "628484158326728ui23bee19",
          "user": "628471424db2a1a61e4217d4",
          "title": "Title 1",
          "description": "Please subscibe CWH",
          "tag": "youtube",
          "date": "2022-05-18T05:28:53.414Z",
          "__v": 0
        },
        {
          "_id": "62848fed4dsd445d5jk9bb514e",
          "user": "628471424db2a1a61e4217d4",
          "title": "Title 2",
          "description": "Code with harry",
          "tag": "youtube",
          "date": "2022-05-18T06:19:25.240Z",
          "__v": 0
        },
        {
          "_id": "62848fdh4e4sd4rdds5c89bb514e",
          "user": "628471424db2a1a61e4217d4",
          "title": "Title 2",
          "description": "Code with harry",
          "tag": "youtube",
          "date": "2022-05-18T06:19:25.240Z",
          "__v": 0
        },
        {
          "_id": "62648fed4eg45dhc89bb514e",
          "user": "628471424db2a1a61e4217d4",
          "title": "Title 2",
          "description": "Code with harry",
          "tag": "youtube",
          "date": "2022-05-18T06:19:25.240Z",
          "__v": 0
        },
        {
          "_id": "62848fed4sdffsde445d5c89bb514e",
          "user": "628471424db2a1a61e4217d4",
          "title": "Title 2",
          "description": "Code with harry",
          "tag": "youtube",
          "date": "2022-05-18T06:19:25.240Z",
          "__v": 0
        },
        {
          "_id": "62848fed4e445d5c89bb514e",
          "user": "628471424db2a1a61e4217d4",
          "title": "Title 2",
          "description": "Code with harry",
          "tag": "youtube",
          "date": "2022-05-18T06:19:25.240Z",
          "__v": 0
        }
      ];
    const [notes, setNotes] = useState(notesInitial);
    return (
        <NoteContext.Provider value={{notes,setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;