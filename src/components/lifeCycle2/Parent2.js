import React, { Component } from 'react'
import '../style.css'

export default class Parent2 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'huong',
            age: 30,
            color: 'black'
        }
    }

    componentDidMount() {
        this.setState({
            name: this.state.name.toLocaleUpperCase()
        })
    }

    shouldComponentUpdate(nextProp, nextState) {
        if (this.state.color !== nextState.color) {
            return false
        }
        return true
    }

    changeName = () => {
        this.setState({
            name: 'guy'
        })
    }

    changeAge = () => {
        this.setState({
            age: '2'
        })
    }

    changeColor = () => {
        this.setState({
            color: 'brown'
        })
    }

    render() {
        return (
            <div class='classComponent'>
                <h6>Life Cycle Practice</h6>
                <h1>{this.state.name}</h1>
                <h1>{this.state.age}</h1>
                <h1>{this.state.color}</h1>
                <button onClick={this.changeName}>Change Name</button>
                <button onClick={this.changeAge}>Change Age</button>
                <button onClick={this.changeColor}>Change Color</button>
            </div>
        )
    }
}
