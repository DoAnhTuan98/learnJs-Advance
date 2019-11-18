function debug(name) {
    return function(str) {
        console.log(`[${name}],${str}`)
    }
}

const log = debug('mouse');
log('error happened');  