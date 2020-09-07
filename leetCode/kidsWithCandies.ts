function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
    const greatestNumber = candies.reduce((a, x) => a > x ? a : x)
    return candies.map(x => x + extraCandies >= greatestNumber ? true : false)
};
