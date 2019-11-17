class CoffeeMachine {
    makeCoffe () {
        console.log('Making coffee ......');
    }
}


class SpecialCoffeeMachine extends CoffeeMachine {
    makeCoffe(cb) {
        console.log('Making coffee and do somethings......');
        cb();
    }
}

const coffee =  new SpecialCoffeeMachine();

coffee.makeCoffe(() => console.log('Call the boss'));

