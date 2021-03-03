import React, { useState } from "react"
import NotePage from "./components/NotePage"
import IndexItem from "./components/IndexItem"
import './App.css'

function App() {
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
    },
    {
      index: 4,
      header: "Lorem ipsum",
      text: "Test note"
    },
    {
      index: 5,
      header: "Lorem ipsum",
      text: "Test note"
    },
    {
      index: 6,
      header: "Lorem ipsum",
      text: "Test note"
    },
    {
      index: 7,
      header: "Lorem ipsum",
      text: "Test note"
    },
  ])

  const printNotes = notes.map(item => <IndexItem key={item.index} index={item.index} header={item.header} text={item.text} />)

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
