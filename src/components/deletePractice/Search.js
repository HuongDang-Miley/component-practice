import React, { useState } from 'react'

export default function Search() {
    const [searchTerm, setSearchTerm] = useState('')
console.log(searchTerm)
    return (
        <div>
            <input onChange={event => setSearchTerm(event.target.value)} placeholder='search....'></input>
        </div>
    )
}
