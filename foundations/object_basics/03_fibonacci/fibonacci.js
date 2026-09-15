const fibonacci = function(index) {
    if (index < 0) return "OOPS";
    if (index == 0) return 0;

    let prevNum = 0;
    let currentNum = 1;

    for (let i = 1; i < index; i++) {
        [prevNum, currentNum] = [currentNum, currentNum+prevNum];
    }

    return currentNum;
};

// Do not edit below this line
module.exports = fibonacci;
