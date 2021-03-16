import React, {useState} from 'react'

export default function GameCard(props) {
    const [gamer, setGamer] = useState({
        name: 'huong',
        level: 'intermediate'
    })
    return (
        <div>
            <h2>Gamer Information</h2>
            <p>Name: {gamer.name} </p>
            <p>Name: {gamer.level} </p>
            <br/>
            <h3>{props.title}</h3>
            <h3>{props.publisher}</h3>
            <h3>${props.price}</h3>
            <br/>

        </div>
    )
}
