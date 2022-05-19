import React from 'react'
import { useContext,useEffect } from 'react'      // or import React, {useContext} from 'react'   for both 1 & 2 line
import noteContext from '../context/notes/noteContext'

export default function About() {
    const a = useContext(noteContext);
    useEffect(() => {
     a.update();
    }, [])
    
    return (
        <div>
            This is About {a.state.name} and he is class in {a.state.class}.
        </div>
    )
}
