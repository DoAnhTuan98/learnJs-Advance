class foo {
    static someMethod() {
        console.log('some method');
    }

    anotherMethod() {
        console.log('another method');
    }
}


foo.someMethod();

const Foo = new foo();

Foo.anotherMethod();


// chú ý method static không thể gọi trên instances of the class 
// và ngược lại method bình thường không thể nào được gọi trực tiếp từ class của nó 