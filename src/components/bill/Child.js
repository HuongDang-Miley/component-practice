import React from 'react'
import billContext from '../../context/bill-context.js'
// import '../style.js'

export default function Child() {
    return (
        <div>
            <billContext.Consumer>
                {(context) => {
                    return (
                        <div class='card'>
                            <h6>Class Component Using Context Consumer</h6>
                            <h3>Title: {context.billTitle}</h3>
                            <h3>Price: {context.price}</h3>
                        </div>
                    )
                }}
            </billContext.Consumer>

        </div>
    )
}
