import  {reducer} from "./main.js";
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


export function deconstructedReduceRefactor2(items, reducer, initialValue ) 
{
    let acc = initialValue;
    for (let i = 0; i < items.length; i++) 
    {
    const cur = items[i];
    acc = reducer(acc,cur);
    }
    return acc;
}

