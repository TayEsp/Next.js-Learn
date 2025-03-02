import styles from '../styles/Porta.module.css'
import PortaModel from '../model/PortaModel'
import Presente from './Presente'


interface PortaProps{
    value: PortaModel
    onChange: (novaPorta: PortaModel) => void
}

export default function Porta(props){

    const porta = props.value
    const selecionada = porta.selecionada  && !porta.aberta ? styles.selecionada : ''

    function alternarSelecao(e){
        props.onChange(porta.alternarSelecao())
    }

    function abrir(e){
        e.stopPropagation()
        props.onChange(porta.abrir())
    }

    function renderizarPorta(){
        return(
                <div className={styles.porta}>
                    <div className={styles.numero}>{porta.numero}</div>
                    <div className={styles.macaneta} onClick={abrir}></div>
                </div>
        )
    }

    return(
        <div className={styles.area} onClick={alternarSelecao}>
           <div className={`${styles.frame} ${selecionada}`}>
                {porta.fechada ? renderizarPorta() 
                : porta.presenteada ? <Presente/> : false}
            </div>
            <div className={styles.chao}></div>
        </div>
    )
}