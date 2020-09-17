function createTargetArray(nums: number[], index: number[]): number[] {
    let resultArray: number[] = []
    index.forEach((k, i) => {
        resultArray.splice(k, 0, nums[i])
    })

    return resultArray
};


console.log(createTargetArray([0, 1, 2, 3, 4], [0, 1, 2, 2, 1]))
console.log(createTargetArray([1, 2, 3, 4, 0], [0, 1, 2, 3, 0]))