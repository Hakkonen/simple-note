import React, { useState } from "react"
import NotePage from "./components/NotePage"
import IndexItem from "./components/IndexItem"
import { NoteDB } from "./data/NoteDB"
import './App.css'

function App() {
  const [ notes, setNotes ] = useState([
    
  ])

  const printNotes = NoteDB.map(item => <IndexItem key={item.index} index={item.index} header={item.header} text={item.text} />)

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

        <NotePage />
      </div>
    </div>
  )
}

export default App
