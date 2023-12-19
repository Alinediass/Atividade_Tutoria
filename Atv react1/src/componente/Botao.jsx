import { useState } from "react"

const Contador =(()=>{
    const [count, setCount] = useState(0)
    return(
        <button onClick={() => setCount((count) => count + 1)}>
        Incremento {count}
        </button>)
})

export default Contador
