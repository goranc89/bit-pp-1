// 10. Write a program that inserts a given element e on the given position p in the array a. If
//the value of the position is greater than the array length, print the error message.
//Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
//Output: [2, -2, 33, 78, 12, 5, 8]

const a = [2, -2, 33, 12, 5, 8];
let e = 78;
var p = 4;
for (i=0; i < a.length; i++){
    if(p < a.length) {
    a.splice([p], 0, e);
    console.log(a)
    break;
    } else if(p > a.length) {
    console.log('error')
    break;
}}
