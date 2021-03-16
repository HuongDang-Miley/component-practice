import React from 'react'
import { useLocation } from 'react-router-dom'
export default function ArticlePage(props) {
    const location = useLocation()

    return (
        <div>
            <h1>{location.state.title}</h1>
            <h2>{location.state.subtitle}</h2>
            <p>{location.state.body}</p>
        </div>
    )
}
