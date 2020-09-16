function decompressRLElist(nums: number[]): number[] {
    let resultArray: number[] = []
    for (let i = 0; i < nums.length; i += 2) {
        [...Array(nums[i])].map(() => resultArray.push(nums[i + 1]))
    }

    return resultArray
};

console.log(decompressRLElist([1, 2, 3, 4]))
console.log(decompressRLElist([1, 1, 2, 3]))