import { useEffect, useState } from "react"

export default function Questao(){
    const [questao,setQuestao] = useState(null)

    useEffect(() => {
        fetch('http://localhost:3000/api/questao/1')
    .then(resp => resp.json())
    .then(setQuestao)
    }, [])

    function renderizarRespostas(){
        if(questao){
            return questao.respostas.map((resp, i) => {
                return <li key={i}>{resp}</li>
            })
        }
        return false
    }

    return(
        <div>
            <h1>questao</h1>
            <div>
                <span>{questao?.id} - {questao?.enunciado}</span>
                <ul>
                    {renderizarRespostas()}
                </ul>
            </div>
        </div>
    )
}