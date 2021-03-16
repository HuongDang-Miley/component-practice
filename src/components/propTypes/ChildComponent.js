import React from 'react'
import PropTypes from 'prop-types'
import '../style.css'

export default function ChildComponent(props) {
    return (
        <div class='card'>
            <h1>Hello</h1>
            <p onClikc={props.changenName}>{props.name}</p>
            <p>Brirthday is {props.month}</p>
        </div>
    )    
}

ChildComponent.propTypes = {
    name: PropTypes.string,
    month: PropTypes.string.isRequired,
    changenName: PropTypes.func.isRequired
}
