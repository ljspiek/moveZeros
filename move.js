function moveZeros(arr) {
  let nonZero = arr.filter((value) => value !== 0);
  let zero = arr.filter((value) => value === 0);
  let moved = [...nonZero, ...zero];
  return moved;
}

console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]));
