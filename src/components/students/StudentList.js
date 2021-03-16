import React, { Component } from 'react'
import StudentCard from './StudentCard.js'
import StudentControl from './StudentControl.js'

export default class StudentList extends Component {
    state = {
        students: [
            { name: 'Huong', grade: 10, id: 1 },
            { name: 'Linh', grade: 8, id: 2 },
            { name: 'Guy', grade: 6, id: 3 },
        ],
        newGrade: 0,
        selectedStudent: ''
    }

    handleInputChange = (event) => {
        this.setState({
            ...this.state,
            newGrade: event.target.value
        })
    }

    handleSelectStudent = (event) => {
        this.setState({
            ...this.state,
            selectedStudent: event.target.name
        })
    }

    handleSubmitGrade = async (targetId) => {
        // console.log('targetId', targetId)
        let newArr = []
        this.state.students.map(item => {
            if (item.id === targetId) {
                newArr.push({
                    name: item.name,
                    grade: this.state.newGrade,
                    id: item.id
                })
            } else {
                newArr.push(item)
            }
        return newArr
        })

        // console.log('newGrade', this.state.newGrade)
        // console.log('newArr', newArr)

        // await this.setState({
        //     ...this.state,
        //     students: newArr
        // }, () => {
        //     console.log(this.state)
        // })


    }

    deleteStudent = (targetId) => {
        // console.log('delete targetId', targetId)
        const newArr = this.state.students.filter(item=>{
            return item.id !== parseInt(targetId)
        })

        // console.log('newArr', newArr)

        this.setState({
            ...this.state,
            students: newArr
        })
    }

    render() {
        return (
            <div class='classComponent'>
                <StudentControl
                    {...this.state}
                    handleInputChange={this.handleInputChange}
                    handleSubmitGrade={this.handleSubmitGrade}
                    students={this.state.students}
                />
                {this.state.students.map(item => {
                    return <StudentCard
                        name={item.name}
                        grade={item.grade}
                        key={item.id}
                        id={item.id}
                        deleteStudent={this.deleteStudent}
                    />
                })}
            </div>
        )
    }
}
