import React from 'react'
import '../style.css'

export default function TestChild(props) {
    // console.log(props)
    return (
        <div id={props.id} class='card'>
            <h1>{props.id}</h1>
            <button onClick={props.handleButton}>Click</button>
        </div>
    )
}
