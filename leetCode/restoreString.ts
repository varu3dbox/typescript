function restoreString(s: string, indices: number[]) {
    const ss = s.split("")
    let shuffled: string[] = new Array(ss.length)

    const resultArray = indices.map((e, i) => {
        shuffled[e] = ss[i]
    })

};

console.log(restoreString("codeleet", [4, 5, 6, 7, 0, 2, 1, 3]))