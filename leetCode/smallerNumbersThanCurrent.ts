function smallerNumbersThanCurrent(nums: number[]) {
    let results: number[] = []

    nums.forEach((i) => {
        let counts = 0
        nums.forEach((v) => {
            if (i > v) {
                counts++
            }
        })
        results.push(counts)
    })

    return results
}


console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3]))
console.log(smallerNumbersThanCurrent([6, 5, 4, 8]))
console.log(smallerNumbersThanCurrent([7, 7, 7, 7]))