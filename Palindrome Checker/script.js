document.getElementById('check-btn').addEventListener('click', function() {
  const textInput = document.getElementById('text-input').value;
  const resultElement = document.getElementById('result');
  
  // Check if input is empty
  if (textInput === '') {
    alert('Please input a value');
    return;
  }
  
  // Function to check if string is palindrome
  function isPalindrome(str) {
    // Convert to lowercase and remove all non-alphanumeric characters
    const cleanStr = str.toLowerCase().replace(/[^0-9a-z]/gi, '');
    
    // Compare with its reverse
    const reversedStr = cleanStr.split('').reverse().join('');
    
    return cleanStr === reversedStr;
  }
  
  // Check if the input is a palindrome
  const isPal = isPalindrome(textInput);
  
  // Display result
  if (isPal) {
    resultElement.textContent = `${textInput} is a palindrome`;
    resultElement.className = 'palindrome';
  } else {
    resultElement.textContent = `${textInput} is not a palindrome`;
    resultElement.className = 'not-palindrome';
  }
});