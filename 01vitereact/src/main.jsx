import React from 'react';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


function MyApp(){
    return(
        <div>
            <h1>Custom App | code</h1>
        </div>
    )
}

// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://www.google.com',
//         target: '_blank' },
//     children: 'Click me to visit Google'
// }

const anotherElement = (
    <a href="https://www.google.com" target="_blank">Click me to visit Google</a>
)

const anotherUser = "code aur react"

const reactElement = React.createElement(
    'a',
    {href: 'https://www.google.com', target: '_blank'},
    'Click me to visit Google',
    anotherUser
)

createRoot(document.getElementById('root')).render(

    reactElement

)
