import Produto from "@/model/produto";

//apenas pra nao ter que colocar a definição dos produtos dentro da classe
export default [
    //instaciando os produtos
    new Produto(1, "sabao", 12),
    new Produto(2, "monitor", 2000),
    new Produto(3, "cebola", 2),
    new Produto(4, "iphone", 30000)
]