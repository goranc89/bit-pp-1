// 5. Write a program that calculates the sum of positive elements in the array.
// Input array: [3, 11, -5, -3, 2]
// Output: 16

var x = [3, 11, -5, -3, 2]
var res = 0
for (i = 0; i < x.length; i++) {
    if (x[i] > 0) {
        res += x[i]
    }
}
console.log(res)