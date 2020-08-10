let str = "subscribe to letcode"
let map = new Map();

let len = str.length;

for (let i = 0; i < len; i++) {
    let char = str.charAt(i)

    if (map.has(char)) {
        let value = map.get(char)
        // console.log(value);
        map.set(char, value + 1)
    } else {
        map.set(char, 1)
    }
}
console.log(map);



// map.set('s', 1);
// map.set('u', 3);
// map.set('s', 2);
// let value = map.get('u')
// console.log(map);
// console.log(value);
// let has = map.has('S')
// console.log(has);