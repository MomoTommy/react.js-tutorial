import React from 'react'

export function DemoComponent(props) {
    return(
        <div>
            <h1>{props.name}</h1>
            <h1>{props.country}</h1>
        </div>
    )
}