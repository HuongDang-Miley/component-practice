import React, { Component } from 'react'


export default class Child extends Component {
    constructor(props){
        super(props);
        this.state = {
            degree: "Professional"
        }
    }

    // Run when the Child Component is unmounted
    componentDidUnmount(){
        // console.log('Back From the Bink')
    }

    // Very rarly use / use cases are scared but they do exsit
    static getDerivedStateFromProp(props, state) {
        // console.log('props', props)
        // console.log('state', state)
        return {
            ...state,
            disnosaur: props.dino,
        }
    }
    // Run when the Child Component is unmounted
    componentWillUnmount(){
        // console.log('Goodd By Cruel World')
    }

    render() {
        return (
            <div class='card'>
                <h1>Hello World!</h1>
                <h1>My Fav Dino: {this.state.disnosaur}</h1>
            </div>
        )
    }
}
