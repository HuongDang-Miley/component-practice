import React, { Component } from 'react'
import './style.css'
import restaurantContext from './context'
import Component1 from './Component1'


export default class App2 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            orderNumber: 12,
            orderAmount: 150,
            orderTime: "10:30pm",
            restaurantName: 'Thai Village',
            isClose: true
        }
    }

    handleClose = () => {
        this.setState((prevState) => {
            return {
                ...this.state,
                isClose: !prevState.isClose
            }
        })
    }

    render() {
        return (
            <div className='classComponent'>
                <button className='btn' onClick={this.handleClose}>X</button>
                {this.state.isClose === true
                    ? (<restaurantContext.Provider value={{ state: this.state, handleClose: this.handleClose }}>
                        <Component1 />
                    </restaurantContext.Provider>)
                    : null
                }


            </div>
        )
    }
}
