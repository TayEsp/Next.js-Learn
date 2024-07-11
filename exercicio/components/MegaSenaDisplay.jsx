import style from '../styles/MegaSenaDisplay.module.css'

export default function MegaSenaDisplay(props){

    return(
            <div className={style.numeros}> 
                {props.numero}
            </div>
    )
}
