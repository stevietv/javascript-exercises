const sumAll = function(first, second) {
    if (!isValid(first) || !isValid(second))
        return 'ERROR';

    let start;
    let end;
    if (first < second) {
        start = first;
        end = second;
    }
    else {
        start = second;
        end = first;
    }

    var result = 0;

    while (start <= end) {
        result += start++;
    }

    return result;

};

function isValid(value) {
    return (Number.isInteger(value) && value >= 0);
}

// Do not edit below this line
module.exports = sumAll;
