import React, { useEffect, useState } from 'react'
import {MdDeleteForever} from 'react-icons/md'
import '../../styles/Note.css'


const Note = ({note, deleteNote,updateText}) => {
  
  const [text, setText] = useState(note.text);


  const handleTextChange = (event) => {
    setText(event.target.value);
    updateText(event.target.value, note.id);
  };

  useEffect(() => {
    setText(note.text);
  }, [note.text]);

  const formatDate = (value) => {
    if (!value) return "";

    const date = new Date(value);
    const monthNames = [
      "Jan",
      "Feb",
      "March",
      "April",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ];

    let hrs = date.getHours();
    let amPm = hrs >= 12 ? "PM" : "AM";
    hrs = hrs ? hrs : "12";
    hrs = hrs > 12 ? (hrs = Math.abs(12 - hrs)) : hrs;

    let min = date.getMinutes();
    min = min < 10 ? "0" + min : min;

    let day = date.getDate();
    const month = monthNames[date.getMonth()];

    return `${hrs}:${min} ${amPm} ${day} ${month}`;
  };


	return (
		<div className='note' style={{backgroundColor : note.color}}>
      <textarea
        className="textarea"
        value={text}
        onChange={handleTextChange}
      />
			<div className='note-footer'>
				<small>{formatDate(note.time)}</small>
				<MdDeleteForever
          className='delete-icon'
					size='1.3em'
          onClick={() =>  deleteNote(note.id)}
				/>
			</div>
		</div>
	);
};

export default Note;
