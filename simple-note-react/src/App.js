import React, { useEffect, useState } from "react"
import IndexItem from "./components/IndexItem"
import ContentEditable from "react-contenteditable"
import './App.css'

function App() {
  const [ notes, setNotes ] = useState([
    {
      index: 0,
      header: "World, hello!",
      text: "Hello world"
    },
    {
        index: 1,
        header: "Hello there guvna what's it about",
        text: "Test note"
    },
    {
        index: 2,
        header: "My note",
        text: "Pop a testie"
    }
  ])
  const [ noteID, setNoteID ] = useState(0)
  const [ header, setHeader ] = useState("")
  const [ text, setText ] = useState("")

  // Opens object as note
  function OpenNote(e) {
    // Get ID
    const selectID = e.target.id
    // Load ID object to note page
    let selectedNote
    for(const item of notes) {
      if(item.index == selectID) {
        selectedNote = item
      }
    }
    console.log(selectedNote)
    setNoteID(() => selectedNote.index)
    setHeader(() => selectedNote.header)
    setText(() => selectedNote.text)
  }

  // Removes styling from ctrl+c pasting
  function PasteAsPlainText (event) {
    event.preventDefault()

    const text = event.clipboardData.getData("text/plain")
    document.execCommand("insertHTML", false, text)
  }

  // Populates note index
  // const printNotes = notes.map(item => <IndexItem key={item.index} index={item.index} header={item.header} text={item.text} OpenNote={OpenNote} />)

  let printNotes = []
  for(let i = 0; i < notes.length; i++) {
    printNotes.push(
      <IndexItem
        key={notes[i].index}
        index={notes[i].index} 
        header={notes[i].header} 
        text={notes[i].text} 
        OpenNote={OpenNote}
      />
    )
  }

  function changeHeader(e) {
    let newNotes = notes.map(note => {
      if(note.index == noteID) {
        note.header = e.target.value
        return note
      }
      return note
    })
    setNotes(() => newNotes)
  }

  function changeText(e) {
    let newNotes = notes.map(note => {
      if(note.index == noteID) {
        note.text = e.target.value
        return note
      }
      return note
    })
    setNotes(() => newNotes)
  }

  return (
    <div className="app-container">

      <div className="navbar">
        <div className="navbar-logo">
          <p>SimpleNote</p>
        </div>
      </div>

      <div className="note-container">
        <div className="note-index">
          {printNotes}
        </div>

        <div className="note-page">
          <ContentEditable  
            html={notes[noteID].header}
            className="content-editable note-header"
            // onChange={e => setHeader(e.target.value)}
            onChange={changeHeader}
            onPaste={PasteAsPlainText}
          />
          <ContentEditable  
            html={notes[noteID].text}
            className="content-editable note-text"
            onChange={changeText}
            onPaste={PasteAsPlainText}
          />
        </div>
      </div>
    </div>
  )
}

export default App
