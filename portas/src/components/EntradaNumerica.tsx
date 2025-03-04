import styles from '../styles/EntradaNumerica.module.css'

interface EntradaNumericaProps{
    text: string
    value: number
    onChange: (newValue: number) => void
}

export default function EntradaNumerica(props){
    function dec(){
        props.onChange(props.value - 1)
    }

    function inc(){
        props.onChange(props.value + 1)
    }

    return(
        <div className={styles.entradaNumerica}>
            <span className={styles.text}>{props.text}</span>
            <span className={styles.value}>{props.value}</span>
            <div className={styles.botoes}>
                <button className={styles.botao} onClick={dec}>-</button>
                <button className={styles.botao} onClick={inc}>+</button>
            </div>
        </div>
    )
}