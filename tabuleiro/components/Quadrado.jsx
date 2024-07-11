import styles from '../styles/Quadrado.module.css'

export default function Quadrado(props){
    return(
        linha(props.tam, props.invertida)
    )

}

function linha(tam, invertida){
    const array = [];
    for(var i=0;i<tam;i++){
        array.push(<div className={styles.quadrado} style={{backgroundColor: invertida ? "#000000" : "#FFFFFF"}}></div>)
        console.log(invertida)
        if(invertida){
            invertida = false
        }else{
            invertida = true
        }
    }
    console.log("acabo")
    return array
}