import React, { Component } from 'react'
import '../style.css'
import Child3 from './Child3.js'
import Fruit from './Fruit.js'
import Student from './Student.js'
import inheritantContext from '../../context/inheritant-context.js'
import fruitContext from '../../context/fruit-context.js'
import studentContext from '../../context/student-context.js'

export default class Parent3 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'Huong',
            number: 30,
            color: 'Black',
            month: 'Feb',
            food: 'Rice',
            fruit: ['mango', 'banana', 'apple'],
            studentName: 'miley',
            studentId: 123456,
            yearOfGrad: 2021,
            banner: 'Parent'
        }
    }

    clickText = () => {
        this.setState({
            ...this.state,
            banner: "Mike"
        })
    }


    render() {
        return (
            <div class='classComponent'>
                <h6>Practice Prop Types</h6>
                <h1>Parent Title: {this.state.banner}</h1>
                <inheritantContext.Provider value={{
                    name: this.state.name,
                    color: this.state.color,
                    food: this.state.rice,
                }}>
                    <Child3 month={this.state.month} />

                </inheritantContext.Provider>
                <fruitContext.Provider value={{ fruit: this.state.fruit, clickText: this.clickText }}>
                    <Fruit />
                </fruitContext.Provider>

                <studentContext.Provider value={{
                    studentName: 'miley',
                    studentId: 123456,
                    yearOfGrad: 2021
                }}>
                    <Student />
                </studentContext.Provider>
            </div>
        )
    }
}
