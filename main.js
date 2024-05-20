// Variable
let a = 1;
let b = 2;


// functions
function writeLogTrue() {
    for (let param of arguments) {
        console.log(param);
    }
}
function writeLogFalse() {
    for (let param of arguments) {
        console.log(param);
    }
}

// main
//writeLogTrue('a','b','c');
//writeLogFalse('d','e','f');
if (a<b && a<0) {
    writeLogTrue('a','b','c');
    //console.log('dung');
} else {
    writeLogFalse('d','e','f');
    //console.log('sai');
}