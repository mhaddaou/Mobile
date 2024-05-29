function calculate(expression: string): number | string {
    try {
        // Using Function constructor to evaluate the expression
        const result = Function(`return (${expression})`)();
        if (typeof result === 'number' && !isNaN(result)) {
            return result;
        } else {
            return "Invalid expression";
        }
    } catch (error) {
        return `Error: ${error}`;
    }
}

// Example usage:
const expression = "3 + 4 * 2 / (1 - 5)";
const result = calculate(expression);
console.log(result); // Output: -5