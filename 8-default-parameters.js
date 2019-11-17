function greeting (name = 'tuan') {
    console.log(`Hi ${name}`);
}

greeting();

function greeting1 (name) {
    if(name === 'giang') {
        console.log(`hi ${name}`);
    }

    else console.log(`hi tuan`);
}

greeting1('giang');