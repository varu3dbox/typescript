function balancedStringSplit(s: string): number {
    const seq = s.split("").map((v) => v.replace("L", "-1").replace("R", "1")).map((v) => Number(v))
    let count = 0
    seq.reduce((a, v) => {
        if (a + v === 0) count++
        return a + v
    })

    return count
};

console.log(balancedStringSplit("RLRRLLRLRL"))
console.log(balancedStringSplit("RLLLLRRRLR"))
console.log(balancedStringSplit("LLLLRRRR"))