/*
  Project: Linear Search Algorithm
  Author: Fidelis Ojeah

  Description: Locates the given value from a given array by iterating through the array and returns it's position else returns -1.
  Time Complexity: O(n)
  Space Complexity: O(1)
*/
function LinearSearch(arrayValues, searchValue) {
  if (arrayValues.constructor === Array) {
    const arrayLength = arrayValues.length;
    if (arrayLength >= 1) {
      let valuePosition = -1;
      for (let i = 0; i < arrayLength; i++) {
        if (arrayLength[i] === searchValue) {
          valuePosition = i;
          return i;
        }
      }
      return valuePosition;
    } else {
      throw new Error(`Your array ${arrayValues} has no elements`);
    }
  }
  throw new TypeError(`${arrayValues} is not a valid array`);
}

export default LinearSearch;
