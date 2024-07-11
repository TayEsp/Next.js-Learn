import { useState } from "react"

export default function formulario(){
    const [valor, setValor] = useState('hi')

    function alterarValor(){
        setValor(valor + "!")
    }

    return(
        <div style={{color: "#222", display: "flex",  flexDirection:"column"}}>
            <span style={{color: "#fff"}}>{valor}</span>
            <input type="text" value={valor} onChange={e => setValor(e.target.value)}/>
            <button onClick={alterarValor}>Alterar</button>
        </div>
    )
}