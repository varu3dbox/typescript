function restoreString(s: string, indices: number[]): string {
    const strings = s.split("")
    let shuffled: string[] = new Array(strings.length)

    strings.forEach((value, index) => {
        shuffled[indices[index]] = value
    })
    return shuffled.join("")
};