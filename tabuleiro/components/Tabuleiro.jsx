import Quadrado from "./Quadrado";

export default function Tabuleiro(props){
    
    return(colunas(props.tam))
}

function colunas(tam){
    const array = []
    var cor = true
    for(var i=0; i<tam; i++){

        array.push(<Quadrado tam={tam} invertida={cor}/>)
        if(cor){
            cor = false
        }else{
            cor = true
        }
    }

    return array
}