
//REDUCE es un metodo de la clase array
//el motodo "reduce" en código sería:


export function deconstructedReduce(items) 
{
    let acc = 0;
        //         \
    //       initial value
    for (let i = 0; i < items.length; i++) 
    {
    const cur = items[i];
    //        \
    //     current value
    acc = acc + cur;
    //     \
    //   update the accumulator
    }
    return acc;
}

////////////////////REORDENANDO///////////////////////////
export function deconstructedReduceRefactor1(items, reducer)
{
    let acc = 0;
    for (let i = 0; i < items.length; i++) 
    {
    const cur = items[i];
    acc = reducer(acc,cur); 
    }
    return acc;
}

////////////////////SI declaramos initialValue como un array///////////////
export const reducer1 = (acc, cur) => {
    acc.push(cur * 2)
    return acc
  /*         \
     The reducer must always return the accumulator
  */       
  }
 
export function deconstructedReduce1(items, reducer) {
let acc = []

for (let i = 0; i < items.length; i++) {
const cur = items[i]
acc = reducer(acc, cur)
}
return acc
}

////////////////////SI declaramos initialValue como un objeto///////////////

//al trabajar con objetos debemos modificar la funcion reducer de la siguiente manera
export const reducer2 = (acc, cur) => {
    acc[cur] = cur * 2
    return acc
  /*         \
     The reducer must always return the accumulator
  */       
  } 

export function deconstructedReduce2(items, reducer) {
let acc = {}

for (let i = 0; i < items.length; i++) {
const cur = items[i]
acc = reducer(acc, cur)
}
return acc;
}

//Por lo tanto como el for loop es siempre igual podemos extraerlo a una función

export function reduce(items, reducer, initialValue ) 
{
    let acc = initialValue;
    for (let i = 0; i < items.length; i++) 
    {
    const cur = items[i];
    acc = reducer(acc,cur);
    }
    return acc;
}

