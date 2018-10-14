try {
    console.log('TEST BABEL.JS');
    console.log('='.repeat(30));
    require('./dist/babel.js');
} catch(e) {
    console.log('Error: ' + e);
    console.log();
}

try {
    console.log('TEST BABEL-UGLIFY.JS');
    console.log('='.repeat(30));
    require('./dist/babel-uglify.js');
} catch(e) {
    console.log('Error: ' + e);
    console.log();
}

try {
    console.log('TEST BABEL-TERSER.JS');
    console.log('='.repeat(30));
    require('./dist/babel-terser.js');
} catch(e) {
    console.log('Error: ' + e);
    console.log();
}

try {
    console.log('TEST BUBLE.JS');
    console.log('='.repeat(30));
    require('./dist/buble.js');
} catch(e) {
    console.log('Error: ' + e);
    console.log();
}


try {
    console.log('TEST BUBLE-UGLIFY.JS');
    console.log('='.repeat(30));
    require('./dist/buble-uglify.js');
} catch(e) {
    console.log('Error: ' + e);
    console.log();
}
