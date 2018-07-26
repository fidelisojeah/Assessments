/*
  Project: Binary Search Algorithm
  Author: Fidelis Ojeah

  Description: Works on only sorted arrays by comparing half values (if value isn't found, returns -1)
  Time Complexity: O(log n)
  Space Complexity: O(1)
*/
function BinarySearch(arrayValues, searchValue) {
  if (arrayValues.constructor === Array) {
    const arrayLength = arrayValues.length;

    if (arrayLength >= 1) {
      let leftIndex = 0;
      let rightIndex = arrayLength - 1;

      while (leftIndex <= rightIndex) {
        const middleIndex = Math.floor((leftIndex + rightIndex) / 2)

        if (arrayValues[middleIndex] < searchValue) {
          leftIndex = middleIndex + 1;
        } else if (arrayValues[middleIndex] > searchValue) {
          rightIndex = middleIndex - 1;
        } else {
          return middleIndex
        }
      }
      return -1;

    } else {
      throw new Error(`Your array ${arrayValues} has no elements`);
    }
  }
  throw new TypeError(`${arrayValues} is not a valid array`);
}

export default BinarySearch;
