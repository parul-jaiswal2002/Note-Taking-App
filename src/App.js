import { useState,useEffect } from 'react';
import './App.css'
import { nanoid } from 'nanoid'
import Header from './components/NoteApp/Header';
import NoteContainer from './components/NoteApp/NoteContainer';
import Sidebar from './components/NoteApp/Sidebar';


const App = () => {
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes-app-data')) || []);

  const addNote = (color) => {
      // let tempNotes = notes //by this we are just changing the name of array not copying
      let tempNotes = [...notes] // if we have to make a copy of an array
      tempNotes.push({
        id: nanoid(),
        text :'',
        time : Date.now(),
        color
      })
      setNotes(tempNotes)
  }
  const deleteNote = (id) => {
    const tempNotes = [...notes];

    const index = tempNotes.findIndex((item) => item.id === id);
    if (index < 0) return;

    tempNotes.splice(index, 1);
    setNotes(tempNotes);
  }


  useEffect(() => {
    localStorage.setItem('notes-app-data', JSON.stringify(notes))
  }, [notes])

  const updateText = (text, id) => {
    const tempNotes = [...notes];

    const index = tempNotes.findIndex((item) => item.id === id);
    if (index < 0) return;

    tempNotes[index].text = text;
    setNotes(tempNotes);
  };
	return (
    <>
        <div className='whole-container'>
          <Sidebar addNote={addNote}/>
          <div className='container'>
             <Header/>
             <NoteContainer notes={notes} deleteNote={deleteNote} updateText={updateText}/>
          </div>
        </div>
    </>
	);
};

export default App;