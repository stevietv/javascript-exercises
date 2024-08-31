const repeatString = function(text, amount) {
    if (amount < 0)
        return 'ERROR';

    var output = '';
    while (amount > 0) {
        output += text;
        amount--;
    }
    return output;
};

// Do not edit below this line
module.exports = repeatString;
