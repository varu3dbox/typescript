const midPoint = (n: number): number => {
    const w = 1.0 / n
    let s = 0.0

    for (let i = 1; i <= n; i++) {
        const x = (i - 0.5) * w
        s += 4.0 / (1.0 + x * x)
    }
    return s * w
}

for (let n = 100; n <= 10000000; n *= 10) {
    console.log(midPoint(n));
}