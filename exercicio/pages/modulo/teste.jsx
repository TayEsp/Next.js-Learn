// podemos utilizar apelisdos com as, não podemos utilizar minusculo
import Comp3, {Comp1 as Comp, Comp2, Comp4, Comp5, Comp6} from '@/components/modulo/funcionais'

export default function teste(){
    return(
        <div>
            <Comp/>
            <Comp2></Comp2>
            <Comp3></Comp3>
            <Comp4></Comp4>
            <Comp5/>
            <Comp6 msg="props aqui!"/>
        </div>
    )
}