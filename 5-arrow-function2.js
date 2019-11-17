var a = {
    name : 'AAA',
    run : function() {
        var run2 = function() {
            console.log(this.name);
        }.bind(this)
        run2();
    }
};

// lưu ý là arrow function không có biến this