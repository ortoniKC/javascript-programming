let str = "I like iron man but not super man but i like"

// way 1 - Using Set()
let set = new Set();
let words = str.toLowerCase().split(" ")
words.forEach(ele => {
    set.add(ele)
})
console.log(set);

//way 2 - Using filter & IndexOf
str = "a b a"
console.log(str.indexOf('a'));
let words = str.toLowerCase().split(" ")
let removed = words.filter((value, index, src) => {
    return src.indexOf(value) == index
    // console.log(value, index);
    // console.log(src);
    // console.log(src.indexOf(value));
}).join(' ')
console.log(removed);