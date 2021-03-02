import React, { useEffect, useState } from "react"
import ContentEditable from "react-contenteditable"

function Note() {
    const [ header, setHeader ] = useState("Header")
    const [ textBody, setTextBody ] = useState("Text body")

    useEffect(() => {
        console.log(header)
    }, [header])

    function PasteAsPlainText (event) {
        event.preventDefault()

        const text = event.clipboardData.getData("text/plain")
        document.execCommand("insertHTML", false, text)
    }

    return (
        // <span>
        //     <input 
        //         className="note-header"
        //         value={header}
        //         onChange={e => setHeader(e.target.value)}
        //     />
        //     <input 
        //             className="note-text"
        //             value={textBody}
        //             onChange={e => setTextBody(e.target.value)}
        //         />
        // </span>
        <div>
            <ContentEditable  
                html={header}
                className="content-editable note-header"
                onChange={e => setHeader(e.target.value)}  

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