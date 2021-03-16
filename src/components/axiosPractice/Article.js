import React from 'react'
import '../style.css'

export default function Article(props) {
    return (
        <div className='card'>
            <h2>{props.title}</h2>
            <p>{props.body}</p>
        </div>
    )
}
