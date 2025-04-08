document.getElementById('convert-btn').addEventListener('click', function() {
  const inputValue = document.getElementById('number').value;
  const outputElement = document.getElementById('output');
  
  // Check if input is empty
  if (!inputValue) {
    outputElement.textContent = "Please enter a valid number";
    return;
  }
  
  const number = parseInt(inputValue);
  
  // Check if number is less than 1
  if (number < 1) {
    outputElement.textContent = "Please enter a number greater than or equal to 1";
    return;
  }
  
  // Check if number is greater than 3999
  if (number > 3999) {
    outputElement.textContent = "Please enter a number less than or equal to 3999";
    return;
  }
  
  // Convert to Roman numeral
  outputElement.textContent = convertToRoman(number);
});

function convertToRoman(num) {
  const romanNumerals = [
    { value: 1000, symbol: 'M' },
    { value: 900, symbol: 'CM' },
    { value: 500, symbol: 'D' },
    { value: 400, symbol: 'CD' },
    { value: 100, symbol: 'C' },
    { value: 90, symbol: 'XC' },
    { value: 50, symbol: 'L' },
    { value: 40, symbol: 'XL' },
    { value: 10, symbol: 'X' },
    { value: 9, symbol: 'IX' },
    { value: 5, symbol: 'V' },
    { value: 4, symbol: 'IV' },
    { value: 1, symbol: 'I' }
  ];
  
  let result = '';
  let remaining = num;
  
  for (let i = 0; i < romanNumerals.length; i++) {
    while (remaining >= romanNumerals[i].value) {
      result += romanNumerals[i].symbol;
      remaining -= romanNumerals[i].value;
    }
  }
  
  return result;
}