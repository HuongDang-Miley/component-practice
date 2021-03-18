// =========================================================
// =========================================================
// useState ================================================
// import React, { useRef } from 'react'

// export default function AddGame(
//     appendGameHandler,
//     // addTitleRef,
//     // addPublisherRef,
//     // addPriceRef
// ) {

//     let addTitleRef = useRef()
//     let addPublisherRef = useRef()
//     let addPriceRef = useRef()

//     return (
//         <div class='card'>
//             this is add game
//             <input ref={addTitleRef}></input>

//             <lable>Publisher</lable>
//             <input ref={addPublisherRef}></input>

//             <lable>Price</lable>
//             <input ref={addPriceRef}></input>

//             <button onClick={() => appendGameHandler(addTitleRef)}>Add game Game</button>
//         </div>
//     )
// }



// =========================================================
// =========================================================
// useReducer ==============================================
import React from 'react'

export default function AddGame(
    appendGameHandler,
    addTitleRef,
    addPublisherRef,
    addPriceRef
) {
    return (
        <div>

            <input ref={addTitleRef}></input>

            <lable>Publisher</lable>
            <input ref={addPublisherRef}></input>

            <lable>Price</lable>
            <input ref={addPriceRef}></input>

            <button onClick={() => appendGameHandler()}>Add game Game</button>
        </div>
    )
}
