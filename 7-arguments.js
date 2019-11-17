function sum() {
    let result = 0;
    for (let i = 0;i < arguments.length;i++) { // arguments là một array-like object nó luôn tồn tại trong hàm 
        result += arguments[i];
    }
    console.log(result);

}

sum(1,2,3,4,56,6);

// cách 2 

function sum1 () {
    const numbers = Array.from(arguments);
    return numbers.reduce(function(sum,num){
        return sum + num
    },0);
}

console.log(sum1(12,3,45,6));