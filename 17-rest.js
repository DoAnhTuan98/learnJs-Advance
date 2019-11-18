function log(...numbers) {
    console.log(numbers);
}

log(1,2,3,4,5);

function concat(separator,...strings) {
    console.log(strings);
    return strings.join(separator)
}

console.log(concat('.','a','b','c'));