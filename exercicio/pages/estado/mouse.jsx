import { useState } from "react"

export default function mouse(){

    //utilizado assim
    //react Hooks
    const [x, setX]= useState(0)

    const arrayY = useState(0)
    let y = arrayY[0]
    const setY = arrayY[1]

    const estilo = {
                display: "flex", 
                justifyContent: "center", 
                flexDirection: "column",
                alignItems: "center", 
                backgroundColor:"#222", 
                color:"#fff", 
                height: "100vh"
    }

    function quandoMover(e){
        setX(e.clientX)
        setY(e.clientY)
    }

    return(
        <div style={estilo} onMouseMove={quandoMover}>
            <span>Eixo X: {x}</span>
            <span>Eixo Y: {y}</span>
        </div>
    )
}