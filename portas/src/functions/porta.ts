import PortaModel from "../model/PortaModel";

export function criarPortas(qtde: number, presenteada: number): PortaModel[]{
    return Array.from({length: qtde}, (_,i) => {
        const numero = i + 1
        const temPresente = numero === presenteada
        return new PortaModel(numero, temPresente)
    })
}

export function atualizarPortas(portas: PortaModel[], portaModificada: PortaModel): PortaModel[]{
    return portas.map(portaAtual => {

        if(portaAtual.numero === portaModificada.numero){
            return portaModificada
        }else{
            return portaModificada.aberta ? portaAtual : portaAtual.desselecionar()
        }
    })
}
