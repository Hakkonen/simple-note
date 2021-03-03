import React, { useEffect, useState } from "react"
import ContentEditable from "react-contenteditable"

function Note(props) {
    // Removes styling from ctrl+c pasting
    function PasteAsPlainText (event) {
        event.preventDefault()

        const text = event.clipboardData.getData("text/plain")
        document.execCommand("insertHTML", false, text)
    }

    return (
        <div className="note-page">
            <ContentEditable  
                html={props.header}
                className="content-editable note-header"
                // onChange={e => setHeader(e.target.value)}  
                onPaste={PasteAsPlainText}
            />
            <ContentEditable  
                html={props.text}
                className="content-editable note-text"
                // onChange={e => setTextBody(e.target.value)}  
                onPaste={PasteAsPlainText}
            />
        </div>
    )
}

export default Note