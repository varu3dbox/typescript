function countGoodTriplets(arr: number[], a: number, b: number, c: number): number {
    let count: number = 0
    arr.forEach((_, i) => {
        arr.forEach((_, j) => {
            arr.forEach((_, k) => {
                if (0 <= i && i < j && j < k && arr.length) {
                    if (Math.abs(arr[i] - arr[j]) <= a && Math.abs(arr[j] - arr[k]) <= b && Math.abs(arr[i] - arr[k]) <= c) {
                        count++
                    }
                }
            })
        })
    })
    return count
}

console.log(countGoodTriplets([3, 0, 1, 1, 9, 7], 7, 2, 3))