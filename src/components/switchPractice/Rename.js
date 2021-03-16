import React, { Component } from 'react'
import '../style.css'

export default class Rename extends Component {
    render() {
        // console.log('Rename', this.props)
        let {name, nameRef, handleChangeName} = this.props
        return (
            <div className='card'>
                <h3>{name}</h3>
                <input ref={nameRef} onChange={console.log("nameRef", nameRef.current.value)}></input>
                <button onClick={handleChangeName}>Change Name</button>
            </div>
        )
    }
}
