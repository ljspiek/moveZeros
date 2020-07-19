function moveZeros(arr) {
  return arr
    .filter(function (x) {
      return x !== 0;
    })
    .concat(
      arr.filter(function (x) {
        return x === 0;
      })
    );
}

console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]));
