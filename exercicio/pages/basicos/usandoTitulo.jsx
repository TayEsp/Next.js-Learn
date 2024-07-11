import Titulo from "@/components/Titulo"

export default function usandoTitulo(){
    return(
        //utilizando o componente
        <div>
            <Titulo 
                    principal="Pagina de Cadastro" 
                    secundario="Incluir, alterar e excluir coisas!"
            />
            <Titulo 
                    principal="Pagina de Login" 
                    secundario="Informe seu email e senha"
                    pequeno={true}
            />
        </div>
    )
}