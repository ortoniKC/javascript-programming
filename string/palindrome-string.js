let str = 'nurses run'
function reverse() {
    str = str.replace(' ', '');
    let myReverseStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        myReverseStr += str.charAt(i);
    }
    return myReverseStr;
}
console.log(reverse());

let result = str === reverse() ? 'Palindrome' : 'Not Palindrome';
console.log(result);
// if (str === reverse()) {
//     console.log("it's palindrome");
// } else { 
//     console.log("it's not a palindrome");
// }
