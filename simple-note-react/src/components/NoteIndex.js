import React, { useState } from "react"
import IndexItem from "./IndexItem"

function NoteIndex() {
    const [ notes, setNotes ] = useState([
        {
            index: 1,
            header: "World, hello!",
            text: "Hello world"
        },
        {
            index: 2,
            header: "'Ello there guvna",
            text: "Test note"
        },
        {
            index: 3,
            header: "My note",
            text: "Pop a testie"
        }
    ])

    const printNotes = notes.map(item => <IndexItem key={item.index} index={item.index} header={item.header} text={item.text} />)

    return (
        <div className="note-index">
            {printNotes}
        </div>
    )
}

export default NoteIndex