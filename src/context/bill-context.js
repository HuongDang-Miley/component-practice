import  { createContext } from 'react'
const billContext = createContext({
    billTitle: '',
    price: ''
})

export default billContext