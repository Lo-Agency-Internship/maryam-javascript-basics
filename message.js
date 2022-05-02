// I.
function rand(z, t) {
    return Math.floor(Math.random() * (2 * z + (t - 1)))
}
console.log(rand(31, 67));
// II.
let binary = "101100111101"
function bin2dec(str) {
    return parseInt(str, 2)
}
console.log(bin2dec(binary))
function Sumtwointeger(z, t) {
    if (z == t) {
        return ((2 * z) * 3)
    }
    else {
        return (z + t)
    }
}
console.log(Sumtwointeger(7, 7))
// II.
function cumputedifference(x) {
    if (x > 19) {
        return ((x - 19) * 3)
    }
    else {
        return ("x is less than 19")
    }
}
console.log(cumputedifference(8))
//  III.
function addstring(txt) {
    if (txt.startsWith('Lo')) {
        return (txt)
    }
    else {
        return ("Lo" + txt)

    }
}
console.log(addstring("Loagancy"));
