import React from 'react'
import './style.css'

export default function InputAndButton(props) {
    // console.log(props)
    return (
        <div class='card'>
            <h2>Exercise: {props.exercise}</h2>
            <h2>Calories: {props.cal}</h2>
        </div>
    )
}
