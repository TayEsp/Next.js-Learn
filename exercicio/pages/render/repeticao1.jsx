export default function repeticao1(){
    const listaAprovados = [
        'Joao',
        'Maria',
        'Pedro',
        'Fernanda',
        'BH'
    ]
    
    function renderLista(){
        return listaAprovados.map(function(nome, i){
            return <li key={i}>{nome}</li>
        })
    }

    return(
        <ul>
            {renderLista()}
        </ul>
    )
}

/* function renderLista(){
    const itens = []

    for (let i = 0; i < listaAprovados.length; i++){
        itens.push(<li key={i}>{listaAprovados[i]}</li>)
    }

    return itens
} */