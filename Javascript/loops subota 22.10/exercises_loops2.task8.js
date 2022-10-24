//  Write a program that concatenates two arrays.
// Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
// Output array: [4, 5, 6, 2, 3, 8, 11, 9]

const a = [4, 5, 6, 2];
const b = [3, 8, 11, 9];
for (let i = 0; i < b.length; i++) {
    a.push(b[i])
}
console.log(a)