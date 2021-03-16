import React from 'react'
import './style.css'

export default function ShowStaff(props) {

    return (
        <div class='card'>
            <h2>Name: {props.name}</h2>
            <h2>Age: {props.age}</h2>
            <h2>Job: {props.job}</h2>
        </div>
    )
}
