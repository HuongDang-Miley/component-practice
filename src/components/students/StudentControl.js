import React, { Component } from 'react'
import '../style.css'

export default class StudentControl extends Component {

    render() {
        // console.log(this.props)
        return (
            <div class='card'>
                <h1>Update Grade</h1>
                <p>Select Student:</p>
                <select onChange={this.props.handleSubmitGrade}>
                    <option>...</option>
                    {this.props.students.map(item => {
                        return <option value={item.id} >{item.name}</option>
                    })}
                </select>
                <p>Enter New Grade</p>
                <input onChange={this.props.handleInputChange}></input>
                <button onClick={this.props.handleSubmitGrade()}>Update Grade</button>
            </div>
        )
    }
}
