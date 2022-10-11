//not sure what is meant by the two input values
var a = 67
var b = 31
var resulta = ''
var resultb = ''
if (a>=91 && a<=100 || b>=91 && b<=100)
    {resulta='A', resultb='A'}
else if (a>=81 && a<=90 || b>=81 && b<=90)
    {resulta='B', resultb='B'}
else if (a>=71 && a<=80 || b>=71 && b<=80)
    {resulta='C', resultb='C'}
else if (a>=61 && a<=70 || b>=61 && b<=70)
    {resulta='D', resultb='D'}
else if (a>=51 && a<=60 || b>=51 && b<=60)
    {resulta='E', resultb='E'}
else {result='failed'}
console.log(resulta, resultb)