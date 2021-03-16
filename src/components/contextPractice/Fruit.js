import React, { Component } from 'react'
import fruitContext from '../../context/fruit-context.js'

export default class Fruit extends Component {
    // static can only use for Class Component
    static contextType = fruitContext
    //  const context = useContext(fruitContext)

    render() {
        return (
            <div class='card'>
                <h6>This class component use: static contextType = fruitContext</h6>
                <h3 onClick={this.context.clickText}>Click Here To Change Title of Parent Component</h3>
                {this.context.fruit.map(item => {
                    return (
                        <ul>
                            <li>{item}</li>
                        </ul>
                    )
                })}
            </div>
        )
    }
}
