// fizzbuzz

const fizzbuzz = (): string[] => {
    const buff: string[] = []
    for (let i=1; i <= 100; i++) {
        if (i % 15 === 0) {
            buff.push("FizzBuzz")
        } else if ( i % 3 === 0) {
            buff.push("Fizz")
        } else if ( i % 15 === 0 ) {
            buff.push("Buzz")
        } else {
            buff.push(String(i))
        }
    }
 
    return buff
}

const iota = (n: number, start = 0, step = 1): number[] => {
    const seq: number[] = []
    while ( n-- > 0) {
        seq.push(start)
        start += step
    }

    return seq
}

const change = (n: number): string => {
    if (n % 15 === 0) return "FizzBuzz"
    if (n % 3 === 0) return "Fizz"
    if (n % 5 === 0) return "Buzz"
    return String(n)
}

console.log(fizzbuzz().toString())
console.log(iota(100, 1).map(change))