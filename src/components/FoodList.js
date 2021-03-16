import React, { Component } from 'react'
import './style.css'
import FunctionComponent from './FunctionComponent.js'

class FoodList extends Component {
    state = {
        drink: 'Coke',
        inputValue: '',
        currentNum: 0,
        student: {
            grade: 90,
            class: 'Math',
            isHonnor: false
        }

    }

    numberChangeHandler = () => {
        // use prevstate:
        this.setState((prevState) => ({
            number: prevState.number + 1
        }))
        // regular way:
        // this.setState({
        //     number: this.state.number + 1
        // })
    }

    addItem = () => {
        let field = document.getElementById('inputField')
        let value = field.value
        this.setState({
            inputValue: value
        })
        // console.log(this.state.inputValue)
    }

    gradeChangeHandler = () => {
        let newStudent = { ...this.state.student }
        newStudent.grade = newStudent.grade + 5
        this.setState((pre) => ({
            ...this.state,
            student: newStudent
        }))
    }
    // normal way
    handleAddOne = () => {
        let newNum = this.state.currentNum + 1
        this.setState({
            currentNum: newNum
        })
    }
    // use previous state
    handleMinusOne = () => {
        this.setState((prev) => ({
            currentNum: prev.currentNum - 1
        }))
    }


    render() {
        return (
            <div class='classComponent'>
                <div class='card'>
                    <h1>Class Component</h1>
                    <h2>Food List</h2>
                    <ul>
                        <li>Cheddar</li>
                        <li>Feta</li>
                        <li>Morazella</li>
                        <li>{this.state.drink}</li>
                        <li>{this.state.inputValue}</li>
                    </ul>

                    <label>Add item:</label>
                    <input id='inputField'></input>
                    <button onClick={this.addItem}>Add An Item</button>
                </div>
                <div class='card'>
                    <h1>Student Copy</h1>
                    <p>{this.state.student.grade}</p>
                    <p>{this.state.student.class}</p>
                    <p>{this.state.student.isHonnor}</p>
                    <button onClick={this.gradeChangeHandler}>Add 5 To Grade</button>
                </div>

                <div class='card'>
                    <h1>{this.state.currentNum}</h1>
                    <button onClick={this.handleAddOne}>Add 1</button>
                    <button onClick={this.handleMinusOne}>Minus 1</button>
                </div>
                <FunctionComponent
                drink = {this.state.drink}
                 />
            </div>
        )
    }
}

export default FoodList