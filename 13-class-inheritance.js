function Animal(name) {
    this.name = name;
}

Animal.prototype.eat = function(){
    console.log('Eating.............');
}

function Bird() {
    Animal.apply(this,arguments);
}

Bird.prototype = new Animal();

const b  = new Bird('thong')

b.eat();


// class inheritance 

// class Animal {
//     constructor(name) {
//         this.name = name;
//     }

//     eat() {
//         console.log('Eating.....');
//     }
// };

// class Bird extends Animal {
//     fly() {
//         console.log('Flying.........');
//     }
// };


// const bird = new Bird('thong');
// bird.fly();