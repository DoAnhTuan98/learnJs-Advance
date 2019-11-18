const a = [1,2,3,4];

console.log(...a)

function sum(...numbers) {
    let result = 0;
    for(let i = 0; i < numbers.length ;i++) {
        result += numbers[i];
    }
    return result;
}

console.log(sum(...a));