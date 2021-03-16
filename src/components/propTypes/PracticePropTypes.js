import React, { Component } from 'react'
import ChildComponent from './ChildComponent.js'

export default class PracticePropTypes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 30,
            month: 'February'
        }
    }

    changenName =()=>{
        this.setState({
            ...this.state,
            name: 'Mike'
        })
    }

    render() {
        return (
            <div class='functionComponent'>
                <h6>Practice PropTypes</h6>
                <h1>Hello</h1>
                 <ChildComponent name={this.state.name} changenName={this.changenName} />
                <ChildComponent name={this.state.name} changenName={this.changenName} month={this.state.month}/>
                
            </div>
        )
    }
}
