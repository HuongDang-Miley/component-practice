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
        case "ADD":
            return [...gameArr, action.games]
        case "SET":
            return action.games
        case "EDIT":
            const newArr = gameArr.map(item => {
                if (action.targetEl === item.tiem) {
                    return action.editedGame
                } else {
                    return item
                }
            })
            return newArr
        case "DELETE":
            console.log(action)
            const deleteGame = gameArr.filter(item => item.title !== action.targetTitle)
            console.log(deleteGame)
            return deleteGame

        // return  gameState.filter(item => item.title !== targetTitle)

        default:
            console.log("We shouldn't arrive here")
    }
}


export default function HookParent() {

    const [gameArr, dispatch] = useReducer(gameReducer, [
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


    // const [gameState, setGameState] = useState([
    //     {
    //         id: 1,
    //         title: 'Mario',
    //         publisher: 'Nintendo',
    //         price: 40
    //     },
    //     {
    //         id: 2,
    //         title: 'Sim',
    //         publisher: 'The Sims',
    //         price: 50
    //     },
    //     {
    //         id: 3,
    //         title: 'Alo',
    //         publisher: 'yea',
    //         price: 40
    //     },
    // ])


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

    const addTitleRef = useRef()
    const addPublisherRef = useRef()
    const addPriceRef = useRef()

    const appendGameHandler = (title) => {


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


    const deleteGame = (targetTitle) => {
        dispatch({ type: 'DELETE', targetTitle: targetTitle })

    }



    const handleEditGameCard = (targetId, refArr) => {
        // const [title, publisher, price] = refArr

        // let updateArray = gameState.map(item => {
        //     if (item.id === targetId) {
        //         item.title = title.current.value
        //         item.publisher = publisher.current.value
        //         item.price = price.current.value
        //         return item
        //     } else {
        //         return item
        //     }
        // })

        // setGameState(updateArray)
    }



    return (
        <div className='classComponent'>
            <h6>Reducer</h6>

            <button onClick={() => setShowCard(preAdd => !preAdd)}>
                Show Add Game
            </button>
            {/* Add game control here */}
            {showCard === true ? (<AddGame
                addTitleRef={addTitleRef}
                addPublisherRef={addPublisherRef}
                addPriceRef={addPriceRef}
                appendGameHandler={() => dispatchEvent({
                    type: 'ADD',
                    gameObj: {
                        title: addTitleRef.current.value,
                        publisher: publisher.current.value,
                        price: price.current.value,
                    }
                })}
            />) : null}


            {gameArr.map((item) => {
                return <GameCard
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    publisher={item.publisher}
                    price={item.price}
                    deleteGame={deleteGame}
                    handleEditGameCard={handleEditGameCard}
                    passInfo={(title, titleRef, pubRef, priceRef) => {
                        dispatch({
                            type: 'EDIT',
                            editedGame: {
                                title: titleRef.current.value,
                                title: pubRef.current.value,
                                title: priceRef.current.value,
                            },
                            targetTitle: title
                        })
                    }}
                // passInfo={(title, titleRef, pubRef, priceRef) => {
                //     dispatch({
                //       type: "EDIT",
                //       editedGame: {
                //         title: titleRef.current.value,
                //         publisher: pubRef.current.value,
                //         price: priceRef.current.value
                //       },
                //       targetEl: title
                //     })
                />
            })}

        </div>
    )
}


