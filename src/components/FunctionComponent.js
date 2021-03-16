import React from 'react'
import './style.css'

const FunctionComponent = (props) => {
    console.log(props)
    return (
        <div class='functionComponent'>
            <h1>
                Function Componnent</h1>
        <div class='card'>
            <h1>Title</h1>
            <h3>{props.drink}</h3>
        </div>

        </div>
    )
}

export default FunctionComponent 