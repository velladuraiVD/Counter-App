import { useState } from "react"
import "./style.css"




function Counter() {
    const [count, setcount] = useState(0)

    const increment=()=>
    {
        setcount(count+1)
    }
    const decrement=()=>
    {
        setcount(count-1)
    }
    return (
        <div id="div1">
            <h1 id="result">{count}</h1>
            <button id="inc" onClick={increment}>INCREMENT</button>
            <button id="dec" onClick={decrement}>DECREMENT</button>

            </div>

    )
}

export default Counter