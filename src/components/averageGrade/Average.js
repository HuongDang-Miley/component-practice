import React, { Component } from 'react'
import './style.css'

export default class Average extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'Huong',
            grades: [10, 8, 9],
            average: 8

        }
        this.averageRef = React.createRef()
    }

    handleSubmit = () => {
        let newGrade = this.averageRef.current.value
        let newArray = [...this.state.grades, newGrade]
        let newAverage = newArray.reduce((acc, item) => acc += Number(item)) / newArray.length
        this.setState({
            ...this.state,
            grades: newArray,
            average: newAverage
        })
        this.averageRef.current.value = ''
    }

    render() {
        return (
            <div className='classComponent'>
                <h1>Student Name: {this.state.name}</h1>
                <label>Enter New Grade</label>
                <input ref={this.averageRef}></input>
                <button onClick={this.handleSubmit}>Submit New Grade</button>
                <h2>Average Grade: {this.state.average}</h2>
                <ul>{this.state.grades.map(item => (<li>{item}</li>))}</ul>
            </div>
        )
    }
}
