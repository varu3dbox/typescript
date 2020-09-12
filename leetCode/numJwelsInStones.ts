function numJewelsInStones(J: string, S: string): number {
    const juwels = J.split("")
    const stones = S.split("")

    let count = 0
    stones.forEach((i) => {
        if (juwels.indexOf(i) > -1) {
            count++
        }
    })

    return count
};

console.log(numJewelsInStones("aA", "aAAbbbb"))
console.log(numJewelsInStones("z", "ZZ"))
