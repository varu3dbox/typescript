function numberOfSteps(num: number): number {
    let count: number = 0
    return step(num, count)
};

function step(num: number, count: number): number {
    let revialNum: number
    if (num === 0) return count

    revialNum = num % 2 === 0 ? num / 2 : num - 1
    count++
    return step(revialNum, count)
}

console.log(numberOfSteps(123))
console.log(numberOfSteps(14))
console.log(numberOfSteps(8))
