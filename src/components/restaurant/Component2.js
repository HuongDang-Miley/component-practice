
import React, {useContext} from 'react'
import restaurantContext from './context'

export default function Component2() {
    const context = useContext(restaurantContext)
    
    return (
        <div className='card'>
            <h3>Order Number: {context.state.orderNumber}</h3>
            <h3>Amount: ${context.state.orderAmount}</h3>
            <h3>Time: {context.state.orderTime}</h3>
        </div>
    )
}

