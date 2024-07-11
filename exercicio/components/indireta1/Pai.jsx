import Filho from "../indireta1/Filho";

export default function Pai(props){

    function falarComigo(param, param2, param3){
        console.log(param, param2, param3)
        console.log('Alguem falou comigo!')
    }

    return(
        <div>
            <h1>Pai</h1>
            <Filho funcao={falarComigo}/>
        </div>
    )
}