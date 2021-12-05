function binarySearch(arr, x) {
  let l = 0;
  let r = arr.length - 1;
  let middle;
  while (r >= l) {
    middle = l + (r - l) / 2;

    if (arr[middle] == x) return middle;

    if (arr[middle] > x) r = middle - 1;
    else l = middle + 1;
  }

  return -1;
}

let arr = [1, 2, 5, 7, 8, 10, 90];
let x = 10;
let result = binarySearch(arr, x);

console.log(
  'We found the element ' + x + ' in the array with index of ' + result
);
