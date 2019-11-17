const name = 'Tom';

const cat = {
    name,
    run() {
        console.log(`${this.name} is running`);
    }
};

cat.run();


// contructor function 

function dog (name,age) {
    this.name = name;
    this.age = age;
}

let bluedog = new dog('Milu',4);

console.log(bluedog['age']);