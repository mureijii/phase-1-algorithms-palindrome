function isPalindrome(word) {
  // Reverse the string and compare it with the original string
  let reversedWord = word.split('').reverse().join('');
  return word === reversedWord;
}

/* 
  Pseudocode:
  1. Take the input string `word`.
  2. Reverse the string:
     - Convert the string into an array of characters.
     - Reverse the array.
     - Join the array back into a string.
  3. Compare the reversed string with the original string.
  4. If they are equal, return true (it's a palindrome).
  5. Otherwise, return false.
*/

/*
  Explanation:
  - A palindrome is a word that reads the same forward and backward.
  - To check if a word is a palindrome:
    - We reverse the word.
    - If the reversed word matches the original word, then it's a palindrome.
  - The `.split('').reverse().join('')` method efficiently reverses a string.
  - The function returns `true` if the word is a palindrome and `false` otherwise.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // Custom test cases
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("madam"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("hello"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("level"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a")); // Single character edge case

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abccba"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("abcdefg"));
}

module.exports = isPalindrome;
