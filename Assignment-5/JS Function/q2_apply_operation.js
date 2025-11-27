"use strict";

/**
 * Q2: Array Operations with Callback Functions
 * 
 * This file demonstrates:
 * - Higher-order functions (functions that take functions as parameters)
 * - Callback functions for array transformations
 * - Custom array manipulation patterns
 * - Functional programming concepts
 * - Different operation types (double, square, etc.)
 */

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

/**
 * Format array for display
 * @param {Array} arr - Array to format
 * @returns {string} - Formatted string
 */
function formatArray(arr) {
  return `[${arr.join(', ')}]`;
}

/**
 * Create a visual separator
 * @param {string} char - Character to repeat
 * @param {number} length - Length of separator
 */
function separator(char = "─", length = 80) {
  console.log(char.repeat(length));
}

/**
 * Print section header
 * @param {string} title - Section title
 */
function printHeader(title) {
  console.log("\n" + "═".repeat(80));
  console.log(title);
  console.log("═".repeat(80) + "\n");
}

// ============================================================================
// MAIN FUNCTION: applyOperation
// ============================================================================

/**
 * Apply a callback operation to each element in an array
 * This is a higher-order function that demonstrates functional programming
 * 
 * @param {Array<number>} numbers - Array of numbers to transform
 * @param {Function} operation - Callback function to apply to each element
 * @returns {Array<number>} - New array with transformed values
 * 
 * @example
 * applyOperation([1, 2, 3], num => num * 2) // Returns [2, 4, 6]
 */
function applyOperation(numbers, operation) {
  // Validation: Check if first parameter is an array
  if (!Array.isArray(numbers)) {
    throw new TypeError('First parameter must be an array');
  }

  // Validation: Check if second parameter is a function
  if (typeof operation !== 'function') {
    throw new TypeError('Second parameter must be a function');
  }

  // Create a new array to store results (immutable approach)
  const result = [];

  // Apply the operation to each element
  for (let i = 0; i < numbers.length; i++) {
    const transformedValue = operation(numbers[i], i, numbers);
    result.push(transformedValue);
  }

  return result;
}

// ============================================================================
// OPERATION FUNCTIONS (CALLBACKS)
// ============================================================================

/**
 * Double a number
 * @param {number} num - Number to double
 * @returns {number} - Doubled value
 */
function double(num) {
  return num * 2;
}

/**
 * Square a number
 * @param {number} num - Number to square
 * @returns {number} - Squared value
 */
function square(num) {
  return num * num;
}

/**
 * Cube a number
 * @param {number} num - Number to cube
 * @returns {number} - Cubed value
 */
function cube(num) {
  return num ** 3;
}

/**
 * Triple a number
 * @param {number} num - Number to triple
 * @returns {number} - Tripled value
 */
function triple(num) {
  return num * 3;
}

/**
 * Calculate square root
 * @param {number} num - Number to find square root of
 * @returns {number} - Square root
 */
function squareRoot(num) {
  return Math.sqrt(num);
}

// ============================================================================
// DEMONSTRATION: REQUIRED OPERATIONS
// ============================================================================

printHeader("Q2: ARRAY OPERATIONS WITH CALLBACKS");

console.log("Original Array: [1, 2, 3, 4]\n");

separator();
console.log("OPERATION 1: DOUBLE EACH NUMBER");
separator();

const numbers = [1, 2, 3, 4];
const doubled = applyOperation(numbers, double);

console.log("\nInput:  ", formatArray(numbers));
console.log("Output: ", formatArray(doubled));
console.log("\nTransformation:");
numbers.forEach((num, index) => {
  console.log(`  ${num} × 2 = ${doubled[index]}`);
});

separator();
console.log("OPERATION 2: SQUARE EACH NUMBER");
separator();

const squared = applyOperation(numbers, square);

console.log("\nInput:  ", formatArray(numbers));
console.log("Output: ", formatArray(squared));
console.log("\nTransformation:");
numbers.forEach((num, index) => {
  console.log(`  ${num}² = ${squared[index]}`);
});

// ============================================================================
// BONUS: ADDITIONAL OPERATIONS
// ============================================================================

printHeader("BONUS: ADDITIONAL OPERATIONS");

console.log("Testing with the same array: [1, 2, 3, 4]\n");

separator();
console.log("OPERATION 3: TRIPLE EACH NUMBER");
separator();

