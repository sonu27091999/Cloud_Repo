import React from 'react'

function NoteItem(props) {
    const { note } = props;
    return (
        <div className='col-md-3'>
            <div className="card my-3" >
                    <div className="card-body">
                        <h5 className="card-title">{note.title}</h5>
                        <p className="card-text">{note.description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum exercitationem quam eius quia doloremque et quos nihil, optio minus quae deserunt dolore nobis eligendi quo delectus necessitatibus facere unde rerum veritatis sapiente, eaque, minima nisi!</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
            </div>
        </div>
    )
}

export default NoteItem