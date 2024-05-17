/**
 * Finds the product of an array of numbers.
 *
 * Example
 * console.log(product([2, 3, 4])); // 24
 *
 * @param {number[]} arr - The array of numbers.
 * @returns {number} The product of the numbers in the array.
 */
function product(arr) {
  if (arr.length === 0) return 1;
  return arr[0] * product(arr.slice(1));
}

/**
 * Returns the length of the longest word in an array of words.
 *
 * Example
 * console.log(longest(["hello", "hi", "hola"]));  // 5
 *
 * @param {string[]} words - The array of words.
 * @returns {number} The length of the longest word.
 */
function longest(words) {
  if (words.length === 0) return 0;
  return Math.max(words[0].length, longest(words.slice(1)));
}

/**
 * Returns a string of every other character.
 *
 * Example
 * console.log(everyOther("hello"));  // "hlo"
 *
 * @param {string} str - The input string.
 * @returns {string} A string of every other character.
 */
function everyOther(str) {
  if (str.length === 0) return "";
  return str[0] + everyOther(str.slice(2));
}

/**
 * Checks if a string is a palindrome.
 *
 * Example
 * console.log(isPalindrome("tacocat"));  // true
 * console.log(isPalindrome("tacodog"));  // false
 *
 * @param {string} str - The input string.
 * @returns {boolean} True if the string is a palindrome, otherwise false.
 */
function isPalindrome(str) {
  if (str.length <= 1) return true;
  if (str[0] !== str[str.length - 1]) return false;
  return isPalindrome(str.slice(1, -1));
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {}

export {
  binarySearch,
  everyOther,
  findIndex,
  gatherStrings,
  isPalindrome,
  longest,
  product,
  revString,
};
