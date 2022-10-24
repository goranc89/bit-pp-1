// 1. Write a program that checks if a given element e is in the array a.
// Input: e = 3, a = [5, -4.2, 3, 7]
// Output: yes
// Input: e = 3, a = [5, -4.2, 18, 7]
// Output: no

const a = [5, -4.2, 3, 7];
var e = 8;
var res = 'yes'
for(var i = 0; i < a.length; i++) {
    if (e === a[i]) {
        res = 'yes'; break
    }  else {res = 'no'}   
}
console.log (res)