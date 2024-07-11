export default function metodo(req, res){
    if(req.method === "GET"){
        res.status(200).json({pedido: "Voce requisitou um GET"})
    }else{
        res.status(200).json({pedido: "Voce requisitou outra coisa"})
    }

    
}