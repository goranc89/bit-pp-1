// 6. Write a program that checks if a given array is symmetric. An array is symmetric if it can
// be read the same way both from the left and the right hand side.
// Input array: [2, 4, -2, 7, -2, 4, 2]
// Output: The array is symmetric.
// Input array: [3, 4, 12, 8]
// Output: The array isn’t symmetric.


// var x = [2, 4, -2, 7, -2, 4, 2]
// var res = ''
// for (i = 0; i < x.length; i++) {
//     if (x[0] == (x.length)   && 
//         x[1] == (x.length-1) && 
//         x[2] == (x.length-2) &&
//         x[3] == (x.length-3) && 
//            {res = 'yes';
//         }
//     }
//     console.log(res='yes')
//     else console.log('no')
    

const a = [2, 4, -2, 7, -2, 4, 2, 8]
const b = []
var res = 'yes'
    for (let i = a.length - 1; i >= 0; i--) {
        b.push(a[i])
        if(a[i] === b[i]) {
            res = 'The array is symmetric.'
        }
        else if (a[i] !== b[i]) {
            res = 'The array is not symmetric.'
        }
    }
    console.log(res);
