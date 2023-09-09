function reverseArray(arr) {
  let size = arr.length;
  for (let i = 0; i < size / 2; i++) {
    let temp = arr[i];
    arr[i] = arr[size - i - 1];
    arr[size - i - 1] = temp;
  }
  console.log(arr);
}
reverseArray([1, 2, 3, 4, 5]);
