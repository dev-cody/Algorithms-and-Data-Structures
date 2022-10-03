// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

//JavaScipt way without using loops
// function reverse(str) {
//     return str.split('').reverse().join('')
// }

//Using a for loop
function reverse(str) {
    let reversed = ''

    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i]
    }

    return reversed
}

module.exports = reverse;
