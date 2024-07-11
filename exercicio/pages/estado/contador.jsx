import { useState } from "react"
import styles from '../../styles/contador.module.css'
import ContadorDisplay from "@/components/indireta1/ContadorDisplay"

export default function contador(){
    const [valor, setValor] = useState(0)

    const botaoAumenta = () => setValor(valor+1)

    const botaoDiminui = () => setValor(valor-1)

    return(
        <div className={styles.container}>
            <h1 className={styles.text}>Contador</h1>
            <ContadorDisplay numero={valor}/>
            <div>
                <button className={styles.button} onClick={botaoDiminui}>-</button>
                <button className={styles.button} onClick={botaoAumenta}>+</button>
            </div>
        </div>
    )
}