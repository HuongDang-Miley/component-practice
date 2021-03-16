import React from 'react'
import '../style.css'

export default function CounterController(props) {
    // console.log(props)
    return (
        <div className='functionComponent'>
            <h6>This is CounterController Component</h6>
            <button onClick={props.add}>+</button>
            <button onClick={props.minus}>-</button>
        </div>
    )
}
