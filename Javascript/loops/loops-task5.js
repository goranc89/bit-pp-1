// 5.Write a code to calculate the sum of digits in a number and show that sum on screen.
    // Example: "Sum of digits in number 232 is 7".


   var number = 23445
   var sum = 0
   var lastDigit
   while (number != 0) {
    lastDigit = number % 10;
    sum = sum + lastDigit;
    number = parseInt(number/10)
   }
   console.log(sum)