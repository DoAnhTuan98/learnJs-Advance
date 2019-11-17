function sum () {
    const numbers = Array.from(arguments);
    return numbers.reduce((sum,num) => sum + num);
}


// console.log(sum(12,4,5));


function average() {
    const x = sum.apply(null,arguments);
    return x/arguments.length
}


console.log(average(12,23,4,5));