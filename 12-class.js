function Mouse (name) {
    this.name = name;
};


Mouse.prototype.run = function() {
    console.log(`${this.name} is running`);
}

const mouse = new Mouse('Mickey');

const cat = new Mouse('meow');

mouse.run();

cat.run();

// class

class Mouse1 {
    constructor(name){
        this.name = name;
    }

    run() {
        console.log(`${this.name} is running`);
    }
}

const jerry = new Mouse1('jerry');
jerry.run();