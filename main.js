import { deconstructedReduce, deconstructedReduce1, deconstructedReduce2, deconstructedReduceRefactor1, reducer1, reducer2, reduce} from "./deconstructingReduce.js";
import { deconstructMap, double } from "./deconstructingMap.js";
import { isEven, deconstructFilter } from "./deconstructingFilter.js";

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



console.log("Resultado de ejecutar reduce a item = "+items.reduce(reducer, initialValue));

console.log("suma de los elementos del array items = "+deconstructedReduce(items));

console.log("suma de los elementos del array items = "+deconstructedReduceRefactor1(items, reducer));

console.log("multiplica por 2 a cada elemento del array dado como input = "+deconstructedReduce1(items, reducer1));

console.log(deconstructedReduce2(items, reducer2));

//////////////MAP////////////////////
console.log("deconstructMap() retorna: "+ deconstructMap(items, double))
console.log("el metodo map() aplicado a items retorna: "+ items.map(double))

//////////////FILTER//////////////////
console.log("deconstructFilter() retorna un array: "+ deconstructFilter(items, isEven))
console.log("el metodo Filter() aplicado a items retorna: "+ items.filter(isEven))