import React from 'react'

export default function InputControl(
    title,
    publisher,
    updateGame,
    price,
    titleRef,
    publisherRef,
    priceRef, 
    deleteGame,
    ) {

    // can create a function here to modify parent state as long as I pass in parent state through props
    // const updateGame = () => {
    //     setTitle(titleRef.current.value) //=> similar to setTitle(e.target.value) but does not require onchange()
    //     setPublisher(publisherRef.current.value)
    //     setPrice(priceRef.current.value)
    // }

    return (
        <div class='card'>
            <lable htmlFor='title-field'>Title</lable>
            <input id='title-field' defaultValue={title} ref={titleRef}></input>

            <lable>Publisher</lable>
            <input defaultValue={publisher} ref={publisherRef}></input>

            <lable>Price</lable>
            <input defaultValue={price} ref={priceRef}></input>

            <button onClick={updateGame}>Update Game</button>
           
        </div>
    )
}
