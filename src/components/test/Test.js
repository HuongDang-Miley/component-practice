import React, { Component } from 'react'
import '../style.css'
import TestChild from './TestChild.js'

export default class Test extends Component {
    state = {
        arr: [
            { name: 'idk', id: 1 },
            { name: 'g3', id: 2 },
            { name: 'cat', id: 3 },
        ]
    }

    handleButton = (event) => {
        // console.log(event.target)
        // console.log('click')
    }

    render() {
        return (
            <div class='classComponent'>
                {this.state.arr.map(item => (
                <TestChild
                id={item.id}
                key={item.id}
                handleButton= {this.handleButton}
                 />
                ))}
            </div>
        )
    }
}

