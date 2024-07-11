function acao1(){
    console.log("acao1")
}

export default function botao(){

    function acao2(){
        console.log("acao2")
    }
    //capturando o evento que foi realizado
    function acao5(e){
        console.log(e)
    }

    return(
        <div>
            <button onClick={acao1}>click 1</button>
            <button onClick={acao2}>click 2</button>
            <button onClick={function (){
                console.log("acao 3")
            }}>click 3</button>
            <button onClick={() => console.log("acao 4")}>click 4</button>
            <button onClick={acao5}>click 5</button>
            <button onClick={e => acao5(e.altKey)}>click 5 v2</button>

            <div>
                <input type="text" onChange={e => console.log(e.target.value)}/>
            </div>
        </div>
    )
}