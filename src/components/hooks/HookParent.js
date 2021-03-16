import React, { useState, useRef } from 'react'
import '../style.css'
import GameCard from './GameCard'

export default function HookParent() {
    // =====================================================================================================
    // =====================================================================================================
    // =====================================================================================================

    // // Declaring State with useState without destructuring
    // const gameState = useState({
    //     title: 'Mario',
    //     publisher: 'Nintendo',
    //     price: 40
    // })


    // const changeNameHandler = () => {
    //     // set state return array
    //     gameState[1]({
    //         title: 'Sim',
    //         // publisher: 'The Sims Studio',
    //         price: 100
    //     })
    // }

    // =====================================================================================================
    // =====================================================================================================
    // =====================================================================================================
    // using useState with destructuring when start state is an object

    const [gameState, setGameState] = useState({
        title: 'Mario',
        publisher: 'Nintendo',
        price: 40
    })


    // =====================================================================================================
    // using useState with destructuring when start state is a single value
    const [title, setTitle] = useState('Mario')
    const [publisher, setPublisher] = useState('Nintendo')
    const [price, setPrice] = useState(40)


    // Ref Definition
    const titleRef = useRef()
    const publisherRef = useRef()
    const priceRef = useRef()


    // const handleChangeTitle = (e) => {
    // setGameState({
    //     title: e.target.value,
    //     publisher: 'The Sims Studio',
    //     price: 100,
    // })
    // }


    // const changeNameHandler = (e) => {
    //     setGameState({
    //         title: 'Sim',
    //         publisher: 'The Sims Studio',
    //         price: 100,
    //     })
    // }


    const updateGame = () => {
        setTitle(titleRef.current.value) //=> similar to setTitle(e.target.value) but does not require onchange()
        setPublisher(publisherRef.current.value)
        setPrice(priceRef.current.value)
    }

    return (
        <div className='classComponent'>
            <h6>useState, useRef pratice</h6>

            <GameCard
                title={title}
                publisher={publisher}
                price={price}
            />

            <lable htmlFor='title-field'>Title</lable>
            <input id='title-field' defaultValue={title} ref={titleRef}></input>
            {/* older way */}
            {/* <input value={title} onChange={(e) => setTitle(e.target.value)}></input> */}

            <lable>Publisher</lable>
            <input defaultValue={publisher} ref={publisherRef}></input>
            

            <lable>Price</lable>
            <input defaultValue={price} ref={priceRef}></input>
            

            {/* <h3>{gameState.title}</h3>
            <h3>{gameState.publisher}</h3>
            <h3>${gameState.price}</h3> */}

            {/* <h3>{gameState[0].title}</h3>
            <h3>{gameState[0].publisher}</h3>
            <h3>${gameState[0].price}</h3> */}

            {/* <button onClick={changeNameHandler}>Change Game</button> */}

            <button onClick={updateGame}>Update Game</button>
        </div>
    )
}


