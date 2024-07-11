export function mega(quant = 6, numeros = []){
   quant = +quant

   if(quant < 6 && quant > 60){
    throw "Quantidade invalida!"
   }

   if(numeros.length === quant){
    return numeros.sort((n1,n2) => n1 - n2)
   }

   let numeroAleatorio = Math.floor(Math.random() * 60) + 1
   if(!numeros.includes(numeroAleatorio)){
    return mega(quant,[...numeros, numeroAleatorio])
   } else{
    return mega(quant, numeros)
   }
}