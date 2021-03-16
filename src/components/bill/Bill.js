import React, { Component } from 'react'
import '../style.css'
import Child from './Child.js'
import billContext from '../../context/bill-context.js'

export default class Bill extends Component {
    constructor(props) {
        super(props)
        this.state = {
            billTitle: 'internet',
            price: 55
        }
    }
    render() {
        return (
            <div class='classComponent'>
                <billContext.Provider value={{ billTitle: this.state.billTitle, price: this.state.price }}>
                    <Child />
                </billContext.Provider>
            </div>
        )
    }
}
