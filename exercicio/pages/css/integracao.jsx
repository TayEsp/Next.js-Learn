import styles from "./integracao.module.css"

export default function integracao(){
    return(
        <div id={styles.integracao}>
            <div className={styles.vermelha}>texto #1</div>
            <div className={styles.azul}>texto #2</div>
            <div className={styles.branca}>texto #3</div>
        </div>
    )
}