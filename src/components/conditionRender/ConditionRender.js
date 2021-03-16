import React, { Component } from 'react'

export default class ConditionRender extends Component {
    state = {
        number: 0,
    }

    handleAddOne = () => {
        this.setState((pre) => ({
            number: pre.number + 1
        }))
    }

    render() {
        return (
            <div class='classComponent'>
                {this.state.number < 5
                    ? null
                    : (<h1>This Is Some Text</h1>)}
                <h1>{this.state.number}</h1>
                <button onClick={this.handleAddOne}>Add 1</button>
            </div>
        )
    }
}
