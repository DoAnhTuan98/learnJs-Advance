function greeting() {
    console.log(`Hi ${this.name},I am ${this.age}`);
}

var cat = {
    name : 'Tom',
    age : 10
}

function greeting1(name,age) {
    console.log(`Hi ${name},I am ${age},my name ${this.name}`);
}

greeting.call(cat);

greeting1.call(cat,'tuan',20); // cat đại diện cho this ở bên trong hàm greeting