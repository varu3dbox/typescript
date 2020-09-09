function shuffle(nums: number[], n: number): number[] {
    const seq1 = nums.slice(0, n)
    const seq2 = nums.slice(n)

    const result = []
    for (let i=0; i < n; i++){
        result.push(seq1[i])
        result.push(seq2[i])
    }

    return result
};

function shuffle2(nums: number[], n: number): number[] {
    const seq1 = nums.slice(0, n)
    const seq2 = nums.slice(n)

    const zip = (seq1, seq2) => seq1.map((_, i) => [seq1[i], seq2[i]])
    return zip(seq1, seq2).flat()
}

console.log(shuffle2([2,5,1,3,4,7], 3))