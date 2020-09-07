let str = "let";
let permutation = (str, result) => {
    if (str.length == 0) {
        console.log(result);
    }
    for (let i = 0; i < str.length; i++) {
        let rest = str.substring(0, i) + str.substring(i + 1)
        permutation(rest, result + str[i])
    }

}
permutation(str, '')