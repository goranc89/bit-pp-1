   // 7. Write a code to find on which index in array is letter "C" and show that index on screen.
   //Given array is: [1, 3, 32, $, g, h, t, s, c, 66, 23, h2].

   var x = [1, 3, 32, "$", "g", "h", "t", "s", "C", 66, 23, "h2"];

   for (c in x) {
     if (x[c] === "C") {
       console.log(c);
       break
     }}