/**
 * @param {number} x
 * @return {number}
 */
const reverse = function (x) {
    if (x > -10 && x < 10) return x
    const absoluteReversed = Number(Math.abs(x).toString().split('').reverse().join(''))

    let limit
    if (x < -9) {
        limit = -2147483648
        const reversed = absoluteReversed * -1
        if (reversed < limit) return 0
        else return reversed
    } else if (x > 9) {
        limit = 2147483647
        if (absoluteReversed > limit) return 0
        else return absoluteReversed
    }
}
