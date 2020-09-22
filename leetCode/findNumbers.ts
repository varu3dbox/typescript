function findNumbers(nums: number[]): number {
    nums = nums.map((v) => {
        return digit(v) % 2 === 0 ? 1 : 0
    })

    return nums.reduce((a, v) => a + v)
};

function digit(num: number): number {
    return num.toString().split('').length
}

console.log(findNumbers([12, 345, 2, 6, 7896]))
console.log(findNumbers([555, 901, 482, 1771]))