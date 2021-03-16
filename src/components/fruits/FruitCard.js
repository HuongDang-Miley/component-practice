import React from 'react'
import './style.css'

export default function FruitCard(props) {
    return (
        <div class = 'card' onClick={()=>props.changeName(props.img)} >
            <span>{props.name}</span>
            <img  alt='' src={props.img}></img>
        </div>
    )
}
