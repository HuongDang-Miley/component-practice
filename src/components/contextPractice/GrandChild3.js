import React from 'react'
import inheritantContext from '../../context/inheritant-context.js'
import '../style.css'

export default function GrandChild3(props) {
    return (
        <inheritantContext.Consumer>
            {(context) => {
                return (
                    <div class='child'>
                        <h6>This is GrandChild function component using context.Consumer</h6>
                        <h3>My hair color is: {context.color}</h3>
                    </div>
                )
            }}
        </inheritantContext.Consumer>
    )
}
