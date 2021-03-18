import React from "react";


const AddGame = (props) => {
    return(
        <div className="add-game-card">
            <h2><u>Add Video Game</u></h2>
            <label htmlFor="title-field">Title: </label>
            <input id="title-field" ref={props.titleRef}></input><br></br>

            <label htmlFor="publisher-field">Publisher: </label>
            <input id="publisher-field" ref={props.publisherRef}></input><br></br>

            <label htmlFor="price-field">Price: </label>
            <input id="price-field" ref={props.priceRef}></input><br></br>
            
            <button onClick={props.appendGameHandler}>+</button>
        </div>
    )
}

export default AddGame;