


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
    
export const isEven = x => x % 2 === 0