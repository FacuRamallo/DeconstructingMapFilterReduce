import { reduce } from "./deconstructingReduce.js"

//El método filter() crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.


export const deconstructFilter = (items, predicate) => {
    //                         |
    //       if truthy, append to accumulator
    const initialValue = []
    const reducer = (acc, cur) => {
        if (predicate(cur)) {
        //         |
        // run predicate on currentValue
            acc.push(cur)
        }
        return acc
    }
    
    return reduce(items,reducer,initialValue)

}
    
export const isEven = x => x % 2 === 0