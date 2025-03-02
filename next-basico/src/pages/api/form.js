const usuarios = []

export default function Form(req, res){
    if(req.method === "POST"){
        post(req, res)
    }else if(req.method === "GET"){
        //caso seja o GET devolve o array de usuarios
        get(req, res)
    }else{
        res.status(405).send()
    }
}

function post(req, res){
    const usuario = JSON.parse(req.body)
    usuarios.push(usuario)
    res.status(200).send()
}

function get(req, res){
    res.status(200).json(usuarios)
}