import { useEffect, useState } from "react"
import styles from '../../styles/MegaSenaDisplay.module.css'
import MegaSenaDisplay from "@/components/megaSenaDisplay"
import { mega } from '@/functions/mega'

export default function megaSena(){
    const [quant, setQuant] = useState()
    const [valores, setValores] = useState([])

    useEffect(() => {
        setValores(mega())
    }, [])

    function renderNumeros(){
        console.log(valores)
        return valores.map(
            numero => <MegaSenaDisplay key={numero} numero={numero}/>
        )
    }

    return(
        <div className={styles.container}>
            <h1>Mega Sena</h1>
            <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
                {renderNumeros()}
            </div>
            <div>
                <input type="number" style={{color: "#222"}} value={quant} onChange={e => setQuant(e.target.value)}/>
                <button onClick={() => setValores(mega(quant))}>Apostar</button>
            </div>
        </div>
    )
}