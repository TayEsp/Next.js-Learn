export default function Filho(props){
    return(
        <div>
            <h1>Filho </h1>
            <button onClick={props.funcao}>Falar com o pai 1</button>
            <button onClick={() => props.funcao("Passei no ENEM!", "uhuuu")}>Falar com o pai 2</button>
        </div>
    )
}