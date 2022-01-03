import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { nanoid } from "nanoid"
import NoteList from "./components/NotesList";
import Search from "./components/Search";
import Header from "./components/Header";
import About from "./components/About";
import Footer from "./components/Footer";

const App = () =>{ 
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is my first note!",
      date: "03/01/2022"
    },
    {
      id: nanoid(),
      text: "This is my second note!",
      date: "05/01/2022"
    },
    {
      id: nanoid(),
      text: "This is my third note!",
      date: "13/01/2022"
    }
]);

const [searchText, setSearchText] = useState('');

const [darkMode, setDarkMode] = useState(false);

useEffect(() => {
  document.title = "BreadKrumbs"
}, [])

useEffect(() => {
    const savedNotes = JSON.parse(
      localStorage.getItem('krumbs-app-data')
    );

    if(savedNotes){
      setNotes(savedNotes);
    }
}, []);

useEffect(() => {
    localStorage.setItem(
        'krumbs-app-data', 
        JSON.stringify(notes)
      );
}, [notes])


const addNote = (text) =>{
  const date = new Date();
  const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
  }
  const newNotes = [...notes, newNote];
  setNotes(newNotes);
};

const deleteNote = (id) =>{
  const newNotes = notes.filter((note) => note.id !== id);
  setNotes(newNotes);
};

  return(
  <Router>
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className='container'>
        <Header handleToggleDarkMode={setDarkMode} />
        <Search handleSearchNote={setSearchText} />
        <Routes>
          <Route path='/' element={
              <NoteList 
              notes= {notes.filter((note) =>
                note.text.toLowerCase().includes(searchText)
              )} 
              handleAddNote={addNote}
              handleDeleteNote={deleteNote} 
              />
          } />
          <Route path='/about' element={<About />} />
        </Routes>
        <Footer />   
      </div>
    </div>
  </Router>
    
  );
};

export default App;

