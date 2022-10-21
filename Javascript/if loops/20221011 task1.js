var krak1 = 4 
var krak2 = 4
var krak3 = 5
if (krak1 == krak2 && krak2 == krak3) {
    result = 'equilateral'
}
else if (krak1 == krak3 || krak1 == krak2 || krak3 == krak2) {
    result = 'isosceles'
}
else {
    result = 'scalene'
}
console.log(result)