function greeting(name) {
    return 'Hi, ' + name + ' !';
}

var result = greeting('Tuan');
console.log(result)

function greeting1(name) {
    return `Hi ${name} ${1+2}!`;
}

var result1 = greeting1('Tuan');
console.log(result1)