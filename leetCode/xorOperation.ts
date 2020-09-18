function xorOperation(n: number, start: number): number {
    let seq: number[] = []
    for (let i = 0; i < n; i++) {
        seq.push(start)
        start += 2
    }

    return seq.reduce((a, v) => a ^ v)
};

console.log(xorOperation(5, 0))
console.log(xorOperation(1, 7))
console.log(xorOperation(10, 5))