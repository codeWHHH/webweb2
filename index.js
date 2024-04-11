// Helper function to add two numbers
function addNumbers(num1, num2) {
    return num1 + num2;
  }
  
  // Helper function to square a number
  function squareNumber(number) {
    return number * number;
  }
  
  // Main function to perform the operation
  function addAndSquare(x, y) {
    const sum = addNumbers(x, y);
    const result = squareNumber(sum);
    return result;
  }
  
  // Example of usage:
  const aa = 14;
  const bb = 55;
  const result = addAndSquare(aa, bb);
  
  console.log(`(${aa} + ${bb})^2 = ${result}`);