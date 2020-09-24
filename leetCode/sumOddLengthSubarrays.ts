function sumOddLengthSubarrays(arr: number[]): number {
    let sumArray: number[] = []
    let length = arr.length
    if (length % 2 === 0) length--

    while (length > 0) {
        sumArray.push(sumSubarrays(arr, length).reduce((a, v) => a + v))
        length -= 2
    }

    return sumArray.reduce((a, v) => a + v)
}

function sumSubarrays(arr: number[], length: number): number[] {
    const subArray: number[] = []
    let [start, end] = [0, length]

    while (arr.slice(start, end).length === length) {
        subArray.push(arr.slice(start, end).reduce((a, v) => a + v))
        start++
        end++
    }

    return subArray
}


console.log(sumOddLengthSubarrays([1, 4, 2, 5, 3]))