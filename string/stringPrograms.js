const str = "Dhaikj123akska54haj*&78";
// find chars and digits
const length = str.length;
const chars = [];
const digits = [];
for (let i = 0; i < length; i++) {
    const char = str.charAt(i);
    if (char.match(/[^0-9]/g)) {
        chars.push(char);
    } else if (/[0-9]/g) {
        digits.push(char);
    }
}
console.log(chars.join(""), digits.join(""))
// find sum of sequence numbers

const allNumbers = str.split(/[^0-9]/g);
let sum = 0;
allNumbers.forEach(ele => {
    sum += Number(ele);
})
console.log(sum)
// find each char count

const charCount = {};
for (const char of str) {
    if (charCount[char]) {
        charCount[char]++;
    } else {
        charCount[char] = 1
    }
}
console.log(charCount);


const a = "letcode";
let reverseStr = "";
for (let i = 0; i < a.length; i++) {
    const x = a.charAt(i);
    reverseStr = x + reverseStr;
}
console.log(reverseStr);
