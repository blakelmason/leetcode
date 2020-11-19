/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    const asString = x.toString()
    const reversed = asString.split('').reverse().join('')
    return asString === reversed
}

console.log(isPalindrome(1521251))
