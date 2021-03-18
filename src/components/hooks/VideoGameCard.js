import React, {useState} from "react";
import "./VideoGameCard.css";

const VideoGameCard = (props) => {
    //Demonstrating state within state (dont do)
    // const [gamerState, setGamerState] = useState({
    //     name: "Htoo",
    //     level: "Super-Pro"
    // })

    return(
        <div>
            {/* <div className="user-information-div">
                <h2>Gamer Information</h2>
                <p onClick={(event) => setGamerState({name: "Daniel", level: "Ultra Instinct"})}>Name: {gamerState.name}</p>
                <p onClick={props.func}>Level: {gamerState.level}</p>   
            </div> */}
            <div className="game-information-div">
                <h2><u>{props.title}</u></h2>
                <p>Publisher: {props.publisher}</p>
                <p>Price: ${props.price}</p>
            </div>
        </div>
    )
}

export default VideoGameCard;