const removeFromArray = function(inputArray, ...removeValue) {
    return inputArray.filter((value) => removeValue.indexOf(value) == -1)
};

// Do not edit below this line
module.exports = removeFromArray;
