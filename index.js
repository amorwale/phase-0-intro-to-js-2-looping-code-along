// Code your solutions in this file

function writeCards(names, event) {
    const temp = [];
    for (let x = 0; x < names.length; x++) {
        temp.push(`Thank you, ${names[x]}, for the wonderful ${event} gift!`);
    }
    return temp;
}

function countDown(num) {
    for (let x = num; x >= 0; x--) {
        console.log(x)
    }
}