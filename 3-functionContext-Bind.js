var mouse = {
    name : 'mickey',
    sayhi: function() {
        console.log('My name is ' + this.name);
    }
}

// mouse.sayhi();
var a = mouse.sayhi.bind(mouse);

a();