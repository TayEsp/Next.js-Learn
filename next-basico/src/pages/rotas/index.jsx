import Link from "next/link"
import router, { useRouter } from "next/router"

export default function rotas(){

    function navegacaoSimples(url){
        router.push(url)
    }

    //podemos passar os parametros para essa funcao tbm
    function navegacaoComParams(){
        router.push({
            pathname: "rotas/params",
            query:{
                //...params
                id: 123,
                nome: "ana"
            }
        })
    }

    return(
        <div>
            <h1>Pagina index</h1>
            <ul>
                <Link href='/rotas/params?id=12&nome=ana'>
                    <li>Params</li>
                </Link>
                <Link href='/rotas/123/buscar'>
                    <li>Buscar</li>
                </Link>
                <Link href='/rotas/123/Daniel'>
                    <li>Daniel</li>
                </Link>
            </ul>
            <div style={{display: "flex", flexDirection: "columns", alignItems: "flex-start"}}>
                <button onClick={navegacaoComParams}>Params</button>
                <button onClick={() => router.push('/rotas/123/buscar')}>Buscar</button>
                <button onClick={() => navegacaoSimples('/rotas/123/Daniel')}>Daniel</button>
            </div>

        </div>
    )
}