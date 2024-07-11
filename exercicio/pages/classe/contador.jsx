import { Component } from "react";
import Contador from "@/components/Contador";

export default class contador extends Component{
    render(){
        return(
            <div>
                <Contador valorInicial={100} passo={2}/>
                <Contador/>
            </div>
        )
    }
}