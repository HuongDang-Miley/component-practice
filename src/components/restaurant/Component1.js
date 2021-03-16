
import React, { useContext } from 'react'
import restaurantContext from './context'
import Component2 from './Component2.js'

export default function Component1() {
    const context = useContext(restaurantContext)
    return (
        <div className='card'>
            <h1>Restaurant Name: {context.state.restaurantName}</h1>
            <Component2 />
        </div>
    )
}
