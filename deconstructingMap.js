import {items} from "./main.js"
 
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
    const reduce = (items, reducer, initialValue)=> {
    let acc = initialValue
    for (let i = 0; i < items.length; i++) {
    const cur = items[i]
    acc = reducer(acc, cur);
    }
    return acc
    }
    return reduce(items,reducer,initialValue)
}

export const double = x => x * 2
    

