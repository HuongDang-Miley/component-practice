import React from 'react'

export default function GrandChild(props) {
    // console.log(props.state.link)
    return (
        <div class='functionComponent'>
            <div class='card'>
            <h6>This is GrandChild Component</h6>
                <h2>{props.state.name}</h2>
                <img alt ='' src={props.state.link} width='150'></img>
            </div>
        </div>
    )
}
