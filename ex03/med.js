function calculate(expression) {
    console.log(parseInt(expression));
    console.log(eval(expression));
    return parseInt(expression)

    
}
// Example usage:
var expression = "59 - 89 +-20/6";
var result = calculate(expression);
console.log(result); // Output: -5
