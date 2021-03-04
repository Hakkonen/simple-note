import React, { useEffect, useState } from "react"
import IndexItem from "./components/IndexItem"
import ContentEditable from "react-contenteditable"
import './App.css'

function App() {
  const [ notes, setNotes ] = useState([])
  const [ noteID, setNoteID ] = useState(0)

  // Opens object as note
  function OpenNote(e) {
    console.log("event: ", e.target)
    // Get ID
    const selectID = e.target.id
    console.log("selectedID: ", selectID)
    // Load ID object to note page
    let selectedNote
    for(const item of notes) {
      if(item.index == selectID) {
        selectedNote = item
        console.log("selected: ", selectedNote)
      }
    }
    setNoteID(selectedNote.index)
    console.log("noteID: ", noteID)
  }

  // Creates new note
  function createNote() {
    // Get index count
    let newNoteIndex = 0
    for(let i = 0; i < notes.length; i++) {
      if(notes[i].index == newNoteIndex) {
        newNoteIndex = notes[i].index + 1
      }
    }
    // Get date
    let d = new Date()
    let noteDate = `${d.getFullYear()}/${d.getMonth()}/${d.getDate()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`
    setNoteID(newNoteIndex)
    setNotes([...notes, {
      index: newNoteIndex,
      header: "Header",
      text: "Text body",
      date: noteDate
    }])
    console.log(notes)
  }

  // Deletes note
  function deleteNote() {
    // Map all notes but active note into state
    let newNotes = notes.filter(note => note.index !== noteID)
    setNotes(newNotes)

    // Remaps note ID's
    for(let i = noteID; i < notes.length; i++) {
      notes[i].index -= 1
    }

    // Set noteID to next note
    let newIndex = 0
    for(let i = 0; i < (notes.length - 1); i++) {
      newIndex += 1
    }
    setNoteID(newIndex)
  }

  // Removes styling from ctrl+c pasting
  function PasteAsPlainText (event) {
    event.preventDefault()

    const text = event.clipboardData.getData("text/plain")
    document.execCommand("insertHTML", false, text)
  }

  // Removes & markup from spaces
  const trimSpaces = (string) => {
    return string
      .replace(/&nbsp;/g, ' ')
      .replace(/&amp;/g, '&')
      .replace(/&gt;/g, '>')
      .replace(/&lt;/g, '<')
  }

  // Populates note index
  let printNotes = []
  for(let i = 0; i < notes.length; i++) {
    printNotes.push(
      <IndexItem
        key={notes[i].index}
        index={notes[i].index} 
        header={notes[i].header} 
        text={notes[i].text} 
        date={notes[i].date}
        OpenNote={OpenNote}
      />
    )
  }

  // Updates state for selected header in object
  function changeHeader(e) {
    let newNotes = notes.map(note => {
      if(note.index == noteID) {
        note.header = trimSpaces(e.target.value)
        return note
      }
      return note
    })
    setNotes(() => newNotes)
  }

  // Updates state for selected text body in object
  function changeText(e) {
    let newNotes = notes.map(note => {
      if(note.index == noteID) {
        note.text = trimSpaces(e.target.value)
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
        <div className="new-note">
          <span
            onClick={createNote}
          >
            {/* New note */}
            <p>+</p>
          </span>
        </div>
      </div>

      <div className="note-container">
        <div className="note-index">
          {/* Populates index */}
          {printNotes}
        </div>

        <div className="note-page">
          {/* Note editing function */}
          <ContentEditable  
            html={notes[noteID] ? notes[noteID].header : null}
            className="content-editable note-header"
            onChange={changeHeader}
            onPaste={PasteAsPlainText}
          />
          <ContentEditable  
            html={notes[noteID] ? notes[noteID].text : null}
            className="content-editable note-text"
            onChange={changeText}
            onPaste={PasteAsPlainText}
          />
          <span 
            className="note-delete"
            onClick={deleteNote}
          >
            <p>
              -
            </p>
          </span>
        </div>
      </div>
    </div>
  )
}

export default App
