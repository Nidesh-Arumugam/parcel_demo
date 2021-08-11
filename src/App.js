import React from "react"
import ReactDom from "react-dom"

import  logo from './download.png'
const App=()=>{
    return(
    <div>
        <img src={logo}></img>
        <h1>Hello  world</h1>
    </div>
    )
}

ReactDom.render(<App/>, document.getElementById('root'))