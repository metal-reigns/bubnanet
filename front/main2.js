// Определение четных и нечетных чисел
function oddOrEven(array) {
    return array.reduce(function(sum, item) {
      return sum + item
    }, 0) % 2 == 0 ? 'even' : 'odd';
  }
  
  console.log(oddOrEven([1, 2]));
  console.log(oddOrEven([1, 3]));
  console.log(oddOrEven([]));

  // True, если строка 1 может преобразоваться в строку 2

  function scramble(str1, str2) {
    var count = Object.create(null);

    Array.prototype.forEach.call(str1, function(a) {
        count[a] = (count[a] || 0) + 1;
    });

    return Array.prototype.every.call(str2, function(a) {
        return count[a]--;
    });
}

console.log(scramble('rkqodlw', 'world'));              // true
console.log(scramble('cedewaraaossoqqyt', 'codewars')); // true
console.log(scramble('katas', 'steak'));                // false
console.log(scramble('', 'o'));                // false

//Создайте функцию, которая возвращает сумму
//двух наименьших положительных чисел для заданного массива минимум из 4 целых чисел.

function sumTwoSmallestNumbers(numbers) {
    let arr = numbers.sort((a, b) => a - b);
    return arr[0] + arr[1];
  }
  sumTwoSmallestNumbers([4, 3, 2, 1]);  // 3
  sumTwoSmallestNumbers([8, 7, 6, 5]);  // 11
