const str = 'letcode'
console.log(str.length);
// way 1
// let myReverseStr = '';
// for (let i = str.length-1; i >= 0; i--) { 
//    myReverseStr +=  str[i];
// }
// console.log(myReverseStr);

// -----------------------------------------------------

// way 2
function reverse() {
    let myReverseStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        myReverseStr += str.charAt(i);
    }
    console.log(myReverseStr);
}

reverse();

// -----------------------------------------------------

// way 3
let myReverse = (str) => {
    let myStr = str.split('')
    let myRev = myStr.reverse().join('');
    return myRev;
}
console.log(myReverse(str));

