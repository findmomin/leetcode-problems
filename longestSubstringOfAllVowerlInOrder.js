/* 
A string is considered beautiful if it satisfies the following conditions:

Each of the 5 English vowels ('a', 'e', 'i', 'o', 'u') must appear at least once in it.
The letters must be sorted in alphabetical order (i.e. all 'a's before 'e's, all 'e's before 'i's, etc.).
For example, strings "aeiou" and "aaaaaaeiiiioou" are considered beautiful, but "uaeio", "aeoiu", and "aaaeeeooo" are not beautiful.

Given a string word consisting of English vowels, return the length of the longest beautiful substring of word. If no such substring exists, return 0.

A substring is a contiguous sequence of characters in a string.
  
Example 1:

Input: word = "aeiaaioaaaaeiiiiouuuooaauuaeiu"
Output: 13
Explanation: The longest beautiful substring in word is "aaaaeiiiiouuu" of length 13.
Example 2:

Input: word = "aeeeiiiioooauuuaeiou"
Output: 5
Explanation: The longest beautiful substring in word is "aeiou" of length 5.
Example 3:

Input: word = "a"
Output: 0
Explanation: There is no beautiful substring, so return 0.
  
Constraints:

1 <= word.length <= 5 * 105
word consists of characters 'a', 'e', 'i', 'o', and 'u'.
*/
// const longestBeautifulSubstring = (str = '') => {
//   let substringLength = 0;
//   let prevVowel = 'a';
//   const nextVowels = {
//     a: 'e',
//     e: 'i',
//     i: 'o',
//     o: 'u',
//     u: 'u',
//   };
//   const vowels = {
//     a: true,
//     e: true,
//     i: true,
//     o: true,
//     u: true,
//   };

//   for (let i = 0; i < str.length; i++) {
//     if (!vowels[str[i]] || str[i] !== 'a') continue;

//     let seq = '';

//     for (let j = i; j < str.length; j++) {
//       const vowel = str[j];

//       if (vowel === prevVowel || vowel === nextVowels[prevVowel]) {
//         if (vowel !== prevVowel) prevVowel = vowel;
//         seq += vowel;
//       } else {
//         prevVowel = 'a';
//         break;
//       }
//     }

//     if (seq.endsWith('u'))
//       substringLength = Math.max(seq.length, substringLength);
//   }

//   return substringLength;
// };

// const longestBeautifulSubstring = (str = '') => {
//   let substringLength = 0;
//   let prevVowel = 'a';
//   const nextVowels = {
//     a: 'e',
//     e: 'i',
//     i: 'o',
//     o: 'u',
//     u: 'u',
//   };
//   const vowels = {
//     a: true,
//     e: true,
//     i: true,
//     o: true,
//     u: true,
//   };
//   let seq = '';

//   for (const word of str) {
//     if (!vowels[word]) continue;

//     if (!prevVowel) prevVowel = word;

//     if (word !== prevVowel && word !== nextVowels[prevVowel]) {
//       prevVowel = word;
//       seq = `${word}`;
//       continue;
//     }

//     if (word !== prevVowel) prevVowel = word;

//     seq += word;

//     if (seq.startsWith('a') && seq.endsWith('u'))
//       substringLength = Math.max(substringLength, seq.length);
//   }

//   return substringLength;
// };

const longestBeautifulSubstring = (word = '') => {
  let count = 1;
  let len = 1;
  let maxLength = 0;

  for (let i = 1; i < word.length; i++) {
    if (word[i - 1] === word[i]) len++;
    else if (word[i - 1] < word[i]) len++, count++;
    else (count = 1), (len = 1);

    if (count === 5) maxLength = Math.max(maxLength, len);
  }

  return maxLength;
};

// 5
console.log(longestBeautifulSubstring('aezeeiiiioooauuuaeiou'));
