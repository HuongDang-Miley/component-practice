// ======================================================================================
// ======================================= useState =======================================
// import React, { useState, useRef } from 'react'

// export default function GameCard({
//     id,
//     title,
//     publisher,
//     price,
//     deleteGame,
//     handleEditGameCard
// }) {

//     const editTitleRef = useRef()
//     const editPublisherRef = useRef()
//     const editPriceRef = useRef()

//     const [gamer, setGamer] = useState({
//         name: 'huong',
//         level: 'intermediate'
//     })


//     return (
//         <div class='card'>
//             <button className='deleteBtn' onClick={()=>deleteGame(title)}>X</button>
//             <h2>Gamer Card</h2>
//             <p>Name: {gamer.name} </p>
//             <p>Level: {gamer.level} </p>
//             <br />

//             <h3>{title}</h3>
//             <h3>{publisher}</h3>
//             <h3>${price}</h3>
//             <br />

//             <div class='child'>
//                 <h2>Edit Game</h2>
//                 <input placeholder='Title' ref={editTitleRef}></input>
//                 <input placeholder='Publisher' ref={editPublisherRef}></input>
//                 <input placeholder='Price' ref={editPriceRef}></input>
//                 <button onClick={() => handleEditGameCard(id, [editTitleRef, editPublisherRef, editPriceRef])}>Submit Change</button>
//             </div>
//         </div>
//     )
// }

import React from 'react'

export default function GameCard() {
    return (
        <div>
            
        </div>
    )
}
