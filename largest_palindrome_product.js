/*  function(digits)
 *
 *  @param {Number} digits         the amount of digits in each multiplicand
 *
 *  @return {Object} an object containing the two factors used to produce
 *                   the palindromeNumber and the palindromeNumber itself.
 */
module.exports = function(digits) {
  var factor_0 = 0;
  var factor_1 = 0;
  var palindromeNumber = 0;
  let tempPalindromeNumber = 0;
  let upperBound = Math.pow(10, digits);

  for (let i = 0; i < upperBound; i++) {
    for (let j = 0; j < upperBound; j++) {
      tempPalindromeNumber = i * j;

      let reversedNumber = parseInt(
        tempPalindromeNumber
          .toString()
          .split('')
          .reverse()
          .join('')
      );

      if (
        reversedNumber === tempPalindromeNumber &&
        tempPalindromeNumber > palindromeNumber
      ) {
        palindromeNumber = tempPalindromeNumber;
        factor_0 = i;
        factor_1 = j;
      }
    }
  }

  return {
    factor_0: factor_0,
    factor_1: factor_1,
    palindromeNumber: palindromeNumber
  };
};
