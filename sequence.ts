// 数列の生成
const iota = (n: number, start = 0, step = 1): number[] => {
    const seq: number[] = []
    while ( n-- > 0) {
        seq.push(start)
        start += step
    }

    return seq
}

const tabulate = (n: number, func: (x: number) => number, start = 0): number[] => {
    const seq: number[] = []
    while( n-- > 0) {
        seq.push(func(start++))
    }
    return seq
}

const iterate = (n: number, func: (x: number) => number, a: number): number[] => {
    const seq: number[] = [];
    while( n-- > 0) {
        seq.push(a)
        a = func(a)
    }

    return seq
}


console.log(iota(6));
console.log(iota(8, 1));
console.log(iota(8, 1, 2));
console.log(tabulate(6, x => x * x));
console.log(tabulate(8, x => x * x * x, 1));
console.log(iterate(6, x => x + 1, 0));
console.log(iterate(8, x => x + 2, 1));
console.log(iterate(8, x => x * 3, 1));