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

/**
 * Finds the index of a string in an array or returns -1 if not present.
 * 
 * Example
 * let animals = ["duck", "cat", "pony"];
 * console.log(findIndex(animals, "cat")); // 1
 * console.log(findIndex(animals, "porcupine")); // -1

 * @param {string[]} arr - The array of strings.
 * @param {string} str - The string to find.
 * @param {number} index - The current index (default is 0).
 * @returns {number} The index of the string in the array or -1 if not present.
 */
function findIndex(arr, str, index = 0) {
  if (index >= arr.length) return -1;
  if (arr[index] === str) return index;
  return findIndex(arr, str, index + 1);
}

/**
 * Returns a copy of a string, reversed.
 * 
 * Example
 * console.log(revString("porcupine")); // 'enipucrop'

 * @param {string} str - The input string.
 * @returns {string} The reversed string.
 */
function revString(str) {
  if (str.length === 0) return "";
  return str[str.length - 1] + revString(str.slice(0, -1));
}

/**
 * Returns an array of all the values in the object that are strings.
 * @param {object} obj - The input object.
 * @returns {string[]} An array of strings found in the object.
 */
function gatherStrings(obj) {
  let strings = [];
  for (let key in obj) {
    if (typeof obj[key] === "string") {
      strings.push(obj[key]);
    } else if (typeof obj[key] === "object" && obj[key] !== null) {
      strings = strings.concat(gatherStrings(obj[key]));
    }
  }
  return strings;
}

/**
 * Performs a binary search on a sorted array and returns the index of the value.
 * If not found, returns -1. Runs in O(log(N)) time.
 * 
 * Example
 * console.log(binarySearch([1, 2, 3, 4], 1)); // 0
 * console.log(binarySearch([1, 2, 3, 4], 3)); // 2
 * console.log(binarySearch([1, 2, 3, 4], 5)); // -1

 * @param {number[]} arr - The sorted array.
 * @param {number} val - The value to search for.
 * @param {number} left - The left index (default is 0).
 * @param {number} right - The right index (default is arr.length - 1).
 * @returns {number} The index of the value in the array or -1 if not found.
 */
function binarySearch(arr, val, left = 0, right = arr.length - 1) {
  if (left > right) return -1;
  const mid = Math.floor((left + right) / 2);
  if (arr[mid] === val) return mid;
  if (arr[mid] > val) return binarySearch(arr, val, left, mid - 1);
  return binarySearch(arr, val, mid + 1, right);
}

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
