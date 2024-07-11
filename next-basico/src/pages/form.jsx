import { useState } from "react"

export default function Form(){
    const [nome,setNome] = useState("")
    const [idade, setIdade] = useState(0)
    const [usuarios, setUsuarios] = useState([])


    async function salvarUsuario(){
        //isso permite com que a requisição seja feita apens quando for pedida
        await fetch('/api/form',{
            method: 'POST',
            body: JSON.stringify({nome, idade})
        })

        //toda vez que faz uma requisição ele apaga o que tem no formulario
        setNome("")
        setIdade(0)

        //como é assincrono ele espera o de cima terminar para poder executar a proxima requisição
        //quando nao falamos qual o methodo sera ele automaticamente é um GET
        const resp = await fetch('/api/form')
        const usuarios = await resp.json()
        setUsuarios(usuarios)
    }

    function renderizarUsuarios(){
        return usuarios.map((usuario, i) => {
            return <li key={i}>{usuario.nome} tem {usuario.idade} anos</li>
        })
    }

    return(
        <div>
            <h1>Formulario</h1>
            <input type="text" value={nome}
            onChange={e => setNome(e.target.value)}/>
            <input type="number" value={idade}
            onChange={e => setIdade(+e.target.value)}/>
            <button onClick={salvarUsuario}>Enviar</button>
        
            <ul>
                {renderizarUsuarios()}
            </ul>
        </div>
    )
}