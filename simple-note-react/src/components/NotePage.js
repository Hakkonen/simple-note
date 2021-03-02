import React, { useEffect, useState } from "react"
import Note from "./Note"

function NotePage() {
    const [ count, setCount ] = useState(0)
    const [ colour, setColour ] = useState("")

    // useEffect(() => {
        
    // }, [])

    return (
        <div className="note-page">
            <Note />
        </div>
    )
}

export default NotePage