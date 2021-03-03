import React, { useEffect, useState } from "react"
import ContentEditable from "react-contenteditable"

function Note() {
    const [ header, setHeader ] = useState("Header")
    const [ textBody, setTextBody ] = useState("Text body")

    // Redundant
    useEffect(() => {
        console.log(header)
    }, [header])

    // Removes styling from ctrl+c pasting
    function PasteAsPlainText (event) {
        event.preventDefault()

        const text = event.clipboardData.getData("text/plain")
        document.execCommand("insertHTML", false, text)
    }

    return (
        <div>
            <ContentEditable  
                html={header}
                className="content-editable note-header"
                onChange={e => setHeader(e.target.value)}  
                onPaste={PasteAsPlainText}
            />
            <ContentEditable  
                html={textBody}
                className="content-editable note-text"
                onChange={e => setTextBody(e.target.value)}  
                onPaste={PasteAsPlainText}
            />
        </div>
    )
}

export default Note