const tripled = applyOperation(numbers, triple);
console.log("\nInput:  ", formatArray(numbers));
console.log("Output: ", formatArray(tripled));
console.log("\nTransformation:");
numbers.forEach((num, index) => {
  console.log(`  ${num} × 3 = ${tripled[index]}`);
});

separator();
console.log("OPERATION 4: CUBE EACH NUMBER");
separator();

const cubed = applyOperation(numbers, cube);
console.log("\nInput:  ", formatArray(numbers));
console.log("Output: ", formatArray(cubed));
console.log("\nTransformation:");
numbers.forEach((num, index) => {
  console.log(`  ${num}³ = ${cubed[index]}`);
});

separator();
console.log("OPERATION 5: SQUARE ROOT OF EACH NUMBER");
separator();

const roots = applyOperation(numbers, squareRoot);
console.log("\nInput:  ", formatArray(numbers));
console.log("Output: ", formatArray(roots.map(n => n.toFixed(3))));
console.log("\nTransformation:");
numbers.forEach((num, index) => {
  console.log(`  √${num} = ${roots[index].toFixed(3)}`);
});

// ============================================================================
// INLINE CALLBACK DEMONSTRATIONS
// ============================================================================

printHeader("INLINE CALLBACK FUNCTIONS");

separator();
console.log("OPERATION 6: ADD 10 TO EACH NUMBER (Anonymous Function)");
separator();

const added = applyOperation(numbers, function(num) {
  return num + 10;
});

console.log("\nInput:  ", formatArray(numbers));
console.log("Output: ", formatArray(added));
console.log("\nTransformation:");
numbers.forEach((num, index) => {
  console.log(`  ${num} + 10 = ${added[index]}`);
});

separator();
console.log("OPERATION 7: MULTIPLY BY INDEX (Arrow Function)");
separator();

const multipliedByIndex = applyOperation(numbers, (num, index) => num * index);

console.log("\nInput:  ", formatArray(numbers));
console.log("Output: ", formatArray(multipliedByIndex));
console.log("\nTransformation:");
numbers.forEach((num, index) => {
  console.log(`  ${num} × ${index} = ${multipliedByIndex[index]}`);
});

separator();
console.log("OPERATION 8: POWER OF INDEX (Arrow Function)");
separator();

const powerOfIndex = applyOperation(numbers, (num, index) => num ** index);

console.log("\nInput:  ", formatArray(numbers));
console.log("Output: ", formatArray(powerOfIndex));
console.log("\nTransformation:");
numbers.forEach((num, index) => {
  console.log(`  ${num}^${index} = ${powerOfIndex[index]}`);
});

// ============================================================================
// CHAINING OPERATIONS
// ============================================================================

printHeader("CHAINING MULTIPLE OPERATIONS");

console.log("Original: [1, 2, 3, 4]\n");

separator();
console.log("CHAIN: Double → Then Square");
separator();

const step1 = applyOperation(numbers, double);
const step2 = applyOperation(step1, square);

console.log("\nStep 1 (Double): ", formatArray(step1));
console.log("Step 2 (Square): ", formatArray(step2));
console.log("\nDetailed Transformation:");
numbers.forEach((num, index) => {
  console.log(`  ${num} → (×2) → ${step1[index]} → (²) → ${step2[index]}`);
});

separator();
console.log("CHAIN: Square → Then Double");
separator();

const step3 = applyOperation(numbers, square);
const step4 = applyOperation(step3, double);

console.log("\nStep 1 (Square): ", formatArray(step3));
console.log("Step 2 (Double): ", formatArray(step4));
console.log("\nDetailed Transformation:");
numbers.forEach((num, index) => {
  console.log(`  ${num} → (²) → ${step3[index]} → (×2) → ${step4[index]}`);
});

console.log("\n💡 Notice: Different order produces different results!");
console.log("   (x × 2)² ≠ (x²) × 2");

// ============================================================================
// COMPARISON WITH NATIVE ARRAY.MAP()
// ============================================================================

printHeader("COMPARISON: applyOperation vs Array.map()");

console.log("Both functions achieve the same result:\n");

const testArray = [1, 2, 3, 4];

separator();
console.log("Using applyOperation():");
separator();
const customResult = applyOperation(testArray, double);
console.log("Result:", formatArray(customResult));

separator();
console.log("Using Array.map():");
separator();
const nativeResult = testArray.map(double);
console.log("Result:", formatArray(nativeResult));

console.log("\nAre they equal?", JSON.stringify(customResult) === JSON.stringify(nativeResult) ? "✅ YES" : "❌ NO");

