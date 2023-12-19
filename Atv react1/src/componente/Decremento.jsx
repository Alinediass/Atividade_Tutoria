import { useState } from "react"

const Decremento =(()=>{
    const [count, setCount] = useState(0)
    return(
        <button onClick={() => setCount((count) => count - 1)}>
        Decremento {count}
        </button>)
})

export default Decremento
