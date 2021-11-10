import { reduce } from "./deconstructingReduce.js"
 
//map es un metodo dericado de "reduce"
//El método map() crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.

export const deconstructMap = (items, func) => {
    //                    |
    //        function to modify value
      const initialValue = []
      const reducer = (acc, cur) => {
        acc.push(func(cur))
    //            |
    //      execute func on the currentValue
        return acc
      }

    return reduce(items,reducer,initialValue)
}

export const double = x => x * 2
    

