import React from 'react'
import PropTypes from 'prop-types'
import inheritantContext from '../../context/inheritant-context.js'
import '../style.css'
import GrandChild3 from './GrandChild3.js'

export default function Child3(props) {
    return (
        <inheritantContext.Consumer>
            {(context) => {
                return (
                    <div class='card'>
                        <h6>This is Child function Component using context.Consumer wrapper</h6>
                        <h2>My name is:{context.name}</h2>
                        <GrandChild3 />
                    </div>
                )
            }}
        </inheritantContext.Consumer>

    )
}

Child3.propTypes = {
    number: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
}