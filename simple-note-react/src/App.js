import './App.css'
import NotePage from "./components/NotePage"
import NavBar from "./components/NavBar"
import NoteIndex from './components/NoteIndex'

function App() {
  return (
    <div className="app-container">
      <NavBar />

      <div className="note-container">
        <NoteIndex />
        <NotePage />
      </div>
    </div>
  )
}

export default App
