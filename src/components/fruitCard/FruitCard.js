import React, { Component } from 'react'
import './style.css'

export default class FruitCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fruit: 'mango'
        }
    }

    handleChangeName = (e) => {
        this.setState({
            fruit: e.target.value
        })
    }

    render() {
        return (
            <div className='classComponent'>
                <lable>Enter New Name</lable>
                <input onChange={this.handleChangeName}></input>
                <h1>{this.state.fruit}</h1>
            </div>
        )
    }
}
