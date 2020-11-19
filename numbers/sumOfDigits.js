let num = 346;
let sum = 0;
console.log(num % 10);
console.log(parseInt(num / 10));
while (num > 0) {
    let rem = num % 10;
    sum = sum + rem;
    num = parseInt(num / 10);
}
console.log(sum);