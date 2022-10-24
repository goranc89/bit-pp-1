//Write a program that computes average marks of the following students. Then use this
//average to determine the corresponding grade.

// David 80
// Marko 77
// Dany 88
// John 95
// Thomas 68
// The grades are computed as follows :

//  60% F
//  70% D
//  80% C
//  90% B
//  100% A

var marks = [80, 77, 88, 95, 68];
var avg = 0;
var x = 0;

for (i=0; i < marks.length; i++) {
        avg += marks[i];
        x = avg/marks.length
}
if (x < 60){
    console.log(x + ', F');      
    } 
  else if (x < 70) {
    console.log(x + ', D'); 
    } 
  else if (x < 80) {
    console.log(x + ', C'); 
  } 
  else if (x < 90) {
    console.log(x + ', B'); 
  } 
  else if (x < 100) {
    console.log(x + ', A'); 
  }