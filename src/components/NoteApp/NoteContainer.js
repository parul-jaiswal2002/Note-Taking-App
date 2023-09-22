import React from 'react'
import Note from './Note'
import '../../styles/NoteContainer.css'

export default function NoteContainer({notes, deleteNote, updateText}) {
	const reverseArray = (arr) => {
		const array = []
		for(let i=arr.length-1; i>=0; i--){
			array.push(arr[i])
		}
		return array
	}
	let notes1 = reverseArray(notes)
  return (
	<div className='notelist'>
		{notes1.length>0 ? notes1.map((note, index) => (
            <Note key={index} note={note} deleteNote={deleteNote} updateText={updateText}/>
		)) : <h3>Click on the plus icon to add note</h3> }
	</div>
  )
}
