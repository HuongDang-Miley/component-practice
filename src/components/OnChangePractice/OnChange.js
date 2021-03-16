import React, { Component } from 'react'
import '../style.css'
export default class OnChange extends Component {
    state = {
        name: '',
    }

    nameChangeHandle = (event) => {
        this.setState({
            name: event.target.value,
        })
    }

    render() {
        return (
            <div class='classComponent'>
                <p>Text Length:</p>
                <h2>{this.state.name.length}</h2>
                <input onChange={this.nameChangeHandle} id='inputField2'></input>
            </div>
        )
    }
}
