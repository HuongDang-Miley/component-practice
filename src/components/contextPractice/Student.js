import React from 'react'
import {useContext} from 'react'
import studentContext from '../../context/student-context.js'

export default function Student() {
    const { studentName, studentId, yearOfGrad } = useContext(studentContext)
    return (
        <div class='card'>
            <h6>This fucntion component use: const [ name, id, year ] = useContext(studentContext)</h6>
            <h2>Student name is: {studentName}</h2>
            <h2>Student id is: {studentId}</h2>
            <h2>Year of grad is: {yearOfGrad}</h2>
        </div>
    )
}
