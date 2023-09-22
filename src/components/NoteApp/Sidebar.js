import React, { useState } from 'react'
import '../../styles/Sidebar.css'

export default function Sidebar({addNote}) {
    const colors = ['#fe9b72', '#fec971', '#00d4fe', '#b693fd', '#e4ee91']
    const [listOpen, setListOpen] = useState(false)
  return (
    <div className='sidebar'>
        <div className='plus-icon'><i className="fa-solid fa-circle-plus" onClick={() => setListOpen(!listOpen)}></i></div>
        <div>
        <ul className={`sidebar-list ${listOpen ? 'sidebar-list-active' : ''}`}>
            {colors.map((item, index) => (
                <li key={index} className='sidebar-list-color' style={{backgroundColor: item}}
                    onClick={() => addNote(item)}
                >
                </li>
            ))}
        </ul>
        </div>
    </div>
  )
}
