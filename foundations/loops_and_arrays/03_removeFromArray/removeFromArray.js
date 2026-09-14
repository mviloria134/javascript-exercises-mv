const removeFromArray = function(arr, ...toRemove) {
    return arr.filter((num) => !toRemove.includes(num));
};

// Do not edit below this line
module.exports = removeFromArray;
