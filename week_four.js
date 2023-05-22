/*Longest Word
Have the function LongestWord(sen) take the sen parameter being passed and return the longest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty. Words may also contain numbers, for example "Hello world123 567" */

function LongestWord(sen) {
    const lettersOnly = sen.replace(/[^A-Za-z0-9\s]/g, '');
    const words = lettersOnly.split(' ');
    let longest = '';
    for (let i = 0; i < words.length; i++) {
      if (words[i].length > longest.length) {
        longest = words[i];
      }
    }
    return longest;
  }
  

  