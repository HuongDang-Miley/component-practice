import { Games } from '@material-ui/icons'
import React, { useState, useRef, useReducer } from 'react'
import '../style.css'
import GameCard from './GameCard'
import InputControl from './InputControl'
import AddGame from './AddGame'
import AddGameHtoo from './AddGameHtoo'

// =====================================================================================================
// =====================================================================================================
// REDUCER definition:
// Action is an object that can hold inforamtion and will tell you which operation to execute
const gameReducer = (gameArr, action) => {
    switch (action.type) {
        case "SET":
            return action.Games
        default:
            console.log("We shouldn't arrive here")
    }
}


const dateReducer = (dateState, action) => {
    switch (action.type) {
        case 'SET':
            return action.newDate
        default:
            console.log("We shouldn't arrive here")
    }
}

export default function HookParent() {

    // =====================================================================================================
    // =====================================================================================================
    // =====================================================================================================

    const [dateState, stateDispatch] = useReducer(dateReducer, ['march 17 2021'])

    const manipulateDate = (event) => {
        stateDispatch({ type: "SET", newDate: event.target.value })
    }

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

    const [gameState, setGameState] = useState([
        {
            id: 1,
            title: 'Mario',
            publisher: 'Nintendo',
            price: 40
        },
        {
            id: 2,
            title: 'Sim',
            publisher: 'The Sims',
            price: 50
        },
        {
            id: 3,
            title: 'Alo',
            publisher: 'yea',
            price: 40
        },
    ])


    // =====================================================================================================
    // using useState with destructuring when start state is a single value
    const [title, setTitle] = useState('Mario')
    const [publisher, setPublisher] = useState('Nintendo')
    const [price, setPrice] = useState(40)
    const [showCard, setShowCard] = useState(false)

    // Ref Definition
    const titleRef = useRef()
    const publisherRef = useRef()
    const priceRef = useRef()

    // const addTitleRef = useRef()
    // const addPublisherRef = useRef()
    // const addPriceRef = useRef()




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


    const appendGameHandler = (title) => {

        // let [title, publisher, price ] = refArr
        console.log('clicked', title.target)
        // let newGame = {
        //     title: title.current.value,
        //     publisher: publisher.current.value,
        //     price: price.current.value,
        // }

        // setGameState((preState) => {
        //     return [newGame, ...preState]
        // })
    }


    const updateGame = () => {
        setTitle(titleRef.current.value) //=> similar to setTitle(e.target.value) but does not require onchange()
        setPublisher(publisherRef.current.value)
        setPrice(priceRef.current.value)
    }


    const deleteGame = (targetGame) => {
        const newArr = gameState.filter(item => item.title !== targetGame)
        setGameState(newArr)

    }

    const testFunction = () => {
        console.log('lciked')
    }

    const handleEditGameCard = (targetId, refArr) => {
        const [title, publisher, price] = refArr

        let updateArray = gameState.map(item => {
            if (item.id === targetId) {
                item.title = title.current.value
                item.publisher = publisher.current.value
                item.price = price.current.value
                return item
            } else {
                return item
            }
        })

        setGameState(updateArray)
    }

    

    return (
        <div className='classComponent'>
            <h6>useState, useRef pratice</h6>
            <h2>{dateState}</h2>
            <input onChange={manipulateDate}></input>
            <button onClick={() => setShowCard(preAdd => !preAdd)}>
                Show Add Game
            </button>
            {/* Add game control here */}
            {showCard === true ? (<AddGame
                // addTitleRef={addTitleRef}
                // addPublisherRef={addPublisherRef}
                // addPriceRef={addPriceRef}
                testFunction={testFunction}
                appendGameHandler={appendGameHandler}
            />) : null}


            {gameState.map((item) => {
                return <GameCard
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    publisher={item.publisher}
                    price={item.price}
                    deleteGame={deleteGame}
                    handleEditGameCard={handleEditGameCard}
                />
            })}

            {/* <GameCard
                title={title}
                publisher={publisher}
                price={price}
            /> */}

            {/* <InputControl
                title={title}
                publisher={publisher}
                price={price}
                titleRef={titleRef}
                publisherRef={publisherRef}
                priceRef={priceRef}
                updateGame = {updateGame}
            /> */}


            {/* <h3>{gameState.title}</h3>
            <h3>{gameState.publisher}</h3>
            <h3>${gameState.price}</h3> */}

            {/* <h3>{gameState[0].title}</h3>
            <h3>{gameState[0].publisher}</h3>
            <h3>${gameState[0].price}</h3> */}

            {/* <button onClick={changeNameHandler}>Change Game</button> */}


        </div>
    )
}


