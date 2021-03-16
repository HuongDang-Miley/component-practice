import React, { Component } from 'react'
import './style.css'
import ShowData from './ShowData.js'
import ShowStaff from './ShowStaff.js'

export default class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tempExercise: '',
            tempCal: '',
            data: [
                {
                    id: 1,
                    exercise: 'squat',
                    cal: 140,
                },
                {
                    id: 2,
                    exercise: 'hiit',
                    cal: 100,
                },
            ],

            staff: [
                {
                    id: 1,
                    name: 'Huong',
                    age: 30,
                    job: 'UI/UX designer'
                },
                {
                    id: 2,
                    name: 'Sanki',
                    age: 35,
                    job: 'Coder'
                },
                {
                    id: 3,
                    name: 'Miley',
                    age: 1,
                    job: 'Manager'
                },
            ]
        }

        this.nameRef = React.createRef();
        this.ageRef = React.createRef();
        this.jobRef = React.createRef();
    }

    handleExerciseChange = (e) => {
    this.setState({
        ...this.state,
         tempExercise: e.target.value
    })
    }


    handleCalChange = (e) => {
    this.setState({
        ...this.state,
        tempCal: e.target.value
    })
    }

    handleSubmitBtn = () => {
        // Copy current array of exercise and calory, then push new object into it
        let newArray = [
            ...this.state.data,
            {
                exercise: this.state.tempExercise,
                cal: this.state.tempCal
            }]

        // Update the State
        this.setState({
            ...this.state,
            data: newArray,
        })
        // Clear input field after submit
        document.getElementById('exerciseInput').value = ''
        document.getElementById('calInput').value = ''
    }

    handleSubmitEmployee = () => {
        // Copy current array of exercise and calory, then push new object into it
        let newStaff = {
            // if use name ref, we can eliminate the event.target.value and onchange function
            name: this.nameRef.current.value,
            age: this.ageRef.current.value,
            job: this.jobRef.current.value,

        }
        let newArray = [...this.state.staff, newStaff]

        // Update the State
        this.setState({
            ...this.state,
            staff: newArray,
        })

        // Clear Input Value
        this.nameRef.current.value = ''
        this.ageRef.current.value = ''
        this.jobRef.current.value = ''

        console.log('click')

    }

    render() {
        return (
            <div class='classComponent'>
                <h6>Exercise App Quiz 2 using event.target.value</h6>
                <div>
                    <label>Exercise</label>
                    <input ref={this.exerciseRef} id='exerciseInput' onChange={this.handleExerciseChange}></input>
                    <label>Calories</label>
                    <input ref={this.calRef} id='calInput' onChange={this.handleCalChange}></input>
                    <button onClick={this.handleSubmitBtn}>Submit</button>
                </div>
                {this.state.data.map(item => {
                    return (
                        <ShowData exercise={item.exercise} cal={item.cal} key={item.id} />
                    )
                })}

                <div>
                    <h6>Display Staff Members Useing Ref</h6>
                    <label>Name</label>
                    <input ref={this.nameRef} id='nameInput'></input>
                    <label>Age</label>
                    <input ref={this.ageRef} id='ageInput'></input>
                    <label>Job</label>
                    <input ref={this.jobRef} id='jobInput'></input>
                    <button onClick={this.handleSubmitEmployee}>Submit</button>
                </div>
                {this.state.staff.map(item => {
                    return (
                        <ShowStaff name={item.name} age={item.age} job={item.job} key={item.id}/>
                    )
                })}
            </div>
        )
    }
}
