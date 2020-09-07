function runningSum(nums: number[]): number[] {
    const seq: number[] = []
    let sum = 0
    for (let x of nums) {
        sum += x
        seq.push(sum)
    }
    return seq
};

console.log(runningSum([1, 2, 3, 4]))
console.log(runningSum([1, 1, 1, 1]))
