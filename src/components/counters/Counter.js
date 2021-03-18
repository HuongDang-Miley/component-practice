import React, { useState, useReducer } from 'react'
import '../style.css'


//=========================  useState   =========================
// export default function Counter() {
//     const [number, setNumber] = useState(0)

//     const handleAddOne = () => {
//         setNumber(preState => preState + 1)
//     }

//     return (
//         <div className='classComponent'>
//             {number}
//             <br />
//             <button onClick={handleAddOne}>Add 1</button>
//             <button onClick={()=> setNumber(pre => preState - 1)}>Minus 1</button>
//         </div>
//     )
// }


//=========================  useReducer   =========================
//step1: create a function take in a variable(single value/object/array) and an object (action)
const counterReducer = (countState, action) => {
    switch (action.type) {
        case 'ADD 1':
            return action.value
        case 'MINUS 1':
            return countState - 1  //=> diffrent way
        default:
            console.log("We shouldn't arrive here")
    }
}

export default function Counter() {
    //Step2: Destructure the State declare above, and a function from userReducer hook, which take in the function above and the iniate state, 
    const [countState, stateDispatch] = useReducer(counterReducer, 0)


    // Stept4: run stateDispatch take in the 'action' object
    const add1 = () => {
        const action = {
            type: 'ADD 1',
            value: countState + 1
        }
        stateDispatch(action)
    }

    const minus1 = () => {
        stateDispatch({ type: 'MINUS 1' })
    }

    return (
        <div className='classComponent'>
            {/* Stept3: Put the state where we it to appear */}
            {countState}
            <br />
            <button onClick={add1}>+ 1</button>
            <button onClick={minus1}>- 1</button>
        </div>
    )
}

