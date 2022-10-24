// 4. Write a program that finds the first element larger than minimum and prints out its value.
// Input array: [4, 2, 2, -1, 6]
// Output: 2

var x = [4, 2, 2, -1, 6, -17];
let ultimo = x[0]
let penulitmo = 0
for (i = 0; i < x.length; i++)
        if(x[i] == ultimo){
            penulitmo = ultimo;
        } else if (x[i] < ultimo) {
            penulitmo = ultimo;
            ultimo = x[i]
        } else if (x[i] < penulitmo) {
            penulitmo = x[i]
        }
console.log(penulitmo)

