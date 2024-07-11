import React from "react"
export default function fragment(){
    return (
        //nao pode se retornar dois elementos ao msm tempo
        <React.Fragment>
            <h1>Titulo</h1>
            <h2>Subtitulo</h2>
        </React.Fragment>
    )
}