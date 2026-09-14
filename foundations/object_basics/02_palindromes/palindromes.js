const palindromes = function (str) {
    const noPunctuation = str
        .toLowerCase()
        .replaceAll(/\W|\s/g, "");
    return noPunctuation === noPunctuation.split("").reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
