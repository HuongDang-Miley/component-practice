import { createContext } from 'react'

let restaurantContext = createContext({
    orderNumber: '',
    orderAmount: '',
    orderTime: '',
    restaurantName: ''
})

export default restaurantContext