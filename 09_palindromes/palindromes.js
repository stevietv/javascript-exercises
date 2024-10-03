const palindromes = function (inputString) {
    const cleansedString = inputString.toLowerCase().replace(/[^\w]/g, "");
    const cleansedStringArray = cleansedString.split("");
    const reversedString = cleansedStringArray.reverse().join("");
    return reversedString.localeCompare(cleansedString) === 0 ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
