    // 6. Write a code to count all letters in a word and show that count on screen.
    // Example: Given word is "Eclip542se". Result should be something like "There is 7 letters in this word".


    var word = '!r$t£yui86';
    var sum = word.length;

    for (letters in word) {
      if (
        word[letters] !== "a" &&
        word[letters] !== "b" &&
        word[letters] !== "c" &&
        word[letters] !== "d" &&
        word[letters] !== "e" &&
        word[letters] !== "f" &&
        word[letters] !== "g" &&
        word[letters] !== "h" &&
        word[letters] !== "i" &&
        word[letters] !== "j" &&
        word[letters] !== "k" &&
        word[letters] !== "l" &&
        word[letters] !== "m" &&
        word[letters] !== "n" &&
        word[letters] !== "o" &&
        word[letters] !== "p" &&
        word[letters] !== "q" &&
        word[letters] !== "r" &&
        word[letters] !== "s" &&
        word[letters] !== "t" &&
        word[letters] !== "u" &&
        word[letters] !== "v" &&
        word[letters] !== "w" &&
        word[letters] !== "x" &&
        word[letters] !== "y" &&
        word[letters] !== "x" &&
        word[letters] !== "A" &&
        word[letters] !== "B" &&
        word[letters] !== "C" &&
        word[letters] !== "D" &&
        word[letters] !== "E" &&
        word[letters] !== "F" &&
        word[letters] !== "G" &&
        word[letters] !== "H" &&
        word[letters] !== "I" &&
        word[letters] !== "J" &&
        word[letters] !== "K" &&
        word[letters] !== "L" &&
        word[letters] !== "M" &&
        word[letters] !== "N" &&
        word[letters] !== "O" &&
        word[letters] !== "P" &&
        word[letters] !== "Q" &&
        word[letters] !== "R" &&
        word[letters] !== "S" &&
        word[letters] !== "T" &&
        word[letters] !== "U" &&
        word[letters] !== "V" &&
        word[letters] !== "W" &&
        word[letters] !== "X" &&
        word[letters] !== "Y" &&
        word[letters] !== "Z" 
      ) {
        sum--;
      }
    }
    console.log(sum);