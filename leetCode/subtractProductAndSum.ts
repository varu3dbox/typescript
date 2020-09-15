function subtractProductAndSum(n: number): number {
    let seq = n.toString().split("")
    const numbers: number[] = seq.map(x =>
        parseInt(x, 10)
    )

    const sum = numbers.reduce((a, v) =>
        a + v
    )

    const product = numbers.reduce((a, v) =>
        a * v
    )

    return product - sum
};

console.log(subtractProductAndSum(234))
console.log(subtractProductAndSum(4421))