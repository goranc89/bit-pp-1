//Write a program that deletes a given element e from the array a.
//Input: e = 2, a = [4, 6, 2, 8, 2, 2]
//Output array: [4, 6, 8]

const a = [4, 6, 2, 8, 2, 2];
let e = 2;
const b = []
for(let i = 0; i < a.length; i++) {
    if (e === a[i]) {delete(a[i])}
} console.log(a)


//nisam bas znala kako da ga izbrisem da mi se ne pojavljuju uopste u console logu ni kao izbrisani.