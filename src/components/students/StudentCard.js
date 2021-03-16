import React from 'react'
import '../style.css'

export default function StudentCard(props) {
    return (
        <div class='card'>
            <button class='delete-button' onClick={props.deleteStudent}>X</button>
            <h2>{props.name}</h2>
            <h2>{props.grade}</h2>
        </div>
    )
}
