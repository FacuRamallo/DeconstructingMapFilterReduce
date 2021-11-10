import { deconstructedReduce, deconstructedReduceRefactor1, deconstructedReduceRefactor2} from "./deconstructingReduce.js";
import { map_, double } from "./deconstructingMap.js";

//////////////////Reduce//////////////////////
export const items = [ 1, 2, 3, 4 ]
const initialValue = 0
export const reducer = (acc, cur) => acc + cur;
items.reduce(reducer, initialValue) //=> 10
/* \     \      \          \
  array   \      \           - initial value
        method    \
                reducer
*/
//los parametros de la función reducer se abrevian como "acc" y "cur"
//reducer = (acc, cur) => acc + cur;


console.log("Resultado de ejecutar reduce a item = "+items.reduce(reducer, initialValue));

console.log("suma de los elementos del array items = "+deconstructedReduce(items));

let funcion = reducer

console.log("suma de los elementos del array items = "+deconstructedReduceRefactor1(items, funcion));

console.log("suma de los elementos del array items = "+deconstructedReduceRefactor2(items, funcion, initialValue));


//////////////MAP////////////////////
    console.log("Map_ retorna: "+ map_(items, double))
    console.log("el metodo map aplicado a items retorna: "+ items.map(double))

//////////////FILTER//////////////////