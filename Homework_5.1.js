let x = 3;
let y = 4;

function pow(x, y) {
    let result = 1;

    for (let i = 0; i < y; i++) {
        result *= x;
    }

    return result;
}

console.log(pow(x, y));