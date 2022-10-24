// 2. Write a code to display the cube of the number 
// up to given an integer and show it on screen. Example: 2 up to cube equals 8.

var cube = 0;
for (i=0; i<=9; i++){
    console.log(cube=i*i*i)
}



var broj = 5;
var rezultat = 1;
var stepen = 5;

for (i = 0; i < stepen; i++){
   rezultat = rezultat * broj
   // rezultat *= broj
   // rezultat je prvo 5;
   //druga iteracija je ikad je i = 1, rezultat je 5 puta broj, odnosno 5 puta 5 i tako dalje 
}
console.log(rezultat)