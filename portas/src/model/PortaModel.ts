
export default class PortaModel{
    #numero: number
    #presenteada:boolean
    #selecionada:boolean
    #aberta:boolean

    constructor(numero: number, presenteada = false, selecionada = false, aberta = false){
        this.#numero = numero
        this.#presenteada = presenteada
        this.#selecionada = selecionada
        this.#aberta = aberta
    }

    get numero(){
        return this.#numero
    }

    get presenteada(){
        return this.#presenteada
    }

    get selecionada(){
        return this.#selecionada
    }

    get aberta(){
        return this.#aberta
    }

    get fechada(){
        return !this.#aberta
    }

    desselecionar(){
        const selecionada = false
        return new PortaModel(this.numero, this.presenteada, selecionada, this.aberta)
    }

    alternarSelecao(){
        const selecionada = !this.selecionada
        return new PortaModel(this.numero, this.presenteada, selecionada, this.aberta)
    }

    abrir(){
        const aberta = true
        return new PortaModel(this.numero, this.presenteada, this.selecionada, aberta)
    }
}