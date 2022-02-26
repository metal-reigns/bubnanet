// Определение четных и нечетных чисел
function oddOrEven(array) {
    return array.reduce(function(sum, item) {
      return sum + item
    }, 0) % 2 == 0 ? 'even' : 'odd';
  }
  
  console.log(oddOrEven([1, 2]));
  console.log(oddOrEven([1, 3]));
  console.log(oddOrEven([]));