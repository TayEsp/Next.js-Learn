import Pessoa from "../../components/Pessoa"

export default function exemplo(){
    return(
        <div>
            <Pessoa nome="Joao" idade={30}/>
            <Pessoa nome="Maria" />
        </div>
    )
}