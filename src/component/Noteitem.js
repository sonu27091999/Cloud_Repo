import React, {useContext, useState} from 'react'
import noteContext from "../context/notes/noteContext"

function NoteItem(props) {
    const context = useContext(noteContext);
    const {deleteNote} = context;

    const { note,updateNote,showAlert } = props;
    return (
        <div className='col-md-3'>
            <div className="card my-3" >
                    <div className="card-body">
                        <h5 className="card-title">{note.title}</h5>
                        <p className="card-text">{note.description}</p>
                        {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                        <i className="fa-solid fa-trash-can fa-2x mx-2" onClick={()=>{deleteNote(note._id);
                        showAlert('Deleted Successfully','success')}}></i>
                        <i className="fa-solid fa-pen-to-square fa-2x" onClick={()=>{updateNote(note)}}></i>
                    </div>
            </div>
        </div>
    )
}

export default NoteItem