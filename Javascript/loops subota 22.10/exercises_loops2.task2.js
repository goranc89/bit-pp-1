// 2. Write a program that multiplies every positive element of a given array by 2.
// Input array: [-3, 11, 5, 3.4, -8]
// Output array: [-3, 22, 10, 6.8, -8]

var x = [-3, 11, 5, 3.4, -8, 9, -7]
var multi = 1
for (i=0; i < x.length; i++) {
    if (x[i] > 0){ 
        multi = x[i]*2
        console.log(multi)
    } else {
        console.log('negativan je broj')
    }
}