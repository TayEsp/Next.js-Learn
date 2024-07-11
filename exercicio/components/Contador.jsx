import { Component } from "react";

export default class Contador extends Component{

    //o moço acha nao pratico isso
    constructor(props){
        super(props)

        this.state = {
            numero: props.valorInicial ?? 0,
            passo: props.passo ?? 1
        }

    }

    inc = () => {
        this.setState({
            numero: this.state.numero + this.state.passo
        })
    }

    dec = () => {
        this.setState({
            numero: this.state.numero - this.state.passo
        })
    }

    render(){
        return(
            <div>
                <h1>Contador (usando Classe)</h1>
                <h2>{this.state.numero}</h2>
                <input type="number" min={1} max={1000} value={this.state.passo} onChange={e => this.setState({passo: +e.target.value })}/>
                <button onClick={this.inc}>+</button>
                <button onClick={this.dec}>-</button>
            </div>
        )
    }
}