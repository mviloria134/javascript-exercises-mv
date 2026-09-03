const sumAll = function(a, b) {
    if (!Number.isInteger(a) || !Number.isInteger(b) || a < 0 || b < 0) {
        return "ERROR";
    }

    let sum = 0;
    let larger;
    let smaller;
    if (a > b) {
        larger = a;
        smaller = b;
    }
    else {
        larger = b;
        smaller = a;
    }

    for (let i = smaller; i <= larger; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
