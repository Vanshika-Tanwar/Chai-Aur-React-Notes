import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    return(
        <div>
            <h1>
                Custom App | Vanshika Tanwar
            </h1>
        </div>
    )
}

/* const ReactElem = {
    type: 'a',
    props:{
        href: 'https://google.com',
        target: '_blank',

    },
    children: 'Click me to visit google'
}  */
/* this doesnt work as render expects a specific type of parameters */

const anotherElem = (
    <a href="https//google.com" target='_blank'>Visit Google</a>
)

const anotherUser = "HC"

const reactElem = React.createElement(
    'a', /* tag */
    {href: 'https://google.com',
    target: '_blank'}, /* attribute/props */
    'click here to visit Google | ', /* children/textdesiredtoinject */ anotherUser /* evaluated exp where we inject variables*/
)

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
)
