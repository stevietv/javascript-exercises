const convertToCelsius = function(farenheit) {
  var celcius = (farenheit-32) * (5/9);
  return roundToOneDecimal(celcius);

};

const convertToFahrenheit = function(celcius) {
  var farenheit = celcius * (9/5) + 32;
  return roundToOneDecimal(farenheit);

};

function roundToOneDecimal(value)
{
  return Math.round(value * 10) / 10;
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
