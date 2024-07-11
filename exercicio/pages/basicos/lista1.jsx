/* gerar uma estrutura que se pode colocar mais de um span */
export default function lista1(){
    let valor = 12;
    return(
        <h1>{lista(valor)}</h1>
    )
}

function lista(valor){
    const array = [];

    for (var i=0;i<valor;i++){
        array.push(<span>{i+1}, </span>);
    }
    return array
}