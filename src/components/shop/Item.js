import React from 'react'
import './style.css'

export default function Item(props) {
    return (
        <div className='card'>
            <h2>{props.name}</h2>
            <h2>${props.price}</h2>
            <img alt='' src={props.img}></img>
        </div>
    )
}
