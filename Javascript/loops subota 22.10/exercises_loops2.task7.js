// 7. Write a program that intertwines two arrays. You can assume the arrays are of the same
// length.
// Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
// Output array: [4, 3, 5, 8, 6, 11, 2, 9]

const a = [4, 5, 6, 2];
const b = [3, 8, 11, 9];
const c = []
for (let i = 0; i < a.length; i++) {
    c.push(a[i], b[i])
}
console.log(c)