console.log("\n📝 Key Differences:");
console.log("   • applyOperation() - Custom implementation, educational");
console.log("   • Array.map() - Native, optimized, built-in");
console.log("\n💡 When to use each:");
console.log("   • Use Array.map() in production code (faster, standard)");
console.log("   • Use applyOperation() for learning and understanding");

// ============================================================================
// ADVANCED: OPERATION LIBRARY
// ============================================================================

printHeader("ADVANCED: OPERATION LIBRARY");

const operationLibrary = {
  double: (n) => n * 2,
  triple: (n) => n * 3,
  square: (n) => n * n,
  cube: (n) => n ** 3,
  negate: (n) => -n,
  increment: (n) => n + 1,
  decrement: (n) => n - 1,
  half: (n) => n / 2,
  percent: (n) => n / 100,
  absolute: (n) => Math.abs(n)
};

console.log("Available operations:", Object.keys(operationLibrary).join(", "));
console.log("\nTest array: [1, 2, 3, 4]\n");

// Apply multiple operations
const results = {};
for (const [name, operation] of Object.entries(operationLibrary)) {
  results[name] = applyOperation(numbers, operation);
}

// Display results in table format
console.log("Operation Results:");
separator();
console.log("Original:".padEnd(15), formatArray(numbers));
separator();
for (const [name, result] of Object.entries(results)) {
  console.log(`${(name + ':').padEnd(15)}`, formatArray(result));
}
separator();

// ============================================================================
// ERROR HANDLING DEMONSTRATION
// ============================================================================

printHeader("ERROR HANDLING");

console.log("Testing invalid inputs:\n");

separator();
console.log("Test 1: Invalid array parameter");
separator();
try {
  applyOperation("not an array", double);
} catch (error) {
  console.log("❌ Error caught:", error.message);
}

separator();
console.log("Test 2: Invalid callback parameter");
separator();
try {
  applyOperation([1, 2, 3], "not a function");
} catch (error) {
  console.log("❌ Error caught:", error.message);
}

separator();
console.log("Test 3: Valid parameters");
separator();
try {
  const result = applyOperation([5, 10], double);
  console.log("✅ Success:", formatArray(result));
} catch (error) {
  console.log("❌ Error:", error.message);
}

// ============================================================================
// PERFORMANCE COMPARISON
// ============================================================================

printHeader("PERFORMANCE COMPARISON");

const largeArray = Array.from({ length: 100000 }, (_, i) => i + 1);

console.log(`Testing with array of ${largeArray.length.toLocaleString()} elements\n`);

separator();
console.log("Custom applyOperation():");
separator();
console.time("applyOperation");
const customLargeResult = applyOperation(largeArray, double);
console.timeEnd("applyOperation");

separator();
console.log("Native Array.map():");
separator();
console.time("Array.map");
const nativeLargeResult = largeArray.map(double);
console.timeEnd("Array.map");

console.log("\n💡 Performance Note:");
console.log("   Native Array.map() is typically faster due to browser optimization.");
console.log("   Our custom function is for learning purposes.\n");

// ============================================================================
// SUMMARY
// ============================================================================

printHeader("SUMMARY");

console.log("✅ Core Requirements Completed:");
console.log("   ✓ Created applyOperation(numbers, operation) function");
console.log("   ✓ Doubled [1, 2, 3, 4] → [2, 4, 6, 8]");
console.log("   ✓ Squared [1, 2, 3, 4] → [1, 4, 9, 16]");

console.log("\n🌟 Additional Features Demonstrated:");
console.log("   ✓ Multiple operation types (cube, triple, sqrt, etc.)");
console.log("   ✓ Inline callbacks (anonymous & arrow functions)");
console.log("   ✓ Operation chaining");
console.log("   ✓ Comparison with Array.map()");
console.log("   ✓ Operation library pattern");
console.log("   ✓ Error handling");
console.log("   ✓ Performance testing");

console.log("\n🎓 Key Concepts Learned:");
console.log("   • Higher-order functions");
console.log("   • Callback functions as parameters");
console.log("   • Functional programming patterns");
console.log("   • Array transformation techniques");
console.log("   • Immutable data operations");

console.log("\n💡 Best Practices:");
console.log("   • Always validate input parameters");
console.log("   • Return new arrays (don't mutate originals)");
console.log("   • Provide clear function documentation");
console.log("   • Use descriptive callback function names");
console.log("   • Consider using native methods in production");

console.log("\n" + "═".repeat(80));
console.log("DEMONSTRATION COMPLETE");
console.log("═".repeat(80) + "\n");
